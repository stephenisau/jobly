import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import JoblyApi from './JoblyApi'
import jwt from 'jsonwebtoken';
import CurrentUserContext from './CurrentUserContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.checkLocalStorage()
    }
    this.removeUser = this.removeUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.checkLocalStorage = this.checkLocalStorage.bind(this);
    this.addJob = this.addJob.bind(this);
  }

  checkLocalStorage() {
    // function that checks for user token in local storage
    // If it exists, then we set the state of our app to be the username
    if (localStorage.getItem('_token')) {
      let token = localStorage.getItem('_token')
      let username = jwt.decode(token);
      return { username };
    }
    return {};
  }

  async componentDidMount() {
    // once our component mounts, we set the state to be our user object
    if (localStorage.getItem('_token')) {
      let { user } = await JoblyApi.getUser(localStorage.getItem('_token'))
      this.setState({ currentUser: user });
    }
  }

  addUser(user) {
    this.setState({ currentUser: user })
  }

  removeUser() {
    this.setState({ currentUser: {} })
  }

  addJob(job) {
    this.setState(st => ({
      currentUser: {...st.currentUser, jobs: [...st.currentUser.jobs, job]}
    }));
  }

  render() {
    return (
      <div className="container-fluid">
        <CurrentUserContext.Provider value={{ currentUser: this.state.currentUser, 
                                              addUser: this.addUser, 
                                              removeUser: this.removeUser,  
                                              addJob: this.addJob }}>
          <BrowserRouter>
            <NavBar />
            <Routes />
          </BrowserRouter>
        </CurrentUserContext.Provider>
      </div>
    );
  }
}

export default App;
