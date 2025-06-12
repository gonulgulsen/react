import './App.css';
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import Error404 from './components/Error404';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? "active" : undefined}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? "active" : undefined}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive}) => isActive ? "active" : undefined}>Users</NavLink>
            </li>
          </ul>
        </nav>
        
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} /> 
          <Route path="/user/:id" element={ <User/>} />       
        </Routes> */}

                
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/*" element={<Users />} /> 
          <Route path='*' element={<Error404/>} />
        </Routes>
      </div>
    </Router>

  );

  }

export default App;
