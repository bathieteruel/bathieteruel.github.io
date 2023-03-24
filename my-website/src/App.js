import './App.css';
import { Background } from './Background.js';
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
      <p className="header-text">Hi, my name is</p>
      <Link className="name" to="/home">
        Bruno Athié Teruel
      </Link>
      <p className="header-text">I am a computer scientist and anthropologist</p>
      <div className='NavPhrase'>
        <p className="header-text">Learn more about: </p>
        <nav className="nav" id="nav">
          <Link to="/about" class="navbar-item">me</Link>
          <Link to="/work" class="navbar-item">my work</Link>
          <Link to="/contact" class="navbar-item">my art</Link>
        </nav>
      </div>
    </div>
  );
}

function Home() {
  return;
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
    <div className="about-me-page">
      <div className="page">
        <p class='Paragraph'> 
        I was born in Avaré, Brazil. I got a full ride to study
        at the University of Kentucky. I worked at the intersection
        of anthropology and computer science.
        </p>
      </div>
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
      <Background/>
      <div className="page" style={{marginLeft: 30, marginRight: 30}}>
        <Header/>
        <div class="main-page">
          <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/work" element={<Work/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
