import { Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className="bg-white">

      {/* 🖼️ IMAGE FIRST */}
      <div style={styles.imageContainer}>
        <Image
          src={process.env.PUBLIC_URL + "/images/home.jpeg"}
          alt="Church"
          style={styles.image}
        />

        <p style={styles.caption}>
          United Church of Norwood
        </p>
      </div>

      {/* TEXT CONTENT */}
      <Row className="w-100 m-0">
        <Col xs={12} className="px-4 py-5">

          <h2 style={styles.title}>
            Welcome
          </h2>

          <p style={styles.paragraph}>
            We invite you to join us in worship and fellowship as we share God’s love and grace together.
          </p>

          <p style={styles.service}>
            Sunday Worship: 10:00 AM
          </p>

          <div style={{ marginTop: "12px" }}>
            <a
              href="https://www.facebook.com/unitedchurchofnorwood/"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              Join us live on Facebook
            </a>
          </div>

          <hr style={styles.divider} />

          <p style={styles.paragraph}>
            For more information about the Evangelical Free Church of America:
          </p>

          <a
            href="https://www.efca.org/"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            www.efca.org
          </a>

          <p style={styles.scripture}>
            “Let all that you do be done in love.” — 1 Corinthians 16:14
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
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
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