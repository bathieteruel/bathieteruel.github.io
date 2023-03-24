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
    <div className="Header">
      <h1>
        Hi, my name is Bruno Athie Teruel
      </h1>
      <nav className="nav" id="nav">
        <Link to="/work" class="navbar-item">Work</Link>
        <Link to="/about" class="navbar-item">About</Link>
        <Link to="/contact" class="navbar-item">Contact</Link>
      </nav>
    </div>
  );
}

function Work() {
  return (
    <p> work </p>
  );
}

function About() {
  return (
    <p> about </p>
  );
}

function Contact() {
  return (
    <p> contact </p>
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
