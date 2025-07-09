import { Row, Image } from "react-bootstrap";

const OurStaff = () => {
  console.log('home')
  return (
    <div className="text-primary py-32 ps-md-32 ps-16 fs-5 bg-sm custom-view-height">
      <div>
        <Row className="w-100">
          <p className="mb-0 fs-3 fw-bold">Pastor Kevin</p>
        </Row>
        <Image src="/images/pastor-kevin.jpeg" className="float-start me-8 pt-8" style={{ width: '12rem', objectFit: 'contain' }}  />
        <p className="pe-16 mb-0">Soon after starting his journey as a Christian, Pastor Kevin was inspired to go into the ministry because of the caring and encouraging community of believers he experienced in his church. He has a Bachelor’s Degree in Political Science from Eastern CT State, a Master’s Degree in International Relations from UCONN, a Master’s Degree in Church History from Gordon Conwell Theological Seminary, plus he has taken Christian Spirituality courses from various Protestant and Catholic learning institutions. He has served at churches, a Christian High School, and with the Southern New England Walk to Emmaus team over the years. His favorite book of the Bible to preach from is Paul’s Letter to the Romans. When he’s not busy with ministry at the church, he can be found spending time with his wife, daughters, and grandsons. He might also be found studying Biblical Greek, or on a canoe/kayak trip out in the New England wilderness.</p>
      </div>
      <div>
        <Row className="w-100 pt-24">
          <p className="mb-0 fs-3 fw-bold">Janna Peterson, Church Administrator</p>
        </Row>
        <Image src="/images/janna.jpg" className="float-start me-8 pt-8" style={{ width: '12rem', objectFit: 'contain' }}  />
        <p className="pe-16 mb-0">Janna loves being able to see how people in the church can work together to allow different ministry areas to flourish.  She began serving on staff at United Church of Norwood just under 10 years ago and has been active in our WISH and Faith Seeds ministries.  Her favorite book on Christian living is a classic, first sold as a book of sermons back in 1896.  “In His Steps” by Charles Sheldon challenges readers not to make choices without first asking the popular question “What would Jesus do?’.   When Janna isn’t in the church office, it’s likely you’ll find her with her family, sewing, or at a local quilting shop.</p>
      </div>
      <div>
        <Row className="w-100 pt-24">
          <p className="mb-0 fs-3 fw-bold">Steve Rudolph, Choir Director</p>
        </Row>
        <Image src="/images/steve.jpeg" className="float-start me-8 pt-8" style={{ width: '12rem', objectFit: 'contain' }}  />
        <p className="pe-16 mb-0">As a composer, a scripture that inspires Steve is Psalm 40:3, "He put a new song in my mouth." The second part of the verse tells us that God did this so that "...many will fear and put their trust in the Lord." That is what Steve believes choir ministry is all about - using our music to point others to the Lord!  Steve holds a degree in Music Education from Eastern Nazarene College. As a professional jazz pianist, he has performed extensively both in the U. S. and in Europe. Steve is also an author of children’s sermons which have been used in over 120 countries around the world.</p>
      </div>
      <div>
        <Row className="w-100 pt-24">
          <p className="mb-0 fs-3 fw-bold">Rachel McMahon, Praise Team Leader</p>
        </Row>
        <Image src="/images/rachel.jpg" className="float-start me-8 pt-8" style={{ width: '12rem', objectFit: 'contain' }}  />
        <p className="pe-16 mb-0">Rachel has had a passion for music and singing since she was a child.  She first started singing in the church choir here at the age of 16, and has grown into the leader for our praise team.  Her favorite praise song to lead the congregation in is “In Christ Alone”.  She is a pastry chef by trade, graduating from the International Culinary Center in New York with a Certificate in Pastry Arts.  When she’s not preparing for worship or baking, she can be found spending time with her son or enjoying time with friends.</p>
      </div>
      <div>
        <Row className="w-100 pt-24">
          <p className="mb-0 fs-3 fw-bold">Chris Marinuzzi, Accompanist/Organist</p>
        </Row>
        <Image src="/images/chris.jpeg" className="float-start me-8 pt-8" style={{ width: '12rem', objectFit: 'contain' }}  />
        <p className="pe-16 mb-0">Chris loves being able to use his musical gifts to connect spiritually with the community.  One of his biggest inspirations was JS Bach, who wrote and performed all music, whether sacred or secular, for the glory of God.  Chris loves serving in an atmosphere where music is a tool for community and spiritual growth more than it is a spotlight for musical performance.  He has a Bachelor’s Degree in Music Performance and Composition from the Hartt School of Music, and a Master’s in composition from Tufts University.  His favorite hymn to lead the congregation is “The Church’s One Foundation”.  When not rehearsing at the church he can be found teaching piano lessons, working at Ogawa Coffee in Boston, and trying to fit in a good run.</p>
      </div>
      <div className="pb-48">
        <Row className="w-100 pt-24">
          <p className="mb-0 fs-3 fw-bold">Scott Eagles, Custodian</p>
        </Row>
        <Image src="/images/scott.jpeg" className="float-start me-8 pt-8" style={{ width: '12rem', objectFit: 'contain' }}  />
        <p className="pe-16 mb-0">Staying connected to the great community at United Church of Norwood is Scott’s greatest motivation as he invests his time into caring for our building.  He first started attending this church a number of years ago because he had heard about the exciting things his mom had to say about the church.  His favorite church memory is from his first Sunday attending the service, when he is convinced God had the sermon prepared just for him to hear that day.   When he has a chance to take time off from all of his various work duties, he loves to work on his motorcycle ﻿and take it out to enjoy our beautiful surroundings.</p>
      </div>
      <small className="">Copyright 2022 United Church of Norwood. All rights reserved.</small>
    </div>

  );
};
  
  export default OurStaff;