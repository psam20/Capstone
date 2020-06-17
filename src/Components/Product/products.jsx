import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './product.scss';
import ProductApi from '../../Api/ProductApi';

// let count=0;

// function getDetails(id){
//     ProductApi.get(id).then(
//         res=>res.data
//     )
// }

// function proDetails(props){
//     let id = props.match.params.id;
//     getDetails(id);
//     count=count+1;
//     console.log(count)
//     console.log(id)
// }

const Product = (props) => {

    return (
        <div className="productDiv">
            <Card>
      <Link to={`/Products/${props.id}+${props.name.replace(/[&\\/\\/#,+()$~%.'":*?<>{}]/g,'_')}`}>
                <CardActionArea width="5rem">
                    
                     {/* <Typography> */}
                     {/* <Link to={`/${props.name}`}> */}
                         <img  src={`${props.href}`} height="150px" width="250px" alt="Products view"/>

                         {/* </Link> */}
                     {/* </Typography> */}
                    <CardContent>
                        <Typography gutterBottom component="h2" id="topo">
                            {props.name}
                        </Typography>
                        <Typography  color="textSecondary" id="topo" component="p">
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