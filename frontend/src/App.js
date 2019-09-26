import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
    this.toggleLog = this.toggleLog.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem('_token')) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false});
    }
  }
  toggleLog() {
    this.setState(st => ({ loggedIn: !st.loggedIn}));
  }


  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <NavBar logStatus={this.state.loggedIn} />
          <Routes logStatus={this.state.loggedIn} toggleLog={this.toggleLog}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
