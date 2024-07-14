import React from 'react'
import {Link} from "react-router-dom"
import "./header.css"
export const Header = () => {
  return (
    <section className="Header">
      <div className="navigation">
        <div className="navigation-list">
            <ol className="navigation-items">
              <li className="navigation-links">
                <Link to="/">Home</Link>
              </li>
              <li className="navigation-links">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="navigation-links">
                <Link to="/work">Works</Link>
              </li>
              <li className="navigation-links">Contact</li>
            </ol>
          </div>
        </div>
      
    </section>
  );
}
