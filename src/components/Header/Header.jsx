import React from 'react'
import {Link} from "react-router-dom"
export const Header = () => {
  return (
    <section className="Header">
      <div className="navigation">
        <div className="navigation-list">
          <div className="navigation-links">
            <ol>
            <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/work">Works</Link>
              </li>
              <li>
                Contact
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
