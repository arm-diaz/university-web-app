import React, { useEffect } from "react";

import Course from "../../Shared/Components/Course/Course";
import Campus from "../../Shared/Components/Campus/Campus";
import Facilities from "../../Shared/Components/Facilities/Facilities";
import Testimonials from "../../Shared/Components/Testimonials/Testimonials";
import Footer from "../../Shared/Components/Footer/Footer";

import logo from "../../assets/imgs/logo.png";
import "./Home.style.css";

const Home = () => {
  // window.onscroll = function () {
  //   slickyHeader();
  // };

  // var header = document.getElementById("myHeader");
  // var navLinks = document.getElementById("navbar");

  // function slickyHeader() {
  //   if (window.pageYOffset > 550) {
  //     header.classList.add("sticky");
  //     navLinks.classList.add("nav-sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // }

  return (
    <>
      <div class="header">
        <nav id="myHeader" class="span-header">
          <a href="index.html">
            <img src={logo} alt="Logo" />
          </a>
          <div id="navbar" class="nav-links">
            <ul class="nav-items">
              <li>
                <a href="index.html">HOME</a>
              </li>
              <li>
                <a href="index.html">ABOUT</a>
              </li>
              <li>
                <a href="index.html">COUSE</a>
              </li>
              <li>
                <a href="index.html">BLOG</a>
              </li>
              <li>
                <a href="index.html">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="text-box">
          <h1>World's Biggest University</h1>
          <p>
            One of the largest universities in the world is ready to prepare you
            <br />
            for the world and for life.
          </p>
          <a href="index.html" class="btn-hero">
            Visit Us to know More
          </a>
        </div>
      </div>
      <div data-aos="fade-up">
        <Course />
      </div>
      <div data-aos="fade-up">
        <Campus />
      </div>
      <div data-aos="fade-up">
        <Facilities />
      </div>
      <div data-aos="fade-right">
        <Testimonials />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default Home;
