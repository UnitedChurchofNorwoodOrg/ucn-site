import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Image } from "react-bootstrap";

const SpanishComingSoon = () => {

  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Navbar />

      <div style={styles.container}>

        {/* 🌫 OVERLAY */}
        <div style={styles.overlayBg} />

        {/* ✨ MAIN CARD */}
        <div style={styles.content}>

          {/* ✨ LOGO SECTION */}
          <div style={styles.logoWrapper}>

            <div style={styles.logoGlow} />

            <Image
              src={
                process.env.PUBLIC_URL +
                "/images/UCNLogoSpanish.JPG"
              }
              alt="UCN Spanish Logo"
              style={styles.logo}
            />
          </div>

          {/* ✨ TITLE */}
          <div style={styles.titleSection}>

            <h1 style={styles.title}>
              Congregación en Español
            </h1>

            <p style={styles.subtitle}>
              Nuestra página en español estará
              disponible muy pronto.
            </p>

            <p style={styles.note}>
              Mientras tanto, le invitamos cordialmente
              a acompañarnos en nuestros servicios y
              actividades.
            </p>

          </div>

          {/* ✨ SERVICE BOX */}
          <div style={styles.serviceBox}>

            <p style={styles.info}>
              ⛪ Servicio en Español — Domingo, 12:00 PM
            </p>

            <p style={styles.info}>
              📖 Estudio Bíblico y Oración — Miércoles, 7:00 PM
            </p>

          </div>

          {/* ✨ BUTTON */}
          <div style={styles.buttonGroup}>

            <a
              href="https://www.facebook.com/profile.php?id=100064846384317"
              target="_blank"
              rel="noreferrer"

              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}

              style={{
                ...styles.buttonSecondary,

                transform:
                  hovered
                    ? "translateY(-3px)"
                    : "translateY(0px)",

                boxShadow:
                  hovered
                    ? `
                      0 18px 38px rgba(0,0,0,0.28),
                      0 0 30px rgba(255,255,255,0.34),
                      0 0 58px rgba(255,255,255,0.12),
                      inset 0 1px 0 rgba(255,255,255,0.32)
                    `
                    : undefined
              }}
            >
              <span>
                Síguenos en Facebook
              </span>

              <span
                style={{
                  marginLeft: "10px",

                  transform:
                    hovered
                      ? "translateX(4px)"
                      : "translateX(0px)",

                  transition: "all 0.25s ease"
                }}
              >
                →
              </span>
            </a>

          </div>

        </div>
      </div>

      {/* ✨ PULSING GLOW */}
      <style>
        {`
          @keyframes pulseGlow {

            0% {
              box-shadow:
                0 14px 28px rgba(0,0,0,0.24),
                0 0 12px rgba(255,255,255,0.08),
                0 0 0 rgba(255,255,255,0.00),
                inset 0 1px 0 rgba(255,255,255,0.22);
            }

            50% {
              box-shadow:
                0 18px 38px rgba(0,0,0,0.30),
                0 0 34px rgba(255,255,255,0.38),
                0 0 64px rgba(255,255,255,0.16),
                inset 0 1px 0 rgba(255,255,255,0.34);
            }

            100% {
              box-shadow:
                0 14px 28px rgba(0,0,0,0.24),
                0 0 12px rgba(255,255,255,0.08),
                0 0 0 rgba(255,255,255,0.00),
                inset 0 1px 0 rgba(255,255,255,0.22);
            }
          }
        `}
      </style>

      <Footer />
    </>
  );
};

const styles = {

  // =========================================================
  // 🌄 BACKGROUND
  // =========================================================
  container: {
    minHeight: "100vh",

    backgroundImage:
      `url(${process.env.PUBLIC_URL}/images/home.jpeg)`,

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "30px 20px",

    position: "relative",

    overflow: "hidden"
  },

  // =========================================================
  // 🌫 OVERLAY
  // =========================================================
  overlayBg: {
    position: "absolute",
    inset: 0,

    background: `
      linear-gradient(
        to bottom,
        rgba(8,15,28,0.22),
        rgba(8,15,28,0.08)
      )
    `,

    zIndex: 0
  },

  // =========================================================
  // ✨ GLASS CARD
  // =========================================================
  content: {
    position: "relative",
    zIndex: 2,

    width: "100%",
    maxWidth: "560px",

    padding: "38px 30px",

    borderRadius: "28px",

    background: `
      linear-gradient(
        to bottom right,
        rgba(255,255,255,0.10),
        rgba(255,255,255,0.04)
      )
    `,

    border: "1px solid rgba(255,255,255,0.18)",

    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",

    boxShadow: `
      0 18px 45px rgba(0,0,0,0.18),
      inset 0 1px 0 rgba(255,255,255,0.08)
    `,

    textAlign: "center",

    color: "#ffffff"
  },

  // =========================================================
  // ✨ LOGO WRAPPER
  // =========================================================
  logoWrapper: {
    position: "relative",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: "24px",

    isolation: "isolate"
  },

  // =========================================================
  // 🌅 LOGO GLOW
  // =========================================================
  logoGlow: {
    position: "absolute",

    width: "180px",
    height: "180px",

    borderRadius: "50%",

    background: `
      radial-gradient(
        circle,
        rgba(255,255,255,0.95) 0%,
        rgba(255,255,255,0.60) 40%,
        rgba(255,255,255,0.00) 82%
      )
    `,

    filter: "blur(14px)",

    opacity: 0.9,

    zIndex: 0
  },

  // =========================================================
  // ⛪ LOGO
  // =========================================================
  logo: {
    position: "relative",

    width: "100%",
    maxWidth: "260px",

    borderRadius: "16px",

    zIndex: 2,

    boxShadow: `
      0 10px 24px rgba(0,0,0,0.28)
    `
  },

  // =========================================================
  // ✨ TITLE SECTION
  // =========================================================
  titleSection: {
    marginBottom: "20px"
  },

  title: {
    fontFamily:
      "'Cormorant Garamond', 'Playfair Display', serif",

    fontSize: "2rem",

    fontWeight: "500",

    lineHeight: "1.15",

    marginBottom: "12px",

    color: "#ffffff",

    textShadow: `
      0 2px 4px rgba(0,0,0,0.45),
      0 4px 10px rgba(0,0,0,0.22)
    `
  },

  subtitle: {
    fontSize: "1rem",

    lineHeight: "1.7",

    color: "rgba(255,255,255,0.96)",

    marginBottom: "10px",

    textShadow: `
      0 2px 5px rgba(0,0,0,0.52)
    `
  },

  note: {
    fontSize: "0.95rem",

    lineHeight: "1.7",

    color: "rgba(255,255,255,0.88)",

    fontStyle: "italic",

    textShadow: `
      0 2px 5px rgba(0,0,0,0.52)
    `
  },

  // =========================================================
  // 📖 SERVICE BOX
  // =========================================================
  serviceBox: {
    marginTop: "24px",

    padding: "18px",

    borderRadius: "20px",

    background: `
      linear-gradient(
        to bottom,
        rgba(255,255,255,0.16),
        rgba(255,255,255,0.08)
      )
    `,

    border: "1px solid rgba(255,255,255,0.18)",

    backdropFilter: "blur(10px)",

    boxShadow: `
      0 10px 24px rgba(0,0,0,0.14)
    `
  },

  info: {
    fontSize: "0.98rem",

    margin: "12px 0",

    lineHeight: "1.6",

    fontWeight: "500",

    color: "#ffffff",

    textShadow: `
      0 2px 5px rgba(0,0,0,0.48)
    `
  },

  // =========================================================
  // 🔘 BUTTON
  // =========================================================
  buttonGroup: {
    marginTop: "28px"
  },

  buttonSecondary: {
    display: "inline-flex",

    alignItems: "center",
    justifyContent: "center",

    background: `
      linear-gradient(
        to bottom,
        rgba(255,255,255,0.50),
        rgba(255,255,255,0.28)
      )
    `,

    border: "1px solid rgba(255,255,255,0.56)",

    borderRadius: "22px",

    padding: "13px 24px",

    textDecoration: "none",

    fontSize: "0.96rem",

    fontWeight: "700",

    color: "#16324f",

    backdropFilter: "blur(12px)",

    boxShadow: `
      0 14px 28px rgba(0,0,0,0.24),
      0 0 12px rgba(255,255,255,0.08),
      inset 0 1px 0 rgba(255,255,255,0.22)
    `,

    transition: "all 0.28s ease",

    animation:
      "pulseGlow 3.2s ease-in-out infinite"
  }
};

export default SpanishComingSoon;