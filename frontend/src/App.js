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
    this.removeUser = this.removeUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  async componentDidMount() {
    if (localStorage.getItem('_token')) {
      let currentUser = await JoblyApi.getUser(localStorage.getItem('_token'))
      this.setState({ currentUser });
    }
  }

  // async componentDidUpdate(prevState) {
  //   if (this.state.currentUser !== prevState.currentUser) {
  //     console.log('broken');
  //     // this.setState({ currentUser: this.state.currentUser })
  //   }
  // }
  addUser(user) {
    this.setState({ currentUser: user })
    // console.log("adduser: ", this.state);
  }

  removeUser() {
    this.setState({ currentUser: {} })
  }


  render() {
    console.log(this.state);
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <NavBar currentUser={this.state.currentUser} />
          <Routes currentUser={this.state.currentUser}
            removeUser={this.removeUser}
            addUser={this.addUser} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
