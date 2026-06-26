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
          Ofrendas y Donaciones
        </h2>

		<p
		  style={{
		    color: "#374151",
		    maxWidth: "650px",
		    margin: "0 auto",
		    lineHeight: "1.75",
		  }}
		>
		  Su generosidad fortalece nuestro ministerio
		  y apoya la adoración, el estudio bíblico
		  y el servicio a nuestra comunidad.
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
            Ofrendar con Zelle
          </h4>

		  <p
		    style={{
		      color: "#374151",
		      lineHeight: "1.75",
		      marginBottom: "20px",
		    }}
		  >
		    Escanee el código QR o utilice el correo
		    electrónico que aparece a continuación
		    para enviar su ofrenda de forma rápida y segura.
		  </p>

          <img
            src={
              process.env.PUBLIC_URL +
              "/images/zelle-spanish-qrcode.png"
            }
            alt="Código QR de Zelle"
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
            iglesianorwood@outlook.com
          </div>

          <small
            className="d-block mt-3"
			style={{
			  color: "#374151",
			  lineHeight: "1.75",
			  marginBottom: "20px",
			}}
          >
		  Si lo desea, puede incluir su nombre y el propósito
		  de su ofrenda en la nota de la transacción.
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
            Donaciones en Línea
          </h4>

          <p 		  style={{
		      color:"#374151",
		      lineHeight:"1.75"
		  }}>
            Estamos finalizando nuestra plataforma
            segura de donaciones en línea.
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
            Próximamente
          </Button>

          <div
            className="mt-3 text-muted"
            style={{ fontSize: "0.9rem" }}
          >
            Las donaciones en línea estarán disponibles muy pronto.
          </div>

        </Card.Body>
      </Card>

      {/* Mail */}

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
            Ofrendar por Correo
          </h4>
		  <p
		    style={{
		      color: "#6b7280",
		      fontSize: "14px",
		      marginTop: "15px",
		      marginBottom: 0,
		    }}
		  >
		    Haga los cheques a nombre de
		    <strong> United Church of Norwood</strong>.
		  </p>

          <p 		  style={{
		    color: "#374151",
		    lineHeight: "1.75",
		    marginBottom: 0,
		  }}>
            <strong>United Church of Norwood</strong>
            <br />
            595 Washington Street
            <br />
            Norwood, MA 02062
          </p>

        </Card.Body>
      </Card>

    </div>
  );
};

export default Give;