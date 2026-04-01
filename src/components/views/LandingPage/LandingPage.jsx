import { useState, useEffect } from 'react';
import { Row, Col, Image, Tab, Dropdown } from "react-bootstrap";
import Home from './components/Home';
import AboutUs from "./components/AboutUs";
import MenuButton from "../../global/MenuButton/MenuButton";
import Services from "./components/Services";
import OurStaff from "./components/OurStaff";
import Ministries from "./components/Ministries";
import Photos from "./components/Photos";
import ContactUs from "./components/ContactUs";
import Hamburger from "hamburger-react";

const LandingPage = () => {
  const [tab, setTab] = useState('Home');
  const [openHamburger, setOpenHamburger] = useState(false);
  const [selected, setSelected] = useState('Home');

  // ✅ FORCE HOME TAB ON LOAD (FIX)
  useEffect(() => {
    setTab('Home');
  }, []);

  // ✅ DEBUG (can remove later)
  console.log("ACTIVE TAB:", tab);

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
    <div className="position-relative w-100 bg-sm">
      
      {/* BACKGROUND */}
      <Image 
        src="./images/bg.jpg"
        className="position-absolute d-none d-md-block w-100"
        style={{ objectFit: 'cover', zIndex: '-1', overflow: 'hidden' }}
      />

      <Row className="w-100 m-0 bg-sm">
        <Col xs={0} md={2} lg={3} />

        <Col xs={12} md={8} lg={6} className="custom-borders px-0 mb-48">

          {/* HERO */}
          <div 
            className="w-100 text-white ratio banner-ratio font-non-serif"
            style={{
              backgroundImage: "url(./images/sky3.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className="d-flex flex-column text-center">
              <p className="custom-hero-styling fw-bold mb-0">
                United Church of Norwood
              </p>
              <p className="custom-subhero-styling fw-bold">
                Many People, One Church
              </p>
            </div>
          </div>

          {/* HEADER BAR */}
          <div className="d-flex justify-content-between align-items-center bg-primary">

            {/* MOBILE MENU */}
            <Dropdown className="d-block d-md-none">
              <Dropdown.Toggle
                id="dropdown-basic"
                size="sm"
                className="border-0 bg-transparent text-secondary"
              >
                <Hamburger toggled={openHamburger} toggle={setOpenHamburger} />
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="dropdown_menu border border-primary"
                style={{ width: '100vw' }}
              >
                {menuArray.map((item) => (
                  <Dropdown.Item
                    key={item}
                    className="fs-5 fw-bold text-primary py-8 border-bottom border-primary"
                    onClick={() => handleMenuClick(item)}
                  >
                    {item}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {/* CURRENT TAB TITLE */}
            <p className="text-secondary font-cardiff fw-bold fs-4 mb-0 pe-32 ps-24">
              English Congregation – {tab}
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="d-flex flex-row w-100">

            {/* SIDE MENU */}
            <Col
              xs={0}
              md={3}
              className="d-none d-md-block fs-5 bg-secondary text-primary border-start border-end border-primary p-0"
            >
              {menuArray.map((item) => (
                <MenuButton
                  key={item}
                  setTab={setTab}
                  tab={item}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </Col>

            {/* TAB CONTENT */}
            <Col xs={12} md={9} className="bg-white">
              <Tab.Container activeKey={tab}>
                <Tab.Content className="w-100">

                  <Tab.Pane eventKey="Home">
                    <Home />
                  </Tab.Pane>

                  <Tab.Pane eventKey="About Us">
                    <AboutUs />
                  </Tab.Pane>

                  <Tab.Pane eventKey="Services">
                    <Services />
                  </Tab.Pane>

                  <Tab.Pane eventKey="Our Staff">
                    <OurStaff />
                  </Tab.Pane>

                  <Tab.Pane eventKey="Ministries">
                    <Ministries />
                  </Tab.Pane>

                  <Tab.Pane eventKey="Photos">
                    <Photos />
                  </Tab.Pane>

                  <Tab.Pane eventKey="Contact Us">
                    <ContactUs />
                  </Tab.Pane>

                </Tab.Content>
              </Tab.Container>
            </Col>

          </div>

        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;