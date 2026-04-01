import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import Footer from "./layout/Footer";

const RootLanding = () => {
  return (
    <>
      {/* HERO ONLY */}
      <div style={styles.hero}>
        <div style={styles.overlay}>

          {/* LOGO */}
          <Image
            src="/images/UCNLogo.jpg"
            alt="UCN Logo"
            style={styles.logo}
          />

          {/* TITLE */}
          <h1 style={styles.title}>United Church of Norwood</h1>

          {/* TAGLINE */}
          <p style={styles.tagline}>
            Many people. One Church.
          </p>         

		  <p style={styles.subText}>
		    <a
		      href="https://www.efca.org/"
		      target="_blank"
		      rel="noreferrer"
		      style={styles.link}
		    >
		      Evangelical Free Church of America
		    </a>
		  </p>

          {/* SERVICE TIMES */}
          <p style={styles.serviceText}>
            Sunday Worship: 10:00 AM (English) • 12:00 PM (Spanish)
          </p>

          {/* BUTTONS */}
          <div className="d-flex flex-column flex-md-row gap-3 mt-4 w-100">

            <Link to="/english" className="w-100">
              <Button style={styles.button} className="w-100 fw-bold">
                English Congregation
              </Button>
            </Link>

            <Link to="/spanish" className="w-100">
              <Button style={styles.buttonOutline} className="w-100 fw-bold">
                Spanish Congregation
              </Button>
            </Link>

          </div>

        </div>
      </div>

      {/* SINGLE FOOTER */}
      <Footer />
    </>
  );
};

const styles = {
  hero: {
    height: "100vh",
    backgroundImage: "url('/images/home.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    background: "rgba(0,0,0,0.7)",
    color: "white",
    padding: "40px 20px",
    textAlign: "center",
    width: "90%",
    maxWidth: "700px",
  },
  logo: {
    width: "120px",
    padding: "10px",
    background: "white",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
  },
  tagline: {
    fontSize: "20px",
    marginTop: "8px",
    fontStyle: "italic",
    letterSpacing: "1px",
  },
  subTitle: {
    fontSize: "18px",
    marginTop: "10px",
  },
  subText: {
    fontSize: "16px",
    opacity: 0.9,
  },
  serviceText: {
    fontSize: "18px",
    marginTop: "10px",
  },
  button: {
    fontSize: "20px",
    padding: "18px",
    borderRadius: "10px",
    background: "white",
    color: "black",
    border: "none",
  },
  buttonOutline: {
    fontSize: "20px",
    padding: "18px",
    borderRadius: "10px",
    background: "transparent",
    color: "white",
    border: "2px solid white",
  },
};

export default RootLanding;