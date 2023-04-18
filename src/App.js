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


  const classname = `header2 ${isHeaderSmall ? 'small' : ''}`
  const headerTextName = `header-text ${isHeaderSmall ? 'hidden' : ''}`
  
  return (
    <div className={classname}>
      <div className='header-background'></div>
      <div className='NavPhrase'>
        <nav className="nav" id="nav">
          <Link to="/about" class="navbar-item">about</Link>
          <Link to="/work" class="navbar-item">experience</Link>
          <Link to="/art" class="navbar-item">art</Link>
        </nav>
      </div>
      <div className='name-block'>
        <Link className="name" to="/">
          Bruno<br/>
          Athié test<br/>
          Teruel<br/>
        </Link>
        <p className={headerTextName}>computer<br/>scientist<br/>&<br/>anthropologist</p>
      </div>
    </div>
  );
}

function Art() {
  return (
    <div>
      <div className="block-page">
        <p>art will go here (page under construction)</p>
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Background/>
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
