import { Row, Col, Image } from "react-bootstrap";
import { useState } from "react";
import englishSiteContent from "../../../../content/englishSiteContent";

const Home = () => {
  const { home } = englishSiteContent;

  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className="bg-white">

      {/* 🖼️ IMAGE FIRST */}
      <div style={styles.imageContainer}>
        <Image
          src={process.env.PUBLIC_URL + home.image.src}
          alt={home.image.alt}
          style={styles.image}
        />

        <p style={styles.caption}>
          {home.image.caption}
        </p>
      </div>

      {/* TEXT CONTENT */}
      <Row className="w-100 m-0">
        <Col xs={12} className="px-4 py-5">

          <h2 style={styles.title}>
            {home.title}
          </h2>

          <p style={styles.paragraph}>
            {home.intro}
          </p>

          <p style={styles.service}>
            {home.serviceTime1}
          </p>
		  <p style={styles.paragraph}>
		         {home.serviceTime2}
		  </p>
		  <p style={styles.paragraph}>
		         {home.serviceTime3}
		  </p>
          <div style={{ marginTop: "12px" }}>
            <a
              href={home.live.link}
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
              {home.live.text}
            </a>
          </div>

          <hr style={styles.divider} />

          <p style={styles.paragraph}>
            {home.efca.text}
          </p>

          <a
            href={home.efca.link}
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            {home.efca.label}
          </a>

          <p style={styles.scripture}>
            {home.scripture}
          </p>

        </Col>
      </Row>

    </div>
  );
};

const styles = {
  imageContainer: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#f9fafb",
    paddingTop: "20px"
  },

  image: {
    width: "100%",
    maxHeight: "420px",
    objectFit: "cover",
  },

  caption: {
    fontSize: "13px",
    color: "#6b7280",
    marginTop: "8px"
  },

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
    marginBottom: "12px",
    fontSize: "15px"
  },

  service: {
    color: "#1f2937",
    fontWeight: "500",
    marginBottom: "10px"
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

  link: {
    color: "#1f3a5f",
    fontWeight: "600",
    textDecoration: "underline"
  },

  divider: {
    margin: "24px 0",
    opacity: 0.2
  },

  scripture: {
    fontStyle: "italic",
    color: "#6b7280",
    marginTop: "18px",
    fontSize: "14px"
  }
};

export default Home;