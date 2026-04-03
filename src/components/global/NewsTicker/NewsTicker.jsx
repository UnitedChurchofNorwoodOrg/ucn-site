import "./NewsTicker.scss";

const NewsTicker = () => {
  return (
    <div className="news-ticker-wrapper">
      <div className="news-ticker-track">

        <div className="news-ticker-item">
          ✝️ Good Friday — 7:30 PM joint service ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          🌅 Easter Sunrise — 6:30 AM (Church Lawn) ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          ⛪ Easter Worship — 10:00 AM (No Coffee) ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          🌎 Spanish Worship — Sunday 12:00 PM ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          📺 Join us live on{" "}
          <a
            href="https://www.facebook.com/unitedchurchofnorwood/"
            target="_blank"
            rel="noopener noreferrer"
            className="ticker-link"
          >
            Facebook
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;
        </div>

        {/* DUPLICATE FOR SEAMLESS LOOP */}
        <div className="news-ticker-item">
          ✝️ Good Friday — 7:30 PM joint service ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          🌅 Easter Sunrise — 6:30 AM (Church Lawn) ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          ⛪ Easter Worship — 10:00 AM (No Coffee) ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          🌎 Spanish Worship — Sunday 12:00 PM ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          📺 Join us live on{" "}
          <a
            href="https://www.facebook.com/unitedchurchofnorwood/"
            target="_blank"
            rel="noopener noreferrer"
            className="ticker-link"
          >
            Facebook
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;
        </div>

      </div>
    </div>
  );
};

export default NewsTicker;