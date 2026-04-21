import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Footer from "./layout/Footer";
import NewsTicker from "./global/NewsTicker/NewsTicker";
import englishSiteContent from "../content/englishSiteContent";
import CalendarSimple from "./global/CalendarSimple";

const RootLanding = () => {
  const content = englishSiteContent.rootLanding;

  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundImage:
        "url(" + process.env.PUBLIC_URL + "/images/home.jpeg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px",
      position: "relative"
    },

    overlayBg: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to bottom, rgba(15,23,42,0.55), rgba(15,23,42,0.25))",
      zIndex: 0
    },

    content: {
      position: "relative",
      zIndex: 1,
      background: "rgba(255,255,255,0.94)",
      backdropFilter: "blur(6px)",
      padding: "36px 28px",
      borderRadius: "16px",
      maxWidth: "620px",
      width: "100%",
      color: "#1f2937",
      boxShadow: "0 8px 25px rgba(0,0,0,0.12)"
    },

    logo: {
      height: "72px",
      width: "auto",
      marginBottom: "14px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    },

    title: {
      fontFamily: "Playfair Display, serif",
      fontSize: "1.9rem",
      fontWeight: "500",
      marginBottom: "6px",
      color: "#111827"
    },

    subtitle: {
      fontSize: "1.05rem",
      fontWeight: "500",
      color: "#374151",
      marginBottom: "6px"
    },

    tagline: {
      fontSize: "0.9rem",
      color: "#6b7280",
      marginBottom: "12px"
    },

    buttonPrimary: {
      backgroundColor:
        active === "eng"
          ? "#162c47"
          : hovered === "eng"
          ? "#3a5f85"
          : "#1f3a5f",
      color: "#ffffff",
      border: "none",
      borderRadius: "24px",
      padding: "10px 18px",
      fontSize: "14px",
      fontWeight: "500",
      boxShadow:
        active === "eng"
          ? "0 1px 3px rgba(0,0,0,0.2)"
          : "0 2px 6px rgba(0,0,0,0.15)",
      transform: active === "eng" ? "scale(0.97)" : "scale(1)",
      transition: "all 0.2s ease-in-out",
      cursor: "pointer"
    },

    buttonSecondary: {
      backgroundColor:
        active === "spa"
          ? "#d1d5db"
          : hovered === "spa"
          ? "#e5e7eb"
          : "#f9fafb",
      border: "1px solid #1f3a5f",
      color: "#1f3a5f",
      borderRadius: "24px",
      padding: "10px 18px",
      fontSize: "14px",
      fontWeight: "500",
      transform: active === "spa" ? "scale(0.97)" : "scale(1)",
      transition: "all 0.2s ease-in-out",
      cursor: "pointer"
    },

    // ✅ NEW CALENDAR BOX STYLE
    calendarBox: {
      marginTop: "20px",
      background: "rgba(255,255,255,0.95)",
      borderRadius: "16px",
      padding: "16px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
      width: "100%"
    }
  };

  return (
    <>
      <NewsTicker />

      <div style={styles.container}>
        <div style={styles.overlayBg} />

        <div style={styles.content}>
          <img
            src={process.env.PUBLIC_URL + "/images/UNCLogoTrans.png"}
            alt="Church Logo"
            style={styles.logo}
          />

		  <h1 style={styles.title}>
		    {content.title}
		    <span style={{ display: "block", fontSize: "0.8em", fontWeight: "400" }}>
		      {content.spanishTitle}
		    </span>
		  </h1>

          <p style={styles.subtitle}>{content.subtitle}</p>

          <p style={styles.tagline}>{content.tagline1}</p>
          <p style={styles.tagline}>{content.tagline2}</p>

          <div className="d-flex flex-column flex-md-row gap-3 mt-4 w-100">
            <Link to="/english" className="w-100">
              <Button
                style={styles.buttonPrimary}
                className="w-100"
                onMouseEnter={() => setHovered("eng")}
                onMouseLeave={() => setHovered(null)}
                onMouseDown={() => setActive("eng")}
                onMouseUp={() => setActive(null)}
              >
                {content.buttons.english}
              </Button>
            </Link>

            <Link to="/spanish" className="w-100">
              <Button
                style={styles.buttonSecondary}
                className="w-100"
                onMouseEnter={() => setHovered("spa")}
                onMouseLeave={() => setHovered(null)}
                onMouseDown={() => setActive("spa")}
                onMouseUp={() => setActive(null)}
              >
                {content.buttons.spanish}
              </Button>
            </Link>
          </div>

          {/* ✅ CALENDAR SECTION */}
		  <div style={styles.calendarBox}>
		    <h5 style={{ marginBottom: "10px", color: "#1f2937" }}>
		      Upcoming Events
		    </h5>
		    <CalendarSimple />
		  </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RootLanding;