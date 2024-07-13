import React from "react";
import "./work.css";
import component from "../../assets/component.jpeg";
import Malayams from "../../assets/malayam.jpeg";
import delivery from "../../assets/delivery.jpeg";
import potrait from "../../assets/potrait.jpeg";

const Work = () => {
  return (
    <section>
      <h1 data-testid="heading" id="heading">Work</h1>
      <div className="workspace">

        <div className="workspace-div">
          <img src={delivery} alt="delivery" className="image" />
          <div className="work-details">
            <h2>Designing Dashboard</h2>
            <section className="btn">
              <button>2024</button>
              <p data-testid="head" id="heads">Dashboard</p>
            </section>
            <p data-testid="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              autem vitae deleniti reprehenderit facilis, quibusdam tenetur sit
              possimus. Maxime ad beatae sed, nulla libero reiciendis dolores
              tempore fugiat
            </p>
          </div>


        </div>
        <hr data-testid="breaking-line"/>
        <div className="workspace-div">
          <img src={potrait} alt="potrait" className="image" />
          <div className="work-details">
            <h2>Vibrant Potraits of 2020</h2>
            <section className="btn">
              <button>2024</button>
              <p data-testid="head" id="heads">Illustration</p>
            </section>
            <p data-testid="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              autem vitae deleniti reprehenderit facilis, quibusdam tenetur sit
              possimus. Maxime ad beatae sed, nulla libero reiciendis dolores
              tempore fugiat
            </p>
          </div>
        </div>
        <hr />
        <div className="workspace-div">
          <img src={component} alt="component" className="image" />
          <div className="work-details">
            <h2>36 Days of Malayams type</h2>
            <section className="btn">
              <button>2024</button>
              <p data-testid="head" id="heads">Typography</p>
            </section>
            <p data-testid="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              autem vitae deleniti reprehenderit facilis, quibusdam tenetur sit
              possimus. Maxime ad beatae sed, nulla libero reiciendis dolores
              tempore fugiat
            </p>
          </div>
        </div>
        <hr />
        <div className="workspace-div">
          <img src={Malayams} alt="malayams" className="image" />
          <div className="work-details">
            <h2>Components</h2>
            <section className="btn">
              <button>2024</button>
              <p data-testid="head" id="heads">Component Design</p>
            </section>
            <p data-testid="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              autem vitae deleniti reprehenderit facilis, quibusdam tenetur sit
              possimus. Maxime ad beatae sed, nulla libero reiciendis dolores
              tempore fugiat
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Work;
