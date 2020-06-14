import React from 'react';
import UserService from "../../Api/UserApi";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import './register.css'

class Register extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
            id:"",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            location: "",
            mobile: null,
            submitted: false
        };
      }

      onChangeFirstName=(e)=> {
        this.setState({
          firstName: e.target.value
        });
      }
    
      onChangeLastName=(e)=> {
        this.setState({
          lastName: e.target.value
        });
      }

      onChangeEmail=(e)=> {
        this.setState({
          email: e.target.value
        });
    }

      onChangePassword=(e)=> {
        this.setState({
          password: e.target.value
        });
      }

      onChangeLocation=(e)=> {
        this.setState({
          location: e.target.value
        });
      }

      onChangeMobile=(e)=> {
        this.setState({
          mobile: e.target.value
        });
      }

      handleSubmit=()=> {
        var data = {
          loginId: this.state.loginId,
          firstName: this.state.firstName,
          email: this.state.email,
          lastName: this.state.lastName,
          password: this.state.password,
          location: this.state.location,
          mobile: this.state.mobiles,
          value: false
        };
    
        UserService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
              firstName: response.data.firstName,
              date: response.data.PublicationDate,
              lastName: response.data.lastName,
              email: response.data.email,
              password: response.data.password,
              location: response.data.location,
              mobile: response.data.mobile,
              submitted: true,
              value:false

            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    

    render(){
        return(
          <div className="container">
             <div className="row">
                 <div className="col-md-4 offset-md-4 mt-5">
                 <h2>Register</h2>
                         <div className="form-group">
                             <input type="text" className="form-control" 
                             placeholder="First Name" 
                             id ="firstName"
                             name ="firstName"
                             required
                             onChange={this.onChangeFirstName}/>
                         </div>
                         <div className="form-group">
                             <input type="text" className="form-control" 
                             placeholder="Last Name" 
                             id ="lastName"
                             name ="lastName"
                             required
                             onChange={this.onChangeLastName}/>
                         </div>
                         <div className="form-group">
                             <input type="email" className="form-control"
                              placeholder="Email" 
                              id ="email"
                              name ="email"
                              required
                              onChange={this.onChangeEmail}/>
                         </div>
                         <div className="form-group">
                             <input type="password" className="form-control" 
                             placeholder="Password" 
                             id ="password"
                             name ="password"
                             required
                             onChange={this.onChangePassword}/>
                         </div>
                         <div className="form-group">
                             <input type="text" className="form-control"
                              placeholder="Location" 
                              id ="location"
                              name ="location"
                              required
                             onChange={this.onChangeLocation}/>
                         </div>
                         <div className="form-group">
                             <input type="text" className="form-control" 
                             placeholder="Mobile"
                             id ="mobile"
                             name ="mobile"
                             required
                             onChange={this.onChangeMobile} />
                         </div>     
                         <div className="form-group">
                             <button className="btn btn-primary signin"
                             onClick={this.handleSubmit}>Sign Up</button>
                          </div>
                       </div>
                   </div>
                 </div>
        )
    }
}

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(Register);
export { connectedRegisterPage as Register};

//export default register;