import { Row, Col } from "react-bootstrap";
import englishSiteContent from "../../../../content/englishSiteContent";
const photoAlbum = require("../photos.json");

const Photos = () => {
  const { photos } = englishSiteContent;

  return (
    <div className="bg-white px-3 py-3">

      <h2 className="fw-bold mb-4" style={{ color: "#111827" }}>
        {photos.title}
      </h2>

      <Row className="g-4">
        {[...photoAlbum.photos].reverse().map((photo) => (
          <Col xs={12} key={photo}>
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                background: "#f3f4f6"
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/" + photo}
                alt={photo}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block"
                }}
              />
            </div>
          </Col>
        ))}
      </Row>

    </div>
  );
};

export default Photos;