import { Row, Col } from "react-bootstrap";

const Ministries = () => {
  console.log('home')
  return (
    <Row className="text-primary p-32 fs-5 lh-sm bg-sm custom-view-height me-0">
      <div className="w-100 pb-8">
        <h1>How You can Serve...</h1>
      </div>
      <Col xs={12} lg={6}>       
        <h4 className="pt-8">Music Ministry</h4>
        <p>The Worship Team leads the congregational hymns and praise songs each Sunday morning. If
you play an instrument and feel called to Serve the Lord with your music, please speak to
Worship Team leader, Rachel McMahon.
The Choir joyfully provides special music every Sunday from September through June, as well
as on Communion Sundays in July and August. If you have a heart to serve God in song, speak
to Steve Rudolph, the choir director.</p>
        <h4 className="pt-8">WISH (Women in Service to Him)</h4>
        <p>
          WISH (Women in Service to Him) is a fellowship and service group open to all women in the
church. Our mission is to be a light to the world by serving others, while nurturing our faith as
Christian women. A variety of activities are held throughout the year, including fundraisers to
support several Christian missions worldwide, as well to assist with local needs as they arise.
We enjoy yearly brunches with our Spanish sisters and others, have craft activities and work
bees, welcome guest speakers, share meaningful discussions, send cards of encouragement and
more…all of which serve to bless our friendships and promote good will.</p>
      </Col>
      <Col xs={12} lg={6}>  
        <h4 className="pt-8">Congregational Care Team</h4>
        <p>Providing for the needs of those in our church community.</p>
        <h4 className="pt-8">Hospitality Team</h4>
        <p>Keeping our church community connected through special times of fellowship, including weekly coffee time.</p>
        <h4 className="pt-8">Building Stewards</h4>
        <p>Giving vision to the use and care of our property, overseeing the needs of our building.</p>
      </Col>
      <p className="mt-32 fs-6">Copyright 2025 United Church of Norwood. All rights reserved.</p>
    </Row>

  );
};
  
  export default Ministries;
