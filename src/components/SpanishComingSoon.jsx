import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Image } from "react-bootstrap";

const SpanishComingSoon = () => {
  return (
    <>
      <Navbar />

      <div style={styles.container}>

        {/* LOGO */}
        <Image
          src="/images/UCNLogoSpanish.JPG"
          alt="UCN Spanish Logo"
          style={styles.logo}
        />

        <h1 style={styles.title}>Spanish Congregation</h1>

        <p style={styles.subtitle}>
          Nuestra página en español estará disponible pronto.
        </p>

        <p style={styles.subtitle}>
          Spanish page coming soon.
        </p>

        <p style={styles.info}>
          Sunday Worship: 12:00 PM
        </p>

      </div>

      <Footer />
    </>
  );
};

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
  },
  logo: {
    width: "140px",
    marginBottom: "20px",
    borderRadius: "8px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    marginTop: "15px",
  },
  info: {
    fontSize: "18px",
    marginTop: "25px",
    fontWeight: "500",
  },
};

export default SpanishComingSoon;