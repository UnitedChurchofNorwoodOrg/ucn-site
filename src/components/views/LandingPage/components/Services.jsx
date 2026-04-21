import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import englishSiteContent from "../../../../content/englishSiteContent";

const Services = () => {
  const { services } = englishSiteContent;

  return (
    <div className="bg-white">

      {/* 🖼️ IMAGE FIRST */}
      <div style={styles.imageContainer}>
        <Image
          src={process.env.PUBLIC_URL + services.image.src}
          alt={services.image.alt}
          style={styles.image}
        />

        <p style={styles.caption}>
          {services.image.caption}
        </p>
      </div>

      {/* 🔥 CENTERED CONTENT */}
      <Row className="justify-content-center m-0">
        <Col xs={12} md={10} lg={8} className="px-3 px-md-0 py-5">

          <h2 style={styles.title}>
            {services.title}
          </h2>

          {/* INTRO */}
          {services.intro.map((text, index) => (
            <p key={index} style={styles.paragraph}>
              {text}
            </p>
          ))}

          {/* SECTIONS */}
          {services.sections.map((section, index) => (
            <div
              key={index}
              style={
                index === services.sections.length - 1
                  ? styles.sectionLast
                  : styles.section
              }
            >
              <h5 style={styles.sectionTitle}>
                {section.title}
              </h5>

              {/* 🔥 UPDATED PARAGRAPH RENDER */}
              {section.paragraphs.map((text, i) => {
                if (section.title === "How long is the service?") {
                  return (
                    <p key={i} style={styles.paragraph}>
                      Our Sunday morning English-language service begins at 10:00 AM and typically lasts about one hour. Our Spanish service begins at 12:00 PM. {" "}
                      <Link
                        to="/spanish"
                        style={{ color: "#1f3a5f", fontWeight: "500" }}
                      >
                        (Click for more on Spanish Worship)
                      </Link>{" "}
                    
                    </p>
                  );
                }

                return (
                  <p key={i} style={styles.paragraph}>
                    {text}
                  </p>
                );
              })}
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
    marginBottom: "24px"
  },

  paragraph: {
    color: "#374151",
    lineHeight: "1.75",
    marginBottom: "14px",
    fontSize: "15px"
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
  }
};

export default Services;