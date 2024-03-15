import Nav from '../src/Components/Nav/index.js'
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import HomePage from './pages/HomePage'
import About from './pages/About/index.js'
import Services from './pages/Services/index.js'
import Contact from './pages/Contact/index.js'
import Pages from './pages/Pages/index.js'
import Blog from './pages/Blog/index.js'

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
            <Route path="pages" element={<Pages/>} />
            <Route path="blog" element={<Blog/>} />
            <Route path="form" element={"Form Page"} />
            <Route path="login" element={"Login Page"} />
            <Route path="*" element={"Page 404"} />
          </Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}
