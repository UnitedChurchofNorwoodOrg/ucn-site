import { Row, Col, Image } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="bg-white">

      <Row className="w-100 m-0 align-items-start">

        {/* TEXT SECTION */}
        <Col xs={12} lg={6} className="px-4 py-4">

          <h2 className="fw-bold mb-3" style={{ color: "#111827" }}>
            About Us
          </h2>

          <p style={{ color: "#374151", lineHeight: "1.6" }}>
            The United Church of Norwood is an interdenominational fellowship of Christians. 
            We are committed to sharing God's love and grace as revealed in the Bible and through 
            His Son, our Lord and Savior, Jesus Christ.
          </p>

          <p style={{ color: "#374151", lineHeight: "1.6" }}>
            We pray that worshipping with us will give you comfort and strength to meet your needs. 
            Please call on us if we can minister to you in any way.
          </p>

          <h5 className="mt-4 mb-2" style={{ color: "#1f2937" }}>
            Our Congregation
          </h5>
          <p style={{ color: "#374151" }}>
            We are a friendly and caring congregation who would love to have you join us as we worship the Lord.
          </p>

          <h5 className="mt-4 mb-2" style={{ color: "#1f2937" }}>
            Our Building
          </h5>
          <p style={{ color: "#374151" }}>
            The cornerstone for our historic building was laid in 1885. It has been alive with worship ever since.
          </p>

          <h5 className="mt-4 mb-2" style={{ color: "#1f2937" }}>
            Norwood, Massachusetts
          </h5>
          <p style={{ color: "#374151" }}>
            Norwood, Massachusetts, located approximately 12 miles southwest of Boston, is home to over 29,000 residents. 
            Named after Norwood, England, the area was first settled by Ezra Morse in 1678 and officially formed in 1872.
          </p>

        </Col>

        {/* IMAGE SECTION */}
        <Col xs={12} lg={6} className="p-0">
          <Image
            src="/images/aboutus.jpg"
            className="w-100"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </Col>

      </Row>

    </div>
  );
};

export default AboutUs;