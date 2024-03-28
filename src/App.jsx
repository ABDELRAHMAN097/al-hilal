import Nav from '../src/Components/Nav/index.js'
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import HomePage from './pages/HomePage'
import About from './pages/About/index.js'
import Services from './pages/Services/index.js'
import Contact from './pages/Contact/index.js'
import Blog from './pages/Blog/index.js'
import Footer from './Components/Footer'
import Notfound from './Components/Notfound/Notfound.js';
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
            
            <Route path="blog" element={<Blog/>} />
            <Route path="form" element={"Form Page"} />
            <Route path="login" element={"Login Page"} />
            <Route path="*" element={<Notfound/>} />
          </Route>
        </Routes>
        <Footer/>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}
