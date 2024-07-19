import React, {Component} from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';

class Menu extends Component {
    static contextType = MyContext; // using this . context to access global state
        render() {
            return (
                <div className ="border-bottom">
                    <div className ="float-left">
                        <ul className ="menu">
                            <li className ="menu"><Link to ='/admin/home' style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
                            <li className ="menu"><Link to ='/admin/category' style={{ textDecoration: 'none', color: 'black' }}>Category</Link> </li>
                            <li className ="menu"><Link to ='/admin/product' style={{ textDecoration: 'none', color: 'black' }}> Product</Link> </li>
                            <li className="menu"><Link to='/admin/order' style={{ textDecoration: 'none', color: 'black' }}>Order</Link></li>
                            <li className="menu"><Link to='/admin/customer' style={{ textDecoration: 'none', color: 'black' }}>Customer</Link></li>
                        </ul>
                    </div>
                    <div className ="float-right">
                        Hello <b>{this.context.username}</b> | 
                        <Link to ='/admin' style={{ textDecoration: 'none', color: 'black' }} onClick ={() => this.lnkLogoutClick()}>Logout</Link>
                    </div>
                    <div className ="float-clear"/>
                </div>
            );
        }

    //event-handlers
    lnkLogoutClick() {
        this.context.setToken('');
        this.context.setUsername('');
    }
}
export default Menu ;