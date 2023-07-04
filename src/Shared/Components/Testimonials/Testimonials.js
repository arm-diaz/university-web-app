import React from "react";

import user1 from "../../../assets/imgs/WhatsApp Image 2021-11-30 at 16.31.19.jpeg";
import user2 from "../../../assets/imgs/user1.jpg";

import "./Testimonials.style.css";

const Testimonials = () => {
  return (
    <section class="testimonials">
      <h1>What Our Students Says</h1>
      <p>Let's know a little about what our students are thinking</p>
      <div class="row">
        <div class="testimonials-col">
          <img src={user1} alt="user1" />
          <div>
            <p>
              I really liked the facilities, the professors, the courses
              provided by the university... well it is a place for immersion in
              learning!!
            </p>
            <h3>Moisés Guilherme</h3>
          </div>
        </div>
        <div class="testimonials-col">
          <img src={user2} alt="user2" />
          <div>
            <p>
              I am very satisfied with all the support this university provides
              me. Now I want to pass this experience on to my friends.
            </p>
            <h3>Christine Berkley</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
