import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";


// Layout Components
import Footer from "./layout/Footer";

// Global Components
import NewsTicker from "./global/NewsTicker/NewsTicker";
import UpcomingEvents from "./global/Calendar/UpcomingEvents";

// Content
import englishSiteContent from "../content/englishSiteContent";

const RootLanding = () => {

  // =========================================================
  // 🌍 CONTENT
  // =========================================================
  const {
    hero,
    scripture,
    buttons,  
    video,
    events
  } = englishSiteContent.rootLanding;

const defaultVerse = scripture.defaultVerse;
const {
  title,
  spanishTitle,
  statementOfFaith,
  welcomeMessage
} = hero;

const {
  heading: scriptureHeading
} = scripture;

const {
  english,
  spanish
} = buttons;

const {
  heading: videoHeading,
  playButtonText
} = video;

const {
  heading: eventsHeading
} = events;

  // =========================================================
  // ✨ BUTTON INTERACTION STATES
  // =========================================================
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);
  const [verse, setVerse] = useState(null);
  const [latestVideo, setLatestVideo] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/10nyBWh6DLly6_Woe5oANxFetBRPR71RnkNEy5PQ23q4/Form%20Responses%201"
    )
      .then((res) => res.json())
	  .then((data) => {
	    if (data.length > 0) {
	      const latest = data[data.length - 1];

	      if (
	        latest?.["Facebook Reel URL"]?.trim() &&
	        latest?.["Video Title "]?.trim()
	      ) {
	        setLatestVideo(latest);
	        setShowVideo(false);
	      }
	    }
	  })
      .catch((err) =>
        console.error("Video load error:", err)
      );
  }, []);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1EatdRH4Ox9OVZEPS0kC1fw4iRBzvdN49FzE4N-a4NQ0/Form%20Responses%201"
    )
      .then((res) => res.json())
      .then((data) => {
        const latest = data[data.length - 1];
        setVerse(latest);
      })
      .catch((err) =>
        console.error("Scripture load error:", err)
      );
  }, []);

  // =========================================================
  // 🎨 STYLES
  // =========================================================
  const styles = {

    // =========================================================
    // 🌄 HERO BACKGROUND
    // =========================================================
    container: {
      minHeight: "100vh",

      backgroundImage:
        `url(${process.env.PUBLIC_URL}/images/home.jpeg)`,

      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      textAlign: "center",

      padding: "24px",

      position: "relative",

      overflow: "hidden"
    },

    // =========================================================
    // 🌫 LIGHT OVERLAY
    // =========================================================
    overlayBg: {
      position: "absolute",
      inset: 0,

      background: `
        linear-gradient(
          to bottom,
          rgba(8,15,28,0.18),
          rgba(8,15,28,0.05)
        )
      `,

      zIndex: 0
    },

    // =========================================================
    // ✨ GLASS CARD
    // =========================================================
    content: {
      position: "relative",
      zIndex: 2,

      width: "100%",
      maxWidth: "650px",

      padding: "36px 30px",

      borderRadius: "28px",

      background: `
        linear-gradient(
          to bottom right,
          rgba(255,255,255,0.10),
          rgba(255,255,255,0.04)
        )
      `,

      border: "1px solid rgba(255,255,255,0.18)",

      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",

      boxShadow: `
        0 18px 45px rgba(0,0,0,0.18),
        inset 0 1px 0 rgba(255,255,255,0.08)
      `
    },

    // =========================================================
    // ✨ LOGO WRAPPER
    // =========================================================
    logoWrapper: {
      position: "relative",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      marginBottom: "22px",

      isolation: "isolate"
    },

    // =========================================================
    // 🌅 SOFT GLOW
    // =========================================================
	logoGlow: {
	  position: "absolute",

	  width: "140px",
	  height: "140px",

	  borderRadius: "50%",

	  background: `
	    radial-gradient(
	      circle,
	      rgba(255,255,255,1.0) 0%,
	      rgba(255,255,255,0.92) 24%,
	      rgba(255,255,255,0.62) 48%,
	      rgba(255,255,255,0.00) 84%
	    )
	  `,

	  filter: "blur(10px)",

	  transform: "translateY(-3px)",

	  opacity: 1,

	  zIndex: 0,

	  animation: "logoPulse 4s ease-in-out infinite"
	},

    // =========================================================
    // ⛪ LOGO
    // =========================================================
    logo: {
      position: "relative",

      height: "88px",
      width: "auto",

      display: "block",

      zIndex: 2,

      filter: `
        brightness(1.01)
        contrast(1.10)
        saturate(1.03)
        drop-shadow(0 3px 10px rgba(0,0,0,0.28))
      `
    },

    // =========================================================
    // 📖 SUBTITLE
    // =========================================================
    subtitle: {
      fontSize: "1rem",

      fontWeight: "600",

      color: "#ffffff",

      marginBottom: "12px",

      letterSpacing: "0.18px",

      textShadow: `
        0 2px 5px rgba(0,0,0,0.65)
      `
    },

    // =========================================================
    // 🤝 WELCOME MESSAGE
    // =========================================================
    welcomeMessage: {
      fontSize: "0.98rem",

      lineHeight: "1.72",

      fontWeight: "400",

      color: "rgba(255,255,255,0.96)",

      marginTop: "16px",

      marginBottom: "12px",

      maxWidth: "540px",

      marginLeft: "auto",
      marginRight: "auto",

      fontStyle: "italic",

      letterSpacing: "0.16px",

      textShadow: `
        0 2px 5px rgba(0,0,0,0.55)
      `
    },

    // =========================================================
    // ✨ TAGLINES
    // =========================================================
    tagline: {
      fontSize: "0.98rem",

      lineHeight: "1.72",

      fontWeight: "500",

      color: "rgba(255,255,255,0.97)",

      marginBottom: "8px",

      textShadow: `
        0 2px 5px rgba(0,0,0,0.58)
      `
    },

    // =========================================================
    // 🔘 BUTTONS
    // =========================================================
    buttonPrimary: {
      background: `
        linear-gradient(
          to bottom,
          rgba(255,255,255,0.50),
          rgba(255,255,255,0.28)
        )
      `,

      border: hovered === "eng"
        ? "1px solid rgba(255,255,255,0.82)"
        : "1px solid rgba(255,255,255,0.56)",

      borderRadius: "22px",

      padding: "16px 20px",

      minHeight: "92px",

      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",

      boxShadow:
        hovered === "eng"
          ? `
            0 18px 38px rgba(0,0,0,0.28),
            0 0 30px rgba(255,255,255,0.34),
            0 0 58px rgba(255,255,255,0.12),
            inset 0 1px 0 rgba(255,255,255,0.32)
          `
          : `
            0 14px 28px rgba(0,0,0,0.24),
            0 0 18px rgba(255,255,255,0.12),
            inset 0 1px 0 rgba(255,255,255,0.24)
          `,

      transform:
        active === "eng"
          ? "scale(0.97)"
          : hovered === "eng"
          ? "translateY(-4px)"
          : "scale(1)",

      transition: "all 0.18s ease",

      cursor: "pointer",

	  animation:
	    hovered === "eng"
	      ? "none"
	      : "pulseGlow 3.4s ease-in-out infinite"
    },

    buttonSecondary: {
      background: `
        linear-gradient(
          to bottom,
          rgba(255,255,255,0.50),
          rgba(255,255,255,0.28)
        )
      `,

      border: hovered === "spa"
        ? "1px solid rgba(255,255,255,0.82)"
        : "1px solid rgba(255,255,255,0.56)",

      borderRadius: "22px",

      padding: "16px 20px",

      minHeight: "92px",

      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",

      boxShadow:
        hovered === "spa"
          ? `
            0 18px 38px rgba(0,0,0,0.28),
            0 0 30px rgba(255,255,255,0.34),
            0 0 58px rgba(255,255,255,0.12),
            inset 0 1px 0 rgba(255,255,255,0.32)
          `
          : `
            0 14px 28px rgba(0,0,0,0.24),
            0 0 18px rgba(255,255,255,0.12),
            inset 0 1px 0 rgba(255,255,255,0.24)
          `,

      transform:
        active === "spa"
          ? "scale(0.97)"
          : hovered === "spa"
          ? "translateY(-4px)"
          : "scale(1)",

      transition: "all 0.18s ease",

      cursor: "pointer",

	  animation:
	    hovered === "spa"
	      ? "none"
	      : "pulseGlow 3.4s ease-in-out infinite",

	  animationDelay: "1s"
    },

    // =========================================================
    // 📅 EVENTS
    // =========================================================
	
    calendarBox: {
      marginTop: "22px",

      background: `
        linear-gradient(
          to bottom,
          rgba(255,255,255,0.92),
          rgba(255,255,255,0.84)
        )
      `,

      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",

      border: "1px solid rgba(255,255,255,0.50)",

      borderRadius: "18px",

      padding: "18px",

      width: "100%",

      boxShadow: `
        0 10px 22px rgba(0,0,0,0.14)
      `,

      color: "#111827"
    },

    eventTitle: {
      marginBottom: "12px",

      color: "#111827",

      fontWeight: "600",

      fontSize: "1.02rem"
    }
  };
  const scriptureText =
    verse?.["Add Bible Scripture Text "] ||
    defaultVerse.text;

  const scriptureReference =
    verse?.["Add Bible Scripture Reference "] ||
    defaultVerse.reference;

  const translation =
    verse?.["Add Bible Translation  (Optional)"]?.trim() || "";

  const pastorMessage =
    verse?.["Add Pastor's Message  (Optional)"] ||
    defaultVerse.message;
	
	const reelUrl =
	  latestVideo?.["Facebook Reel URL"] || "";

	const embedUrl = reelUrl
	  ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
	      reelUrl
	    )}&show_text=false`
	  : "";
	  const hasValidVideo =
	    latestVideo &&
	    latestVideo?.["Facebook Reel URL"]?.trim() &&
	    latestVideo?.["Video Title "]?.trim() &&
	    embedUrl;
	
  return (
	
    <>
      <NewsTicker />

      <div style={styles.container}>

        {/* 🌫 OVERLAY */}
        <div style={styles.overlayBg} />

        {/* ✨ MAIN CARD */}
        <div style={styles.content}>

          {/* ⛪ LOGO */}
          <div style={styles.logoWrapper}>

            <div style={styles.logoGlow} />

            <img
              src={process.env.PUBLIC_URL + "/images/UNCLogoTrans1.png"}
              alt="Church Logo"
              style={styles.logo}
            />
          </div>

          {/* 🏛 TITLES */}
          <div style={{ marginBottom: "18px" }}>

		  <div
		    style={{
		      fontFamily:
		        "'Cormorant Garamond', 'Playfair Display', serif",

		      fontSize: "1.72rem",

		      fontWeight: "500",

		      color: "#ffffff",

		      lineHeight: "1.1",

		      textShadow: `
		        0 0 10px rgba(22,50,79,1),
		        0 0 20px rgba(22,50,79,0.95),
		        0 0 35px rgba(22,50,79,0.85),
		        0 0 55px rgba(22,50,79,0.65),
		        0 3px 8px rgba(0,0,0,0.70)
		      `
		    }}
		  >
		   {title}
		  </div>

            <div
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', serif",

                fontSize: "1.38rem",

                fontWeight: "400",

                fontStyle: "italic",

                color: "rgba(255,255,255,0.95)",

                marginTop: "4px",

                lineHeight: "1.1"
              }}
            >
            {spanishTitle}
            </div>

          </div>

          {/* 📖 SUBTITLE */}
          <p style={styles.subtitle}>
            <a
              href={statementOfFaith.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffff",

                textDecoration: "none",

                borderBottom:
                  "1px solid rgba(255,255,255,0.76)",

                paddingBottom: "2px",

                transition: "all 0.2s ease",

                fontWeight: "600",

                cursor: "pointer"
              }}
            >
              {statementOfFaith.text}
            </a>
          </p>

          {/* 🤝 MESSAGE */}
          <p style={styles.welcomeMessage}>
           {welcomeMessage}
          </p>
		  <div
		    style={{
		      marginTop: "20px",
		      marginBottom: "18px",

		      background: `
		        linear-gradient(
		          to bottom,
		          rgba(255,255,255,0.72),
		          rgba(255,255,255,0.55)
		        )
		      `,

		      border: "1px solid rgba(255,255,255,0.65)",

		      borderRadius: "22px",

		      padding: "18px 20px",

		      backdropFilter: "blur(12px)",
		      WebkitBackdropFilter: "blur(12px)",

		      boxShadow: `
		        0 14px 28px rgba(0,0,0,0.24),
		        inset 0 1px 0 rgba(255,255,255,0.24)
		      `
		    }}
		  >
		  <div
		    style={{
		       fontSize: "0.90rem",
		      fontWeight: "700",
		      textTransform: "uppercase",
		      letterSpacing: "1.0px",
		      color: "#8B6F47",
		      marginBottom: "10px"
		    }}
		  >
		   {scriptureHeading}
		  </div>

		  <div
		    style={{
		      fontSize: "0.92rem",
		      lineHeight: "1.8",
		      fontStyle: "italic",
		      color: "#16324f",
		      marginBottom: "10px"
		    }}
		  >
		    "{scriptureText}"
		  </div>

		  <div
		    style={{
				fontSize: "0.84rem",
				fontWeight: "600",
				color: "#16324f",
				marginBottom: "8px"
		    }}
		  >
		    {scriptureReference}
		    {translation ? ` (${translation})` : ""}
		  </div>

		  <div
		    style={{
				fontSize: "0.80rem",
				color: "#4b5563",
				lineHeight: "1.55",
				marginTop: "4px"
		    }}
		  >
		    {pastorMessage}
		  </div>
		  </div>
          {/* 🔘 BUTTONS */}
          <div
            className="
              d-flex
              flex-column
              flex-md-row
              gap-3
              mt-4
              w-100
            "
          >

            {/* 🇺🇸 ENGLISH */}
           <Link to={english.route}
              className="w-100 text-decoration-none"
            >
              <Button
                style={styles.buttonPrimary}
                className="w-100"

                onMouseEnter={() => setHovered("eng")}
                onMouseLeave={() => setHovered(null)}

                onMouseDown={() => setActive("eng")}
                onMouseUp={() => setActive(null)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                    fontSize: "0.98rem",

                    fontWeight: "700",

                    color: "#16324f",
                  }}
                >
                  <span>
                  {english.text}
                  </span>

                  <span
                    style={{
                      transform:
                        hovered === "eng"
                          ? "translateX(4px)"
                          : "translateX(0px)",

                      transition: "all 0.25s ease"
                    }}
                  >
                    →
                  </span>
                </div>
              </Button>
            </Link>

            {/* 🇪🇸 SPANISH */}
           <Link to={spanish.route}
              className="w-100 text-decoration-none"
            >
              <Button
                style={styles.buttonSecondary}
                className="w-100"

                onMouseEnter={() => setHovered("spa")}
                onMouseLeave={() => setHovered(null)}

                onMouseDown={() => setActive("spa")}
                onMouseUp={() => setActive(null)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                    fontSize: "0.98rem",

                    fontWeight: "700",

                    color: "#16324f",
                  }}
                >
                  <span>
                    {spanish.text}
                  </span>

                  <span
                    style={{
                      transform:
                        hovered === "spa"
                          ? "translateX(4px)"
                          : "translateX(0px)",

                      transition: "all 0.25s ease"
                    }}
                  >
                    →
                  </span>
                </div>
              </Button>
            </Link>
          </div>
		  
		
		  {/* VIDEO STREAM FROM FACEBOOK */}
		  {hasValidVideo && (
		    <div
		      style={{
		        marginTop: "22px",
		        background:
		          "linear-gradient(to bottom, rgba(255,255,255,0.92), rgba(255,255,255,0.84))",
		        borderRadius: "18px",
		        padding: "18px",
				color: "#16324f",
		        boxShadow: "0 10px 22px rgba(0,0,0,0.14)",
		        textAlign: "center"
		      }}
		    >
			<div
			  style={{
			    fontSize: "0.90rem",
			    fontWeight: "700",
			    textTransform: "uppercase",
			    letterSpacing: "1.0px",
			    color: "#8B6F47",
			    marginBottom: "12px"
			  }}
			>
			{videoHeading}
			</div>

		      <div
		        style={{
		          fontWeight: "600",
		          marginBottom: "16px"
				  
		        }}
		      >
		        {latestVideo["Video Title "]}
		      </div>

			  <div
			  style={{
			    maxWidth: "360px",
			    width: "100%",
			    margin: "0 auto",
			    aspectRatio: "9 / 16",
			    backgroundColor: "#000",
			    borderRadius: "12px",
			    overflow: "hidden",
			    position: "relative"
			  }}
			  >
		        {showVideo ? (
					<iframe
					  src={embedUrl}
					  width="100%"
					  height="100%"
					  style={{
					    border: "none",
					    borderRadius: "12px",
					    backgroundColor: "#000"
					  }}
					  scrolling="no"
					  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
					  allowFullScreen
					  title="Latest Pastor Message"
					/>
		        ) : (
		          <div
				  onClick={() => {
				    setShowVideo(true);
				  }}
				  style={{
				    width: "100%",
				    height: "100%",
				    position: "relative",
				    cursor: "pointer",
				    overflow: "hidden",
				    borderRadius: "12px",
				    backgroundColor: "#000"
				  }}
		          >
		            {/* Church Background Image */}
					<img
					  src={process.env.PUBLIC_URL + "/images/home.jpeg"}
					  alt="Pastor Message"
					  style={{
					    width: "100%",
					    height: "100%",
					    objectFit: "cover",
					    display: "block"
					  }}
					/>

		            {/* Dark Overlay */}
		            <div
		              style={{
		                position: "absolute",
		                inset: 0,
		                background:
		                  "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.35))"
		              }}
		            />

		            {/* Play Button */}
		            <div
		              style={{
		                position: "absolute",
		                top: "50%",
		                left: "50%",
		                transform: "translate(-50%, -50%)",
		                width: "90px",
		                height: "90px",
		                borderRadius: "50%",
		                background: "rgba(255,255,255,0.92)",
		                display: "flex",
		                alignItems: "center",
		                justifyContent: "center",
		                boxShadow: "0 8px 25px rgba(0,0,0,0.35)"
		              }}
		            >
		              <span
		                style={{
		                  color: "#16324f",
		                  fontSize: "42px",
		                  marginLeft: "6px"
		                }}
		              >
		                ▶
		              </span>
		            </div>

		            {/* Optional Caption */}
		            <div
		              style={{
		                position: "absolute",
		                bottom: "16px",
		                left: "0",
		                right: "0",
		                color: "#fff",
		                fontWeight: "600",
		                fontSize: "0.9rem",
		                textShadow: "0 2px 6px rgba(0,0,0,0.7)"
		              }}
		            >
		             {playButtonText}
		            </div>
		          </div>
		        )}
		      </div>
		    </div>
		  )}
          {/* 📅 EVENTS */}
          <div style={styles.calendarBox}>

            <h5 style={styles.eventTitle}>
             {eventsHeading}
            </h5>

            <UpcomingEvents />
			
          </div>
		  {/* 🚀 QUICK LINKS */}

		  <div style={styles.calendarBox}>

		    <div
		      style={{
		        fontSize: "0.90rem",
		        fontWeight: "700",
		        textTransform: "uppercase",
		        letterSpacing: "1.0px",
		        color: "#8B6F47",
		        marginBottom: "16px",
		        textAlign: "center",
		      }}
		    >
		      🚀 Quick Links
		    </div>

			<div
			  className="
			    d-flex
			    flex-column
			    flex-md-row
			    gap-3
			    w-100
			  "
			>

			  {/* English Giving */}
			  <Button
			    href="https://givebutter.com/unitedchurchofnorwood"
			    target="_blank"
			    rel="noopener noreferrer"
			    className="w-100"
			    style={{
			      ...styles.buttonPrimary,
			      minHeight: "64px",
			      padding: "12px 18px",
			      animation: "none",
			    }}
			  >
			    <div
			      style={{
			        display: "flex",
			        alignItems: "center",
			        justifyContent: "space-between",
			        color: "#16324f",
			        fontSize: "0.96rem",
			        fontWeight: "700",
			        lineHeight: "1.2",
			      }}
			    >
			      <span>💙 Give Securely Online</span>
			      </div>
			  </Button>

			  {/* Spanish Giving */}
			  <Button
			    href="https://givebutter.com/iglesiacristianadenorwood"
			    target="_blank"
			    rel="noopener noreferrer"
			    className="w-100"
			    style={{
			      ...styles.buttonSecondary,
			      minHeight: "64px",
			      padding: "12px 18px",
			      animation: "none",
			    }}
			  >
			    <div
			      style={{
			        display: "flex",
			        alignItems: "center",
			        justifyContent: "space-between",
			        color: "#16324f",
			        fontSize: "0.96rem",
			        fontWeight: "700",
			        lineHeight: "1.2",
			      }}
			    >
			      <span>❤️ Donaciones en Línea</span>			      
			    </div>
			  </Button>

			</div>

		  </div>
        </div>
		
		
      </div>

      {/* ✨ PULSING GLOW ANIMATION */}
      <style>
        {`
          @keyframes pulseGlow {

            0% {
              box-shadow:
                0 14px 28px rgba(0,0,0,0.24),
                0 0 10px rgba(255,255,255,0.08),
                0 0 0 rgba(255,255,255,0.00),
                inset 0 1px 0 rgba(255,255,255,0.22);

              transform: scale(1);
            }

            50% {
              box-shadow:
                0 22px 44px rgba(0,0,0,0.32),
                0 0 42px rgba(255,255,255,0.48),
                0 0 72px rgba(255,255,255,0.20),
                inset 0 1px 0 rgba(255,255,255,0.38);

              transform: scale(1.025);
            }

            100% {
              box-shadow:
                0 14px 28px rgba(0,0,0,0.24),
                0 0 10px rgba(255,255,255,0.08),
                0 0 0 rgba(255,255,255,0.00),
                inset 0 1px 0 rgba(255,255,255,0.22);

              transform: scale(1);
            }
          }
		  @keyframes logoPulse {
		    0% {
		      transform: translateY(-3px) scale(1);
		      opacity: 0.85;
		    }

		    50% {
		      transform: translateY(-3px) scale(1.15);
		      opacity: 1;
		    }

		    100% {
		      transform: translateY(-3px) scale(1);
		      opacity: 0.85;
		    }
		  }
        `}
      </style>

      <Footer />
    </>
  );
};

export default RootLanding;