import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <NavBar />
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
