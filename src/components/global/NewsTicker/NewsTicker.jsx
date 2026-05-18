import "./NewsTicker.scss";
import siteContent from "../../../content/englishSiteContent";

const NewsTicker = () => {
  const content = siteContent.newsTicker;

  const renderTickerContent = () => (
    <>
      {content.items.map((item, index) => {
        let link = null;

        if (item.includes("Follow us on Facebook")) {
          link = content.links.englishFacebook;
        }

        if (item.includes("Síguenos en Facebook")) {
          link = content.links.spanishFacebook;
        }

        return (
          <span key={index}>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="ticker-link"
              >
                {item}
              </a>
            ) : (
              item
            )}

            &nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        );
      })}
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