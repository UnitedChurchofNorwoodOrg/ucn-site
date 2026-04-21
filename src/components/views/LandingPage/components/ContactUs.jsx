import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import englishSiteContent from "../../../../content/englishSiteContent";

const ContactUs = () => {
  const { contactUs } = englishSiteContent;

  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const mapQuery = contactUs.map.query;

  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    mapQuery
  )}&z=15&output=embed`;

  const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapQuery
  )}`;

  return (
    <div className="bg-white">

      <Row className="w-100 m-0 justify-content-center">
        <Col xs={12} md={10} lg={8} className="px-4 py-5 text-center">

          <h2 style={styles.title}>
            {contactUs.title}
          </h2>

          <p style={styles.paragraph}>
            {contactUs.description}
          </p>

          {/* CONTACT INFO */}
          <div style={styles.infoBlock}>
            <p style={styles.info}>
              📞{" "}
              <a href={`tel:${contactUs.contact.phone}`} style={styles.link}>
                {contactUs.contact.phone}
              </a>
            </p>

            <p style={styles.info}>
              ✉️{" "}
              <a href={`mailto:${contactUs.contact.email}`} style={styles.link}>
                {contactUs.contact.email}
              </a>
            </p>
          </div>

          {/* BUTTONS */}
          <div style={{ marginTop: "18px" }}>
            {/* Get Directions */}
            <a
              href={mapLinkUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                ...styles.button,
                backgroundColor: active
                  ? "#162c47"
                  : hovered
                  ? "#3a5f85"
                  : "#1f3a5f",
                transform: active ? "scale(0.97)" : "scale(1)",
                boxShadow: active
                  ? "0 1px 3px rgba(0,0,0,0.2)"
                  : "0 2px 6px rgba(0,0,0,0.1)"
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => {
                setHovered(false);
                setActive(false);
              }}
              onMouseDown={() => setActive(true)}
              onMouseUp={() => setActive(false)}
            >
              {contactUs.map.buttonText}
            </a>

            {/* Facebook Button */}
            <div style={{ marginTop: "10px" }}>
              <a
                href={contactUs.social.facebook}
                target="_blank"
                rel="noreferrer"
                style={{
                  ...styles.button,
                  backgroundColor: "#1877F2"
                }}
              >
                Follow us on Facebook
              </a>
            </div>
          </div>

          {/* MAP */}
          <div style={styles.mapWrapper}>
            <iframe
              title="Church Location"
              src={mapEmbedUrl}
              width="100%"
              height="320"
              style={styles.map}
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

  link: {
    color: "#1f3a5f",
    textDecoration: "none"
  },

  button: {
    display: "inline-block",
    backgroundColor: "#1f3a5f",
    color: "#ffffff",
    padding: "10px 18px",
    borderRadius: "20px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "all 0.15s ease",
    cursor: "pointer"
  },

  mapWrapper: {
    marginTop: "24px"
  },

  map: {
    border: 0,
    borderRadius: "10px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)"
  }
};

export default ContactUs;