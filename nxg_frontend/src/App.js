import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import  Home from './Home';
import  ContactUs  from './ContanctUs';

function App() {
  return (
    <>
      <div className='nav-bar'>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
          </ul>
        </nav>
      </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
    </>
  );
}

export default App;
