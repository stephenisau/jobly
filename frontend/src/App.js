import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
          <NavBar />
          <Routes />
        </BrowserRouter>
    </div>
  );
}

export default App;
