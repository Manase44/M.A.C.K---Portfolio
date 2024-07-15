import React from "react";
import profile from "../../assets/profile.jpg";
import "./home.css";
const Home1 = () => {
  return (
    <section className="home-section">
      <div className="intro-section">
        <div className="textbox-side">
          <div className="main-text">
            <h1>
              Hi, I am John, Creative Technologist
            </h1>
          </div>
          <div className="sub-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              autem vitae deleniti reprehenderit facilis, quibusdam tenetur sit
              possimus. Maxime ad beatae sed, nulla libero reiciendis dolores
              tempore fugiat
            </p>
          </div>
          <button className="home-button">Download Resume</button>
        </div>
        <div className="image-side">
          <div className="home-image-holder">
            <img src={profile} alt="john's profile picture"></img>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home1;
