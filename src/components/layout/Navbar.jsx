import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import englishSiteContent from "../../content/englishSiteContent";

const Navbar = () => {

  const content = englishSiteContent.navbar;

  const [hovered, setHovered] = useState(false);

  return (
    <nav style={styles.nav}>

      {/* ☁️ SOFT CLOUD GLOW */}
      <div style={styles.cloudGlow} />

      {/* ✨ LOGO + NAME */}
      <Link
        to="/"
        style={styles.brand}
      >
        <div style={styles.logoGlow} />

        <Image
          src="/images/UNCLogoTrans.png"
          alt="UCN Logo"
          style={styles.logo}
        />

        <span style={styles.title}>
          {content.title}
        </span>
      </Link>

      {/* ✨ NAV LINKS */}
      <div style={styles.links}>

        <Link
          to="/"

          style={{
            ...styles.link,

            background:
              hovered
                ? "rgba(255,255,255,0.38)"
                : "rgba(255,255,255,0.18)",

            color:
              hovered
                ? "#24425f"
                : "#35506b",

            boxShadow:
              hovered
                ? `
                  0 6px 16px rgba(255,255,255,0.35)
                `
                : `
                  0 2px 8px rgba(255,255,255,0.12)
                `
          }}

          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {content.links.home}
        </Link>

      </div>

    </nav>
  );
};

const styles = {

  // =========================================================
  // ☁️ NAVBAR
  // =========================================================
  nav: {
    position: "sticky",
    top: 0,

    zIndex: 1000,

    display: "flex",

    justifyContent: "space-between",
    alignItems: "center",

    padding: "14px 22px",

    overflow: "hidden",

    background: `
      linear-gradient(
        to bottom,
        rgba(255,255,255,0.82),
        rgba(255,255,255,0.58)
      )
    `,

    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",

    borderBottom:
      "1px solid rgba(255,255,255,0.42)",

    boxShadow: `
      0 4px 20px rgba(180,200,220,0.18)
    `,

    transition: "all 0.3s ease"
  },

  // =========================================================
  // ☁️ CLOUD GLOW
  // =========================================================
  cloudGlow: {
    position: "absolute",

    top: "-40px",
    left: "10%",

    width: "320px",
    height: "120px",

    background: `
      radial-gradient(
        ellipse,
        rgba(255,255,255,0.72) 0%,
        rgba(255,255,255,0.22) 52%,
        rgba(255,255,255,0.00) 82%
      )
    `,

    filter: "blur(18px)",

    opacity: 0.9,

    pointerEvents: "none"
  },

  // =========================================================
  // ✨ BRAND
  // =========================================================
  brand: {
    position: "relative",

    display: "flex",

    alignItems: "center",

    gap: "12px",

    textDecoration: "none",

    zIndex: 2
  },

  // =========================================================
  // ✨ LOGO GLOW
  // =========================================================
  logoGlow: {
    position: "absolute",

    width: "74px",
    height: "74px",

    borderRadius: "50%",

    background: `
      radial-gradient(
        circle,
        rgba(255,255,255,0.95) 0%,
        rgba(255,255,255,0.52) 44%,
        rgba(255,255,255,0.00) 82%
      )
    `,

    filter: "blur(10px)",

    left: "-10px",

    zIndex: 0
  },

  // =========================================================
  // ⛪ LOGO
  // =========================================================
  logo: {
    position: "relative",

    height: "50px",

    width: "auto",

    objectFit: "contain",

    display: "block",

    zIndex: 2,

    filter: `
      brightness(1.03)
      contrast(1.02)
      drop-shadow(0 2px 6px rgba(255,255,255,0.22))
    `
  },

  // =========================================================
  // ✨ TITLE
  // =========================================================
  title: {
    position: "relative",

    fontFamily:
      "'Cormorant Garamond', 'Playfair Display', serif",

    fontWeight: "500",

    fontSize: "1.32rem",

    letterSpacing: "0.25px",

    color: "#3b526a",

    textShadow: `
      0 1px 2px rgba(255,255,255,0.72)
    `,

    zIndex: 2
  },

  // =========================================================
  // 🔗 LINKS
  // =========================================================
  links: {
    display: "flex",

    alignItems: "center",

    gap: "10px",

    zIndex: 2
  },

  // =========================================================
  // ✨ LINK
  // =========================================================
  link: {
    fontSize: "0.95rem",

    textDecoration: "none",

    fontWeight: "600",

    letterSpacing: "0.2px",

    padding: "9px 16px",

    borderRadius: "18px",

    transition: "all 0.28s ease",

    backdropFilter: "blur(10px)",

    border:
      "1px solid rgba(255,255,255,0.32)"
  }
};

export default Navbar;