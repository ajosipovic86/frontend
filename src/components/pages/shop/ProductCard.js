import React from "react";
import { useParams } from "react-router-dom";
import './Shop.css';

const products = [
  {
    id: 1,
    name: "Echinopsis 'Rose Quartz'",
    image: "Echinopsis_Rose_Quartz_Bloom.jpg",
    description: "Fun peanut cactus known for flowering easily, prolifically, and beautifully. Perfect for cactus beginners.",
    price: "$12.99",
    category: "Cactus"
  },
  // ... (include all the rest of your products here)
];

const ProductCard = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p className="price">{product.price}</p>
      <p>{product.description}</p>
      <p className="category">{product.category}</p>
      <a href="#" className="btn">Add To Basket</a>
    </div>
  );
};

export default ProductCard;

       
    
   