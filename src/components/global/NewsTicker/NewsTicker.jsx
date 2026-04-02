import "./NewsTicker.scss";

const NewsTicker = () => {
  return (
    <div className="news-ticker-wrapper">
      <div className="news-ticker-track">

        <div className="news-ticker-item">
          🙏 Palm Sunday Worship — April 13 at 10:00 AM ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          ✝️ Good Friday — Sanctuary open for prayer & meditation (evening) ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          🌅 Easter Sunrise Service — April 20 at 6:30 AM (Church Lawn) ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          ⛪ Easter Resurrection Service — 10:00 AM ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          🌎 Spanish Easter Service — 12:00 PM ✦
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
          🙏 Palm Sunday Worship — April 13 at 10:00 AM ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          ✝️ Good Friday — Sanctuary open for prayer & meditation (evening) ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          🌅 Easter Sunrise Service — April 20 at 6:30 AM (Church Lawn) ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          ⛪ Easter Resurrection Service — 10:00 AM ✦
          &nbsp;&nbsp;&nbsp;&nbsp;
          🌎 Spanish Easter Service — 12:00 PM ✦
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