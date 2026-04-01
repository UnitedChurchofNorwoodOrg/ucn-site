import { Row, Col } from "react-bootstrap";

const Ministries = () => {
  return (
    <div className="bg-white px-3 py-3">

      <h2 className="fw-bold mb-4" style={{ color: "#111827" }}>
        How You Can Serve
      </h2>

      <Row className="g-4">

        {/* MUSIC MINISTRY */}
        <Col xs={12}>
          <div className="p-3" style={{ borderBottom: "1px solid #e5e7eb" }}>
            <h5 className="mb-2" style={{ color: "#1f2937" }}>
              Music Ministry
            </h5>
            <p style={{ color: "#374151", lineHeight: "1.6" }}>
              The Worship Team leads congregational hymns and praise songs each Sunday morning. 
              If you play an instrument and feel called to serve the Lord with your music, please 
              speak to Worship Team leader, Rachel McMahon.
            </p>
            <p style={{ color: "#374151", lineHeight: "1.6" }}>
              The Choir joyfully provides special music every Sunday from September through June, 
              as well as on Communion Sundays in July and August. If you have a heart to serve God 
              in song, speak to Steve Rudolph, the choir director.
            </p>
          </div>
        </Col>

        {/* WISH */}
        <Col xs={12}>
          <div className="p-3" style={{ borderBottom: "1px solid #e5e7eb" }}>
            <h5 className="mb-2" style={{ color: "#1f2937" }}>
              WISH (Women in Service to Him)
            </h5>
            <p style={{ color: "#374151", lineHeight: "1.6" }}>
              WISH is a fellowship and service group open to all women in the church. Our mission 
              is to be a light to the world by serving others while nurturing our faith as Christian women.
            </p>
            <p style={{ color: "#374151", lineHeight: "1.6" }}>
              Activities include fundraisers supporting missions worldwide, helping with local needs, 
              brunches with our Spanish sisters, craft activities, guest speakers, and meaningful discussions 
              that strengthen friendships and faith.
            </p>
          </div>
        </Col>

        {/* CARE TEAM */}
        <Col xs={12}>
          <div className="p-3" style={{ borderBottom: "1px solid #e5e7eb" }}>
            <h5 className="mb-2" style={{ color: "#1f2937" }}>
              Congregational Care Team
            </h5>
            <p style={{ color: "#374151" }}>
              Providing for the needs of those in our church community.
            </p>
          </div>
        </Col>

        {/* HOSPITALITY */}
        <Col xs={12}>
          <div className="p-3" style={{ borderBottom: "1px solid #e5e7eb" }}>
            <h5 className="mb-2" style={{ color: "#1f2937" }}>
              Hospitality Team
            </h5>
            <p style={{ color: "#374151" }}>
              Keeping our church community connected through special times of fellowship, 
              including weekly coffee time.
            </p>
          </div>
        </Col>

        {/* BUILDING */}
        <Col xs={12}>
          <div className="p-3">
            <h5 className="mb-2" style={{ color: "#1f2937" }}>
              Building Stewards
            </h5>
            <p style={{ color: "#374151" }}>
              Giving vision to the use and care of our property and overseeing the needs of our building.
            </p>
          </div>
        </Col>

      </Row>

    </div>
  );
};

export default Ministries;