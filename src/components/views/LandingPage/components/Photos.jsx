import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import englishSiteContent from "../../../../content/englishSiteContent";

const TOTAL_PHOTOS = 105;
const THUMBNAILS_VISIBLE = 3;

const Photos = () => {
  const { photos } = englishSiteContent;

  const [validImages, setValidImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      const list = Array.from(
        { length: TOTAL_PHOTOS },
        (_, i) => `p${TOTAL_PHOTOS - i}.jpg`
      );

      const checks = list.map(
        (file) =>
          new Promise((resolve) => {
            const img = new Image();

            img.src =
              process.env.PUBLIC_URL +
              "/images/photos/" +
              file;

            img.onload = () => resolve(file);
            img.onerror = () => resolve(null);
          })
      );

      const results = await Promise.all(checks);

      setValidImages(results.filter(Boolean));
    };

    loadImages();
  }, []);

  const nextPhoto = () => {
    const next =
      selectedIndex < validImages.length - 1
        ? selectedIndex + 1
        : 0;

    setSelectedIndex(next);

    if (next >= thumbStart + THUMBNAILS_VISIBLE) {
      setThumbStart(next - THUMBNAILS_VISIBLE + 1);
    }
  };

  const prevPhoto = () => {
    const prev =
      selectedIndex > 0
        ? selectedIndex - 1
        : validImages.length - 1;

    setSelectedIndex(prev);

    if (prev < thumbStart) {
      setThumbStart(prev);
    }
  };

  const nextThumbs = () => {
    if (
      thumbStart + THUMBNAILS_VISIBLE <
      validImages.length
    ) {
      setThumbStart(thumbStart + 1);
    }
  };

  const prevThumbs = () => {
    if (thumbStart > 0) {
      setThumbStart(thumbStart - 1);
    }
  };

  const visibleThumbs = validImages.slice(
    thumbStart,
    thumbStart + THUMBNAILS_VISIBLE
  );

  const arrowButtonStyle = (id, disabled = false) => ({
    borderRadius: "50%",
    width: "48px",
    height: "48px",
    padding: 0,
    border: "none",
    background:
      hoveredButton === id
        ? "rgba(37, 99, 235, 0.92)"
        : "rgba(17, 24, 39, 0.82)",
    color: "#fff",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    boxShadow:
      hoveredButton === id
        ? "0 6px 18px rgba(37,99,235,0.35)"
        : "0 4px 12px rgba(0,0,0,0.18)",
    transform:
      hoveredButton === id
        ? "scale(1.08)"
        : "scale(1)",
    transition: "all 0.22s ease",
    opacity: disabled ? 0.4 : 1,
    cursor: disabled ? "default" : "pointer",
    flexShrink: 0,
    zIndex: 2
  });

  const arrowIconStyle = {
    position: "relative",
    top: "-2px"
  };

  return (
    <div
      className="bg-white px-2 px-md-3 py-3"
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        overflow: "hidden"
      }}
    >
      <h2
        className="fw-bold mb-4 text-center"
        style={{ color: "#111827" }}
      >
        {photos.title}
      </h2>

      {validImages.length > 0 && (
        <>
          {/* Main Image */}
          <div
            style={{
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              background: "#f8fafc",
              boxShadow:
                "0 4px 14px rgba(0,0,0,0.08)",
              marginBottom: "22px",
              width: "100%",
              height: "clamp(260px, 65vw, 560px)"
            }}
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/photos/" +
                validImages[selectedIndex]
              }
              alt="Church Gallery"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center",
                display: "block"
              }}
            />

            {/* Main Previous */}
            <Button
              onClick={prevPhoto}
              onMouseEnter={() =>
                setHoveredButton("main-prev")
              }
              onMouseLeave={() =>
                setHoveredButton(null)
              }
              style={{
                ...arrowButtonStyle("main-prev"),
                position: "absolute",
                top: "50%",
                left: "14px",
                transform:
                  hoveredButton === "main-prev"
                    ? "translateY(-50%) scale(1.08)"
                    : "translateY(-50%) scale(1)"
              }}
            >
              <span style={arrowIconStyle}>‹</span>
            </Button>

            {/* Main Next */}
            <Button
              onClick={nextPhoto}
              onMouseEnter={() =>
                setHoveredButton("main-next")
              }
              onMouseLeave={() =>
                setHoveredButton(null)
              }
              style={{
                ...arrowButtonStyle("main-next"),
                position: "absolute",
                top: "50%",
                right: "14px",
                transform:
                  hoveredButton === "main-next"
                    ? "translateY(-50%) scale(1.08)"
                    : "translateY(-50%) scale(1)"
              }}
            >
              <span style={arrowIconStyle}>›</span>
            </Button>
          </div>

          {/* Thumbnail Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
              overflow: "hidden"
            }}
          >
            {/* Thumbnail Prev */}
            <button
              onClick={prevThumbs}
              disabled={thumbStart === 0}
              onMouseEnter={() =>
                setHoveredButton("thumb-prev")
              }
              onMouseLeave={() =>
                setHoveredButton(null)
              }
              style={arrowButtonStyle(
                "thumb-prev",
                thumbStart === 0
              )}
            >
              <span style={arrowIconStyle}>‹</span>
            </button>

            {/* Thumbnails */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                width: "100%"
              }}
            >
              {visibleThumbs.map((file, index) => {
                const actualIndex =
                  thumbStart + index;

                return (
                  <div
                    key={actualIndex}
                    onClick={() =>
                      setSelectedIndex(actualIndex)
                    }
                    style={{
                      flex: 1,
                      minWidth: 0,
                      maxWidth: "180px",
                      height: "95px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      cursor: "pointer",
                      border:
                        selectedIndex === actualIndex
                          ? "4px solid #2563eb"
                          : "2px solid #d1d5db",
                      transition: "all 0.2s ease",
                      boxShadow:
                        selectedIndex === actualIndex
                          ? "0 0 12px rgba(37,99,235,0.35)"
                          : "0 2px 6px rgba(0,0,0,0.08)",
                      background: "#f8fafc"
                    }}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/photos/" +
                        file
                      }
                      alt={file}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block"
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Thumbnail Next */}
            <button
              onClick={nextThumbs}
              disabled={
                thumbStart +
                  THUMBNAILS_VISIBLE >=
                validImages.length
              }
              onMouseEnter={() =>
                setHoveredButton("thumb-next")
              }
              onMouseLeave={() =>
                setHoveredButton(null)
              }
              style={arrowButtonStyle(
                "thumb-next",
                thumbStart +
                  THUMBNAILS_VISIBLE >=
                  validImages.length
              )}
            >
              <span style={arrowIconStyle}>›</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Photos;