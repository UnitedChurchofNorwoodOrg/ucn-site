import { useState, useEffect } from 'react';
import { Row, Col, Dropdown } from "react-bootstrap";
import Home from './components/Home';
import AboutUs from "./components/AboutUs";
import MenuButton from "../../global/MenuButton/MenuButton";
import Services from "./components/Services";
import OurStaff from "./components/OurStaff";
import Ministries from "./components/Ministries";
import Photos from "./components/Photos";
import ContactUs from "./components/ContactUs";
import Hamburger from "hamburger-react";
import Footer from "../../layout/Footer";
import NewsTicker from "../../global/NewsTicker/NewsTicker";

const LandingPage = () => {
  const [tab, setTab] = useState('Home');
  const [openHamburger, setOpenHamburger] = useState(false);
  const [selected, setSelected] = useState('Home');

  useEffect(() => {
    setTab('Home');
  }, []);

  const handleMenuClick = (value) => {
    setOpenHamburger(false);
    setTab(value);
    setSelected(value);
  };

  const menuArray = [
    'Home',
    'About Us',
    'Services',
    'Our Staff',
    'Ministries',
    'Photos',
    'Contact Us',
  ];

  return (
    <>
      <div
        className="w-100 overflow-hidden position-relative"
        style={{
          backgroundImage: "url('/images/UNC.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        {/* Overlay */}
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

            <Col
              xs={12}
              md={8}
              lg={6}
              className="shadow-lg px-0 mb-4 rounded-4"
              style={{
                background: "rgba(255,255,255,0.94)",
                backdropFilter: "blur(6px)",
              }}
            >

              {/* HEADER */}
              <div className="py-4 border-bottom text-center">
                <img
                  src="/images/UCNLogo.jpg"
                  alt="UCN Logo"
                  style={{ height: "60px", marginBottom: "10px" }}
                />

                <h2 style={{ fontFamily: "Playfair Display, serif" }}>
                  United Church of Norwood
                </h2>

                <p className="text-muted mb-0">
                  Many People, One Church
                </p>
              </div>

              {/* ✅ NEWS TICKER */}
              <NewsTicker />

              {/* MOBILE TOP BAR */}
              <div
                className="d-flex align-items-center px-3 py-2 d-md-none"
                style={{
                  backgroundColor: "#f8fafc",
                  borderBottom: "1px solid #e5e7eb",
                  color: "#1f2937"
                }}
              >
                <Dropdown>
                  <Dropdown.Toggle
                    size="sm"
                    className="border-0 bg-transparent"
                  >
                    <Hamburger
                      toggled={openHamburger}
                      toggle={setOpenHamburger}
                      color="#1f2937"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100">
                    {menuArray.map((item) => (
                      <Dropdown.Item
                        key={item}
                        onClick={() => handleMenuClick(item)}
                      >
                        {item}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              {/* CONTENT */}
              <div className="d-flex flex-wrap">

                {/* SIDEBAR */}
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
                  {tab === "Home" && <Home />}
                  {tab === "About Us" && <AboutUs />}
                  {tab === "Services" && <Services />}
                  {tab === "Our Staff" && <OurStaff />}
                  {tab === "Ministries" && <Ministries />}
                  {tab === "Photos" && <Photos />}
                  {tab === "Contact Us" && <ContactUs />}
                </div>

              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;