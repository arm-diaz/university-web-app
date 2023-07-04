import React from "react";
import Home from "./Pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  AOS.init();
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
