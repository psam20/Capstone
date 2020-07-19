import React from 'react';
import {connect} from 'react-redux';

import './Profile.css';


const Profile =({authUser,authBool})=>{

  
    const  handleChange=(e)=>{
        console.log(e.target.value)
    }

      console.log(authUser)
        return(
            <div className="user-container">
          {(authUser.roleBool===true)? <h2 className="heading">Admin Profile Page</h2>
           : <h2 className="heading">My Profile</h2> }
            <form className="userForm" name="form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" id="firstName" value={authUser.firstName} onChange={(e)=>handleChange(e)} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" name="lastName" id="lastName" value={authUser.lastName} onChange={(e)=>handleChange(e)} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="text" name="email" id="email" value={authUser.email} onChange={(e)=>handleChange(e)} className="form-control" />
                </div>

                

                <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  <input type="text" name="location" id="location" value={authUser.location} onChange={(e)=>handleChange(e)} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">Mobile:</label>
                  <input type="text" name="mobile" id="mobile" value={authUser.mobile} onChange={(e)=>handleChange(e)} className="form-control" />
                </div>
            </form>
        </div>
        )
    }

const MapStateToProps=(state)=>({
  authUser:state.user.currentUser,
  authBool:state.user.authBool,
})

export default connect(MapStateToProps)(Profile);