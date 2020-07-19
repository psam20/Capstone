import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom'
import { Grid, Card, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {addItem} from '../redux/actions/cartActions'
import { connect } from 'react-redux';
import { deleteProductsAxios } from '../redux/actions/productActions';
import './productDetailsPage.scss';



const ProductDetailsPage = ({ filtered, deleteProducts, auth,addItem,loginUsers }) => {

    const { id } = useParams();
    const history = useHistory();
    // console.log(filtered);
    const i = id.split("+");
    // console.log(i[0]);
    const selectedProduct = filtered.find(p => p.id.toString() === i[0].toString());
    console.log(selectedProduct);

    // console.log(selectedProduct.details)

   

    const deletePro = (e, id) => {
        e.preventDefault();
        
        deleteProducts(id);
        history.push('/');
    }


    return (
        <div className="productDetails">

            <Grid container spacing={4} justify="space-between">
                <Grid item xs={12} lg={4} sm={6} md={6} >
                    <Card className="card">
                        <Typography>
                            <img src={`${selectedProduct.href}`} alt="product" width="100%" height="250px" />
                        </Typography>
                        <Typography component="h2" id="topo">
                            <b> <u> {selectedProduct.name}</u></b>
                        </Typography>
                        <Typography component="p" id="topo1">
                            {selectedProduct.description}
                        </Typography>
                    </Card>
                    <br />
                    <div className="buttons">
                        <Link to={`/EditProduct/${selectedProduct.id}`}>
                            {(auth === true && loginUsers.roleBool===true) ? (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<EditIcon />}
                                >
                                    Edit Product

                                </Button>) : ""
                            }

                        </Link>
                        {(auth === true && loginUsers.roleBool===true) ? <Button
                            variant="contained"
                            color="secondary"
                            onClick={e =>
                                deletePro(e, selectedProduct.id)

                            }
                            startIcon={<DeleteIcon />}
                        >
                            Delete
      </Button> : ""}
                        
                    </div>

                </Grid>
                <Grid item xs={12} lg={8} sm={6} md={6}>
                    <div className="details">

                        <h2>Features and More Details</h2>

                        <ul>

                            {
                                selectedProduct.details.map((d, id) => (
                                    <li key={id}>
                                        {d.text}

                                    </li>
                                ))
                            }
                            <li>
                                <p><b><u>Manufactured By :-{selectedProduct.manufacturer} </u></b></p>
                            </li>
                        </ul>

                        <h4>Price : Rs.{selectedProduct.price}</h4>


                    </div>
                    <div>
                     <br /><br />
                        <Button
                            variant="contained"
                            style={{ backgroundColor: "lightgrey" }}

                            onClick={()=>addItem(selectedProduct)}
                            startIcon={<ShoppingCartIcon />}
                        >
                            Add To Cart
      </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
const MapStateToProps = (state => ({
    products: state.products.products,
    filtered: state.products.filteredProducts,
    loginUsers:state.user.currentUser,
    auth: state.user.authBool,
}))

const MapDispatchToProps = (dispatch) => {
    return {
        deleteProducts: (id) => dispatch(deleteProductsAxios(id)),
        addItem:(item)=>dispatch(addItem(item)),
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(ProductDetailsPage);
