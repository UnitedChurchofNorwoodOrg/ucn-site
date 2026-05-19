import "./NewsTicker.scss";
import siteContent from "../../../content/englishSiteContent";

const NewsTicker = () => {
  const content = siteContent.newsTicker;

  // =========================================================
  // ✨ RENDER TICKER CONTENT
  // =========================================================
  const renderTickerContent = () => (
    <>
      {content.items.map((item, index) => {

        let link = null;
        let linkText = null;
        let plainText = item;

        // =====================================================
        // 🇺🇸 ENGLISH FACEBOOK LINK
        // =====================================================
        if (item.includes("Follow us on Facebook")) {
          link = content.links.englishFacebook;

          linkText = "Facebook";

          plainText =
            item.replace("Facebook", "");
        }

        // =====================================================
        // 🇪🇸 SPANISH FACEBOOK LINK
        // =====================================================
        if (item.includes("Síguenos en Facebook")) {
          link = content.links.spanishFacebook;

          linkText = "Facebook";

          plainText =
            item.replace("Facebook", "");
        }

        return (
          <span key={index}>

            {/* ================================================= */}
            {/* 🔗 PARTIAL LINK ONLY ON "FACEBOOK" */}
            {/* ================================================= */}
            {link ? (
              <>
                {plainText}

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ticker-link"
                >
                  {linkText}
                </a>
              </>
            ) : (
              item
            )}

            {/* ✦ SEPARATOR */}
            &nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;

          </span>
        );
      })}
    </>
  );

  // =========================================================
  // 🖥 COMPONENT UI
  // =========================================================
  return (
    <div className="news-ticker-wrapper">

      <div className="news-ticker-track">

        {/* =================================================== */}
        {/* 🔁 ORIGINAL TICKER */}
        {/* =================================================== */}
        <div className="news-ticker-item">
          {renderTickerContent()}
        </div>

        {/* =================================================== */}
        {/* 🔁 DUPLICATE FOR SMOOTH LOOP */}
        {/* =================================================== */}
        <div className="news-ticker-item">
          {renderTickerContent()}
        </div>

      </div>
    </div>
  );
};

export default NewsTicker;