import React from "react";
import "../Work/work.css"
import component from "../../assets/component.jpeg";
import delivery from "../../assets/delivery.jpeg";
import potrait from "../../assets/potrait.jpeg";

const Features = () => {
  return (
    <section>
      <h1 id="heading">Featured work</h1>
      <div className="workspace">
        <div className="workspace-div">
          <img src={delivery} alt="delivery" className="image" />

          <div className="work-details">
            <h2 data-testid="featured-work-heading">Designing Dashboard</h2>
            <section className="btn">
              <button>2024</button>
              <p id="heads">Dashboard</p>
            </section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              autem vitae deleniti reprehenderit facilis, quibusdam tenetur sit
              possimus. Maxime ad beatae sed, nulla libero reiciendis dolores
              tempore fugiat
            </p>
          </div>
        </div>
        <hr />
        <div className="workspace-div">
          <img src={potrait} alt="potraits" className="image" />
          <div className="work-details">
            <h2 data-testid="featured-work-heading">Vibrant Potraits of 2020</h2>
            <section className="btn">
              <button>2024</button>
              <p id="heads">Illustration</p>
            </section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              autem vitae deleniti reprehenderit facilis, quibusdam tenetur sit
              possimus. Maxime ad beatae sed, nulla libero reiciendis dolores
              tempore fugiat
            </p>
          </div>
        </div>
        <hr />
        <div className="workspace-div">
          <img src={component} alt="malayams" className="image" />
          <div className="work-details">
            <h2 data-testid="featured-work-heading">36 Days of Malayams type</h2>
            <section className="btn">
              <button>2024</button>
              <p id="heads">Typography</p>
            </section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              autem vitae deleniti reprehenderit facilis, quibusdam tenetur sit
              possimus. Maxime ad beatae sed, nulla libero reiciendis dolores
              tempore fugiat
            </p>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Features;
