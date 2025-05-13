import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Blog.css';
import PostDate from '../../media/PostDate';
import PostAuthor from '../../media/PostAuthor';

const Blog = () => {

    const  [posts, setPosts] = useState([]);

    useEffect(
        () => {
         fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?author=7')
         .then(response => response.json())
         .then(data => setPosts(data))
         fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?author=7&_embed')
         }, []
         );
  return (
    <div className="container blog">
    <h1>Welcome to our blog...</h1>
    <p className="blog-intro">
   ...a space where we share insights, tips, and discoveries about the healing world of cacti and medicinal mushrooms. Whether you're a curious beginner or a seasoned natural wellness enthusiast, we hope you'll find something to inspire you here.
</p>

<div className="blog-cards">
  {posts.map((post) => (
    <div key={post.id} className="blog-card">
      <Link to={`/blog/${post.slug}`}>
        <img
          src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'placeholder.jpg'}
          alt={post.title.rendered}
          className="blog-card-img"
        />
      </Link>
      <div className="blog-card-body">
        <PostDate date={post.date} />
        <PostAuthor authorID={post.author} />
        <Link to={`/blog/${post.slug}`}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </Link>
        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      </div>
    </div>
  ))}
</div>

        </div>
    );
};
export default Blog;