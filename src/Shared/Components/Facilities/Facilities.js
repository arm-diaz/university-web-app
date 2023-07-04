import React from "react";

import library from "../../../assets/imgs/library.png";
import cafeteria from "../../../assets/imgs/cafeteria.png";
import basketball from "../../../assets/imgs/basketball.png";

import "./Facilities.style.css";

const Facilities = () => {
  return (
    <section class="facilities">
      <h1>Our Facilities</h1>
      <p>
        Our facilities are well structured, organized and equipped with the very
        best.
      </p>
      <div class="row">
        <div class="facilities-col">
          <img src={library} alt="Librarie" />
          <h3>World Class Library</h3>
          <p>Libraries with ample space and air-conditioned environment.</p>
        </div>
        <div class="facilities-col">
          <img src={cafeteria} alt="cafeteria" />
          <h3>Testy and Healthy food</h3>
          <p>
            Spaces for dining, lunch or any meal that is needed. Café with a
            variety of food options
          </p>
        </div>
        <div class="facilities-col">
          <img src={basketball} alt="basketball" />
          <h3>Largest Play Ground</h3>
          <p>
            Ample place for the most varied games. We have basketball courts,
            baseball and soccer fields
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
