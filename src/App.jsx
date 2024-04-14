import Nav from "../src/Components/Nav/index.js";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About/index.js";
import Services from "./pages/Services/index.js";
import Contact from "./pages/Contact/index.js";
import Doctors from "./pages/Doctors/index.js";
import APPOINTMENT from "./Components/APPOINTMENT/index.js";
import Footer from "./Components/Footer";
import Notfound from "./Components/Notfound/Notfound.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import NotLoggedIn from "./Components/ProtectedRoutes/NotLoggedIn.js";
import IsloggedIn from "./Components/ProtectedRoutes/IsloggedIn.js";
export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="about" element={
                <IsloggedIn>
                  <About />
                </IsloggedIn>
              } />
              <Route path="services" element={
                <IsloggedIn>
                  <Services />
                </IsloggedIn>
              } />
              <Route path="contact" element={
                <IsloggedIn>
                  <Contact />
                </IsloggedIn>
              } />
              <Route path="APPOINTMENT" element={
                <IsloggedIn>
                  <APPOINTMENT />
                </IsloggedIn>
              } />
              <Route path="doctors" element={
                <IsloggedIn>
                  <Doctors />
                </IsloggedIn>
              } />
              <Route path="register" element={
                <NotLoggedIn>
                  <Register/>
                </NotLoggedIn>
              } />
              <Route path="login" element={
                <NotLoggedIn>
                  <Login/>
                </NotLoggedIn>
              } />
              <Route path="*" element={<Notfound />} />
            </Route>
          </Routes>
          <Footer />
          <Outlet />
        </BrowserRouter>
      </RecoilRoot>
      <ToastContainer />
    </div>
  );
}
