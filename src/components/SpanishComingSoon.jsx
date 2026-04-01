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

        <p style={styles.note}>
          We look forward to welcoming you.
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
    padding: "100px 20px",
    textAlign: "center",
    backgroundColor: "#f9fafb",
    minHeight: "70vh",
  },
  logo: {
    maxWidth: "160px",   // ✅ controls size
    width: "100%",       // ✅ responsive
    height: "auto",      // ✅ keeps aspect ratio (fixes compression)
    marginBottom: "25px",
    borderRadius: "8px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "17px",
    marginTop: "10px",
    color: "#374151",
  },
  note: {
    fontSize: "15px",
    marginTop: "8px",
    color: "#6b7280",
  },
  info: {
    fontSize: "18px",
    marginTop: "25px",
    fontWeight: "500",
    color: "#1f2937",
  },
};

export default SpanishComingSoon;