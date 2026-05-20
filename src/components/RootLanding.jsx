import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

// Layout Components
import Footer from "./layout/Footer";

// Global Components
import NewsTicker from "./global/NewsTicker/NewsTicker";
import UpcomingEvents from "./global/Calendar/UpcomingEvents";

// Content
import englishSiteContent from "../content/englishSiteContent";

const RootLanding = () => {

  // =========================================================
  // 🌍 CONTENT
  // =========================================================
  const content = englishSiteContent.rootLanding;

  // =========================================================
  // ✨ BUTTON INTERACTION STATES
  // =========================================================
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);

  // =========================================================
  // 🎨 STYLES
  // =========================================================
  const styles = {

    // =========================================================
    // 🌄 HERO BACKGROUND
    // =========================================================
    container: {
      minHeight: "100vh",

      backgroundImage:
        `url(${process.env.PUBLIC_URL}/images/home.jpeg)`,

      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      textAlign: "center",

      padding: "24px",

      position: "relative",

      overflow: "hidden"
    },

    // =========================================================
    // 🌫 LIGHT OVERLAY
    // =========================================================
    overlayBg: {
      position: "absolute",
      inset: 0,

      background: `
        linear-gradient(
          to bottom,
          rgba(8,15,28,0.18),
          rgba(8,15,28,0.05)
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
      maxWidth: "650px",

      padding: "36px 30px",

      borderRadius: "28px",

      background: `
        linear-gradient(
          to bottom right,
          rgba(255,255,255,0.10),
          rgba(255,255,255,0.04)
        )
      `,

      border: "1px solid rgba(255,255,255,0.18)",

      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",

      boxShadow: `
        0 18px 45px rgba(0,0,0,0.18),
        inset 0 1px 0 rgba(255,255,255,0.08)
      `
    },

    // =========================================================
    // ✨ LOGO WRAPPER
    // =========================================================
    logoWrapper: {
      position: "relative",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      marginBottom: "22px",

      isolation: "isolate"
    },

    // =========================================================
    // 🌅 SOFT GLOW
    // =========================================================
    logoGlow: {
      position: "absolute",

      width: "140px",
      height: "140px",

      borderRadius: "50%",

      background: `
        radial-gradient(
          circle,
          rgba(255,255,255,1.0) 0%,
          rgba(255,255,255,0.92) 24%,
          rgba(255,255,255,0.62) 48%,
          rgba(255,255,255,0.00) 84%
        )
      `,

      filter: "blur(10px)",

      transform: "translateY(-3px)",

      opacity: 1,

      zIndex: 0
    },

    // =========================================================
    // ⛪ LOGO
    // =========================================================
    logo: {
      position: "relative",

      height: "88px",
      width: "auto",

      display: "block",

      zIndex: 2,

      filter: `
        brightness(1.01)
        contrast(1.10)
        saturate(1.03)
        drop-shadow(0 3px 10px rgba(0,0,0,0.28))
      `
    },

    // =========================================================
    // 📖 SUBTITLE
    // =========================================================
    subtitle: {
      fontSize: "1rem",

      fontWeight: "600",

      color: "#ffffff",

      marginBottom: "12px",

      letterSpacing: "0.18px",

      textShadow: `
        0 2px 5px rgba(0,0,0,0.65)
      `
    },

    // =========================================================
    // 🤝 WELCOME MESSAGE
    // =========================================================
    welcomeMessage: {
      fontSize: "0.98rem",

      lineHeight: "1.72",

      fontWeight: "400",

      color: "rgba(255,255,255,0.96)",

      marginTop: "16px",

      marginBottom: "12px",

      maxWidth: "540px",

      marginLeft: "auto",
      marginRight: "auto",

      fontStyle: "italic",

      letterSpacing: "0.16px",

      textShadow: `
        0 2px 5px rgba(0,0,0,0.55)
      `
    },

    // =========================================================
    // ✨ TAGLINES
    // =========================================================
    tagline: {
      fontSize: "0.98rem",

      lineHeight: "1.72",

      fontWeight: "500",

      color: "rgba(255,255,255,0.97)",

      marginBottom: "8px",

      textShadow: `
        0 2px 5px rgba(0,0,0,0.58)
      `
    },

    // =========================================================
    // 🔘 BUTTONS
    // =========================================================
    buttonPrimary: {
      background: `
        linear-gradient(
          to bottom,
          rgba(255,255,255,0.50),
          rgba(255,255,255,0.28)
        )
      `,

      border: hovered === "eng"
        ? "1px solid rgba(255,255,255,0.82)"
        : "1px solid rgba(255,255,255,0.56)",

      borderRadius: "22px",

      padding: "16px 20px",

      minHeight: "92px",

      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",

      boxShadow:
        hovered === "eng"
          ? `
            0 18px 38px rgba(0,0,0,0.28),
            0 0 30px rgba(255,255,255,0.34),
            0 0 58px rgba(255,255,255,0.12),
            inset 0 1px 0 rgba(255,255,255,0.32)
          `
          : `
            0 14px 28px rgba(0,0,0,0.24),
            0 0 18px rgba(255,255,255,0.12),
            inset 0 1px 0 rgba(255,255,255,0.24)
          `,

      transform:
        active === "eng"
          ? "scale(0.97)"
          : hovered === "eng"
          ? "translateY(-4px)"
          : "scale(1)",

      transition: "all 0.28s ease",

      cursor: "pointer",

      // ✨ PULSING GLOW
      animation:
        hovered === "eng"
          ? "none"
          : "pulseGlow 3.2s ease-in-out infinite"
    },

    buttonSecondary: {
      background: `
        linear-gradient(
          to bottom,
          rgba(255,255,255,0.50),
          rgba(255,255,255,0.28)
        )
      `,

      border: hovered === "spa"
        ? "1px solid rgba(255,255,255,0.82)"
        : "1px solid rgba(255,255,255,0.56)",

      borderRadius: "22px",

      padding: "16px 20px",

      minHeight: "92px",

      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",

      boxShadow:
        hovered === "spa"
          ? `
            0 18px 38px rgba(0,0,0,0.28),
            0 0 30px rgba(255,255,255,0.34),
            0 0 58px rgba(255,255,255,0.12),
            inset 0 1px 0 rgba(255,255,255,0.32)
          `
          : `
            0 14px 28px rgba(0,0,0,0.24),
            0 0 18px rgba(255,255,255,0.12),
            inset 0 1px 0 rgba(255,255,255,0.24)
          `,

      transform:
        active === "spa"
          ? "scale(0.97)"
          : hovered === "spa"
          ? "translateY(-4px)"
          : "scale(1)",

      transition: "all 0.28s ease",

      cursor: "pointer",

      // ✨ PULSING GLOW
      animation:
        hovered === "spa"
          ? "none"
          : "pulseGlow 3.2s ease-in-out infinite",

      animationDelay: "1.5s"
    },

    // =========================================================
    // 📅 EVENTS
    // =========================================================
    calendarBox: {
      marginTop: "22px",

      background: `
        linear-gradient(
          to bottom,
          rgba(255,255,255,0.92),
          rgba(255,255,255,0.84)
        )
      `,

      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",

      border: "1px solid rgba(255,255,255,0.50)",

      borderRadius: "18px",

      padding: "18px",

      width: "100%",

      boxShadow: `
        0 10px 22px rgba(0,0,0,0.14)
      `,

      color: "#111827"
    },

    eventTitle: {
      marginBottom: "12px",

      color: "#111827",

      fontWeight: "600",

      fontSize: "1.02rem"
    }
  };

  return (
    <>
      <NewsTicker />

      <div style={styles.container}>

        {/* 🌫 OVERLAY */}
        <div style={styles.overlayBg} />

        {/* ✨ MAIN CARD */}
        <div style={styles.content}>

          {/* ⛪ LOGO */}
          <div style={styles.logoWrapper}>

            <div style={styles.logoGlow} />

            <img
              src={process.env.PUBLIC_URL + "/images/UNCLogoTrans1.png"}
              alt="Church Logo"
              style={styles.logo}
            />
          </div>

          {/* 🏛 TITLES */}
          <div style={{ marginBottom: "18px" }}>

            <div
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', serif",

                fontSize: "1.72rem",

                fontWeight: "400",

                color: "#ffffff",

                lineHeight: "1.1"
              }}
            >
              {content.title}
            </div>

            <div
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', serif",

                fontSize: "1.38rem",

                fontWeight: "400",

                fontStyle: "italic",

                color: "rgba(255,255,255,0.95)",

                marginTop: "4px",

                lineHeight: "1.1"
              }}
            >
              {content.spanishTitle}
            </div>

          </div>

          {/* 📖 SUBTITLE */}
          <p style={styles.subtitle}>
            {content.subtitle}
          </p>

          {/* 🤝 MESSAGE */}
          <p style={styles.welcomeMessage}>
            We invite you to join us in worship and fellowship
            as we share God’s love and grace together.
          </p>

          {/* ✨ TAGLINES */}
          <p style={styles.tagline}>
            {content.tagline1}
          </p>

          <p style={styles.tagline}>
            {content.tagline2}
          </p>

          {/* 🔘 BUTTONS */}
          <div
            className="
              d-flex
              flex-column
              flex-md-row
              gap-3
              mt-4
              w-100
            "
          >

            {/* 🇺🇸 ENGLISH */}
            <Link
              to="/english"
              className="w-100 text-decoration-none"
            >
              <Button
                style={styles.buttonPrimary}
                className="w-100"

                onMouseEnter={() => setHovered("eng")}
                onMouseLeave={() => setHovered(null)}

                onMouseDown={() => setActive("eng")}
                onMouseUp={() => setActive(null)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                    fontSize: "0.98rem",

                    fontWeight: "700",

                    color: "#16324f",
                  }}
                >
                  <span>
                    Explore English Service
                  </span>

                  <span
                    style={{
                      transform:
                        hovered === "eng"
                          ? "translateX(4px)"
                          : "translateX(0px)",

                      transition: "all 0.25s ease"
                    }}
                  >
                    →
                  </span>
                </div>
              </Button>
            </Link>

            {/* 🇪🇸 SPANISH */}
            <Link
              to="/spanish"
              className="w-100 text-decoration-none"
            >
              <Button
                style={styles.buttonSecondary}
                className="w-100"

                onMouseEnter={() => setHovered("spa")}
                onMouseLeave={() => setHovered(null)}

                onMouseDown={() => setActive("spa")}
                onMouseUp={() => setActive(null)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                    fontSize: "0.98rem",

                    fontWeight: "700",

                    color: "#16324f",
                  }}
                >
                  <span>
                    Explorar Servicio en Español
                  </span>

                  <span
                    style={{
                      transform:
                        hovered === "spa"
                          ? "translateX(4px)"
                          : "translateX(0px)",

                      transition: "all 0.25s ease"
                    }}
                  >
                    →
                  </span>
                </div>
              </Button>
            </Link>
          </div>

          {/* 📅 EVENTS */}
          <div style={styles.calendarBox}>

            <h5 style={styles.eventTitle}>
              Upcoming Events
            </h5>

            <UpcomingEvents />
          </div>
        </div>
      </div>

      {/* ✨ PULSING GLOW ANIMATION */}
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

export default RootLanding;