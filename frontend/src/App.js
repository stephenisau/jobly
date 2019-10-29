import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import JoblyApi from './JoblyApi'
import UserContext from './UserContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loaded: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.addUser = this.addUser.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.addJob = this.addJob.bind(this);
  }

  async getCurrentUser() {
    const token = localStorage.getItem('_token');
    try {
      let currentUser = await JoblyApi.checkToken(token);
      this.setState({ currentUser, loaded: true })
    } catch (err) {
      this.setState({ currentUser: null, loaded: false })
    }
  }

  async componentDidMount() {
    await this.getCurrentUser()
  }

  addUser(user) {
    this.setState({ currentUser: user })
  }

  handleLogout() {
    localStorage.removeItem("_token");
    this.setState({ currentUser: null })
  }

  async addJob(job) {
    await JoblyApi.applyToJob(job.id);
    this.setState(st => ({
      currentUser: { ...st.currentUser, jobs: [...st.currentUser.jobs, job] }
    }));
  }

  render() {
    console.log(this.state);
    return (
      <div className="container-fluid">
        <UserContext.Provider value={this.state.currentUser, this.state.loaded}>
          <BrowserRouter>
            <NavBar handleLogout={this.handleLogout}/>
            <Routes 
              currentUser={this.state.currentUser}
              loaded={this.state.loaded}
              getCurrentUser={this.getCurrentUser}
              addJob={this.addJob}
              removeUser={this.removeUser}
              addUser={this.addUser}/>
          </BrowserRouter>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
