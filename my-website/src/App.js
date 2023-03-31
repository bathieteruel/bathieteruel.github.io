import './App.scss';
import { Background } from './Background';
import { Work } from './Work';
import { About } from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
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
  const headerTextName = `header-text ${isHeaderSmall ? 'hidden' : ''}`
  
  return (
    <div className={classname}>
      <div className='header-background'></div>
      <p className={headerTextName}>Hi, my name is</p>
      <Link className="name" to="/">
        Bruno Athié Teruel
      </Link>
      <p className={headerTextName}>I am a computer scientist and anthropologist</p>
      <div className='NavPhrase'>
        <p className={headerTextName}>Learn more about: </p>
        <nav className="nav" id="nav">
          <Link to="/about" class="navbar-item">me</Link>
          <Link to="/work" class="navbar-item">my work</Link>
          <Link to="/art" class="navbar-item">my art</Link>
        </nav>
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
      <div className="page" style={{marginLeft: 10, marginRight: 10}}>
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
