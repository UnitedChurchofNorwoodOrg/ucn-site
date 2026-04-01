import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p className="fs-5 mb-2">
        595 Washington Street, Norwood, MA 02062 <br />
        781-762-2589
      </p>

      <small>
        Copyright 2026 United Church of Norwood. All rights reserved.
      </small>
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