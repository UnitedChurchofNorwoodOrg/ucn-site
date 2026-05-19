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
      `,

      transition: "all 0.3s ease"
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
          rgba(255,255,255,0.44),
          rgba(255,255,255,0.26)
        )
      `,

      border: "1px solid rgba(255,255,255,0.44)",

      borderRadius: "20px",

      padding: "14px 18px",

      minHeight: "82px",

      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",

      boxShadow: `
        0 10px 24px rgba(0,0,0,0.22),
        inset 0 1px 0 rgba(255,255,255,0.22)
      `,

      transform:
        active === "eng"
          ? "scale(0.98)"
          : hovered === "eng"
          ? "translateY(-2px)"
          : "scale(1)",

      transition: "all 0.24s ease",

      cursor: "pointer"
    },

    buttonSecondary: {
      background: `
        linear-gradient(
          to bottom,
          rgba(255,255,255,0.44),
          rgba(255,255,255,0.26)
        )
      `,

      border: "1px solid rgba(255,255,255,0.44)",

      borderRadius: "20px",

      padding: "14px 18px",

      minHeight: "82px",

      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",

      boxShadow: `
        0 10px 24px rgba(0,0,0,0.22),
        inset 0 1px 0 rgba(255,255,255,0.22)
      `,

      transform:
        active === "spa"
          ? "scale(0.98)"
          : hovered === "spa"
          ? "translateY(-2px)"
          : "scale(1)",

      transition: "all 0.24s ease",

      cursor: "pointer"
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
          <div
            style={{
              marginBottom: "18px"
            }}
          >

            {/* ENGLISH */}
            <div
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', serif",

                fontSize: "1.72rem",

                fontWeight: "400",

                color: "#ffffff",

                letterSpacing: "0.18px",

                lineHeight: "1.1",

                textShadow: `
                  0 2px 4px rgba(0,0,0,0.48),
                  0 4px 10px rgba(0,0,0,0.28)
                `
              }}
            >
              {content.title}
            </div>

            {/* SPANISH */}
            <div
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', serif",

                fontSize: "1.38rem",

                fontWeight: "400",

                fontStyle: "italic",

                color: "rgba(255,255,255,0.95)",

                letterSpacing: "0.30px",

                marginTop: "4px",

                lineHeight: "1.1",

                textShadow: `
                  0 2px 4px rgba(0,0,0,0.48),
                  0 4px 10px rgba(0,0,0,0.28)
                `
              }}
            >
              {content.spanishTitle}
            </div>

          </div>

          {/* 📖 SUBTITLE */}
          <p style={styles.subtitle}>
            <a
              href="https://www.efca.org/sof"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffff",

                textDecoration: "none",

                borderBottom:
                  "1px solid rgba(255,255,255,0.76)",

                paddingBottom: "2px",

                transition: "all 0.2s ease",

                fontWeight: "600",

                cursor: "pointer"
              }}
            >
              {content.subtitle}
            </a>
          </p>

          {/* 🤝 WELCOME MESSAGE */}
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

                  <span>
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

                  <span>
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

      <Footer />
    </>
  );
};

export default RootLanding;