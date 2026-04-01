import { Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className="bg-white">

      <Row className="w-100 m-0 align-items-center">

        {/* TEXT SECTION */}
        <Col xs={12} lg={6} className="px-4 py-4">

          <h2 className="fw-bold mb-3" style={{ color: "#111827" }}>
            Welcome
          </h2>

          <h4 className="mb-2" style={{ color: "#1f2937" }}>
            United Church of Norwood
          </h4>

          <p className="text-muted mb-3">
            Evangelical Free Church of America
          </p>

          <p className="mb-3" style={{ color: "#374151", lineHeight: "1.6" }}>
            You can follow us on Facebook and watch our live-stream service every Sunday morning at 10:00 a.m.
          </p>

          <a
            href="https://www.facebook.com/unitedchurchofnorwood/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#1f3a5f", fontWeight: "600" }}
          >
            Watch on Facebook →
          </a>

          <hr className="my-4" />

          <p className="mb-0" style={{ color: "#374151" }}>
            For more information about the Evangelical Free Church of America and helpful resources:
          </p>

          <a
            href="https://www.efca.org/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#1f3a5f" }}
          >
            www.efca.org
          </a>

        </Col>

        {/* IMAGE SECTION */}
        <Col xs={12} lg={6} className="p-0">
          <Image
            src="/images/home.jpeg"
            className="w-100"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </Col>

      </Row>

    </div>
  );
};

export default Home;