import { Row, Col, Image } from "react-bootstrap";

const Ministries = () => {
  return (
    <div className="bg-white">

      {/* 🖼️ IMAGE FIRST */}
      <div style={styles.imageContainer}>
        <Image
          src={process.env.PUBLIC_URL + "/images/ministries.jpeg"}
          alt="Choir Ministry"
          style={styles.image}
        />

        <p style={styles.caption}>
          Choir & Worship Ministry
        </p>
      </div>

      {/* 🔥 CENTERED CONTENT */}
      <Row className="justify-content-center m-0">
        <Col xs={12} md={10} lg={8} className="px-3 px-md-0 py-5">

          <h2 style={styles.title}>
            How You Can Serve
          </h2>

          <div style={styles.section}>
            <h5 style={styles.sectionTitle}>
              Music Ministry
            </h5>

            <p style={styles.paragraph}>
              The Worship Team leads congregational hymns and praise songs each Sunday morning. 
              If you play an instrument and feel called to serve the Lord with your music, please 
              speak to Worship Team leader, Rachel McMahon.
            </p>

            <p style={styles.paragraph}>
              The Choir joyfully provides special music every Sunday from September through June, 
              as well as on Communion Sundays in July and August. If you have a heart to serve God 
              in song, speak to Steve Rudolph, the choir director.
            </p>
          </div>

          <div style={styles.section}>
            <h5 style={styles.sectionTitle}>
              WISH (Women in Service to Him)
            </h5>

            <p style={styles.paragraph}>
              WISH is a fellowship and service group open to all women in the church. Our mission 
              is to be a light to the world by serving others while nurturing our faith as Christian women.
            </p>

            <p style={styles.paragraph}>
              Activities include fundraisers supporting missions worldwide, helping with local needs, 
              brunches with our Spanish sisters, craft activities, guest speakers, and meaningful discussions 
              that strengthen friendships and faith.
            </p>
          </div>

          <div style={styles.section}>
            <h5 style={styles.sectionTitle}>
              Congregational Care Team
            </h5>

            <p style={styles.paragraph}>
              Providing for the needs of those in our church community.
            </p>
          </div>

          <div style={styles.section}>
            <h5 style={styles.sectionTitle}>
              Hospitality Team
            </h5>

            <p style={styles.paragraph}>
              Keeping our church community connected through special times of fellowship, 
              including weekly coffee time.
            </p>
          </div>

          <div style={styles.sectionLast}>
            <h5 style={styles.sectionTitle}>
              Building Stewards
            </h5>

            <p style={styles.paragraph}>
              Giving vision to the use and care of our property and overseeing the needs of our building.
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