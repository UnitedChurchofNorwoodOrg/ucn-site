import { useState } from 'react'
import { Row, Col, Image, Tab, Dropdown } from "react-bootstrap";
import Home from './components/Home'
import AboutUs from "./components/AboutUs";
import MenuButton from "../../global/MenuButton/MenuButton";
import Services from "./components/Services";
import OurStaff from "./components/OurStaff";
import Ministries from "./components/Ministries";
import Photos from "./components/Photos";
import ContactUs from "./components/ContactUs";
import Hamburger from "hamburger-react";

const LandingPage = () => {
  const [ tab, setTab ] = useState('Home')
  const [ openHamburger, setOpenHamburger ] = useState(false)
  const [ selected, setSelected ] = useState('Home')
  
  const handleMenuClick = (value) => {
    setOpenHamburger(false)
    setTab(value)
  }

  const menuArray = [
    'Home',
    'About Us',
    'Services',
    'Our Staff',
    'Ministries',
    'Photos',
    'Contact Us',
  ]

  return (
    <div className="position-relative w-100 bg-sm">
      <Image 
        src="/images/bg.jpg"
        className="position-absolute d-none d-md-block w-100"
        style={{ objectFit: 'cover', zIndex: '-1', overflow: 'hidden' }}
      />
      <Row className="w-100 m-0 bg-sm">
        <Col xs={0} md={2} lg={3} />
        <Col xs={12} md={8} lg={6} className="custom-borders px-0 mb-48">
          <div 
            className="w-100 text-white ratio banner-ratio font-non-serif"
            style={{backgroundImage: "url(/images/sky3.jpeg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="d-flex flex-column text-center">
              <p className="custom-hero-styling fw-bold mb-0">United Church of Norwood</p>
              <p className="custom-subhero-styling fw-bold">Many Peoples, One Church</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center bg-primary">
            <Dropdown className="d-block d-md-none">
              <Dropdown.Toggle id="dropdown-basic" size="sm" className="border-0 bg-transparent text-secondary">
                <Hamburger toggled={openHamburger} toggle={setOpenHamburger} />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown_menu border border-primary" style={{ width: '100vw' }}>
                <Dropdown.Item 
                  className="fs-5 fw-bold text-primary py-8 border-bottom border-primary"
                  onClick={() => handleMenuClick('Home')}
                >
                  Home
                </Dropdown.Item>
                <Dropdown.Item 
                  className="fs-5 fw-bold text-primary py-8 border-bottom border-primary"
                  onClick={() => handleMenuClick('About Us')}
                >
                  About Us
                </Dropdown.Item>
                <Dropdown.Item
                  className="fs-5 fw-bold text-primary py-8 border-bottom border-primary" 
                  onClick={() => handleMenuClick('Services')}
                >
                  Services
                </Dropdown.Item>
                <Dropdown.Item
                  className="fs-5 fw-bold text-primary py-8 border-bottom border-primary"
                  onClick={() => handleMenuClick('Our Staff')}
                >
                  Our Staff
                </Dropdown.Item>
                <Dropdown.Item
                  className="fs-5 fw-bold text-primary py-8 border-bottom border-primary"
                  onClick={() => handleMenuClick('Ministries')}
                >
                  Ministries
                </Dropdown.Item>
                <Dropdown.Item
                  className="fs-5 fw-bold text-primary py-8 border-bottom border-primary"
                  onClick={() => handleMenuClick('Photos')}
                >
                  Photos
                </Dropdown.Item>
                <Dropdown.Item
                  className="fs-5 fw-bold text-primary py-8"
                  onClick={() => handleMenuClick('Contact Us')}
                >
                  Contact Us
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <p className="text-secondary font-cardiff fw-bold fs-4 mb-0 pe-32 ps-24">{tab}</p>
          </div>
          <div className="d-flex flex-row w-100">
            <Col xs={0} md={3} className="d-none d-md-block fs-5 bg-secondary text-primary border-start border-end border-primary p-0">
              {menuArray.map((item) => {
                return (
                  <MenuButton setTab={setTab} tab={item} selected={selected} setSelected={setSelected} />
                )
              })}
            </Col>
            <Col xs={12} md={9} className="bg-white">
              <Tab.Container activeKey={tab} className="border-0">
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
