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
      "",

    tagline2:
      "We are committed to sharing God's love and grace as revealed in the Bible and through His Son, our Lord and Savior, Jesus Christ.",

    buttons: {
      english: "English Service",
      spanish: "Servicios en español"
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
      "🌎 Servicios en español — Sunday 12:00 PM",
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
	
	image2: {
	     src: "/images/UNCChoir.jpg",
	     alt: "Choir",
	     caption: "United Church of Norwood Choir"
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
        text: "Soon after starting his journey as a Christian, Pastor Kevin was inspired to go into the ministry because of the caring and encouraging community of believers he experienced in his church. He has a Bachelor’s Degree in Political Science from Eastern CT State, a Master’s Degree in International Relations from UCONN, a Master’s Degree in Church History from Gordon Conwell Theological Seminary, plus he has taken Christian Spirituality courses from various Protestant and Catholic learning institutions. He has served at churches, a Christian High School, and with the Southern New England Walk to Emmaus team over the years. His favorite book of the Bible to preach from is Paul’s Letter to the Romans. When he’s not busy with ministry at the church, he can be found spending time with his wife, daughters, and grandsons. He might also be found studying Biblical Greek, or on a canoe/kayak trip out in the New England wilderness."
      },
      {
        name: "Janna Peterson, Church Administrator",
        image: "/images/janna.jpg",
        text: "Janna loves being able to see how people in the church can work together to allow different ministry areas to flourish. She began serving on staff at United Church of Norwood just under 10 years ago and has been active in our WISH and Faith Seeds ministries. Her favorite book on Christian living is a classic, first sold as a book of sermons back in 1896. “In His Steps” by Charles Sheldon challenges readers not to make choices without first asking the popular question “What would Jesus do?”. When Janna isn’t in the church office, it’s likely you’ll find her with her family, sewing, or at a local quilting shop."
      },
	  {
	    name: "Steve Rudolph, Choir Director",
	    image: "/images/steve.jpeg",
	    text: `As a composer, a scripture that inspires Steve is Psalm 40:3, "He put a new song in my mouth." The second part of the verse tells us that God did this so that "...many will fear and put their trust in the Lord." That is what Steve believes choir ministry is all about - using our music to point others to the Lord! Steve holds a degree in Music Education from Eastern Nazarene College. As a professional jazz pianist, he has performed extensively both in the U.S. and in Europe. Steve is also an author of children’s sermons which have been used in over 120 countries around the world.`
	  },
      {
        name: "Rachel McMahon, Praise Team Leader",
        image: "/images/rachel.jpg",
        text: "Rachel has had a passion for music and singing since she was a child. She first started singing in the church choir here at the age of 16, and has grown into the leader for our praise team. Her favorite praise song to lead the congregation in is “In Christ Alone”. She is a pastry chef by trade, graduating from the International Culinary Center in New York with a Certificate in Pastry Arts. When she’s not preparing for worship or baking, she can be found spending time with her son or enjoying time with friends."
      },
      {
        name: "Chris Marinuzzi, Accompanist/Organist",
        image: "/images/chris.jpeg",
        text: "Chris loves being able to use his musical gifts to connect spiritually with the community. One of his biggest inspirations was JS Bach, who wrote and performed all music, whether sacred or secular, for the glory of God. Chris loves serving in an atmosphere where music is a tool for community and spiritual growth more than it is a spotlight for musical performance. He has a Bachelor’s Degree in Music Performance and Composition from the Hartt School of Music, and a Master’s in composition from Tufts University. His favorite hymn to lead the congregation is “The Church’s One Foundation”. When not rehearsing at the church he can be found teaching piano lessons, working at Ogawa Coffee in Boston, and trying to fit in a good run."
      },
      {
        name: "Scott Eagles, Custodian",
        image: "/images/scott.jpeg",
        text: "Staying connected to the great community at United Church of Norwood is Scott’s greatest motivation as he invests his time into caring for our building. He first started attending this church a number of years ago because he had heard about the exciting things his mom had to say about the church. His favorite church memory is from his first Sunday attending the service, when he is convinced God had the sermon prepared just for him to hear that day. When he has a chance to take time off from all of his various work duties, he loves to work on his motorcycle and take it out to enjoy our beautiful surroundings."
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