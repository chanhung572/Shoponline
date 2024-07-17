import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class Inform extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
        <img src="https://static.vecteezy.com/system/resources/previews/023/871/616/original/jordan-logo-brand-symbol-with-name-design-clothes-sportwear-illustration-free-vector.jpg" width="70px" height="48px" alt="" style={{ float: 'left', marginLeft: '-72px', marginTop: '-10px', position:'relative' }} />
        {this.context.token === '' ?
          <div><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link> | <Link to='/signup' style={{ textDecoration: 'none' }}>Sign-up</Link> | <Link to='/active' style={{ textDecoration: 'none' }}>Active</Link></div>
          :
          <div>Hello <b>{this.context.customer.name}</b> | <Link to='/home' onClick={() => this.lnkLogoutClick()}>Logout</Link> | <Link to='/myprofile'>My profile</Link> | <Link to='/myorders'>My orders</Link></div>
        }
      </div>
        <div className="float-right">
          <Link to='/mycart'style={{ textDecoration: 'none' }}>My cart</Link> have <b>{this.context.mycart.length}</b> items
        </div>
        <div className="float-clear" />
        </div>
    );
  }

// event-handlers
lnkLogoutClick() {
  this.context.setToken('');
  this.context.setCustomer(null);
  this.context.setMycart([]);
}
}
export default Inform;