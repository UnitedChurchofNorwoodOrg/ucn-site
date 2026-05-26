import { useState, useEffect } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "./componentsSpanish/Home";
import AboutUs from "./componentsSpanish/AboutUs";
import MenuButton from "../../global/MenuButton/MenuButton";
import Photos from "./componentsSpanish/Photos";
import ContactUs from "./componentsSpanish/ContactUs";
import Hamburger from "hamburger-react";
import Footer from "../../layout/Footer";
import NewsTicker from "../../global/NewsTicker/NewsTicker";
import spanishSiteContent from "../../../content/spanishSiteContent";

const LandingPageSpanish = () => {
  const [tab, setTab] = useState("Inicio");
  const [openHamburger, setOpenHamburger] = useState(false);
  const [selected, setSelected] = useState("Inicio");

  const { landingPage } = spanishSiteContent;
  const menuArray = landingPage.menu;

  useEffect(() => {
    setTab("Inicio");
  }, []);

  const handleMenuClick = (value) => {
    setOpenHamburger(false);
    setTab(value);
    setSelected(value);
  };

  return (
    <>
      <div
        className="w-100 overflow-hidden position-relative"
        style={{
          backgroundImage:
            "url(" + process.env.PUBLIC_URL + "/images/UNC.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        {/* OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(20,20,20,0.55), rgba(20,20,20,0.35))",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <Row className="w-100 m-0 py-5">
            <Col xs={0} md={2} lg={3} />

            {/* MAIN CARD */}
            <Col
              xs={12}
              md={8}
              lg={6}
              className="shadow-lg px-0 mb-4 rounded-4 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.94)",
                backdropFilter: "blur(6px)",
              }}
            >
              {/* HEADER */}
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  className="pt-4 pb-3 border-bottom text-center"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/UNCLogoTrans.png"
                    }
                    alt="UCN Logo"
                    style={{
                      height: "80px",
                      marginBottom: "10px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />

                  <h2
                    style={{
                      fontFamily: "Playfair Display, serif",
                      marginBottom: "5px",
                    }}
                  >
                    {landingPage.header.title}
                  </h2>

                  <p className="text-muted mb-0">
                    {landingPage.header.subtitle}
                  </p>
                </div>
              </Link>

              {/* NEWS */}
              <NewsTicker />

              {/* MOBILE NAV */}
              <div
                className="
                  d-flex
                  d-md-none
                  overflow-auto
                  px-2
                  py-2
                  gap-2
                "
                style={{
                  background:
                    "linear-gradient(to bottom, #ffffff, #f8fafc)",
                  borderBottom: "1px solid #e5e7eb",
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                }}
              >
                {[
                  "Inicio",
                  "Sobre Nosotros",
                  "Fotos",
                  "Contáctanos",
                ].map((item) => {
                  const isActive = selected === item;

                  return (
                    <button
                      key={item}
                      onClick={() => handleMenuClick(item)}
                      style={{
                        flexShrink: 0,
                        border: "none",
                        borderRadius: "999px",
                        padding: "7px 14px",
                        minHeight: "36px",
                        background: isActive
                          ? "linear-gradient(to bottom, #1f3a5f, #27496d)"
                          : "#ffffff",
                        color: isActive ? "#ffffff" : "#1f2937",
                        fontSize: "0.82rem",
                        fontWeight: isActive ? "600" : "500",
                        letterSpacing: "0.15px",
                        whiteSpace: "nowrap",
                        boxShadow: isActive
                          ? "0 4px 10px rgba(31,58,95,0.18)"
                          : "0 1px 4px rgba(0,0,0,0.05)",
                        transition: "all 0.2s ease",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>

              {/* MOBILE TOP BAR */}
              <div
                className="d-flex align-items-center px-3 py-2 d-md-none position-relative"
                style={{
                  backgroundColor: "#f8fafc",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <Dropdown
                  show={openHamburger}
                  onToggle={setOpenHamburger}
                >
                  <Dropdown.Toggle
                    size="sm"
                    className="border-0 bg-transparent shadow-none p-0"
                  >
                    <Hamburger
                      toggled={openHamburger}
                      toggle={setOpenHamburger}
                      color="#1f2937"
                      size={22}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="w-100 shadow border-0 rounded-4 mt-2"
                    style={{
                      minWidth: "220px",
                      overflow: "hidden",
                    }}
                  >
                    {menuArray.map((item) => (
                      <Dropdown.Item
                        key={item}
                        active={selected === item}
                        onClick={() =>
                          handleMenuClick(item)
                        }
                        style={{
                          padding: "12px 18px",
                          fontWeight: "500",
                        }}
                      >
                        {item}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                {/* PAGE TITLE */}
                <p
                  className="mb-0 position-absolute start-50 translate-middle-x"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    color: "#1f2937",
                    letterSpacing: "0.5px",
                  }}
                >
                  {tab}
                </p>
              </div>

              {/* CONTENT */}
              <div className="d-flex flex-wrap">
                {/* DESKTOP SIDEBAR */}
                <div className="d-none d-md-flex flex-column col-md-3 border-end">
                  {menuArray.map((item) => (
                    <MenuButton
                      key={item}
                      setTab={setTab}
                      tab={item}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  ))}
                </div>

                {/* MAIN CONTENT */}
                <div className="col-12 col-md-9 px-3 py-4">
                  {tab === "Inicio" && <Home />}
                  {tab === "Sobre Nosotros" && <AboutUs />}
                  {tab === "Fotos" && <Photos />}
                  {tab === "Contáctanos" && <ContactUs />}
                </div>
              </div>
            </Col>

            <Col xs={0} md={2} lg={3} />
          </Row>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPageSpanish;