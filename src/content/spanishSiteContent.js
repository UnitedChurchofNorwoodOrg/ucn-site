/**
 * ============================================================
 * SITE CONTENT CONFIGURATION
 * ============================================================
 */

const spanishSiteContent = {

  /**
   * ============================================================
   * SPANISH LANDING PAGE
   * ============================================================
   */
  landingPage: {
    header: {
      title: "Iglesia Cristiana de Norwood",
      subtitle: "Diferentes Culturas, Una Iglesia"
    },

    menu: [
      "Inicio",
      "Sobre Nosotros",
      "Fotos",
	  "Ofrendas",
      "Contáctanos"
    ]
  },

  /**
   * ============================================================
   * HOME
   * ============================================================
   */
  home: {
    image: {
      src: "/images/home.jpeg",
      alt: "Iglesia",
      caption: "Iglesia Cristiana de Norwood"
    },

    title: "Bienvenidos",

    intro1:
      "Estamos comprometidos a compartir el amor y la gracia de Dios tal como se revelan en la Biblia y por medio de Su Hijo, nuestro Señor y Salvador, Jesucristo.",

    intro2:
      "Le invitamos a unirse a nosotros en adoración y compañerismo mientras compartimos juntos el amor y la gracia de Dios.",

    serviceTime1: "Servicio Dominical",

    serviceTime2: "⛪ Inglés: 10:00 AM",

    serviceTime3: "⛪ Español: 12:00 PM",

    live: {
      text: "Únase a nosotros en vivo por Facebook",
      link: "https://www.facebook.com/profile.php?id=100064846384317"
    },

    efca: {
      text: "Para más información sobre la Iglesia Evangélica Libre de América:",
      link: "https://www.efca.org/",
      label: "www.efca.org"
    },

    scripture:
      "“Hagan todo con amor.” — 1 Corintios 16:14"
  },

  /**
   * ============================================================
   * MINISTRIES
   * ============================================================
   * Hidden from Spanish page for now
   */
  ministries: {
    image: {
      src: "/images/ministries.jpeg",
      alt: "Ministerio de Música",
      caption: "Equipo del Ministerio de Música"
    },

    image2: {
      src: "/images/UNCChoir.jpg",
      alt: "Coro",
      caption: "Coro de United Church of Norwood"
    },

    title: "Cómo Puedes Servir",

    sections: []
  },

  /**
   * ============================================================
   * OUR STAFF
   * ============================================================
   * Hidden from Spanish page for now
   */
  ourStaff: {
    members: []
  },

  /**
   * ============================================================
   * SERVICES
   * ============================================================
   * Hidden from Spanish page for now
   */
  services: {
    image: {
      src: "/images/services.jpg",
      alt: "Adoración Dominical",
      caption: "Servicio de Adoración Dominical"
    },

    title: "Visitándonos",

    intro: [],

    sections: []
  },

  /**
   * ============================================================
   * PHOTOS
   * ============================================================
   */
  photos: {
    title: "Galería de Fotos"
  },

  /**
   * ============================================================
   * CONTACT US
   * ============================================================
   */
  contactUs: {
    title: "Contáctanos",

    description:
      "Visítenos en persona o comuníquese con nosotros; nos encantaría conectarnos con usted.",

    contact: {
      phone: "781-762-2589",
      email: "unitedchurchofnorwood@gmail.com"
    },

    map: {
      query: "595 Washington Street Norwood MA",
      buttonText: "Obtener Direcciones"
    },

    social: {
      title: "Síguenos en Facebook",
      facebook: "https://www.facebook.com/profile.php?id=100064846384317"
    }
  },

  /**
   * ============================================================
   * ABOUT US
   * ============================================================
   */
  aboutUs: {
    image: {
      src: "/images/aboutus.jpg",
      alt: "Congregación",
      caption: "Nuestra Congregación"
    },

    intro: [
      "Estamos comprometidos a compartir el amor y la gracia de Dios tal como se revelan en la Biblia y por medio de Su Hijo, nuestro Señor y Salvador, Jesucristo.",

      "Oramos para que adorar con nosotros le brinde consuelo y fortaleza para sus necesidades. Por favor, llámenos si podemos servirle o ministrarle de alguna manera."
    ],

    sections: [
      {
        title: "Nuestra Congregación",
        text:
          "Somos una congregación amistosa y solidaria que estaría encantada de que se una a nosotros mientras adoramos al Señor."
      },
      {
        title: "Nuestro Edificio",
        text:
          "La piedra angular de nuestro histórico edificio fue colocada en 1885. Ha estado lleno de adoración desde que United Church fue formada en 1934."
      },
      {
        title: "Norwood, Massachusetts",
        text:
          "Norwood, Massachusetts, ubicado aproximadamente a 12 millas al suroeste de Boston, es hogar de más de 29,000 residentes. Nombrado en honor a Norwood, Inglaterra, el área fue colonizada por primera vez por Ezra Morse en 1678 y oficialmente establecida en 1872."
      }
    ]
  }

};

export default spanishSiteContent;