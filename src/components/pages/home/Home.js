import React from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import './Home.css';

const productSlides = [
  [
    {
      image: "Echinopsis_Rose_Quartz_Bloom.jpg",
      title: "Echinopsis 'Rose Quartz'",
      description: "Fun peanut cactus known for flowering easily, prolifically, and beautifully. Perfect for cactus beginners."
    },
    {
      image: "bunny_ears.jpg",
      title: "Opuntia microdasys var. pallida 'Bunny Ears'",
      description: "This is a must-have prickly pear cactus for any collection."
    },
    {
      image: "echinobivia_rainbow_bursts.jpg",
      title: "Echinobivia 'Rainbow Bursts'",
      description: "An intergeneric hybrid of Echinopsis x Lobivia. This stunner is lined with ridges dotted with white spines."
    },
    {
      image: "scarletball.jpg",
      title: "'Scarlet Ball' (Parodia haselbergii)",
      description: "This small rounded cactus has a profusion of delicate spines, giving it an almost fuzzy appearance. The gorgeous orange-red flowers are a beautiful contrast to the white spines."
    }
  ],
  [
    {
      image: "chaga.jpg",
      title: "Chaga mushrooms (Inonotus obliquus)",
      description: "Used to boost immunity and improve overall health."
    },
    {
      image: "maitake.jpg",
      title: "Maitake mushrooms (Grifola frondose)",
      description: "Promotes immune function, aids digestion, and helps with weight management."
    },
    {
      image: "turkeytailmushroom.jpg",
      title: "Turkey tail mushrooms (Coriolus versicolor)",
      description: "High antioxidant content and offers anti-cancer properties."
    },
    {
      image: "lionsmane.jpg",
      title: "Lion’s mane mushrooms (Hericium erinaceus)",
      description: "Lion’s mane mushrooms have many beneficial effects on the body, especially the brain, heart, and gut."
    }
  ]
];
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000
};


  



const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      title: "The Healing Power of Mushrooms",
      excerpt: "Discover how medicinal mushrooms are changing the wellness industry.",
      image: "gljive.jpg"
    },
    {
      id: 2,
      title: "Cactus Care 101",
      excerpt: "Everything you need to know to help your cactus thrive indoors.",
      image: "pointy.png"
    },
    {
      id: 3,
      title: "Natural Remedies from the Desert",
      excerpt: "Explore traditional uses of desert plants for healing and ceremony.",
      image: "peyotecacti.jpg"
    }
  ];

  return (
    <section className="blog-posts-wrapper">
            <div className="container text-center">
               <h2>From Our Blog</h2>
                </div>   
         
          
    <div className="blog-posts-container">
      {posts.map(post => (
        <div className="blog-post" key={post.id}>
          <img src={post.image} alt={post.title} className="blog-image" />
          <div className="blog-text">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
    
      const testimonials = [
        {
          name: "Katja J.C.",
          quote: "Absolutely love my cactus! It arrived healthy and beautiful.",
        },
        {
          name: "Alex M.",
          quote: "The Reishi mushrooms have changed my life. Great quality!",
        },
        {
          name: "Maria T.",
          quote: "Fast shipping, beautiful packaging, and friendly service!",
        },
      ];

    

    return(
        <>
          <section className="hero">
            <div className="container">
              <div className="column">
              
                <div className="col-md-8">
                  <h1>The Magic of Nature – Medicinal Mushrooms & Cactuses</h1>
                  <p>Transform your space and mind with our curated selection of cactuses and medicinal mushrooms.</p>
                  
                  <div className="button-group">
                    <a href="#" className="btn">Explore Cacti</a>
                    <a href="#" className="btn">Explore Mushrooms</a>
                  </div>

                </div>
                
              </div>
            </div>
          </section>

          <section className="mission">
  <div className="container text-center">
    <h2>Our Mission</h2>
    <p>
      At Freude Flora, our mission is to reconnect people with the healing power of nature through a curated selection of cactuses and medicinal mushrooms.
      We aim to inspire wellness, mindfulness, and sustainable living by offering products that are not only beautiful but also beneficial for the body, mind, and soul.
    </p>
  </div>
</section>
       
<section className="product-section">
  <h2 className="text-center">Featured Products</h2>
  <Slider {...sliderSettings}>
  {productSlides.map((slide, index) => (
    <div key={index}>
      <div className="product-row">
        {slide.map((product, i) => (
          <div className="product-post" key={i}>
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-text">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <a href="#" className="btn">See More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</Slider>

</section>

          <BlogPosts />

          <div className="home">
           <section className="testimonial-carousel">
            <h2>What Our Customers Say</h2>
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial">
              <p>"{t.quote}"</p>
               <span>- {t.name}</span>
            </div>
          ))}
        </Slider>
      </section>
      
    </div>
  

          
        </>
    );
};

export default Home;
