import React from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import './Home.css';



const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return(
        <>
          <Slider {...settings}>
          <div class="container py-5">
                    <div class="row">
                    <div class="col-md-8">
                        <h1>Slajder 1</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                        <a href="#" class="btn">Discover Menu</a>
                    </div>
                    <div class="col-md-4">
                        <img src="img/placeholder_img.svg" />
                    </div>
                    </div>
                </div>
                <div class="container py-5">
                    <div class="row">
                    <div class="col-md-8">
                        <h1>Slajder 2</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                        <a href="#" class="btn">Discover Menu</a>
                    </div>
                    <div class="col-md-4">
                        <img src="img/placeholder_img.svg" />
                    </div>
                    </div>
                </div>
    </Slider>
  
            <section class="hero py-5">
                <div class="container py-5">
                    <div class="row">
                    <div class="col-md-8">
                        <h1>Bibendum et sit aliquam!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                        <a href="#" class="btn">Discover Menu</a>
                    </div>
                    <div class="col-md-4">
                        <img src="img/placeholder_img.svg" />
                    </div>
                    </div>
                </div>
                </section>

                <section class="featured">
                <div class="container py-5 slider">
                    <div class="slide">
                    <div class="row">
                        <div class="col-md-3">
                        <img src="img/placeholder_img.svg" />
                        </div>
                        <div class="col-md-8 offset-md-1">
                        <h1>Nibh in dolor bibendum.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                        <a href="#" class="btn">Discover Menu</a>
                        </div>
                    </div>
                    </div>
                    <div class="slide">
                    <div class="row">
                        <div class="col-md-3">
                        <img src="img/placeholder_img.svg" />
                        </div>
                        <div class="col-md-6 offset-md-1">
                        <h1>Nibh in dolor bibendum.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                        <a href="#" class="btn">Discover Menu</a>
                        </div>
                    </div>
                    </div>
                    <div class="slide">
                    <div class="row">
                        <div class="col-md-3">
                        <img src="img/placeholder_img.svg" />
                        </div>
                        <div class="col-md-9">
                        <h1>Bibendum et sit aliquam!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                        <a href="#" class="btn">Discover Menu</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;