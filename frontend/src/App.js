import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import JoblyApi from './JoblyApi'
import UserContext from './UserContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loaded: false,
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.addUser = this.addUser.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.addJob = this.addJob.bind(this);
  }

  async getCurrentUser() {
    const token = localStorage.getItem('_token');
    if (localStorage.getItem("_token")) {
      let User = await JoblyApi.getCurrentUser(token);
      this.setState({ currentUser: User, loaded: true });
    } else {
      this.setState({ currentUser: null, loaded: false })
    }
  }

  async componentDidMount() {
    await this.getCurrentUser()
  }

  async addUser(token) {
    let User = await JoblyApi.getCurrentUser(token);
    this.setState({ currentUser: User, loaded: true })
  }

  handleLogout() {
    localStorage.removeItem("_token");
    this.setState({ currentUser: null })
  }


  async addJob(job) {
    this.setState(st => ({
      currentUser: {
        user: {
          ...st.currentUser.user,
          jobs: [...st.currentUser.user.jobs, job]
        }
      }
    }));
  }

  render() {
    return (
      <div className="App">
        <UserContext.Provider value={this.state.currentUser}>
          <BrowserRouter>
              <NavBar
                loaded={this.state.loaded}
                handleLogout={this.handleLogout} />
            <Routes
              handleLogout={this.handleLogout}
              currentUser={this.state.currentUser}
              loaded={this.state.loaded}
              getCurrentUser={this.getCurrentUser}
              addJob={this.addJob}
              removeUser={this.removeUser}
              addUser={this.addUser} />
          </BrowserRouter>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
