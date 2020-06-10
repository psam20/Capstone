import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import {Link,useRouteMatch} from 'react-router-dom';
import './product.scss';

const Product = (props) => {
   const {url}=useRouteMatch();
    return (
        <div className="productDiv">
            <Card>

                <CardActionArea>
                     <Typography>
                         <img  src={`${props.href}`} height="150px" width="250px" alt="Products view"/>
                     </Typography>
                    <CardContent>
                        <Typography gutterBottom component="h2" id="topo">
                            {props.name}
                        </Typography>
                        <Typography  color="textSecondary"id="topo" component="p">
                           {props.description}
                        </Typography>
                    </CardContent>

                </CardActionArea>
                <CardActions>
                    <Link to={`${url}/${props.name}`}>
                     <Button size="small" color="primary">
                         View Product Details
                     </Button>
                     </Link>
                </CardActions>

            </Card>
        </div>
    )
}

export default Product;