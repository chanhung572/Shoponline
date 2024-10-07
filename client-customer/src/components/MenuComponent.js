import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <li key={item._id} className="menu"><Link to={'/product/category/' + item._id}  style={{ textDecoration: 'none' }}>{item.name}</Link></li>
      );
    });
    return (
      <div className="border-bottom">
        <div className="float-left">
          <ul className="menu">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt="" style={{ float: 'left', marginLeft: '-40px',marginTop: '-20px', width: '100px', height:'70px' }}/>
            <li className="menu"><Link to='/' style={{width: "200px", height:"100px", border: "2px solid", borderRadius:"10px", backgroundColor: 'aqua', padding:"2px 8px 3px 9px", marginLeft: '-15px', textDecoration: 'none'}} >Home</Link></li>
            {cates}
            <li className="menu"><Link to='/gmap' style={{ textDecoration: 'none' }}>Our Store</Link></li>
          </ul>
        </div>

        <div className="float-right">
          <div className="searchBox">
            <input type="searchInput" placeholder="Search something..." className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
            <button className="button" value="search" onClick={(e) => this.btnSearchClick(e)}  />
            <FontAwesomeIcon icon={faSearch} size="1x" className="fa-icon-search"/>
          </div>
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
  // event-handlers
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }
}
export default withRouter(Menu);
