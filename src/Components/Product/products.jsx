import React, {useState} from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {incrementCount,selectProducts} from '../../actions/productActions';
import {connect} from 'react-redux';

import './product.scss';


const Product = (props) => {

         
       
         const {increment,select,auth}=props;
        
         const handleClick=(e)=>{
             select(props.id);
         }
   const  handleCount=(e)=>{
      console.log(props.id);
       console.log(props.count);
         increment(props.id,props.count);
         fetch(`http://localhost:3201/Products/${props.id}`, {
                       headers: { "Content-Type": "application/json; charset=utf-8" },
                       method: 'PATCH',
                       body: JSON.stringify({
                         count: props.count+1
                   })  
                })
     }

    const handleChange = (e) => {
        const arr= array;
            const target = e.target;
               if(target.checked){
                   arr[i] = +e.target.id;  
                   setI(i+1);
               } 
        
        setArray(arr);
        console.log(array)
        setActive(true);
    }

    return (
        <div className="productDiv">
            <Card>
            <Link to={`/Products/${props.id}+${props.name.replace(/[&\\/\\/#,+()$~%.'":*?<>{}]/g,'_')}`} onClick={()=>handleCount()}>
                    <CardActionArea>
                            <Typography>
                                <img src={`${props.href}`} height="150px" width="100%" alt="Products view" />
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
                    <Link to={`/Products/${props.id}+${props.name.replace(/[&\\/\\/#,+()$~%.'":*?<>{}]/g,'_')}`} onClick={(e)=>handleCount(e)}>
                        <Button size="small" color="primary">
                            View Product Details
                     </Button>
                    </Link>

                    {auth?
                    <span>
          <input
            className="toggle-all"
            type="checkbox"
            onClick={(e)=>handleClick(e)}
          />
          <label >Select</label>
        </span>:""}

                </CardActions>

            </Card>
        </div>
    )
}
const MapStateToProps=(state)=>({
    productsCount:state.products.products.length,
    auth:state.user.authBool,
    
})
const MapDisPatchToProps =(dispatch)=>({

    increment:(a,b)=>dispatch(incrementCount(a,b)),
    select:(value)=>dispatch(selectProducts(value))
})
export default connect(MapStateToProps, MapDisPatchToProps) (Product);