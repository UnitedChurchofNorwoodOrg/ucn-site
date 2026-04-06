import { Row, Col, Image } from "react-bootstrap";
import englishSiteContent from "../../../../content/englishSiteContent";

const Ministries = () => {
  const { ministries } = englishSiteContent;

  return (
    <div className="bg-white">

      {/* 🖼️ IMAGE FIRST */}
      <div style={styles.imageContainer}>
        <Image
          src={process.env.PUBLIC_URL + ministries.image.src}
          alt={ministries.image.alt}
          style={styles.image}
        />

        <p style={styles.caption}>
          {ministries.image.caption}
        </p>
      </div>

      {/* 🔥 CENTERED CONTENT */}
      <Row className="justify-content-center m-0">
        <Col xs={12} md={10} lg={8} className="px-3 px-md-0 py-5">

          <h2 style={styles.title}>
            {ministries.title}
          </h2>

          {ministries.sections.map((section, index) => (
            <div
              key={index}
              style={
                index === ministries.sections.length - 1
                  ? styles.sectionLast
                  : styles.section
              }
            >
              <h5 style={styles.sectionTitle}>
                {section.title}
              </h5>

              {section.paragraphs.map((text, i) => (
                <p key={i} style={styles.paragraph}>
                  {text}
                </p>
              ))}
            </div>
          ))}

        </Col>
      </Row>

    </div>
  );
};

const styles = {
  imageContainer: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#f9fafb"
  },

  image: {
    width: "100%",
    maxHeight: "420px",
    objectFit: "cover"
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
    marginBottom: "24px"
  },

  section: {
    marginTop: "24px",
    paddingBottom: "16px",
    borderBottom: "1px solid #f1f5f9"
  },

  sectionLast: {
    marginTop: "24px"
  },

  sectionTitle: {
    fontFamily: "Playfair Display, serif",
    color: "#1f2937",
    fontWeight: "500",
    fontSize: "1.05rem",
    marginBottom: "6px"
  },

  paragraph: {
    color: "#374151",
    lineHeight: "1.75",
    fontSize: "15px",
    marginBottom: "12px"
  }
};

export default Ministries;