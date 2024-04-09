import Nav from '../src/Components/Nav/index.js'
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import HomePage from './pages/HomePage'
import About from './pages/About/index.js'
import Services from './pages/Services/index.js'
import Contact from './pages/Contact/index.js'
import Doctors from './pages/Doctors/index.js'
import APPOINTMENT from './Components/APPOINTMENT/index.js'
import Footer from './Components/Footer'
import Notfound from './Components/Notfound/Notfound.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage/>} />
            <Route path="about" element={<About/>} />
            <Route path="services" element={<Services/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="APPOINTMENT" element={<APPOINTMENT/>} />
            <Route path="doctors" element={<Doctors/>} />
            <Route path="register" element={<Register/>} />
            <Route path="login" element={<Login/>} />
            <Route path="*" element={<Notfound/>} />
          </Route>
        </Routes>
        <Footer/>
        <Outlet />
      </BrowserRouter>
        <ToastContainer />
    </div>
  );
}
