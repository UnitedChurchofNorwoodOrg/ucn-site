import "./NewsTicker.scss";

const NewsTicker = () => {
  return (
    <div className="news-ticker-wrapper">
      <div className="news-ticker-track">

        <div className="news-ticker-item">
          🙏 Sunday Worship Service at 10:00 AM — All are welcome ✦
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
          🙏 Sunday Worship Service at 10:00 AM — All are welcome ✦
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