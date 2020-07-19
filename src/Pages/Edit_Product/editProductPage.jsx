import React from 'react';
import { useParams, Prompt,useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import TextInput from '../ReusableComponents/InputComponent';
import UploadImage from '../ReusableComponents/uploadImage';
import {updateProductsAxios} from '../../redux/actions/productActions'
import { storage } from '../../Firebase/index';


const EditProduct = ({ products,updateProduct }) => {
    const [bool, setBool] = React.useState(true);
    const [skip, setSkip] = React.useState(false);
    const { id } = useParams();
    // console.log(id);
    const selectedProduct = products.find(p => p.id.toString() === id.toString());
    // console.log(selectedProduct);
    const arr = selectedProduct.details;

    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2[i] = arr[i].text.toString();
    }
    
    const history=useHistory();

    const [image, setImage] = React.useState({ preview: selectedProduct.href, raw: "" });
    const formik = useFormik({
        initialValues: {
            id: selectedProduct.id,
            name: selectedProduct.name,
            description: selectedProduct.description,
            manufacturer: selectedProduct.manufacturer,
            price: selectedProduct.price,
            quantity: selectedProduct.quantity,
            href: selectedProduct.href,
            details: arr2,
        },
        onSubmit: values => {
            if (skip) {
                handleUpload();
            }
            setTimeout(() => {
                if (typeof formik.values.details === "string") {
                    const value = formik.values.details;
                    console.log(value);
                    const a = value.split(/\n/);
                    console.log(a)
                    const a2 = [];
                    
                    for (let i = 0; i < a.length; i++) {
                        const key = {
                            "text": a[i]
                        }
                        a2.push(key)
                    }
                    formik.values.details = a2;
                }
                else{
                    formik.values.details=selectedProduct.details;
                }

                  updateProduct(values);
                  
                 history.push('/');
               
            }, 5000)

            setBool(false);
        }
    })
    const handleChange = e => {
        setSkip(true)
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
        <div className="col-md-6 user-container">
            <h2>Edit Product Page</h2>
            <form onSubmit={formik.handleSubmit}>
                <Prompt
                    when={bool}
                    message="Are you sure you want to leave?"
                />
                <div>
                    <TextInput type="string" name="name" value={formik.values.name} onChange={formik.handleChange} />
                    <TextInput className="full-width" type="string" name="description" value={formik.values.description}

                        onChange={formik.handleChange} />
                    <TextInput className="width" type="string" name="manufacturer" value={formik.values.manufacturer}
                        onChange={formik.handleChange}
                    />
                    <TextInput type="number" name="price" value={formik.values.price}
                        onChange={formik.handleChange}
                    />
                    <TextInput type="number" name="quantity" value={formik.values.quantity}
                        onChange={formik.handleChange}
                    />

                    <UploadImage onChange={(e) => handleChange(e)} onClick={handleUpload} image={image} />
                    <TextInput multiline={true} name="details" value={formik.values.details}
                        type="string" onChange={formik.handleChange}
                    />

                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">
                        Edit Product
                </button>
                </div>
            </form>
        </div>
    )
}

const MapStateToProps = (state) => ({
    products: state.products.products,
})

const MapDispatchToProps = (dispatch)=>({
    updateProduct : (value) => (dispatch(updateProductsAxios(value)))
})
export default connect(MapStateToProps,MapDispatchToProps)(EditProduct);