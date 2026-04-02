import { Row, Col } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div className="bg-white">

      <Row className="w-100 m-0 justify-content-center">

        <Col xs={12} md={10} lg={8} className="px-4 py-5 text-center">

          <h2 style={styles.title}>
            Contact Us
          </h2>

          <p style={styles.paragraph}>
            We would love to hear from you. Please feel free to reach out using the information below.
          </p>

          {/* CONTACT INFO */}
          <div style={styles.infoBlock}>

            <p style={styles.info}>
              📞 781-762-2589
            </p>

            <p style={styles.info}>
              ✉️ unitedchurchofnorwood@gmail.com
            </p>

          </div>

          {/* 🔥 BUTTON */}
          <div style={{ marginTop: "18px" }}>
            <a
              href="https://www.google.com/maps?q=595+Washington+Street+Norwood+MA"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              Get Directions
            </a>
          </div>

          {/* MAP */}
          <div style={styles.mapWrapper}>
            <iframe
              title="Church Location"
              src="https://www.google.com/maps?q=595+Washington+Street+Norwood+MA&output=embed"
              width="100%"
              height="320"
              style={styles.map}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </Col>

      </Row>

    </div>
  );
};

const styles = {
  title: {
    fontFamily: "Playfair Display, serif",
    color: "#111827",
    fontWeight: "500",
    fontSize: "1.6rem",
    marginBottom: "20px"
  },

  paragraph: {
    color: "#374151",
    lineHeight: "1.75",
    fontSize: "15px",
    marginBottom: "14px"
  },

  infoBlock: {
    marginTop: "10px"
  },

  info: {
    color: "#1f2937",
    fontSize: "15px",
    marginBottom: "6px"
  },

  /* 🔥 GOOGLE-STYLE BUTTON */
  button: {
    display: "inline-block",
    backgroundColor: "#1f3a5f",
    color: "#ffffff",
    padding: "10px 18px",
    borderRadius: "20px",     // pill shape
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  },

  mapWrapper: {
    marginTop: "24px"
  },

  map: {
    border: 0,
    borderRadius: "10px"
  }
};

export default ContactUs;