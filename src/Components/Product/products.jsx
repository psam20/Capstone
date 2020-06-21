import React, {useState} from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {incrementCount} from '../../actions/productActions';
import {connect} from 'react-redux';
import './product.scss';


const Product = (props) => {
     const [isActive, setActive] = useState(false);
     const [array, setArray]=useState([]);
     const [i, setI]=useState(0);
    const {increment}=props
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
                    <input type="checkbox" id={props.id} checked={props.value} onChange={handleChange}/><b>  Select to delete</b>
                </CardActions>

            </Card>
        </div>
    )
}

const MapDisPatchToProps =(dispatch)=>({
    increment:(a,b)=>dispatch(incrementCount(a,b))
    //selectProduct:(value)=>dispatch()
})
export default connect(null, MapDisPatchToProps) (Product);