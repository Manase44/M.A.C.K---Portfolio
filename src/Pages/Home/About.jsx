import React from "react";
import "./about.css"
function About() {
  return (
    <section className="About-section">
      <div className="about">
        <div className="heading">
          <p className="section-subheading">Recent posts </p>
          <a href="#">View All </a>
        </div>
        <div className="card-holders">
          <div data-testid="card" className="card">
            <div className="card-1">
              <div className="title">
                <h2>Making a design system from scratch</h2>
              </div>
              <div className="date">
                <p>12 Feb 2020 | Design, Patterns</p>
              </div>
              <div className="details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci autem vitae deleniti reprehenderit facilis, quibusdam
                  tenetur sit possimus. Maxime ad beatae sed, nulla libero
                  reiciendis dolores tempore fugiat
                </p>
              </div>
            </div>
          </div>

          <div data-testid="card"  className="card">
            <div className="card-1">
              <div className="title">
                <h2>Creating pixel perfect icons in Figma</h2>
              </div>
              <div className="date">
                <p>12 Feb 2020 | Design, Patterns</p>
              </div>
              <div className="details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci autem vitae deleniti reprehenderit facilis, quibusdam
                  tenetur sit possimus. Maxime ad beatae sed, nulla libero
                  reiciendis dolores tempore fugiat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
