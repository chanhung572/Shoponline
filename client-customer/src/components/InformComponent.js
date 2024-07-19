import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class Inform extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
        <img src="https://static.vecteezy.com/system/resources/previews/023/871/616/original/jordan-logo-brand-symbol-with-name-design-clothes-sportwear-illustration-free-vector.jpg" width="150px" height="75px" alt="" style={{ float: 'left', marginLeft: '-72px', marginTop: '-10px', position:'relative' }} />
        {this.context.token === '' ?
          <div className='custom-account'><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link> | <Link to='/signup' style={{ textDecoration: 'none' }}>Sign-up</Link> | <Link to='/active' style={{ textDecoration: 'none' }}>Active</Link></div>
          :
          <div className='custom-account'>Hello <b>{this.context.customer.name}</b> | <Link to='/home' style={{ textDecoration: 'none' }} onClick={() => this.lnkLogoutClick()}>Logout</Link> | <Link to='/myprofile' style={{ textDecoration: 'none' }}>My profile</Link> | <Link to='/myorders' style={{ textDecoration: 'none' }}>My orders</Link></div>
        }
      </div>
        <div className="float-right">
          <Link to='/mycart'style={{ textDecoration: 'none' }}>My cart</Link> have <b>{this.context.mycart.length}</b> items
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