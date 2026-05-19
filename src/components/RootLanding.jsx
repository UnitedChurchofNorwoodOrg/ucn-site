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
  // 🎨 PREMIUM STYLES
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
    // 🌫 LIGHT CINEMATIC OVERLAY
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
    // ✨ PREMIUM GLASS CARD
    // =========================================================
    content: {
      position: "relative",
      zIndex: 2,

      width: "100%",
      maxWidth: "650px",

      padding: "42px 34px",

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

      marginBottom: "24px",

      isolation: "isolate"
    },

    // =========================================================
    // 🌅 PREMIUM SUNRISE GLOW
    // =========================================================
    logoGlow: {
      position: "absolute",

      width: "175px",
      height: "175px",

      borderRadius: "50%",

      background: `
        radial-gradient(
          circle,
          rgba(255,255,255,1.0) 0%,
          rgba(255,255,255,0.98) 18%,
          rgba(255,255,255,0.92) 34%,
          rgba(255,250,240,0.62) 50%,
          rgba(255,248,235,0.28) 66%,
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

      height: "112px",
      width: "auto",

      display: "block",

      zIndex: 2,

      filter: `
        brightness(1.01)
        contrast(1.14)
        saturate(1.05)
        drop-shadow(0 4px 12px rgba(0,0,0,0.32))
      `,

      transition: "all 0.3s ease"
    },

    // =========================================================
    // 📖 SUBTITLE
    // =========================================================
    subtitle: {
      fontSize: "1.05rem",

      fontWeight: "600",

      color: "#ffffff",

      marginBottom: "12px",

      letterSpacing: "0.2px",

      textShadow: `
        0 2px 6px rgba(0,0,0,0.75),
        0 4px 14px rgba(0,0,0,0.50)
      `
    },

    // =========================================================
    // 🤝 WELCOME MESSAGE
    // =========================================================
    welcomeMessage: {
      fontSize: "1.02rem",

      lineHeight: "1.8",

      fontWeight: "400",

      color: "rgba(255,255,255,0.97)",

      marginTop: "18px",

      marginBottom: "14px",

      maxWidth: "560px",

      marginLeft: "auto",
      marginRight: "auto",

      fontStyle: "italic",

      letterSpacing: "0.2px",

      textShadow: `
        0 2px 6px rgba(0,0,0,0.68),
        0 4px 12px rgba(0,0,0,0.42)
      `
    },

    // =========================================================
    // ✨ TAGLINES
    // =========================================================
    tagline: {
      fontSize: "1rem",

      lineHeight: "1.75",

      fontWeight: "500",

      color: "rgba(255,255,255,0.98)",

      marginBottom: "10px",

      textShadow: `
        0 2px 6px rgba(0,0,0,0.72),
        0 4px 12px rgba(0,0,0,0.45)
      `
    },

    // =========================================================
    // 🔘 PREMIUM GLASS BUTTON
    // =========================================================
    buttonPrimary: {
      background: `
        linear-gradient(
          to bottom,
          rgba(255,255,255,0.46),
          rgba(255,255,255,0.28)
        )
      `,

      border: "1px solid rgba(255,255,255,0.48)",

      borderRadius: "22px",

      padding: "16px 20px",

      minHeight: "92px",

      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",

      boxShadow: `
        0 10px 30px rgba(0,0,0,0.24),
        inset 0 1px 0 rgba(255,255,255,0.28)
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

    // =========================================================
    // 🔘 PREMIUM GLASS BUTTON
    // =========================================================
    buttonSecondary: {
      background: `
        linear-gradient(
          to bottom,
          rgba(255,255,255,0.46),
          rgba(255,255,255,0.28)
        )
      `,

      border: "1px solid rgba(255,255,255,0.48)",

      borderRadius: "22px",

      padding: "16px 20px",

      minHeight: "92px",

      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",

      boxShadow: `
        0 10px 30px rgba(0,0,0,0.24),
        inset 0 1px 0 rgba(255,255,255,0.28)
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
    // 📅 EVENTS BOX
    // =========================================================
    calendarBox: {
      marginTop: "24px",

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

      borderRadius: "20px",

      padding: "18px",

      width: "100%",

      boxShadow: `
        0 10px 26px rgba(0,0,0,0.16)
      `,

      color: "#111827"
    },

    // =========================================================
    // 📅 EVENTS TITLE
    // =========================================================
    eventTitle: {
      marginBottom: "12px",

      color: "#111827",

      fontWeight: "600",

      fontSize: "1.05rem"
    }
  };

  return (
    <>
      <NewsTicker />

      <div style={styles.container}>

        {/* 🌫 LIGHT OVERLAY */}
        <div style={styles.overlayBg} />

        {/* ✨ MAIN GLASS CARD */}
        <div style={styles.content}>

          {/* ⛪ LOGO */}
          <div style={styles.logoWrapper}>

            {/* 🌅 Glow */}
            <div style={styles.logoGlow} />

            <img
              src={process.env.PUBLIC_URL + "/images/UNCLogoTrans1.png"}
              alt="Church Logo"
              style={styles.logo}
            />
          </div>

          {/* 🏛 CHURCH TITLES */}
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

                fontSize: "2.02rem",

                fontWeight: "500",

                color: "#ffffff",

                letterSpacing: "0.35px",

                lineHeight: "1.1",

                textShadow: `
                  0 2px 5px rgba(0,0,0,0.58),
                  0 5px 16px rgba(0,0,0,0.40),
                  0 0 14px rgba(255,255,255,0.08)
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

                fontSize: "1.72rem",

                fontWeight: "400",

                fontStyle: "italic",

                color: "rgba(255,255,255,0.96)",

                letterSpacing: "0.45px",

                marginTop: "4px",

                lineHeight: "1.1",

                textShadow: `
                  0 2px 5px rgba(0,0,0,0.55),
                  0 4px 14px rgba(0,0,0,0.38)
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

              onMouseEnter={(e) => {
                e.target.style.borderBottom =
                  "1px solid rgba(255,255,255,1)";
                e.target.style.opacity = "0.92";
              }}

              onMouseLeave={(e) => {
                e.target.style.borderBottom =
                  "1px solid rgba(255,255,255,0.78)";
                e.target.style.opacity = "1";
              }}

              style={{
                color: "#ffffff",

                textDecoration: "none",

                borderBottom:
                  "1px solid rgba(255,255,255,0.78)",

                paddingBottom: "2px",

                transition: "all 0.2s ease",

                fontWeight: "600",

                cursor: "pointer",

                textShadow: `
                  0 2px 6px rgba(0,0,0,0.72)
                `
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
          {/* 🔘 SERVICE BUTTONS */}
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

                    fontSize: "1rem",

                    fontWeight: "700",

                    letterSpacing: "0.2px",

                    color: "#16324f",

                    textShadow: `
                      0 1px 2px rgba(255,255,255,0.22)
                    `
                  }}
                >
                  <span>
                    Explore English Service
                  </span>

                  <span
                    style={{
                      fontSize: "1.2rem",

                      fontWeight: "700",

                      color: "#16324f",

                      textShadow: `
                        0 1px 2px rgba(255,255,255,0.22)
                      `,

                      transform:
                        hovered === "eng"
                          ? "translateX(3px)"
                          : "translateX(0)",

                      transition: "transform 0.2s ease"
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

                    fontSize: "1rem",

                    fontWeight: "700",

                    letterSpacing: "0.2px",

                    color: "#16324f",

                    textShadow: `
                      0 1px 2px rgba(255,255,255,0.22)
                    `
                  }}
                >
                  <span>
                    Explorar Servicio en Español
                  </span>

                  <span
                    style={{
                      fontSize: "1.2rem",

                      fontWeight: "700",

                      color: "#16324f",

                      textShadow: `
                        0 1px 2px rgba(255,255,255,0.22)
                      `,

                      transform:
                        hovered === "spa"
                          ? "translateX(3px)"
                          : "translateX(0)",

                      transition: "transform 0.2s ease"
                    }}
                  >
                    →
                  </span>
                </div>
              </Button>
            </Link>
          </div>
		  {/* ✨ TAGLINES */}
		       <p style={styles.tagline}>
		         {content.tagline1}
		       </p>

		       <p style={styles.tagline}>
		         {content.tagline2}
		       </p>
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