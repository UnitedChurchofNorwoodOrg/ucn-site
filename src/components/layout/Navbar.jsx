import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      
      {/* LOGO + NAME */}
      <Link to="/" style={styles.brand}>
        <Image
          src="/images/UCNLogo.jpg"
          alt="UCN Logo"
          style={styles.logo}
        />
        <span style={styles.title}>
          United Church of Norwood
        </span>
      </Link>

      {/* NAV LINKS */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
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
    width: "45px",
    height: "45px",
    borderRadius: "6px",
  },
  title: {
    fontWeight: "600",
    fontSize: "18px",
  },
  links: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    fontSize: "16px",
    textDecoration: "none",
    color: "black",
  },
};

export default Navbar;