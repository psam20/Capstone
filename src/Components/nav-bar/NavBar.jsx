import React from 'react';
import Cart from '../CartDropdown/cart-dropdown';
import {Menu,AddShoppingCart} from '@material-ui/icons';
import {Link,useHistory} from 'react-router-dom';
import './navbar.scss';
const Header = ({loginUsers,auth,logOut,toggleCart,hiddenCart,itemCount})=>{
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
            <Link className="active link" to="/" >
              <li>Home</li>
            </Link>
            <Link className="active link" to="/About"  >
              <li>About</li>
            </Link>
            <Link className="active link" to="/chart">
              <li>Top viewed Products</li>
            </Link>
         
            <Link to="/AddProduct" className="link">
              {
                (auth===true && loginUsers.roleBool===true)?
                <li>Add Products</li>:""
              }
            </Link>
            <Link to="/Profile" className="link">
              {
                (auth===true)?
              <li>{loginUsers.firstName}</li>:""
              }
            </Link>
           
            <Link to="/login"className="link" onClick={(e)=>handleLogout(e)}>
              {/* <li>Login</li> */}
              
              {
                (auth===true)?
              <li>LogOut</li>:<li>LogIn</li>
              } 
            </Link>
          
          </ul>
        </nav>
        <nav className="nav1">
          <div onClick={toggleCart} >
            <span>{itemCount}</span>
          
              <AddShoppingCart fontSize="large"/>
      
          </div>
        </nav>
        { hiddenCart?null:
        <Cart />
         }
      </div>
  )
}

export default Header;