import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import englishSiteContent from "../../../../content/englishSiteContent";

const TOTAL_PHOTOS = 150;

const Photos = () => {
  const { photos } = englishSiteContent;
  const [validImages, setValidImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const list = Array.from(
        { length: TOTAL_PHOTOS },
        (_, i) => `p${TOTAL_PHOTOS - i}.jpg` // 🔥 reverse order here
      );

      const checks = list.map(
        (file) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = process.env.PUBLIC_URL + "/images/photos/" + file;
            img.onload = () => resolve(file);
            img.onerror = () => resolve(null);
          })
      );

      const results = await Promise.all(checks);
      setValidImages(results.filter(Boolean)); // ✅ remove missing images
    };

    loadImages();
  }, []);

  return (
    <div className="bg-white px-3 py-3">

      <h2 className="fw-bold mb-4" style={{ color: "#111827" }}>
        {photos.title}
      </h2>

      <Row className="g-3">
        {validImages.map((file, index) => (
          <Col xs={12} key={index}>
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                background: "#f3f4f6",
                marginBottom: "10px"
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/photos/" + file}
                alt={file}
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