import { Row, Col, Image } from "react-bootstrap";

const AboutUs = () => {
  console.log('home')
  return (
    <Row className="text-primary pb-32 bg-sm custom-view-height me-0">
      <Col xs={12} lg={6} className="pt-32 ps-32 pe-32 pe-md-16 fs-5 lh-sm">
        <h1>About Us...</h1>
        <p>The United Church of Norwood is an interdenominational fellowship of Christians. We are committed to the sharing of God's love and grace as it is revealed to us in the Bible and through His Son, our Lord and Savior, Jesus Christ. We pray that worshipping with us will give you comfort and strength to meet your needs. Please call on us if we can minister to you in any way.</p>
        <h4>Our Congregation</h4>
        <p>We are a friendly and caring congregation who would love to have you join us as we worship the Lord.</p>
        <h4>Our Building</h4>
        <p>The cornerstone for our historic building was laid in 1885. it has been alive with worship ever since.</p>
        <h4>Norwood, Massachusetts</h4>
        <p>Norwood, Massachusetts, which lies approximately 12 miles southwest of Boston, is home to over 29,000 residents. Named after Norwood, England, the area was first settled by Ezra Morse in 1678 and was officially formed in 1872.</p>
      </Col>
      <Col xs={6} className="d-none d-lg-block ps-0 pe-0">
        <Image src="./images/aboutus.jpg" className="w-100" />
        <p className="mt-16">Copyright 2022 United Church of Norwood. All rights reserved.</p>
      </Col>
    </Row>

  );
};
  
  export default AboutUs;
