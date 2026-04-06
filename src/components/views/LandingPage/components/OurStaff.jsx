import { Row, Col, Image } from "react-bootstrap";
import englishSiteContent from "../../../../content/englishSiteContent";

const OurStaff = () => {
  const { ourStaff } = englishSiteContent;

  return (
    <div className="bg-white">

      <Row className="justify-content-center m-0">
        <Col xs={12} md={10} lg={8} className="px-3 px-md-0 py-5">

          {ourStaff.members.map((member, index) => (
            <div style={styles.card} key={index}>

              <div style={styles.header}>
                <Image
                  src={process.env.PUBLIC_URL + member.image}
                  alt={member.name}
                  style={styles.image}
                />

                <h5 style={styles.name}>
                  {member.name}
                </h5>
              </div>

              <p style={styles.text}>
                {member.text}
              </p>

            </div>
          ))}

        </Col>
      </Row>

    </div>
  );
};

const styles = {
  card: {
    paddingBottom: "22px",
    marginBottom: "22px",
    borderBottom: "1px solid #f1f5f9"
  },

  header: {
    textAlign: "center",
    marginBottom: "12px"
  },

  image: {
    width: "150px",
    height: "190px",
    objectFit: "contain",
    marginBottom: "10px"
  },

  name: {
    fontFamily: "Playfair Display, serif",
    color: "#1f2937",
    fontWeight: "500",
    fontSize: "1.05rem"
  },

  text: {
    color: "#374151",
    lineHeight: "1.75",
    fontSize: "15px",
    maxWidth: "620px",
    margin: "0 auto",
    textAlign: "left"
  }
};

export default OurStaff;