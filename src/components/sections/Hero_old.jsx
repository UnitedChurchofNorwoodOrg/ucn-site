import React from "react";

const Hero = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.overlay}>
        <h1>Welcome to United Church of Norwood</h1>
        <p>Join us Sundays at 10:00 AM</p>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    height: "80vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1507692049790-de58290a4334')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    color: "white",
    background: "rgba(0,0,0,0.5)",
    padding: "40px",
    textAlign: "center",
  },
};

export default Hero;