/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import splashAnimation from "./../public/assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: " Shahzaib ",
  title: "Hi, I'm Shahzaib",
  subTitle:
    "I'm a software developer with professional experience building web applications, e-commerce platforms, and API integrations using technologies like Next.js, React, and Shopify. ",
  // I'm now expanding my focus toward Python, Data Engineering, AI, and SaaS development. I enjoy solving real-world problems, exploring new technologies, and building software that makes things easier and more efficient
  resumeLink: "", // Set to empty to hide the button
  websiteLink: "/websites", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shahzaib-Shoaib",
  linkedin: "www.linkedin.com/in/shahzaib-shoaib-70436128b",
  gmail: "fester9484@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  instagram: "",
  twitter: "",
  kaggle: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE DEVELOPMENT, DATA & AUTOMATION",
  skills: [
    "⚡ Building web applications, e-commerce platforms, and API integrations using modern technologies.",
    "⚡ Working with Python, data processing, and automation while developing deeper skills in data engineering.",

    "⚡ Exploring AI-powered applications, business automation, and subscription-based software products.",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  // softwareSkills: [
  //   // {
  //   //   skillName: "JavaScript",
  //   //   fontAwesomeClassname: "fab fa-js",
  //   // },
  //   // {
  //   //   skillName: "reactjs",
  //   //   fontAwesomeClassname: "fab fa-react",
  //   // },
  //   // {
  //   //   skillName: "nodejs",
  //   //   fontAwesomeClassname: "fab fa-node",
  //   // },
  //   // // {
  //   // //   skillName: "swift",
  //   // //   fontAwesomeClassname: "fab fa-swift"
  //   // // },

  //   // // {
  //   // //   skillName: "sql-database",
  //   // //   fontAwesomeClassname: "fas fa-database"
  //   // // },
  //   // // {
  //   // //   skillName: "aws",
  //   // //   fontAwesomeClassname: "fab fa-aws"
  //   // // },

  //   // {
  //   //   skillName: "Shopify",
  //   //   fontAwesomeClassname: "fab fa-shopify",
  //   // },
  //   // {
  //   //   skillName: "python",
  //   //   fontAwesomeClassname: "fab fa-python",
  //   // },
  //   // // {
  //   // //   skillName: "docker",
  //   // //   fontAwesomeClassname: "fab fa-docker"
  //   // // }

  //   {
  //     className: "fab fa-python",
  //     name: "Python",
  //   },
  //   {
  //     className: "fab fa-js",
  //     name: "JavaScript",
  //   },
  //   {
  //     className: "fab fa-react",
  //     name: "React",
  //   },
  //   {
  //     className: "fas fa-code",
  //     name: "Next.js",
  //   },
  //   {
  //     className: "fab fa-shopify",
  //     name: "Shopify",
  //   },
  //   {
  //     className: "fas fa-table",
  //     name: "Pandas",
  //   },
  //   {
  //     className: "fas fa-chart-line",
  //     name: "NumPy",
  //   },
  //   {
  //     className: "fas fa-database",
  //     name: "Apache Spark",
  //   },
  //   {
  //     className: "fas fa-server",
  //     name: "Databricks",
  //   },
  // ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-code",
    },
    {
      skillName: "Shopify",
      fontAwesomeClassname: "fab fa-shopify",
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table",
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-chart-line",
    },
    {
      skillName: "Apache Spark",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Databricks",
      fontAwesomeClassname: "fas fa-server",
    },
  ],

  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    // {
    //   schoolName: "Happy Palace Group Of Schools",
    //   logo: require("@/assets/images/download.jpg"),
    //   subHeader: "Matriculation in Computer Science",
    //   duration: "April 2015 - March 2020",
    //   // desc: "Participated in the research of XXX and published 3 papers."
    //   // descBullets: [
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   // ]
    // },
    // {
    //   schoolName: "Adamjee Govt. Science College",
    //   logo: require("@/assets/images/download (1).jpg"),
    //   subHeader: "Intermediate in Computer Science",
    //   duration: "October 2020 - August 2022 ",
    //   // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ..."
    //   // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // },
    {
      schoolName: "University Of Karachi - UBIT",
      logo: require("@/assets/images/download (2).jpg"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "February 2023 - 2025",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ..."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "College Of DuPage",
      logo: require("@/assets/images/cod.png"),
      subHeader: "Associate in Science",
      duration: "August 2025 - Present",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ..."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "10%",
    },
    {
      Stack: "Programming",
      progressPercentage: "40%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section  // CHANGED!!!!!!!!!!!
  experience: [
    // {
    //   role: "Web Developer",
    //   company: "CodeSoft",
    //   companylogo: require("@/assets/images/codsoft.png"),
    //   date: "January 2024 – Present",
    //   desc: "Remote / Virtual Internship",
    //   // descBullets: [
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   // ],
    // },

    {
      role: "Front-End Web Developer",
      company: "AHST Vision LTD",
      companylogo: require("@/assets/images/logo-ahst.jpg"),
      date: "January 2023 – January 2025",
      desc: "Remote / Part Time",
    },

    {
      role: "Freelance Software Developer ",
      company: "Fiverr",
      companylogo: require("@/assets/images/fiv.jpg"),
      date: "April 2021 – Present",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true            CHANGED!!!!!!!!!!
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("@/assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("@/assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true       CHANGED!!!!!!!
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements And Certifications 🏆 ",
  subtitle:
    "Professional certifications in software development, Python, and emerging technologies.",

  achievementsCards: [
    {
      title: "Meta Front-End Developer Specialization",
      subtitle:
        "Completed Professional Certification from Meta for Front-End Development ",
      image: require("@/assets/images/mfed.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/KX4XKHR6G2CH",
        },
        {
          name: "Badge",
          url: "https://www.credly.com/badges/5a026671-675c-401e-92f0-39aeeec97a45/public_url",
        },
      ],
    },

    // {
    //   title: "The Fundamentals of Digital Marketing",
    //   subtitle:
    //     "Completed Certification from Google Digital Garage for Fundamentals of digital marketing",
    //   image: require("@/assets/images/digitalMarketing.png"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/1IaVU_lcHC8TCEcOaBH8lPzdmuvstrpI9/view?usp=sharing",
    //     },
    //   ],
    // },
    // {
    //   title: "Introduction to Front-End Development",
    //   subtitle:
    //     "Completed Certification from Meta for Introduction to Front-End Development",
    //   image: require("@/assets/images/ifed.jpeg"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/SE4X6TKZ6GGF",
    //     },
    //   ],
    // },
    // {
    //   title: "Programming with JavaScript",
    //   subtitle:
    //     "Completed Certification from Meta for Programming with JavaScript",
    //   image: require("@/assets/images/pwj.jpeg"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/M8Y27UBY8ER3",
    //     },
    //   ],
    // },
    // {
    //   title: "Version Control",
    //   subtitle: "Completed Certification from Meta for Version Control",
    //   image: require("@/assets/images/vc.jpeg"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/SDSDA7AS24ZK",
    //     },
    //   ],
    // },
    // {
    //   title: "HTML and CSS in depth",
    //   subtitle: "Completed Certification from Meta for HTML and CSS in depth",
    //   image: require("@/assets/images/hacid.jpeg"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/XW35JBDGSY5B",
    //     },
    //   ],
    // },
    // {
    //   title: "React Basics",
    //   subtitle: "Completed Certification from Meta for React Basics",
    //   image: require("@/assets/images/rb.jpeg"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/LYB9U7A4PKJG",
    //     },
    //   ],
    // },
    // {
    //   title: "Advanced React",
    //   subtitle: "Completed Certification from Meta for Advanced React",
    //   image: require("@/assets/images/ar.jpeg"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/BS3XJ2YR27VH",
    //     },
    //   ],
    // },
    // {
    //   title: "Principles of UX/UI Design",
    //   subtitle:
    //     "Completed Certification from Meta for Principles of UX/UI Design",
    //   image: require("@/assets/images/uiux.jpeg"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/2HNA6AS9K6LD",
    //     },
    //   ],
    // },
    // {
    //   title: "Front-End Developer Capstone",
    //   subtitle:
    //     "Completed Certification from Meta for Front-End Developer Capstone",
    //   image: require("@/assets/images/fedc.jpeg"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/VRAPTPE5QZ98",
    //     },
    //   ],
    // },
    // {
    //   title: "Coding Interview Preparation",
    //   subtitle:
    //     "Completed Certification from Meta for Coding Interview Preparation",
    //   image: require("@/assets/images/cip.jpeg"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/458U9AAX3QSG",
    //     },
    //   ],
    // },
    {
      title: "Python for Data Science, AI & Development",
      subtitle:
        "Completed Certification from IBM for Python for Data Science, AI & Development",
      image: require("@/assets/images/ibmpy.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/8N63CX84WSL7",
        },
        {
          name: "Badge",
          url: "https://www.credly.com/badges/c7217b13-7e45-46d6-bd42-333f72e24bb1/public_url",
        },
      ],
    },
    {
      title: "Programming in Python",
      subtitle: "Completed Certification from Meta for Programming in Python",
      image: require("@/assets/images/pip.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/MC564ABQTLTT",
        },
      ],
    },
    {
      title: "Meta React Native Specialization",
      subtitle: "Completed Specialization from Meta for React Native",
      image: require("@/assets/images/mrns.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/4DCAN8X7XRYU",
        },
      ],
    },
    // {
    //   title: "Introduction to Mobile Development",
    //   subtitle:
    //     "Completed Certification from Meta for Introduction to Mobile Development",
    //   image: require("@/assets/images/imd.jpeg"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/MG95GGJTXLDG",
    //     },
    //   ],
    // },
    // {
    //   title: "React Native",
    //   subtitle: "Completed Certification from Meta for React Native",
    //   image: require("@/assets/images/rn.jpeg"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/ZZAWWH9BRJUP",
    //     },
    //   ],
    // },
    // {
    //   title: "Working with Data",
    //   subtitle: "Completed Certification from Meta for Working with Data",
    //   image: require("@/assets/images/wwd.jpeg"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/VKTKUV76NQE2",
    //     },
    //   ],
    // },
    // {
    //   title: "Capstone (React App)",
    //   subtitle: "Completed Certification from Meta for Capstone (React App)",
    //   image: require("@/assets/images/cra.jpeg"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/R79JTWUTBEM7",
    //     },
    //   ],
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true   CHANGED!!!!!!!!!!!!
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true       CHANGED!!!!!!!!!!!!
};

// Podcast Section

const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true        CHANGED!!!!!!!!!!!!
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Interested in collaborating on a project, discussing a software development opportunity, or exploring ideas in Python, data engineering, and AI? Feel free to reach out. I'm always open to connecting and discussing new opportunities.",
  number: "+1-630-259-3653",
  email_address: "fester9484@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
