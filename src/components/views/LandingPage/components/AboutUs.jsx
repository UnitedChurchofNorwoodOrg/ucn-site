import { Row, Col, Image } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="bg-white">

      {/* 🖼️ IMAGE FIRST */}
      <div style={styles.imageContainer}>
        <Image
          src="/images/aboutus.jpg"
          alt="Congregation"
          style={styles.image}
        />

        <p style={styles.caption}>
          Our Congregation
        </p>
      </div>

      {/* 🔥 CENTERED CONTENT */}
      <Row className="justify-content-center m-0">
        <Col xs={12} md={10} lg={8} className="px-3 px-md-0 py-5">

          <p style={styles.paragraph}>
            The United Church of Norwood is an interdenominational fellowship of Christians. 
            We are committed to sharing God's love and grace as revealed in the Bible and through 
            His Son, our Lord and Savior, Jesus Christ.
          </p>

          <p style={styles.paragraph}>
            We pray that worshipping with us will give you comfort and strength to meet your needs. 
            Please call on us if we can minister to you in any way.
          </p>

          <div style={styles.section}>
            <h5 style={styles.sectionTitle}>Our Congregation</h5>
            <p style={styles.paragraph}>
              We are a friendly and caring congregation who would love to have you join us as we worship the Lord.
            </p>
          </div>

          <div style={styles.section}>
            <h5 style={styles.sectionTitle}>Our Building</h5>
            <p style={styles.paragraph}>
              The cornerstone for our historic building was laid in 1885. It has been alive with worship ever since.
            </p>
          </div>

          <div style={styles.sectionLast}>
            <h5 style={styles.sectionTitle}>Norwood, Massachusetts</h5>
            <p style={styles.paragraph}>
              Norwood, Massachusetts, located approximately 12 miles southwest of Boston, is home to over 29,000 residents. 
              Named after Norwood, England, the area was first settled by Ezra Morse in 1678 and officially formed in 1872.
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
    backgroundColor: "#f9fafb"
  },

  image: {
    width: "100%",
    maxHeight: "420px",
    objectFit: "contain"
  },

  caption: {
    fontSize: "13px",
    color: "#6b7280",
    marginTop: "8px"
  },

  paragraph: {
    color: "#374151",
    lineHeight: "1.75",
    marginBottom: "14px",   // 🔥 slightly more breathing room
    fontSize: "15px"
  },

  section: {
    marginTop: "24px",
    paddingBottom: "16px",
    borderBottom: "1px solid #f1f5f9"   // 🔥 subtle divider like Ministries
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

export default AboutUs;