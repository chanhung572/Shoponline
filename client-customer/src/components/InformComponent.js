import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

class Inform extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
        <img src="https://static.vecteezy.com/system/resources/previews/023/871/616/original/jordan-logo-brand-symbol-with-name-design-clothes-sportwear-illustration-free-vector.jpg" width="120px" height="60px" alt="" style={{ float: 'left', marginLeft: '-60px', marginTop: '-10px', position:'relative' }} />
        <div className="dropdown">
        <div className="dropdown-account">
          {this.context.token === '' ? (
            <span><FontAwesomeIcon icon={faUser} size="1x"/> Account</span>
          ) : (
            <span className="dropdown-item disabled">Hello <b>{this.context.customer.name}</b></span>
          )}
        </div>
        <ul>
          {this.context.token === '' ? (
            <>
              <li><Link className="dropdown-item" to='/login'>Login</Link></li>
              <li><Link className="dropdown-item" to='/signup'>Sign-up</Link></li>
              <li><Link className="dropdown-item" to='/active'>Active</Link></li>
            </>
          ) : (
            <>
              <li><Link className="dropdown-item" to='/myprofile'>My profile</Link></li>
              <li><Link className="dropdown-item" to='/myorders'>My orders</Link></li>
              <li><Link className="dropdown-item" to='/home' onClick={() => this.lnkLogoutClick()}>Logout</Link></li>
            </>
          )}
        </ul>
        </div>

        </div>
        <div className="float-right">
          <FontAwesomeIcon icon={faCartShopping} size="1x" />
          <Link to='/mycart'style={{ textDecoration: 'none' }}> My cart</Link> have <b>{this.context.mycart.length}</b> items
        </div>
        
        <div style={{display: "inline",  float: "right", marginRight: "5px"}} class="form-switch">
          <input class="form-check-input" type="checkbox" onChange={(e) => this.ckbChangeMode(e)} /> Light/Dark mode |
        </div>

        <div className="float-clear"/>
        </div>
    );
  }

// event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }

  ckbChangeMode(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-bs-theme', 'dark'); 
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }
}
export default Inform;