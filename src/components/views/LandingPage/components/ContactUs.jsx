import { Row, Col, Image } from "react-bootstrap";

const ContactUs = () => {
  console.log('home')
  return (
    <Row className="text-primary text-center pb-32 bg-sm me-0 custom-view-height me-0">
      <Col xs={12} lg={6} className="pt-32 ps-32 fs-5">
        <h1>How to Contact Us</h1>
        <p className="fs-5 lh-sm mt-md-64 mt-32">Phone: 781-762-2589</p>
        <p className="fs-5">Email: unitedchurchofnorwood@gmail.com</p>
      </Col>
      <Col xs={6} className="d-none d-lg-block ps-0 pe-0">
        <Image src="./images/contactus.jpeg" className="w-100" />
      </Col>
      <p className="fs-3 py-24 mb-0">595 Washington Street, Norwood, MA 02062 <br /> 781-762-2589</p>
      <small className="mb-0">Copyright 2025 United Church of Norwood. All rights reserved.</small>
    </Row>
  );
};
  
  export default ContactUs;
