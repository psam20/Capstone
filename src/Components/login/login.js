import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setCurrentUser } from '../../redux/actions/usersAction';
import UserService from "../../Api/UserApi";
import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'


const Login = ({authUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        UserService.getAllUser()
            .then(response => {
                setUser(response.data)
            
            })

    }, [])
     console.log(user)
    const Email = (e) => {
        setEmail(e.target.value)

    }
    const Password = (e) => {
        setPassword(e.target.value)

    }


    const login = (e) => {
        e.preventDefault();
        setSubmitted(true)
        if(email === '' && password === ''){
            alert('Please Enter the Email and Password');
            return
        }

        user.map((u) => {
            if (email === u.email && password === u.password) {
                console.log(u);
                const loginUser = {
                    id: u.id,
                    firstName: u.firstName,
                    lastName: u.lastName,
                    email: u.email,
                    location: u.location,
                    mobile: u.mobile,
                    auth: true,
                    roleBool: u.role ? true : 'false'

                }
                UserService.setUserLoggedIn(u.id)
                UserService.getUserLoggedIn();
                authUser(loginUser);
           }
         
              return (<Redirect to="/" />)
        })

        setPassword('');
        setEmail('');
 }
    
        return (
            <div className="container">
                <div className="row-cols-1">
                    <h2>New To Shopify</h2>
                    <p style={{ textAlign: "center", color: "blue" }}>Click On <Link to="/register">Register</Link> to Create an Account</p>
                </div>
                <div className="row">
                    <div className="col-md-4 offset-md-4 mt-5">

                        <h2>Login</h2>
                        <form name="form">
                            <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                                <label htmlFor="email">Email Id</label>
                                <input type="email" className="form-control"
                                    value={email}
                                    name="email"
                                    required
                                    onChange={(e)=>Email(e)} />
                                {submitted && !email &&
                                    <div className="help-block">Email is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control"
                                    value={password}
                                    name="password"
                                    required
                                    onChange={(e)=>Password(e)} />
                                {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success" onClick={(e)=>login(e)}>
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


    const MapDispatchToProps = (dispatch) => ({
        authUser: (value) => dispatch(setCurrentUser(value))
    })

    export default connect(null, MapDispatchToProps)(Login);

