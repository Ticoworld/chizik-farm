import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FaqPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Loader from "./components/Loader"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<ServicesPage/>}/>``  
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/faq" element={<FAQPage/>}/>
          <Route path="/admin/login" element={<AdminLogin/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/loader" element={<Loader/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
