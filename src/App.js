import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/pages/header/Header';
import Navbar from './components/pages/header/Navbar';
import Blog from './components/pages/blog/Blog';
import MediaImg from './components/media/MediaImg';
import BlogSingle from './components/pages/blog/BlogSingle';
import About from './components/pages/about/About';
import Home from './components/pages/home/Home';
import Contact from './components/pages/contact/Contact';
import ContactForm from './components/pages/contact/ContactForm';
import Footer from './components/pages/footer/Footer';
import Login from './components/pages/login/Login';
import SignUp from './components/pages/login/SignUp';
import ForgotPassword from './components/pages/login/ForgotPassword';
import Exchange from './components/pages/exchange/Exchange';
import Shop from './components/pages/shop/Shop';
import ProductCard from './components/pages/shop/ProductCard';
import CartPage from './components/pages/shop/CartPage';

const AppLayout = () => {
  const location = useLocation();

  const hideHeaderRoutes = ['/login', '/login/signup'];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/header" element={<Navbar />} />
        <Route path="/media" element={<MediaImg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/signup" element={<SignUp />} />
        <Route path="/login/forgotpassword" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogSingle />} />
        <Route path="/exchange" element={<Exchange />} /> 
        <Route path="/shop" element={<Shop />} /> 
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductCard />} />
        
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
