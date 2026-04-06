import { Row, Col } from "react-bootstrap";
import englishSiteContent from "../../../../content/englishSiteContent";

const ContactUs = () => {
  const { contactUs } = englishSiteContent;

  const mapQuery = contactUs.map.query;
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}`;

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
              📞 {contactUs.contact.phone}
            </p>

            <p style={styles.info}>
              ✉️ {contactUs.contact.email}
            </p>
          </div>

          {/* BUTTON */}
          <div style={{ marginTop: "18px" }}>
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              {contactUs.map.buttonText}
            </a>
          </div>

          {/* MAP */}
          <div style={styles.mapWrapper}>
            <iframe
              title="Church Location"
              src={`${mapUrl}&output=embed`}
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

  button: {
    display: "inline-block",
    backgroundColor: "#1f3a5f",
    color: "#ffffff",
    padding: "10px 18px",
    borderRadius: "20px",
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