import { Row, Col, Image } from "react-bootstrap";

const staffData = [
  {
    name: "Pastor Kevin",
    image: "/images/pastor-kevin.jpeg",
    text: "Soon after starting his journey as a Christian, Pastor Kevin was inspired to go into ministry through a caring and encouraging church community. He holds degrees in Political Science, International Relations, and Church History, and has served in churches, schools, and ministry teams. He enjoys studying Biblical Greek and spending time with his family."
  },
  {
    name: "Janna Peterson, Church Administrator",
    image: "/images/janna.jpg",
    text: "Janna has served the church for nearly a decade and enjoys seeing ministries flourish through teamwork. She is active in WISH and Faith Seeds ministries and enjoys time with family, sewing, and quilting."
  },
  {
    name: "Steve Rudolph, Choir Director",
    image: "/images/steve.jpeg",
    text: "Steve is a composer and musician inspired by Psalm 40:3. He holds a degree in Music Education and has performed internationally. He is passionate about using music to point others to the Lord."
  },
  {
    name: "Rachel McMahon, Praise Team Leader",
    image: "/images/rachel.jpg",
    text: "Rachel has loved music since childhood and now leads the praise team. She is also a pastry chef and enjoys time with her son and friends."
  },
  {
    name: "Chris Marinuzzi, Accompanist/Organist",
    image: "/images/chris.jpeg",
    text: "Chris uses music to build community and spiritual connection. He holds degrees in music and enjoys teaching piano and composing."
  },
  {
    name: "Scott Eagles, Custodian",
    image: "/images/scott.jpeg",
    text: "Scott enjoys caring for the church building and being part of the community. In his free time, he enjoys working on and riding his motorcycle."
  }
];

const OurStaff = () => {
  return (
    <div className="bg-white px-3 py-3">

      <h2 className="fw-bold mb-4" style={{ color: "#111827" }}>
        Our Staff
      </h2>

      <Row className="g-4">

        {staffData.map((member, index) => (
          <Col xs={12} key={index}>

            <div
              className="p-3"
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "8px"
              }}
            >

              <Row className="align-items-start">

                {/* IMAGE */}
                <Col xs={12} md={4}>
                  <Image
                    src={member.image}
                    rounded
                    className="w-100 mb-3 mb-md-0"
                    style={{
                      height: "240px",          // ✅ bigger
                      objectFit: "contain",     // ✅ no cropping
                      backgroundColor: "#f3f4f6",
                      padding: "8px",
                      borderRadius: "8px"
                    }}
                  />
                </Col>

                {/* TEXT */}
                <Col xs={12} md={8}>
                  <h5 className="mb-2" style={{ color: "#1f2937" }}>
                    {member.name}
                  </h5>

                  <p style={{ color: "#374151", lineHeight: "1.6" }}>
                    {member.text}
                  </p>
                </Col>

              </Row>

            </div>

          </Col>
        ))}

      </Row>

    </div>
  );
};

export default OurStaff;