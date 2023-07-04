import React from "react";

import london from "../../../assets/imgs/london.png";
import newYork from "../../../assets/imgs/newyork.png";
import washington from "../../../assets/imgs/washington.png";

import "./Campus.style.css";

const Campus = () => {
  return (
    <section class="campus">
      <h1>Our Global Campus</h1>
      <p>
        We are located in the best and most important cities around the world.
      </p>
      <div class="row">
        <div class="campus-col">
          <img src={london} alt="LondonImage" />
          <div class="layer">
            <h3>LONDON</h3>
          </div>
        </div>
        <div class="campus-col">
          <img src={newYork} alt="newyork" />
          <div class="layer">
            <h3>NEW YORK</h3>
          </div>
        </div>
        <div class="campus-col">
          <img src={washington} alt="washington" />
          <div class="layer">
            <h3>WASHINGTON</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
