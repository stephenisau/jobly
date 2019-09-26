import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import JoblyApi from './JoblyApi'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    }
  }
  async componentDidMount() {
    if (localStorage.getItem('_token')) {
      let currentUser = await JoblyApi.getUser(localStorage.getItem('_token'))
      this.setState({ currentUser});
      console.log(this.state);
    }
  }



  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <NavBar currentUser={this.state.currentUser} />
          <Routes currentUser={this.state.currentUser} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
