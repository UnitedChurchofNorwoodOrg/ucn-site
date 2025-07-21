import { Row, Col, Image } from "react-bootstrap";

const Services = () => {
  console.log('home')
  return (
    <Row className="text-primary pb-32 bg-sm custom-view-height me-0">
      <Col xs={12} lg={6} className="pt-32 ps-32 pe-32 pe-md-16 fs-5 lh-sm">
        <h1>What to Expect...</h1>
        <p className="mb-8">Whether you're just beginning your Christian journey or have been a believer for years we want you to feel comfortable and spiritually nourished here.</p>
        <p>If you're thinking about visiting us let us tell you what our service is like:</p>
        <h4>How long is the service?</h4>
        <p>Our Sunday morning service begins at 10:00 and concludes at 11:00.</p>
        <h4>What kind of message will I hear?</h4>
        <p>You will hear a Bible-based, inspirational message from the Pastor that is designed to encourage, to teach and to help us to cope with daily life.</p>
        <h4>What should I wear?</h4>
        <p>There is no dress code at the United Church, so wear what you're comfortable wearing. At our services you will find some people dressed casually and others dressed more formally.</p>
        <p>What is the music like?</p>
        <p>Our service features a blended mix of praise choruses, traditional hymns and gospel tunes. The choir sings each week from September through June and once per month in July and August.</p>
        <p>What about the children?</p>
        <p className="mb-8">Sunday School is available during the service for children ages 4 and up for a time of learning and activity.</p>
        <p>The church parlor near the back of the sanctuary is also available for children of all ages. There is an audio feed of the service as well as toys and books for the little ones.</p>
      </Col>
      <Col xs={6} className="d-none d-lg-block ps-0 pe-0">
        <Image src="./images/services.jpg" className="w-100" />
        <p className="mt-16">Copyright 2025 United Church of Norwood. All rights reserved.</p>
      </Col>
    </Row>

  );
};
  
  export default Services;
