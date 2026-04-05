import React from "react";
import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div style={{ padding: "60px", textAlign: "center" }}>
        <h2>Welcome</h2>
        <p>We are a welcoming community growing together in faith.</p>
      </div>
    </>
  );
};

export default Home;