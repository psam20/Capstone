import React from 'react';

import {Menu,AddShoppingCart} from '@material-ui/icons';

import {Link,useHistory} from 'react-router-dom';
import {signOutUser} from '../../actions/usersAction'
import {connect} from 'react-redux';

import './navbar.scss';
const Header = ({loginUsers,auth,logOut})=>{
    console.log(loginUsers);
    console.log(auth);
    const history=useHistory();
    // const auth=loginUsers.auth;
  const [isExpanded, setisExpanded]= React.useState(false);
   const handleToggle=(e)=>{
      
       e.preventDefault();
       setisExpanded(!isExpanded)
       console.log(isExpanded);
   }
   const handleLogout =(e)=>{
          if(auth===true){
            logOut()
            return history.push('/')
          }
   }
   
  return(
    <div className="nav-bar">
       <div className="logo">
          <Link to="/">
          <img src="https://seeklogo.com/images/S/shopify-logo-3CDF9B62B3-seeklogo.com.png"alt="company logo" height="40px" width="100px" />
          </Link>
        </div>

        <nav className="nav">
          <Menu id="Menu"  onClick={handleToggle}fontSize="large" />
        
          <ul className={`collapsed ${isExpanded ? " is-expanded " : " "}`}>
            <Link className="active" to="/">
              <li>Home</li>
            </Link>
            <Link className="active" to="/About">
              <li>About</li>
            </Link>
         
            <Link to="/AddProduct">
              {
                (auth===true)?
                <li>Add Products</li>:""
              }
            </Link>
           
            <Link to="/login" onClick={(e)=>handleLogout(e)}>
              {/* <li>Login</li> */}
              
              {
                (auth===true)?
              <li>LogOut</li>:<li>LogIn</li>
              } 
            </Link>
          
          </ul>
        </nav>
        <nav className="nav1">
          <div>
            <span>0</span>
          <Link to="/Cart" className="cart-icon">
              <AddShoppingCart fontSize="large"/>
          </Link>
          </div>
        </nav>
        
      </div>
  )
}

   const MapStateToProps=(state)=>({
     loginUsers:state.user.currentUser,
     auth:state.user.authBool
   })
 const MapDispatchToProps=(dispatch)=>({
   logOut:()=>dispatch(signOutUser())
 })
export default  connect(MapStateToProps,MapDispatchToProps)(Header);