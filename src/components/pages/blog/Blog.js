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
         }, []
         );
  return (
    <div className="container blog">
    <h1>Blog</h1>
    <div>
    {posts.map(post => (
      <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-6 offset-md-1">
            <PostDate date={post.date}/>
            <PostAuthor author={post.author}/>
            <Link to={'/blog/' + post.slug}>
            
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></Link>
              
              <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              
              </div>
                </div>
            ))}
         </div>
        </div>
    );
};
export default Blog;