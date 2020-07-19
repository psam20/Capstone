 import React from 'react';
import { useFormik } from 'formik';
import { Prompt, useHistory } from 'react-router-dom';
import { storage } from '../../Firebase/index';
import { connect } from 'react-redux';
import { addProductsAxios } from '../../redux/actions/productActions';

import TextInput from '../ReusableComponents/InputComponent';
import UploadImage from '../ReusableComponents/uploadImage';
import './addProduct.scss';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'ProductName is Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }

    if (!values.description) {
        errors.description = 'Description is Required';
    }

    if (!values.manufacturer) {
        errors.manufacturer = 'Manufacturer is Required';
    }
    if (!values.price) {
        errors.price = 'Price is Required';
    }
    if (!values.quantity) {
        errors.quantity = 'Quantity is Required';
    }
    if (!values.details) {
        console.log(values.details);
        errors.details = 'Details is Required';
    }

    return errors;
};

const AddProductPage = ({ addProducts }) => {
    const [bool, setBool] = React.useState(true);
    const [image, setImage] = React.useState({ preview: "", raw: "" });

    const history = useHistory();

    const formik = useFormik({
        initialValues: {

            id: '',
            name: '',
            description: '',
            manufacturer: '',
            price: '',
            quantity: '',
            href: '',
            details: [],
            count:0,
        },
        validate,
        onSubmit: async values => {

           await handleUpload();

           await setTimeout(() => {

                const value = formik.values.details;
                const arr = value.split(/\n/);
                const arr2 = [];
                console.log(arr);
                for (let i = 0; i < arr.length; i++) {
                    const key = {
                        "text": arr[i]
                    }
                    arr2.push(key)
                }
                formik.values.details = arr2;
                addProducts(values);
                history.push('/');

            },5000)


          await  setBool(false);
        }
    })
    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]

            });
        }


    };
    const handleUpload = () => {
        // console.log(image.raw)  
        const uploadTask = storage.ref(`images/${image.raw.name}`).put(image.raw);

        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error)
            },
            () => {
                storage.ref("images")
                    .child(image.raw.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url)
                        formik.values.href = url;
                        console.log(formik.values.href)
                            ;
                    });
            }
        )
    };

    return (
        <div className="col-md-6">
            <h2>Add Product Page</h2>

            <form onSubmit={formik.handleSubmit}>
                <Prompt
                    when={bool}
                    message="Are you sure you want to leave?"
                />
                <div>

                    <TextInput type="string" name="name" value={formik.values.name} onChange={formik.handleChange} />

                    <div style={{ display: "inline" }}>
                        {formik.errors.name ? <div style={{ color: "red" }}>{formik.errors.name}</div> : null}
                    </div>
                    <br />
                    <TextInput className="full-width" type="string" name="description" value={formik.values.description}

                        onChange={formik.handleChange} />

                    <div style={{ display: "inline" }}>
                        {formik.errors.description ? <div style={{ color: "red" }}>{formik.errors.description}</div> : null}
                    </div>
                    <br />
                    <TextInput className="width" type="string" name="manufacturer" value={formik.values.manufacturer}
                        onChange={formik.handleChange}
                    />

                    <div style={{ display: "inline" }}>
                        {formik.errors.manufacturer ? <div style={{ color: "red" }}>{formik.errors.manufacturer}</div> : null}
                    </div>
                    <br />
                    <TextInput type="number" name="price" value={formik.values.price}
                        onChange={formik.handleChange}
                    />
                      <div style={{ display: "inline" }}>
                        {formik.errors.price ? <div style={{ color: "red" }}>{formik.errors.price}</div> : null}
                    </div>
                    <br />
                    <TextInput type="number" name="quantity" value={formik.values.quantity}
                        onChange={formik.handleChange}
                    />
                     <div style={{ display: "inline" }}>
                        {formik.errors.quantity ? <div style={{ color: "red" }}>{formik.errors.quantity}</div> : null}
                    </div>
                    <br />
                    <UploadImage onChange={(e) => handleChange(e)} onClick={handleUpload} image={image} />


                    <TextInput multiline={true} name="details" value={formik.values.details}
                        type="string" onChange={formik.handleChange}
                    />
                      <div style={{ display: "inline" }}>
                        {formik.errors.details ? <div style={{ color: "red" }}>{formik.errors.details}</div> :null}
                    </div>
                    <br />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">
                        Add Product
                </button>
                </div>
            </form>
        </div>
    )
}

const MapDispatchToProps = (dispatch) => ({
    addProducts: (values) => dispatch(addProductsAxios(values))
})
export default connect(null, MapDispatchToProps)(AddProductPage);