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
              marginBottom: "20px",
            }}
          >
            Scan the QR code or use the email address
            below to make your gift quickly and securely.
          </p>

          <img
            src={
              process.env.PUBLIC_URL +
              "/images/zelle-english-qrcode.png"
            }
            alt="Zelle QR Code"
            style={{
              width: "260px",
              maxWidth: "100%",
              display: "block",
              margin: "0 auto 20px",
              background: "#fff",
              padding: "8px",
              borderRadius: "12px",
              border: "1px solid #e9ecef",
            }}
          />

		  <div
		    className="p-3 rounded-3"
		    style={{
		      background: "#fafafa",
		      border: "1px solid #e5e7eb",
		    }}
		  >
		    <strong>Zelle</strong>
		    <br />
		    Email address coming soon
		  </div>

          <small
            className="d-block mt-3"
            style={{
              color: "#374151",
              lineHeight: "1.75",
              marginBottom: "20px",
            }}
          >
            If you'd like, you may include your name and
            gift designation in the payment memo.
          </small>

        </Card.Body>
      </Card>

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
	          marginBottom: "25px",
	        }}
	      >
	        Give securely online using your credit card, debit card,
	        bank account, Apple Pay, Google Pay, or PayPal through
	        our trusted giving platform, Givebutter.
	      </p>

	      <Button
	        as="a"
	        href="https://givebutter.com/unitedchurchofnorwood"
	        target="_blank"
	        rel="noopener noreferrer"
	        size="lg"
	        className="px-4"
	        style={{
	          backgroundColor: "#1f3a5f",
	          borderColor: "#1f3a5f",
	          borderRadius: "10px",
	        }}
	      >
	        Donate Online
	      </Button>

	      <div
	        className="mt-3"
	        style={{
	          color: "#6b7280",
	          fontSize: "0.9rem",
	        }}
	      >
	        You will be redirected securely to our Givebutter donation page.
	      </div>

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