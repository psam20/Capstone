import React from 'react';
import { useParams, useHistory, Link} from 'react-router-dom'
import { Grid, Card, Typography, Button, Dialog, DialogActions, Slide, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { connect } from 'react-redux';

import { deleteProductsAxios } from '../actions/productActions';
import './productDetailsPage.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProductDetailsPage = ({ filtered, deleteProducts }) => {

    const [open, setOpen] = React.useState(false);
   
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const { id } = useParams();
    const history = useHistory();
    // console.log(filtered);
    const i = id.split("+");
    // console.log(i[0]);
    const selectedProduct = filtered.find(p => p.id.toString() === i[0].toString());
    // console.log(selectedProduct);

    // console.log(selectedProduct.details)

    const deletePro = (e, id) => {
        e.preventDefault();
      handleClickOpen();
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
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<EditIcon />}
                        >
                            Edit Product
      </Button></Link>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={e => 
                                deletePro(e, selectedProduct.id)

                            }
                            startIcon={<DeleteIcon />}
                        >
                            Delete
      </Button>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle id="alert-dialog-slide-title">{"Products Deltion?"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    Are You Sure You Want to Delete this Product ?
          </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Disagree
          </Button>
                                <Button onClick={handleClose} color="primary">
                                    Agree
          </Button>
                            </DialogActions>
                        </Dialog>
                    </div>

                </Grid>
                <Grid item xs={12} lg={8} sm={6} md={6}>
                    <div className="details">

                        <h2>Features and More Details</h2>

                        <ul>
                              {
                                  selectedProduct.details.map((d,id)=>(
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
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<ShoppingBasketIcon />}
                        >
                            Buy Product
                        </Button>
                        <br /><br />
                        <Button
                            variant="contained"
                            style={{ backgroundColor: "lightgrey" }}

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
}))

const MapDispatchToProps = (dispatch) => {
    return {
        deleteProducts: (id) => dispatch(deleteProductsAxios(id)),
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(ProductDetailsPage);