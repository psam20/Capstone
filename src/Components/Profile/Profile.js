import React from 'react';
import './Profile.css';
import UserService from '../../Api/UserApi'

class Profile extends React.Component{

    constructor(){
        super();
        this.state={
            user:{},
            firstName:""
        }
    }

    componentDidMount(){
        const _id=UserService.getUserLoggedIn();
        console.log(_id)
        UserService.getById(_id)
        .then(resp=>{
            this.setState({user:resp.data})
        })
    }

    handleChange=(e)=>{
        console.log(e.target.value)
    }

    render(){
        return(
            <div className="user-container">
            <h2 className="heading">My Profile</h2>
            <form className="userForm" name="form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" id="firstName" value={this.state.user.firstName} onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" name="lastName" id="lastName" value={this.state.user.lastName} onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="text" name="email" id="email" value={this.state.user.email} onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="text" name="password" id="password" value={this.state.user.password} onChange={this.handleChange} className="form-control"/>
                </div>

                <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  <input type="text" name="location" id="location" value={this.state.user.location} onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">Mobile:</label>
                  <input type="text" name="mobile" id="mobile" value={this.state.user.mobile} onChange={this.handleChange} className="form-control" />
                </div>
            </form>
        </div>
        )
    }
}

export default Profile;