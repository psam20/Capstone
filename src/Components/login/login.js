import React from 'react';
import { UserService } from "../../Api/UserApi";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { connect } from 'react-redux';
import { userActions } from '../../actions/UserActions'

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
    this.setState({submitted:true})
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
        const { email, password, submitted } = this.state;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4 mt-5">
                        <h2>Login</h2>
                        <form name="form">
                            <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                                <label htmlFor="email">Email Id</label>
                                <input type="email" className="form-control"
                                value={email}
                                name = "email"
                                onChange={this.Email} />
                                {submitted && !email &&
                                    <div className="help-block">Email is required</div>
                                }
                            </div>
                            <div className={'form-group' + (this.state.submitted && !this.state.password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" 
                                value={this.state.password}
                                name = "password"
                                onChange={this.Password}/>
                                {this.state.submitted && !this.state.password &&
                                    <div className="help-block">Password is required</div>
                                }
                                {this.state.submitted && !this.state.password.length<6 &&
                                    <div className="help-block">Password should be 6 characters long</div>
                                }

                            </div>
                            <div className="form-group">
                                <button className="btn btn-success" onClick={this.login}>
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(login);
export { connectedLoginPage as login };

//export default login;