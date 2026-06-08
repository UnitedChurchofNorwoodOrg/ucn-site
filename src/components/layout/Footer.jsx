import React from "react";
import englishSiteContent from "../../content/englishSiteContent";

const Footer = () => {
  const { footer } = englishSiteContent;

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.churchName}>
          United Church of Norwood
        </div>

        <p style={styles.address}>
          {footer.address}
          <br />
          {footer.phone}
        </p>

        <div style={styles.divider} />

        <small style={styles.copyright}>
          {footer.copyright}
        </small>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background:
      "linear-gradient(to bottom, #0b1f33, #071524)",

    color: "rgba(255,255,255,0.92)",

    textAlign: "center",

    padding: "42px 20px",

    marginTop: "40px",

    borderTop: "1px solid rgba(255,255,255,0.10)",

    boxShadow: "0 -10px 24px rgba(0,0,0,0.22)"
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto"
  },

  churchName: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "12px",
    letterSpacing: "0.3px",
    color: "#ffffff"
  },

  address: {
    fontSize: "1rem",
    lineHeight: "1.7",
    marginBottom: "18px",
    color: "rgba(255,255,255,0.90)"
  },

  divider: {
    width: "90px",
    height: "1px",
    background: "rgba(255,255,255,0.20)",
    margin: "0 auto 18px auto"
  },

  copyright: {
    color: "rgba(255,255,255,0.70)",
    fontSize: "0.85rem"
  }
};

export default Footer;