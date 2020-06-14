import React from 'react';
import './AddProduct.css';
import ProductService from "../../Api/ProductApi";
import { Prompt } from 'react-router-dom';

class AddProduct extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
            id: null,  
            name: "",  
            description: "",  
            manufacturer: "",
            price: "",
            quantity: "",
            href: null,
            count: 0,
            value: null,
            submitted: false
        };
      }
    
      onChangeName=(e)=> {
        this.setState({
          name: e.target.value
        });
      }

      onChangeDescription=(e)=> {
        this.setState({
          description: e.target.value
        });
      }
    
      onChangeManufacturer=(e)=> {
        this.setState({
          manufacturer: e.target.value
        });
      }

      onChangePrice=(e)=> {
        this.setState({
          price: e.target.value
        });
      }

      onChangeQuantity=(e)=> {
        this.setState({
          quantity: e.target.value
        });
      }

      onChangeImage=(e)=> {
        this.setState({
          href: e.target.value
        });
      }
    
      add=()=> {
        var data = {
          name: this.state.name,
          description: this.state.description,
          manufacturer: this.state.manufacturer,
          price: this.state.price,
          quantity: this.state.quantity,
          href: this.state.href,
          value: false
        };
    
        ProductService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
              name: response.data.name,
              description: response.data.description,
              manufacturer: response.data.manufacturer,
              price: response.data.price,
              quantity: response.data.quantity,
              href: response.data.href,
              submitted: true,
              value:false
            });
            console.log(response.data);
            this.submitted=true;
            alert("Product added successfully")
          })
          .catch(e => {
            console.log(e);
          });
      }

      fileChangedHandler = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
              href: URL.createObjectURL(img)
            });
          }
      }
    
    render(){
        return(
            <div className="col-md-6 user-container">  
                <h2 className="text-center">Add Product</h2>
               <form>
                <Prompt
                    when={!!this.state.name || !!this.state.description ||
                        !!this.state.manufacturer || !!this.state.quantity || 
                        !!this.state.price || !!this.state.href }
                    message="Are you sure you want to leave?"
                />
    
            <div className="form-group">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Product Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="isbn">Product Manufacturer</label>
              <input
                type="text"
                className="form-control"
                id="manufacturer"
                required
                value={this.state.manufacturer}
                onChange={this.onChangeManufacturer}
                name="manufacturer"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Product Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                required
                value={this.state.price}
                onChange={this.onChangePrice}
                name="price"
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity">quantity</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                required
                value={this.state.quantity}
                onChange={this.onChangeQuantity}
                name="quantity"
              /> 
            </div>

            <div className="form-group">
              <label htmlFor="href">Product Image</label>
              <input type="file" onChange={this.fileChangedHandler} 
              placeholder="Product Image" className="form-control" 
              id="proImage" />
            </div>

            <div className="form-group">
                <button onClick={this.add} className="btn btn-success">
                 Add Product
                </button>
            </div>
      </form>
      </div>
    
        )    
    }
}

export default AddProduct;