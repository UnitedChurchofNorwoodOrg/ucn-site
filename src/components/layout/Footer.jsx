import React from "react";
import englishSiteContent from "../../content/englishSiteContent";

const Footer = () => {
  const { footer } = englishSiteContent;

  const mapsUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      footer.address
    )}`;

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Navy Glow */}
        <div style={styles.glow} />

        <div style={styles.churchName}>
          United Church of Norwood
        </div>

        <div style={styles.address}>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.addressLink}
          >
            📍 {footer.address}
          </a>

          <br />

          <a
            href={`tel:${footer.phone.replace(/[^0-9]/g, "")}`}
            style={styles.phoneLink}
          >
            📞 {footer.phone}
          </a>
        </div>

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
    position: "relative",

    background: `
      linear-gradient(
        to bottom,
        #10253d,
        #071524
      )
    `,

    color: "rgba(255,255,255,0.92)",

    textAlign: "center",

    padding: "24px 20px",

    marginTop: "40px",

    overflow: "hidden",

    borderTop: "1px solid rgba(255,255,255,0.10)",

    boxShadow: `
      0 -10px 30px rgba(0,0,0,0.22)
    `
  },

  container: {
    position: "relative",

    maxWidth: "900px",

    margin: "0 auto",

    zIndex: 2
  },

  glow: {
    position: "absolute",

    top: "-40px",
    left: "50%",

    transform: "translateX(-50%)",

    width: "320px",
    height: "120px",

    background: `
      radial-gradient(
        ellipse,
        rgba(22,50,79,0.45) 0%,
        rgba(22,50,79,0.18) 50%,
        rgba(22,50,79,0.00) 85%
      )
    `,

    filter: "blur(24px)",

    pointerEvents: "none"
  },

  churchName: {
    fontFamily:
      "'Cormorant Garamond', 'Playfair Display', serif",

    fontSize: "1.6rem",

    fontWeight: "500",

    letterSpacing: "0.4px",

    color: "#ffffff",

    marginBottom: "6px",

    lineHeight: "1.1",

    textShadow: `
      0 0 10px rgba(22,50,79,0.85),
      0 0 20px rgba(22,50,79,0.55),
      0 2px 6px rgba(0,0,0,0.45)
    `
  },

  address: {
    fontSize: "0.96rem",

    lineHeight: "1.35",

    marginBottom: "10px"
  },

  addressLink: {
    color: "rgba(255,255,255,0.90)",

    textDecoration: "none",

    transition: "all 0.2s ease",

    fontWeight: "500"
  },

  phoneLink: {
    color: "rgba(255,255,255,0.90)",

    textDecoration: "none",

    transition: "all 0.2s ease"
  },

  divider: {
    width: "110px",

    height: "1px",

    background: `
      linear-gradient(
        to right,
        transparent,
        rgba(255,255,255,0.35),
        transparent
      )
    `,

    margin: "0 auto 10px auto"
  },

  copyright: {
    color: "rgba(255,255,255,0.68)",

    fontSize: "0.82rem",

    letterSpacing: "0.3px",

    lineHeight: "1.2"
  }
};

export default Footer;