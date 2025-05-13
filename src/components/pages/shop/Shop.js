import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Shop.css';
import ProductList from './ProductList';

const Shop = () => {
  const [products, setProducts] = useState([]);

  

  return (
    <div>
      <div>
    
      <ProductList />
    </div>
     
    </div>
  );
};

export default Shop;

   