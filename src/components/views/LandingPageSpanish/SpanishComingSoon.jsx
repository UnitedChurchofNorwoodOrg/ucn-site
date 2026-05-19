import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Image } from "react-bootstrap";

const SpanishComingSoon = () => {
  return (
    <>
      <Navbar />

      <div style={styles.container}>
        {/* OVERLAY CARD */}
        <div style={styles.overlay}>

          {/* LOGO */}
          <Image
            src={process.env.PUBLIC_URL + "/images/UCNLogoSpanish.JPG"}
            alt="UCN Spanish Logo"
            style={styles.logo}
          />

          <h1 style={styles.title}>
            Congregación en Español
          </h1>

          <p style={styles.subtitle}>
            Nuestra página en español estará disponible pronto.
          </p>

          <p style={styles.subtitle}>
            Página en español próximamente.
          </p>

          <p style={styles.note}>
            Esperamos darle la bienvenida.
          </p>

          <div style={styles.serviceBox}>
            <p style={styles.info}>
              ⛪ Servicio en español - Domingo 12:00 del mediodía
            </p>

            <p style={styles.info}>
              📖 Estudio Bíblico y Oración - Miércoles 07:00 PM
            </p>
          </div>

          {/* BUTTON */}
          <div style={styles.buttonGroup}>
            <a
              href="https://www.facebook.com/profile.php?id=100064846384317"
              target="_blank"
              rel="noreferrer"
              style={styles.buttonSecondary}
            >
              Seguir en Facebook
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
    backgroundImage:
      "url(" + process.env.PUBLIC_URL + "/images/home.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px"
  },

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
    width: "100%",
    maxWidth: "260px",
    height: "auto",
    marginBottom: "20px",
    borderRadius: "8px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
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

  serviceBox: {
    marginTop: "20px",
    padding: "16px",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: "12px"
  },

  info: {
    fontSize: "15px",
    margin: "8px 0",
    fontWeight: "500"
  },

  buttonGroup: {
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center"
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