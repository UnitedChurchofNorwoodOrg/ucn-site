import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const SpanishComingSoon = () => {
  return (
    <>
      <Navbar />

      <div style={styles.container}>

        {/* 🔥 OVERLAY CARD */}
        <div style={styles.overlay}>

          {/* LOGO */}
          <Image
            src="/images/UCNLogoSpanish.JPG"
            alt="UCN Spanish Logo"
            style={styles.logo}
          />

          <h1 style={styles.title}>
            Spanish Congregation
          </h1>

          <p style={styles.subtitle}>
            Nuestra página en español estará disponible pronto.
          </p>

          <p style={styles.subtitle}>
            Spanish page coming soon.
          </p>

          <p style={styles.note}>
            We look forward to welcoming you.
          </p>

          <p style={styles.info}>
            Sunday Worship: 12:00 PM
          </p>

          {/* BUTTONS */}
          <div style={styles.buttonGroup}>

            <Link to="/english" style={styles.button}>
              English Service
            </Link>

            <a
              href="https://www.facebook.com/profile.php?id=100064846384317"
              target="_blank"
              rel="noreferrer"
              style={styles.buttonSecondary}
            >
              Follow on Facebook
            </a>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundImage: "url(/images/home.jpeg)", // 🔥 SAME AS ENGLISH
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px"
  },

  /* 🔥 FLOATING SEMI-TRANSPARENT CARD */
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    padding: "40px 30px",
    borderRadius: "16px",
    maxWidth: "520px",
    width: "100%",
    textAlign: "center",
    color: "#ffffff",
    backdropFilter: "blur(4px)"
  },

  logo: {
    maxWidth: "140px",
    width: "100%",
    height: "auto",
    marginBottom: "20px",
    borderRadius: "8px"
  },

  title: {
    fontFamily: "Playfair Display, serif",
    fontWeight: "500",
    fontSize: "1.6rem",
    marginBottom: "10px"
  },

  subtitle: {
    fontSize: "15px",
    marginTop: "6px",
    color: "#e5e7eb"
  },

  note: {
    fontSize: "14px",
    marginTop: "10px",
    color: "#d1d5db"
  },

  info: {
    fontSize: "15px",
    marginTop: "18px",
    fontWeight: "500"
  },

  buttonGroup: {
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center"
  },

  button: {
    display: "inline-block",
    backgroundColor: "#1f3a5f",
    color: "#ffffff",
    padding: "10px 18px",
    borderRadius: "20px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
  },

  buttonSecondary: {
    display: "inline-block",
    backgroundColor: "rgba(255,255,255,0.9)",
    color: "#1f3a5f",
    padding: "10px 18px",
    borderRadius: "20px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500"
  }
};

export default SpanishComingSoon;