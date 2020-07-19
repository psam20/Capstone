import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './product.scss';


const Product = ({ item, addItem, increment, selectPro, auth, loginUsers }) => {

    const { id, name, count, href, description, price } = item;

    const handleCount = (e) => {
        console.log(id);
        console.log(count);
        increment(id, count);

        fetch(`http://localhost:3201/Products/${id}`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PATCH',
            body: JSON.stringify({
                count: count + 1
            })
        })

    }


    return (
        <div className="productDiv">
            <Card>

                <CardActionArea>
               
                    <Link to={`/Products/${id}`} onClick={() => handleCount()}>
                        <Typography>
                            <img src={`${href}`} height="150px" width="100%" alt="Products view" />
                        </Typography>

                    </Link>
                </CardActionArea>

                <CardContent>

                    <Typography gutterBottom component="h2" id="topo1">
                        {name + `(RS. ${price})`}
                    </Typography>

                </CardContent>
                <CardContent>
                    <div id="topo">
                    <Typography gutterBottom component="p" id="topo">
                            {description}
                        </Typography>
                       
                     
                        

                    </div>

                </CardContent>



                <CardActions>
                    {/* <Link to={`/Products/${props.id}+${props.name.replace(/[&\\/\\/#,+()$~%.'":*?<>{}]/g,'_')}`} onClick={(e)=>handleCount(e)}> */}
                    <Button size="large" color="primary" onClick={() => addItem(item)}>
                        Add To Cart
                     </Button>
                    {/* </Link> */}

                    {/* {auth && loginUsers.roleBool === true ?
                        <span>
                            <input
                                className="toggle-all"
                                type="checkbox"
                                onClick={(e) => handleClick(e)}
                            />
                            <label >Select</label>
                        </span> : ""} */}

                </CardActions>


            </Card>
        </div>
    )
}

export default Product;