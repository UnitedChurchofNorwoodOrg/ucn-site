import React from "react";
import englishSiteContent from "../../content/englishSiteContent";

const Footer = () => {
  const { footer } = englishSiteContent;

  return (
    <footer style={styles.footer}>
      <p className="fs-5 mb-2">
        {footer.address} <br />
        {footer.phone}
      </p>

      <small>{footer.copyright}</small>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#111",
    color: "white",
    textAlign: "center",
    padding: "30px 20px",
    marginTop: "40px",
  },
};

export default Footer;