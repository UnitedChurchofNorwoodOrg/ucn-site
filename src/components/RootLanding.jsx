import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "./layout/Footer";   // ✅ shared footer

const RootLanding = () => {
  console.log("ROOT LANDING LOADED");

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundImage: "url(/images/home.jpeg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",   // ✅ pushes footer down
      alignItems: "center",
      textAlign: "center",
      color: "white",
      padding: "20px"
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      padding: "40px",
      borderRadius: "10px",
      maxWidth: "700px",
      width: "100%",
      marginTop: "auto",
      marginBottom: "auto"
    },
    button: {
      backgroundColor: "#1f3a5f",
      border: "none"
    },
    buttonOutline: {
      borderColor: "white",
      color: "white"
    }
  };

  return (
    <div style={styles.container}>

      {/* CENTER CONTENT */}
      <div style={styles.overlay}>

        <h1 className="fw-bold mb-2">
          United Church of Norwood
        </h1>

        <p className="fs-4 mb-3 fw-semibold">
          Many People, One Church
        </p>

        <p className="mb-4">
          Evangelical Free Church of America
        </p>

        <div className="d-flex flex-column flex-md-row gap-3 mt-4 w-100">

          <Link to="/english" className="w-100">
            <Button style={styles.button} className="w-100 fw-bold">
              English Congregation
            </Button>
          </Link>

          <Link to="/spanish" className="w-100">
            <Button style={styles.buttonOutline} className="w-100 fw-bold">
              Spanish Congregation
            </Button>
          </Link>

        </div>

      </div>

      {/* GLOBAL FOOTER */}
      <Footer />

    </div>
  );
};

export default RootLanding;