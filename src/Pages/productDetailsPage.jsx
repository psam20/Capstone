import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { Grid, Card, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { connect } from 'react-redux';
import './productDetailsPage.scss';

const ProductDetailsPage = ({ filtered }) => {
    const { id } = useParams();
    console.log(filtered);
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(0);
    const i = id.split("+");
    console.log(i[0]);
    const selectedProduct = filtered.find(p => p.id.toString() === i[0].toString());
    console.log(selectedProduct);

    console.log(selectedProduct.details)

    useEffect(()=>{
        axios.get(`http://localhost:3201/Products/${i[0]}`)
          .then(resp => {
             setCount(resp.data.count+1)
             setFlag(1);
             console.log(count);
             console.log(resp.data);
            })
            if(flag===1){
             fetch(`http://localhost:3201/Products/${i[0]}`, {
                 headers: { "Content-Type": "application/json; charset=utf-8" },
                 method: 'PATCH',
                 body: JSON.stringify({
                   count: count
             })
         })
        }
    })

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
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<EditIcon />}
                        >
                            Edit Product
      </Button>
                        <Button
                            variant="contained"
                            color="secondary"

                            startIcon={<DeleteIcon />}
                        >
                            Delete
      </Button>
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
                        <br/><br/>
                        <Button
                            variant="contained"
                            style={{backgroundColor:"lightgrey"}}

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
export default connect(MapStateToProps, null)(ProductDetailsPage);