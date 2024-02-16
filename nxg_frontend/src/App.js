import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import  Home from './Home';
import  ContactUs  from './ContactUs';
import NavBar from './NavBar';

function App() {
  return (
    <>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>

    </>
  );
}

export default App;
