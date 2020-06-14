import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './product.scss';

const Product = (props) => {

    return (
        <div className="productDiv">
            <Card>
            <Link to={`/Products/${props.id}+${props.name.replace(/[&\\/\\/#,+()$~%.'":*?<>{}]/g,'_')}`}>
                    <CardActionArea>
                       
                            <Typography>

                                <img src={`${props.href}`} height="150px" width="250px" alt="Products view" />
                            </Typography>
                     
                        <CardContent>
                            <Typography gutterBottom component="h2" id="topo">
                                {props.name}
                            </Typography>
                            <Typography color="textSecondary" id="topo" component="p">
                                {props.description}
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                </Link>

                <CardActions>
                    <Link to={`/Products/${props.id}+${props.name.replace(/[&\\/\\/#,+()$~%.'":*?<>{}]/g,'_')}`}>
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