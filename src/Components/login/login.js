import React from 'react';
import UserService from "../../Api/UserApi";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import './login.css'

class login extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
            id:"",
            email: "",
            password: "",
            submitted: false,
            User:[]
        };
      }

    componentDidMount() {
        UserService.getUser()
            .then(response => {
                this.setState({
                    User: response.data
                });
                console.log(this.state.User)
            })
    }

    Email=(event)=> {
          this.setState({ email: event.target.value })
    }
        
    Password=(event)=> {
        this.setState({ password: event.target.value })
    }

    login=(e)=>{
       for(var i=0; i<this.state.User.length;i++){
           if(this.state.email===this.state.User[i].email && 
            this.state.password===this.state.User[i].password)
           {
               return alert("Login successfull")
           }
       }
       console.log("unsuccessfull")

    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4 mt-5">
                        <h2>Login</h2>
                            <div className="form-group">
                                <label htmlFor="email">Email Id</label>
                                <input type="email" className="form-control"
                                value={this.state.email}
                                name = "email"
                                onChange={this.Email} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" 
                                value={this.state.password}
                                name = "password"
                                onChange={this.Password}/>

                            </div>
                            <div className="form-group">
                                <button className="btn btn-success" onClick={this.login}>
                                    Sign In
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default login;