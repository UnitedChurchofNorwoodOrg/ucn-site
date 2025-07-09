import { Row, Col } from "react-bootstrap";

const Ministries = () => {
  console.log('home')
  return (
    <Row className="text-primary p-32 fs-5 lh-sm bg-sm custom-view-height me-0">
      <div className="w-100 pb-8">
        <h1>How You can Serve...</h1>
      </div>
      <Col xs={12} lg={6}>
        <h4>Praise Team</h4>
        <p>Instrumentalists accompany the hymns every Sunday morning. They rehearse on Sunday mornings at 8:45. If you play an instrument and would like to join the Praise Team please see Rachel McMahon.</p>
        <h4 className="pt-8">Choir</h4>
        <p>The choir sings each Sunday morning from September to June.</p>
        <h4 className="pt-8">WISH (Women in Service to Him)</h4>
        <p>WISH is a women's service and fellowship group whose mission is to "be a light to the world by serving others and to nurture our faith as Christian women." Usually meeting once a month from September to June, the group works on behalf of the church as well as reaching out to the community at large.The group encourages all interested women to attend the gatherings.</p>
      </Col>
      <Col xs={12} lg={6}>
        <h4>Faith Seeds Ministry</h4>
        <p>Faith Seeds is a ministry to women in prison around the country via special correcpondence through Bible Study.</p>
        <h4 className="pt-8">Congregational Care Team</h4>
        <p>Providing for the needs of those in our church community.</p>
        <h4 className="pt-8">Hospitality Team</h4>
        <p>Keeping our church community connected through special times of fellowship, including weekly coffee time.</p>
        <h4 className="pt-8">Building Stewards</h4>
        <p>Giving vision to the use and care of our property, overseeing the needs of our building.</p>
      </Col>
      <p className="mt-32 fs-6">Copyright 2022 United Church of Norwood. All rights reserved.</p>
    </Row>

  );
};
  
  export default Ministries;