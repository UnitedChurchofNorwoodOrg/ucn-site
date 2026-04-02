import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "./layout/Footer";
import NewsTicker from "./global/NewsTicker/NewsTicker";

const RootLanding = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundImage: "url(/images/home.jpeg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px",
      position: "relative"
    },

    overlayBg: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to bottom, rgba(15,23,42,0.6), rgba(15,23,42,0.35))",
      zIndex: 0
    },

    content: {
      position: "relative",
      zIndex: 1,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      padding: "40px 30px",
      borderRadius: "16px",
      maxWidth: "640px",
      width: "100%",
      color: "#1f2937",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
    },

    logo: {
      height: "60px",
      marginBottom: "10px"
    },

    title: {
      fontFamily: "Playfair Display, serif",
      fontSize: "2rem",
      fontWeight: "600",
      marginBottom: "8px",
      letterSpacing: "0.5px"
    },

    subtitle: {
      fontSize: "1.2rem",
      fontWeight: "500",
      color: "#374151",
      marginBottom: "8px"
    },

    tagline: {
      fontSize: "0.95rem",
      color: "#6b7280"
    },

    buttonPrimary: {
      backgroundColor: "#1f3a5f",
      border: "none",
      borderRadius: "8px",
      padding: "10px"
    },

    buttonSecondary: {
      borderColor: "#1f3a5f",
      color: "#1f3a5f",
      borderRadius: "8px",
      padding: "10px"
    }
  };

  return (
    <>
      {/* 🔥 NEWS TICKER (TOP) */}
      <NewsTicker />

      {/* 🌄 HERO SECTION */}
      <div style={styles.container}>

        {/* Overlay */}
        <div style={styles.overlayBg} />

        {/* Content */}
        <div style={styles.content}>

          <img
            src="/images/UCNLogo.jpg"
            alt="Church Logo"
            style={styles.logo}
          />

          <h1 style={styles.title}>
            United Church of Norwood
          </h1>

          <p style={styles.subtitle}>
            Many People. One Church
          </p>

          <p style={styles.tagline}>
            Evangelical Free Church of America
          </p>

          {/* Buttons */}
          <div className="d-flex flex-column flex-md-row gap-3 mt-4 w-100">

            <Link to="/english" className="w-100">
              <Button style={styles.buttonPrimary} className="w-100 fw-semibold">
                English Congregation
              </Button>
            </Link>

            <Link to="/spanish" className="w-100">
              <Button
                variant="outline-dark"
                style={styles.buttonSecondary}
                className="w-100 fw-semibold"
              >
                Spanish Congregation
              </Button>
            </Link>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default RootLanding;