import { Row, Col, Image } from "react-bootstrap";

const Services = () => {
  return (
    <div className="bg-white">

      {/* 🖼️ IMAGE FIRST */}
      <div style={styles.imageContainer}>
        <Image
          src="/images/services.jpg"
          alt="Sunday Worship"
          style={styles.image}
        />

        <p style={styles.caption}>
          Sunday Worship Service
        </p>
      </div>

      {/* 🔥 CENTERED CONTENT */}
      <Row className="justify-content-center m-0">
        <Col xs={12} md={10} lg={8} className="px-3 px-md-0 py-5">

		<h2 style={styles.title}>
		  Visiting Us
		</h2>

          <p style={styles.paragraph}>
            Whether you're just beginning your Christian journey or have been a believer for years, 
            we want you to feel comfortable and spiritually nourished here.
          </p>

          <p style={styles.paragraph}>
            If you're thinking about visiting us, here’s what our service is like:
          </p>

          {/* SECTIONS */}

          <div style={styles.section}>
            <h5 style={styles.sectionTitle}>How long is the service?</h5>
            <p style={styles.paragraph}>
              Our Sunday morning service begins at 10:00 and concludes at 11:00.
            </p>
          </div>

          <div style={styles.section}>
            <h5 style={styles.sectionTitle}>What kind of message will I hear?</h5>
            <p style={styles.paragraph}>
              You will hear a Bible-based, inspirational message designed to encourage, teach, 
              and help us navigate daily life.
            </p>
          </div>

          <div style={styles.section}>
            <h5 style={styles.sectionTitle}>What should I wear?</h5>
            <p style={styles.paragraph}>
              There is no dress code, so wear what you're comfortable in. 
              Some attend casually, while others dress more formally.
            </p>
          </div>

          <div style={styles.section}>
            <h5 style={styles.sectionTitle}>What is the music like?</h5>
            <p style={styles.paragraph}>
              Our service features a blended mix of praise songs, traditional hymns, and gospel music. 
              The choir sings weekly from September through June and monthly during summer.
            </p>
          </div>

          <div style={styles.sectionLast}>
            <h5 style={styles.sectionTitle}>What about children?</h5>
            <p style={styles.paragraph}>
              Sunday School is available during the service for children ages 4 and up.
            </p>
            <p style={styles.paragraph}>
              A church parlor near the sanctuary is also available for children of all ages, 
              with an audio feed of the service, toys, and books.
            </p>
          </div>

        </Col>
      </Row>

    </div>
  );
};

const styles = {
  imageContainer: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#f9fafb"   // ❌ removed paddingTop
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