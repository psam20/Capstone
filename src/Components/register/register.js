import React from 'react';
import { useFormik } from 'formik';
import UserService from "../../Api/UserApi";
import 'bootstrap/dist/css/bootstrap.min.css'

import './register.css'

const Register = () => {

  const formik = useFormik({
    initialValues: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      location: "",
      mobile:"",
    },
    onSubmit: (values,{resetForm}) => {
       alert("Registered Successfully");
      UserService.create(values)
            .catch(e => {
              console.log(e);
            });
       
            resetForm({values:''})

    }
  })
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4 mt-5">
          <h2>Register</h2>
          <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <div className="form-group">
            <input type="text" className="form-control"
              placeholder="First Name"
              id="firstName"
              name="firstName"
              required
              value={formik.values.firstName}
              onChange={formik.handleChange} />
            {/* {submitted && !firstName &&
              <div className="help-block">First Name is required</div>
            }
            {submitted && firstName.length < 3 &&
              <div className="help-block">First Name should be 3 charcters long</div>
            } */}

          </div>
          <div className="form-group">
            <input type="text" className="form-control"
              placeholder="Last Name"
              id="lastName"
              name="lastName"
              required
              value={formik.values.lastName}
              onChange={formik.handleChange} />
            {/* {submitted && !lastName &&
              <div className="help-block">Last Name is required</div>
            }
            {submitted && lastName.length < 3 &&
              <div className="help-block">Last Name should be 3 charcters long</div>
            } */}
          </div>
          <div className="form-group">
            <input type="email" className="form-control"
              placeholder="Email"
              id="email"
              name="email"
              size="30"
              required
              value={formik.values.email}
              onChange={formik.handleChange} />
            {/* {submitted && !email &&
              <div className="help-block">Email is required</div>
            }
            {errors.email.length > 0 &&
              <div className='help-block'>{errors.email}</div>
            } */}
          </div>
          <div className="form-group">
            <input type="password" className="form-control"
              placeholder="Password"
              id="password"
              name="password"
              required
              value={formik.values.password}
              onChange={formik.handleChange} />
            {/* {submitted && !password &&
              <div className="help-block">Password is required</div>
            }
            {submitted && password.length < 6 &&
              <div className="help-block">Password should be 6 characters long</div>
            } */}
          </div>
          <div className="form-group">
            <input type="text" className="form-control"
              placeholder="Location"
              id="location"
              name="location"
              required
              value={formik.values.location}
              onChange={formik.handleChange} />
            {/* {submitted && !location &&
              <div className="help-block">Location is required</div>
            } */}
          </div>
          <div className="form-group">
            <input type="text" className="form-control"
              placeholder="Mobile"
              id="mobile"
              name="mobile"
              required
              value={formik.values.mobile}
              onChange={formik.handleChange} />
            {/* {submitted && !mobile &&
              <div className="help-block">Mobile is required</div>
            }
            {errors.mobile.length > 0 &&
              <div className='help-block'>{errors.mobile}</div>
            } */}
          </div>
          <div className="form-group">
            <button className="btn btn-primary signin"
              type="submit">Sign Up</button>
          </div>
          </form>
        </div>
      
      </div>
    </div>
  )
}
export default Register;