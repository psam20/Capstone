import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './product.scss';
import axios from 'axios';

class Product extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

   proDetails=(id)=>{
      axios.get(`http://localhost:3201/Products/${id}`)
      .then(resp => {
         let ctr=resp.data.count;
         ctr=ctr+1;
         this.setState({count:ctr})
         console.log(ctr);
      });
      fetch(`http://localhost:3201/Products/${id}`, {
           headers: { "Content-Type": "application/json; charset=utf-8" },
           method: 'PATCH',
           body: JSON.stringify({
             count: this.state.count
       })  
    })
   }

    render(){
    return (
        <div className="productDiv">
            <Card>
      {/* <Link to={`/Products/${this.props.id}+${this.props.name.replace(/[&\\/\\/#,+()$~%.'":*?<>{}]/g,'_')}`}> */}
                <CardActionArea width="5rem">
                    
                     {/* <Typography> */}
                     {/* <Link to={`/${props.name}`}> */}
                         <img  src={`${this.props.href}`} height="150px" width="250px" alt="Products view"/>

                         {/* </Link> */}
                     {/* </Typography> */}
                    <CardContent>
                        <Typography gutterBottom component="h2" id="topo">
                            {this.props.name}
                        </Typography>
                        <Typography  color="textSecondary" id="topo" component="p">
                           {this.props.description}
                        </Typography>
                    </CardContent>

                </CardActionArea>
                {/* </Link> */}
            
                <CardActions>
                    <Link to={`/Products/${this.props.id}+${this.props.name.replace(/[&\\/\\/#,+()$~%.'":*?<>{}]/g,'_')}`}>
                     <Button size="small" color="primary">
                         View Product Details
                     </Button>
                     </Link>
                </CardActions>

            </Card>
        </div>
    )}
}

export default Product;