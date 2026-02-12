import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Admin from "./pages/Admin";
import ChatButton from "./components/ChatButton";
import ChatWindow from "./components/ChatWindow";
import React, { useState } from "react";










function App() {

   const [openChat, setOpenChat] = useState(false);
   
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin" element={<Admin />} />






      </Routes>

      <Footer />

      <ChatButton onClick={() => setOpenChat(true)} />

      {openChat && <ChatWindow onClose={() => setOpenChat(false)} />}


      

    </Router>
  );
}

export default App;
