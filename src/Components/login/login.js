import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setCurrentUser} from '../../actions/usersAction';
import UserService from "../../Api/UserApi";
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Link } from 'react-router-dom';
import './login.css'

class Login extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
            id:"",
            email: "",
            password: "",
            submitted: false,
            User:[],
           
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
       for(let i=0; i<this.state.User.length;i++){
           if(this.state.email===this.state.User[i].email && 
            this.state.password===this.state.User[i].password)
           {
              console.log(this.state.User[i]);
                const loginUser={
                    id:this.state.User[i].id,
                    firstName:this.state.User[i].firstName,
                    auth:true
                }
              this.props.authUser(loginUser);
             return this.props.history.push('/');
              
           }
       }
       alert("Incorrect PassWord , Please Enter Correct Password...")
       console.log("unsuccessfull")

    }

    render(){
        return(
            <div className="container">
                <div className="row-cols-1">
                        <h2>New To Shopify</h2>
                        <p style={{textAlign:"center",color:"blue"}}>Click On <Link to="/register">Register</Link> to Create an Account</p>
               </div>
                <div className="row">
                    <div className="col-md-4 offset-md-4 mt-5">
                        
                        <h2>Login</h2>
                            <div className="form-group">
                                <label htmlFor="email">Email Id</label>
                                <input type="email" className="form-control"
                                value={this.state.email}
                                name = "email"
                                required
                                onChange={this.Email} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" 
                                value={this.state.password}
                                name = "password"
                                required
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

const MapDispatchToProps=(dispatch)=>({
    authUser:(value)=>dispatch(setCurrentUser(value))
})

export default connect(null,MapDispatchToProps)(Login);