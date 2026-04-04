import "./NewsTicker.scss";
import siteContent from "../../../content/siteContent"; // ✅ NEW

const NewsTicker = () => {
  const content = siteContent.newsTicker;

  const renderTickerContent = () => (
    <>
      {content.items.map((item, index) => (
        <span key={index}>
          {item}
          &nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      ))}

      {content.live && (
        <span>
          {content.live.text}&nbsp;
          <a
            href={content.live.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ticker-link"
          >
            {content.live.platform}
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      )}
    </>
  );

  return (
    <div className="news-ticker-wrapper">
      <div className="news-ticker-track">

        {/* ORIGINAL */}
        <div className="news-ticker-item">
          {renderTickerContent()}
        </div>

        {/* DUPLICATE FOR SMOOTH LOOP */}
        <div className="news-ticker-item">
          {renderTickerContent()}
        </div>

      </div>
    </div>
  );
};

export default NewsTicker;