import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import MyProvider from './contexts/MyProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/FooterComponent';


class App extends Component {
  render() {
    return (
      <MyProvider>
        <BrowserRouter>
          <Main />
          <Footer />
        </BrowserRouter>
      </MyProvider>
    );
  }
}
export default App;