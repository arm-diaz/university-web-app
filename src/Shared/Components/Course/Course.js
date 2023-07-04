import React from "react";
import "./Couse.style.css";

const Course = () => {
  return (
    <section class="course">
      <h1>Courses we Offer</h1>
      <p>
        We have the most varied and most sought after courses for your
        graduation.
      </p>
      <div class="row">
        <div class="course-col">
          <h3>Intermediate</h3>
          <p>
            the various courses in the intermediate area are available on our
            online platforms
          </p>
        </div>
        <div class="course-col">
          <h3>Degree</h3>
          <p>
            the various courses in the Degree area are available on our online
            platforms
          </p>
        </div>
        <div class="course-col">
          <h3>Post Graduation</h3>
          <p>
            the various courses in the Post Graduation area are available on our
            online platforms
          </p>
        </div>
      </div>
    </section>
  );
};

export default Course;
