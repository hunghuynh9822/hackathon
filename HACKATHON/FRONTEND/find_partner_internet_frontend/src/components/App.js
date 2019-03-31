import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={count: 0};
  }
  render() {
    return (
      <Router>
      <div className="App">
          <Header/>
          <div className="clearfix" />
          <Container/>
          <Footer/>
      </div>
      </Router>
      
    );
  }
}

export default App;
