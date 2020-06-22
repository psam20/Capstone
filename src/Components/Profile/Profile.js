import React from 'react';
import {connect} from 'react-redux';

import './Profile.css';


class Profile extends React.Component{

  
     handleChange=(e)=>{
        console.log(e.target.value)
    }

    render(){
      console.log(this.props.authUser)
        return(
            <div className="user-container">
            <h2 className="heading">My Profile</h2>
            <form className="userForm" name="form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" id="firstName" value={this.props.authUser.firstName} onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" name="lastName" id="lastName" value={this.props.authUser.lastName} onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="text" name="email" id="email" value={this.props.authUser.email} onChange={this.handleChange} className="form-control" />
                </div>

                

                <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  <input type="text" name="location" id="location" value={this.props.authUser.location} onChange={this.handleChange} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">Mobile:</label>
                  <input type="text" name="mobile" id="mobile" value={this.props.authUser.mobile} onChange={this.handleChange} className="form-control" />
                </div>
            </form>
        </div>
        )
    }
}
const MapStateToProps=(state)=>({
  authUser:state.user.currentUser,
  authBool:state.user.authBool,
})

export default connect(MapStateToProps)(Profile);