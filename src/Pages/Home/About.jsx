import React from 'react'

function About() {
  return (
    <section className="About-section">
      <div className="about">
        <div className="card-holders">
          <div className="container">
            <div className="right-side">
              <p>Recent Posts</p>
            </div>
            <div className="card">
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
                    Adipisci autem vitae deleniti reprehenderit facilis,
                    quibusdam tenetur sit possimus. Maxime ad beatae sed, nulla
                    libero reiciendis dolores tempore fugiat
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="left-side">
              <p>View All</p>
            </div>
            <div className="card">
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
                    Adipisci autem vitae deleniti reprehenderit facilis,
                    quibusdam tenetur sit possimus. Maxime ad beatae sed, nulla
                    libero reiciendis dolores tempore fugiat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About