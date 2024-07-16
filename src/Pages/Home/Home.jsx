import React from 'react'
import Home1 from './Home1.jsx';
import About from './About.jsx';
import Features from "./Features.jsx"
import "./home1.css"
export const Home = () => {
  return (
    <section className='home-container'>
      <Home1 />
      <About />
      <Features/>
    </section>
  );
}
