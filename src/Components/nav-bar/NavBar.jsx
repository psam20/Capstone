import React from 'react';

import {Menu,AddShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';
import './navbar.scss';
const Header = ()=>{
 
  const [isExpanded, setisExpanded]= React.useState(false);
   const handleToggle=(e)=>{
      
       e.preventDefault();
       setisExpanded(!isExpanded)
       console.log(isExpanded);
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
            <Link className="active" to="/chart">
              <li>Top viewed Products</li>
            </Link>
            <Link to="/AddProduct">
                <li>Add Products</li>
            </Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login"> Login</NavDropdown.Item>
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
            {/* <Link to="/register">
              <li>Register</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/sign-in">
                <li>Log Out</li>
            </Link> */}
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

   
 
export default Header;