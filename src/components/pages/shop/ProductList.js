import React from 'react';
import './Shop'; // Ensure this imports your CSS with product-grid styles

const products = [
  {
    id: 1,
    name: 'Aloe Vera Plant',
    price: '$12.99',
    image: 'aloevera.jpg',
  },
  {
    id: 2,
    name: 'Echeveria Red Velvet',
    price: '$18.50',
    image: 'redvelvet.jpg',
  },
  {
    id: 3,
    name: 'Cactus Golden Barrel',
    price: '$22.00',
    image: 'GoldenBarrel.jpg',
  },
  {
    id: 4,
    name: "Echinopsis 'Rose Quartz'",
    image: "Echinopsis_Rose_Quartz_Bloom.jpg",
    price: "$12.99",
  },
  {
    id: 5,
    name: "Opuntia microdasys 'Bunny Ears'",
    image: "bunny_ears.jpg",
    price: "$9.49",
    category: "Cactus"
  },
  {
    id: 6,
    name: "Echinobivia 'Rainbow Bursts'",
    image: "echinobivia_rainbow_bursts.jpg",
    description:
      "An intergeneric hybrid of Echinopsis x Lobivia. This stunner is lined with ridges dotted with white spines.",
    price: "$14.95",
    category: "Cactus"
  },
  {
    id: 7,
    name: "Lophophora williamsii (Peyote)",
    image: "peyote.jpg",
    description:
      "A small, spineless cactus known for its psychoactive alkaloids. Grown with care for spiritual and cultural uses.",
    price: "$29.99",
    category: "Cactus"
  },
  {
    id: 8,
    name: "Cordyceps Militaris",
    image: "cordyceps.jpg",
    description:
      "Medicinal mushroom known for its energy-boosting and immune-enhancing effects.",
    price: "$19.99",
    category: "Mushroom"
  },
  {
    id: 9,
    name: "Reishi Mushroom",
    image: "reishi.jpg",
    description:
      "Used in traditional medicine to support longevity, immunity, and stress resilience.",
    price: "$16.50",
    category: "Mushroom"
  },
  {
    id: 10,
    name: "Lion's Mane Mushroom",
    image: "lions-mane.jpg",
    description:
      "Supports cognitive function, memory, and nerve regeneration. A favorite among nootropic users.",
    price: "$18.75",
    category: "Mushroom"
  },
  {
    id: 11,
    name: "San Pedro Cactus (Trichocereus pachanoi)",
    image: "sanpedro.jpg",
    description:
      "Tall, fast-growing cactus known for its ceremonial and entheogenic use.",
    price: "$24.00",
    category: "Cactus"
  },
  {
    id: 12,
    name: "Turkey Tail Mushroom",
    image: "turkeytail.jpg",
    description:
      "Rich in polysaccharopeptides and antioxidants, supports immune health and gut microbiota.",
    price: "$13.95",
    category: "Mushroom"
  }
];

const ProductList = () => {
  return (
    <div className="container">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
