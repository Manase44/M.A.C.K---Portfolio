

import React from 'react';
import './blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'UI Interactions of the week',
      date: '12 Feb 2019',
      tags: 'Express, Handlebars',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      title: 'UI Interactions of the week',
      date: '12 Feb 2019',
      tags: 'Express, Handlebars',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      title: 'UI Interactions of the week',
      date: '12 Feb 2019',
      tags: 'Express, Handlebars',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      title: 'UI Interactions of the week',
      date: '12 Feb 2019',
      tags: 'Express, Handlebars',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    }
  ];

  return (
    <div className="blog-list">
      <h1>Blog</h1>
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p className="blog-date-tags">
            <span className="date-setter">{post.date}</span> | <span>{post.tags}</span>
          </p>
          <p className="blog-description">{post.description}</p>
        </div>
      ))}

    </div>
  );
};

export default Blog;
