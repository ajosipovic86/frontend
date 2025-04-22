import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/pages/header/Header';
import Blog from './components/pages/blog/Blog';
import BlogSingle from './components/pages/blog/BlogSingle';
import About from './components/pages/about/About';
import Home from './components/pages/home/Home';
import Contact from './components/pages/contact/Contact';
import Footer from './components/pages/footer/Footer';
import Login from './components/pages/login/Login';
{/* import Exchange from './components/pages/exchange/Exchange';*/}
{/*import Countries from './components/countries/Countries';*/}
{/*import SingleCountry from './components/countries/SingleCountry';*/}
import Shop from './components/pages/shop/Shop';
import ProductSingle from './components/pages/productsingle/ProductSingle';
import ProductSingle from './components/pages/shop/ProductSingle.js/ProductSingle';
import ProductCard from './components/pages/shop/productcard/ProductCard';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
         {/* <Route path="/exchange" element={<Exchange />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/name:" element={<SingleCountry />} />*/}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
