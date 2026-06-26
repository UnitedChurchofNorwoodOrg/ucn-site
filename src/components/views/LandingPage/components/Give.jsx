import { Card, Button } from "react-bootstrap";

const Give = () => {
  return (
    <div className="px-2">

      {/* Header */}

      <div className="text-center mb-4">

        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            color: "#111827",
            fontWeight: 600,
            marginBottom: "15px",
          }}
        >
          Support Our Ministry
        </h2>

        <p
          style={{
            color: "#374151",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.75",
          }}
        >
          Your generosity strengthens our ministry and
          supports worship, Bible study, community outreach,
          and service to our community.
        </p>

      </div>

      {/* Online Giving */}

      <Card
        className="border rounded-4 mb-4"
        style={{
          background: "#ffffff",
          borderColor: "#e5e7eb",
        }}
      >
        <Card.Body className="text-center py-4">

          <h4
            style={{
              fontFamily: "Playfair Display, serif",
              color: "#111827",
              fontWeight: "500",
            }}
          >
            Online Giving
          </h4>

          <p
            style={{
              color: "#374151",
              lineHeight: "1.75",
            }}
          >
            We're putting the finishing touches on our
            secure online giving platform.
          </p>

          <Button
            disabled
            size="lg"
            className="px-4"
            style={{
              backgroundColor: "#6c757d",
              borderColor: "#6c757d",
              borderRadius: "10px",
              cursor: "not-allowed",
            }}
          >
            Coming Soon
          </Button>

          <div
            className="mt-3"
            style={{
              color: "#6b7280",
              fontSize: "0.9rem",
            }}
          >
            Secure online giving will be available soon.
          </div>

        </Card.Body>
      </Card>

      {/* Zelle */}

      <Card
        className="border rounded-4 mb-4"
        style={{
          background: "#ffffff",
          borderColor: "#e5e7eb",
        }}
      >
        <Card.Body className="text-center py-4">

          <h4
            style={{
              fontFamily: "Playfair Display, serif",
              color: "#111827",
              fontWeight: "500",
            }}
          >
            Give with Zelle
          </h4>

          <p
            style={{
              color: "#374151",
              lineHeight: "1.75",
            }}
          >
            Zelle giving will be available soon for our
            English congregation.
          </p>

          <div
            className="p-3 rounded-3"
            style={{
              background: "#fafafa",
              border: "1px solid #e5e7eb",
            }}
          >
            <strong>Coming Soon</strong>
          </div>

          <small
            className="d-block mt-3"
            style={{
              color: "#374151",
              lineHeight: "1.75",
            }}
          >
            Zelle giving information will be posted here
            once it becomes available.
          </small>

        </Card.Body>
      </Card>

      {/* Give by Check */}

      <Card
        className="border rounded-4 mb-4"
        style={{
          background: "#ffffff",
          borderColor: "#e5e7eb",
        }}
      >
        <Card.Body className="text-center py-4">

          <h4
            style={{
              fontFamily: "Playfair Display, serif",
              color: "#111827",
              fontWeight: "500",
            }}
          >
            Give by Check
          </h4>

          <p
            style={{
              color: "#374151",
              lineHeight: "1.75",
              marginBottom: "15px",
            }}
          >
            <strong>United Church of Norwood</strong>
            <br />
            595 Washington Street
            <br />
            Norwood, MA 02062
          </p>

          <p
            style={{
              color: "#6b7280",
              fontSize: "14px",
              marginBottom: 0,
            }}
          >
            Please make checks payable to
            <strong> United Church of Norwood</strong>.
          </p>

        </Card.Body>
      </Card>

    </div>
  );
};

export default Give;