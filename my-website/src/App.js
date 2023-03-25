import './App.scss';
import { Background } from './Background';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Header(props) {
  const location = useLocation();
  const [isHeaderSmall, setIsHeaderSmall] = useState(false);

  useEffect(() => {
    if (location.pathname === '/about' || location.pathname === '/work' || location.pathname === '/art') {
      setIsHeaderSmall(true);
    } else {
      setIsHeaderSmall(false); 
    }
  }, [location.pathname]);


  const classname = `header ${isHeaderSmall ? 'small' : ''}`
  
  return (
    <div className={classname}>
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
          <Link to="/art" class="navbar-item">my art</Link>
        </nav>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Header smallHeader={false}></Header>
    </div>
  );
}

function Work() {
  return (
    <div>
      <div className="block-page">
        <ul>
          <li>Researcher at EduceLab</li>
          <li>Researcher at HEVA Lab</li>
          <li>Intern at Carlson</li>
        </ul>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <div className="block-page">
          <p class='Paragraph'> 
          I was born in Avaré, Brazil. I got a full ride to study
          at the University of Kentucky. I worked at the intersection
          of anthropology and computer science.
          </p>
      </div>
    </div>
  );
}

function Art() {
  return (
    <div>
      <div className="block-page">
        <p>art here</p>
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <div className="page" style={{marginLeft: 30, marginRight: 30}}>
        <Background/>
        <Header/>
        <div>
          <Routes>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/work" element={<Work/>}></Route>
            <Route path="/art" element={<Art/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
