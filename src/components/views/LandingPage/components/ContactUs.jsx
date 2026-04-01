import { Row, Col } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div className="bg-white px-3 py-3">

      <Row className="w-100 m-0 justify-content-center">

        <Col xs={12} md={10} lg={8} className="px-4 py-4 text-center">

          <h2 className="fw-bold mb-3" style={{ color: "#111827" }}>
            Contact Us
          </h2>

          <p style={{ color: "#374151", lineHeight: "1.6" }}>
            We would love to hear from you. Please feel free to reach out using the information below.
          </p>

          <div className="mt-4">
            <p style={{ color: "#1f2937", fontWeight: "500" }}>
              Phone: 781-762-2589
            </p>

            <p style={{ color: "#1f2937" }}>
              Email: unitedchurchofnorwood@gmail.com
            </p>
          </div>

          {/* BUTTON */}
          <div className="mt-4">
            <a
              href="https://www.google.com/maps?q=595+Washington+Street+Norwood+MA"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#1f3a5f",
                color: "white",
                padding: "10px 16px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "500"
              }}
            >
              Get Directions →
            </a>
          </div>

          {/* MAP */}
          <div className="mt-4">
            <iframe
              title="Church Location"
              src="https://www.google.com/maps?q=595+Washington+Street+Norwood+MA&output=embed"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </Col>

      </Row>

    </div>
  );
};

export default ContactUs;