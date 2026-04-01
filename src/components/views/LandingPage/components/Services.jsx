import { Row, Col, Image } from "react-bootstrap";

const Services = () => {
  return (
    <div className="bg-white px-3 py-3">

      <Row className="w-100 m-0 align-items-start">

        {/* TEXT SECTION */}
        <Col xs={12} lg={6} className="px-4 py-4">

          <h2 className="fw-bold mb-3" style={{ color: "#111827" }}>
            What to Expect
          </h2>

          <p style={{ color: "#374151", lineHeight: "1.6" }}>
            Whether you're just beginning your Christian journey or have been a believer for years, 
            we want you to feel comfortable and spiritually nourished here.
          </p>

          <p style={{ color: "#374151", lineHeight: "1.6" }}>
            If you're thinking about visiting us, here’s what our service is like:
          </p>

          {/* Q&A SECTIONS */}

          <div className="mt-4">
            <h5 style={{ color: "#1f2937" }}>How long is the service?</h5>
            <p style={{ color: "#374151" }}>
              Our Sunday morning service begins at 10:00 and concludes at 11:00.
            </p>
          </div>

          <div className="mt-3">
            <h5 style={{ color: "#1f2937" }}>What kind of message will I hear?</h5>
            <p style={{ color: "#374151" }}>
              You will hear a Bible-based, inspirational message designed to encourage, teach, 
              and help us navigate daily life.
            </p>
          </div>

          <div className="mt-3">
            <h5 style={{ color: "#1f2937" }}>What should I wear?</h5>
            <p style={{ color: "#374151" }}>
              There is no dress code, so wear what you're comfortable in. 
              Some attend casually, while others dress more formally.
            </p>
          </div>

          <div className="mt-3">
            <h5 style={{ color: "#1f2937" }}>What is the music like?</h5>
            <p style={{ color: "#374151" }}>
              Our service features a blended mix of praise songs, traditional hymns, and gospel music. 
              The choir sings weekly from September through June and monthly during summer.
            </p>
          </div>

          <div className="mt-3">
            <h5 style={{ color: "#1f2937" }}>What about children?</h5>
            <p style={{ color: "#374151" }}>
              Sunday School is available during the service for children ages 4 and up.
            </p>
            <p style={{ color: "#374151" }}>
              A church parlor near the sanctuary is also available for children of all ages, 
              with an audio feed of the service, toys, and books.
            </p>
          </div>

        </Col>

        {/* IMAGE SECTION */}
        <Col xs={12} lg={6} className="p-0">
          <Image
            src="/images/services.jpg"
            className="w-100"
            style={{
              height: "100%",
              objectFit: "cover"
            }}
          />
        </Col>

      </Row>

    </div>
  );
};

export default Services;