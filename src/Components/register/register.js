import React from 'react';
import UserService from "../../Api/UserApi";
import 'bootstrap/dist/css/bootstrap.min.css'

import './register.css'

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validMobileRegex = RegExp(
  /^(([1-9]*)|(([1-9]*).([0-9]*)))$/i
);

class register extends React.Component{

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
            submitted: false,
            errors: {
              email: '',
              mobile: ''
            }
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
        const { value } = e.target;
            let errors = this.state.errors;
                errors.email = 
                  validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
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
        const { value } = e.target;
            let errors = this.state.errors;
                errors.mobile = 
                  validMobileRegex.test(value)
                    ? ''
                    : 'Mobile number should contain 10 digits!';
      }

      handleSubmit=()=> {
        var data = {
          loginId: this.state.loginId,
          firstName: this.state.firstName,
          email: this.state.email,
          lastName: this.state.lastName,
          password: this.state.password,
          location: this.state.location,
          mobile: this.state.mobile,
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
            this.props.history.push('/login')
          })
          .catch(e => {
            console.log(e);
          });
      }
    

    render(){
        const { errors, firstName, lastName, location, mobile, email, password, submitted } = this.state;
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
                             {submitted && !firstName &&
                                <div className="help-block">First Name is required</div>
                             }
                             {submitted && firstName.length<3 &&
                                <div className="help-block">First Name should be 3 charcters long</div>
                             }
                                                            
                         </div>
                         <div className="form-group">
                             <input type="text" className="form-control" 
                             placeholder="Last Name" 
                             id ="lastName"
                             name ="lastName"
                             required
                             onChange={this.onChangeLastName}/>
                             {submitted && !lastName &&
                                <div className="help-block">Last Name is required</div>
                             }
                             {submitted && lastName.length<3 &&
                                <div className="help-block">Last Name should be 3 charcters long</div>
                             }
                         </div>
                         <div className="form-group">
                             <input type="email" className="form-control"
                              placeholder="Email" 
                              id ="email"
                              name ="email"
                              pattern=".+@globex.com" size="30"
                              required
                              onChange={this.onChangeEmail}/>
                              {submitted && !email &&
                                <div className="help-block">Email is required</div>
                              }
                              {errors.email.length > 0 && 
                                  <div className='help-block'>{errors.email}</div>
                              }
                         </div>
                         <div className="form-group">
                             <input type="password" className="form-control" 
                             placeholder="Password" 
                             id ="password"
                             name ="password"
                             required
                             onChange={this.onChangePassword}/>
                             {submitted && !password &&
                                <div className="help-block">Password is required</div>
                             }
                             {submitted && password.length<6 &&
                                <div className="help-block">Password should be 6 characters long</div>
                             }
                         </div>
                         <div className="form-group">
                             <input type="text" className="form-control"
                              placeholder="Location" 
                              id ="location"
                              name ="location"
                              required
                             onChange={this.onChangeLocation}/>
                             {submitted && !location &&
                                <div className="help-block">Location is required</div>
                             }
                         </div>
                         <div className="form-group">
                             <input type="text" className="form-control" 
                             placeholder="Mobile"
                             id ="mobile"
                             name ="mobile"
                             required
                             onChange={this.onChangeMobile} />
                             {submitted && !mobile &&
                                <div className="help-block">Mobile is required</div>
                             }
                             {errors.mobile.length > 0 && 
                                <div className='help-block'>{errors.mobile}</div>
                             }
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

// function mapState(state) {
//   const { registering } = state.registration;
//   return { registering };
// }

// const actionCreators = {
//   register: userActions.register
// }

// const connectedRegisterPage = connect(mapState, actionCreators)(register);
// export { connectedRegisterPage as register};

export default register;