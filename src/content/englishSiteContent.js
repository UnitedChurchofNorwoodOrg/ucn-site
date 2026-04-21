/**
 * ============================================================
 * SITE CONTENT CONFIGURATION
 * ============================================================
 */

const englishSiteContent = {

  /**
   * ============================================================
   * ROOT LANDING PAGE
   * ============================================================
   */
  rootLanding: {
	title: "United Church of Norwood",
	spanishTitle: "Iglesia Cristiana de Norwood",
    subtitle: "Evangelical Free Church of America",

    tagline1:
      "The United Church of Norwood is a fellowship of Christians.",

    tagline2:
      "We are committed to sharing God's love and grace as revealed in the Bible and through His Son, our Lord and Savior, Jesus Christ.",

    buttons: {
      english: "English Service",
      spanish: "Spanish Service"
    }
  },

  /**
   * ============================================================
   * NAVBAR
   * ============================================================
   */
  navbar: {
    title: "United Church of Norwood",
    links: {
      home: "Home"
    }
  },

  /**
   * ============================================================
   * NEWS TICKER
   * ============================================================
   */
  newsTicker: {
    items: [
      "⛪ English Worship — Sunday 10:00 AM",
      "🌎 Spanish Worship — Sunday 12:00 PM",
      "📖 Bible Study — Wednesday 6:30 PM"
    ],

    live: {
      text: "📺 Join us live on",
      platform: "Facebook",
      link: "https://www.facebook.com/unitedchurchofnorwood/"
    }
  },

  /**
   * ============================================================
   * FOOTER
   * ============================================================
   */
  footer: {
    address: "595 Washington Street, Norwood, MA 02062",
    phone: "781-762-2589",
    copyright:
      "Copyright 2026 United Church of Norwood. All rights reserved."
  },
  
  /**
   * ============================================================
   * EGMISH LANDING PAGE
   * ============================================================
   */
  landingPage: {
    header: {
      title: "United Church of Norwood",
      subtitle: "Many Peoples. One Church"
    },

    menu: [
      "Home",
      "About Us",
      "Services",
      "Our Staff",
      "Ministries",
      "Photos",
      "Contact Us"
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
      alt: "Church",
      caption: "United Church of Norwood"
    },

    title: "Welcome",

    intro:
      "We invite you to join us in worship and fellowship as we share God’s love and grace together.",

    serviceTime1: "Sunday Worship",
	serviceTime2: "⛪ English : 10:00 AM",
	serviceTime3: "⛪ Spanish : 12:00 PM",

    live: {
      text: "Join us live on Facebook",
      link: "https://www.facebook.com/unitedchurchofnorwood/"
    },

    efca: {
      text: "For more information about the Evangelical Free Church of America:",
      link: "https://www.efca.org/",
      label: "www.efca.org"
    },

    scripture:
      "“Let all that you do be done in love.” — 1 Corinthians 16:14"
  },
  
  /**
   * ============================================================
   * MINISTRIES
   * ============================================================
   */
  ministries: {
    image: {
      src: "/images/ministries.jpeg",
      alt: "Choir Ministry",
      caption: "Music Ministry Team"
    },

    title: "How You Can Serve",

    sections: [
      {
        title: "Music Ministry",
        paragraphs: [
          "The Worship Team leads congregational hymns and praise songs each Sunday morning. If you play an instrument and feel called to serve the Lord with your music, please speak to Worship Team leader, Rachel McMahon.",

          "The Choir joyfully provides special music every Sunday from September through June, as well as on Communion Sundays in July and August. If you have a heart to serve God in song, speak to Steve Rudolph, the choir director."
        ]
      },
      {
        title: "WISH (Women in Service to Him)",
        paragraphs: [
          "WISH is a fellowship and service group open to all women in the church. Our mission is to be a light to the world by serving others while nurturing our faith as Christian women.",

          "Activities include fundraisers supporting missions worldwide, helping with local needs, brunches with our Spanish sisters, craft activities, guest speakers, and meaningful discussions that strengthen friendships and faith."
        ]
      },
      {
        title: "Congregational Care Team",
        paragraphs: [
          "Providing for the needs of those in our church community."
        ]
      },
      {
        title: "Hospitality Team",
        paragraphs: [
          "Keeping our church community connected through special times of fellowship, including weekly coffee time."
        ]
      },
      {
        title: "Building Stewards",
        paragraphs: [
          "Giving vision to the use and care of our property and overseeing the needs of our building."
        ]
      }
    ]
  },
  
  /**
   * ============================================================
   * OUR STAFF
   * ============================================================
   */
  ourStaff: {
    members: [
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
    ]
  },
  
  /**
   * ============================================================
   * SERVICES
   * ============================================================
   */
  services: {
    image: {
      src: "/images/services.jpg",
      alt: "Sunday Worship",
      caption: "Sunday Worship Service"
    },

    title: "Visiting Us",

    intro: [
      "Whether you're just beginning your Christian journey or have been a believer for years, we want you to feel comfortable and spiritually nourished here.",

      "If you're thinking about visiting us, here’s what our service is like:"
    ],

    sections: [
      {
        title: "How long is the service?",
		paragraphs: [
		  "Our Sunday morning English-language service begins at 10:00 AM and typically lasts about one hour."
		]
      },
      {
        title: "What kind of message will I hear?",
        paragraphs: [
          "You will hear a Bible-based, inspirational message designed to encourage, teach, and help us navigate daily life."
        ]
      },
      {
        title: "What should I wear?",
        paragraphs: [
          "There is no dress code, so wear what you're comfortable in. Some attend casually, while others dress more formally."
        ]
      },
      {
        title: "What is the music like?",
        paragraphs: [
          "Our service features a blended mix of praise songs, traditional hymns, and gospel music. The choir sings weekly from September through June and monthly during summer."
        ]
      },
      {
        title: "What about children?",
        paragraphs: [
          "Sunday School is available during the service for children ages 4 and up.",
          "A church parlor near the sanctuary is also available for children of all ages, with an audio feed of the service, toys, and books."
        ]
      }
    ]
  },
  
  /**
   * ============================================================
   * PHOTOS
   * ============================================================
   */
  photos: {
    title: "Photo Gallery"
  },
  /**
   * ============================================================
   * CONTACT US
   * ============================================================
   */
  contactUs: {
    title: "Contact Us",

    description:
      "We would love to hear from you. Please feel free to reach out using the information below.",

    contact: {
      phone: "781-762-2589",
      email: "unitedchurchofnorwood@gmail.com"
    },

    map: {
      query: "595 Washington Street Norwood MA",
      buttonText: "Get Directions"
    },
	social: {
	   facebook: "https://www.facebook.com/unitedchurchofnorwood/"
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
      alt: "Congregation",
      caption: "Our Congregation"
    },

    intro: [
      "We are committed to sharing God's love and grace as revealed in the Bible and through His Son, our Lord and Savior, Jesus Christ.",

      "We pray that worshipping with us will give you comfort and strength to meet your needs. Please call on us if we can minister to you in any way."
    ],

    sections: [
      {
        title: "Our Congregation",
        text:
          "We are a friendly and caring congregation who would love to have you join us as we worship the Lord."
      },
      {
        title: "Our Building",
        text:
          "The cornerstone for our historic building was laid in 1885. It has been alive with worship since United Church was formed in 1934."
      },
      {
        title: "Norwood, Massachusetts",
        text:
          "Norwood, Massachusetts, located approximately 12 miles southwest of Boston, is home to over 29,000 residents. Named after Norwood, England, the area was first settled by Ezra Morse in 1678 and officially formed in 1872."
      }
    ]
  }

};

export default englishSiteContent;