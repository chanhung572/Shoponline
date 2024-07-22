import axios from 'axios';
import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: []
    };
  }
  render() 
  {const newprods = this.state.newprods.map((item) => {
    return (
      <div key={item._id} className="inline">
        <figure>
          <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width ="300px" height="200px" padding="1px" alt=""/></Link>
          <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
        </figure>
      </div>
    );
  });
  const hotprods = this.state.hotprods.map((item) => {
    return (
      <div key={item._id} className="inline">
        <figure>
          <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="200px" padding ="1px" alt=""/></Link>
          <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
        </figure>
      </div>
    );
  });

  return (
      <div>
        <img src="https://d2w9rnfcy7mm78.cloudfront.net/10316765/original_73133d188fd5918215ec3e417cc9c341.gif?1611104604" width="1700px" height="850px" margin-left ="100px" alt="" /> 
        <hr></hr>
        <div>
          <div className="align-center">
            <h2 className="text-center" style={{marginTop:"70px", marginBottom:"50px"}}> FEARTURED</h2>
            <h2 style={{ paddingBottom: '30px' }}>
              <img src="https://static.wixstatic.com/media/b0f483_2259dbebd7d34fcf882d8518cafdffd5~mv2.gif/v1/fill/w_280,h_351,q_90/b0f483_2259dbebd7d34fcf882d8518cafdffd5~mv2.gif" width="566px" alt=''/>
              <img src="https://static.wixstatic.com/media/b0f483_49416d57fa44493a8686b05b3840167e~mv2.gif/v1/fill/w_280,h_351,q_90/b0f483_49416d57fa44493a8686b05b3840167e~mv2.gif" width="566px" alt=''/>
              <img src="https://static.wixstatic.com/media/b0f483_01cb805d5aff4b3bb318a385d6de4b57~mv2.gif/v1/fill/w_280,h_351,q_90/b0f483_01cb805d5aff4b3bb318a385d6de4b57~mv2.gif" width="566px" alt=''/>
            </h2>
          <div>
            <hr style={{marginTop:"-20px"}}></hr>
            <div className="align-center">
              <h2 className="text-center" style={{marginTop:"70px", marginBottom:"50px"}}> DONT' MISS</h2>
                {newprods}
            </div>
              {this.state.hotprods.length > 0 ?
            <div className="align-center">
              <h2 className="text-center">HOT PRODUCTS</h2>
                {hotprods}
            </div>
        : <div/>}
    </div>
          </div>
        </div>
      </div>
      
      );
  } 
    
  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }
  // apis
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }
  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }
}
export default Home;