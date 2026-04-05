import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import englishSiteContent from "../../content/englishSiteContent";

const Navbar = () => {

  const content = englishSiteContent.navbar;

  return (
    <nav style={styles.nav}>
      
      {/* LOGO + NAME */}
      <Link to="/" style={styles.brand}>
        <Image
          src="/images/UNCLogoTrans.png"
          alt="UCN Logo"
          style={styles.logo}
        />
        <span style={styles.title}>
          {content.title}
        </span>
      </Link>

      {/* NAV LINKS */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          {content.links.home}
        </Link>
      </div>

    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
    color: "black",
  },

  logo: {
    height: "45px",
    width: "auto",
    objectFit: "contain",
    display: "block",
  },

  // ✅ MATCHES YOUR PAGE TITLE STYLE
  title: {
    fontFamily: "Playfair Display, serif",
    fontWeight: "500",     // 👈 same as your Spanish page
    fontSize: "18px",
  },

  links: {
    display: "flex",
    alignItems: "center",
  },

  // ✅ MATCHES BODY TEXT STYLE
  link: {
    fontSize: "15px",      // 👈 same feel as subtitle (15px)
    textDecoration: "none",
    color: "black",
    fontWeight: "500",
  },
};

export default Navbar;