import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Header() {
  return (
    <div className="header">
      <p>Hi, my name is</p>
      <div className="main-header">
        Bruno Athié Teruel
      </div>
      <p>I am a computer scientist and anthropologist</p>
      <div className='NavPhrase'>
        <p>Learn more about </p>
        <nav className="nav" id="nav">
          <Link to="/work" class="navbar-item">me</Link>
          <Link to="/about" class="navbar-item">my work</Link>
          <Link to="/contact" class="navbar-item">my art</Link>
        </nav>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div className="small-page">
      <p> work </p>
    </div>
  );
}

function About() {
  return (
    <div className="small-page">
      <p> about </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="small-page">
      <p> contact </p>
    </div>
  );
}


function App() {
  return (
    <Router>
      <div className="page" style={{marginLeft: 30, marginRight: 30}}>
        <Header/>
        <div class="main-page">
          <Routes>
            <Route path="/work" element={<Work/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
