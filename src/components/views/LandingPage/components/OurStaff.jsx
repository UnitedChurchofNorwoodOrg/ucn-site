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
    <div className="bg-white">

      <Row className="justify-content-center m-0">
        <Col xs={12} md={10} lg={8} className="px-3 px-md-0 py-5">

          {staffData.map((member, index) => (
            <div style={styles.card} key={index}>

              {/* HEADER */}
              <div style={styles.header}>
                <Image
                  src={member.image}
                  alt={member.name}
                  style={styles.image}
                />

                <h5 style={styles.name}>
                  {member.name}
                </h5>
              </div>

              {/* TEXT */}
              <p style={styles.text}>
                {member.text}
              </p>

            </div>
          ))}

        </Col>
      </Row>

    </div>
  );
};

const styles = {
  card: {
    paddingBottom: "22px",
    marginBottom: "22px",
    borderBottom: "1px solid #f1f5f9"
  },

  header: {
    textAlign: "center",
    marginBottom: "12px"
  },

  image: {
    width: "150px",
    height: "190px",
    objectFit: "contain",
    marginBottom: "10px"
  },

  name: {
    fontFamily: "Playfair Display, serif",
    color: "#1f2937",
    fontWeight: "500",
    fontSize: "1.05rem"
  },

  text: {
    color: "#374151",
    lineHeight: "1.75",
    fontSize: "15px",
    maxWidth: "620px",
    margin: "0 auto",
    textAlign: "left"
  }
};

export default OurStaff;