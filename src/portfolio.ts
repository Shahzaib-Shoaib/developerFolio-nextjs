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
  username: "Shahzaib Shoaib",
  title: "Hi, I'm Shahzaib",
  subTitle:
    "A passionate Front End Web Developer 🚀 having an experience of building Web and Mobile websites with JavaScript / Reactjs / Nodejs / Next.js  and some other cool libraries and frameworks.",
  resumeLink: "https://fester-924622-portfolio.vercel.app/", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shahzaib-Shoaib",
  linkedin: "www.linkedin.com/in/shahzaib-shoaib-70436128b",
  gmail: "fester9484@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/profile.php?id=100089108027329",
  medium: "",
  stackoverflow: "",
  instagram: "https://www.instagram.com/fester_9484/",
  twitter: "https://twitter.com/FesterCodes",
  kaggle: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile websites",
    // "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),

    "⚡ Integration of third party services such as Firebase/ Netlify / Vercel",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "Shopify",
      fontAwesomeClassname: "fab fa-shopify",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Happy Palace Group Of Schools",
      logo: require("@/assets/images/download.jpg"),
      subHeader: "Matriculation in Computer Science",
      duration: "April 2015 - March 2020",
      // desc: "Participated in the research of XXX and published 3 papers."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Adamjee Govt. Science College",
      logo: require("@/assets/images/download (1).jpg"),
      subHeader: "Intermediate in Computer Science",
      duration: "October 2020 - August 2022 ",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ..."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "University Of Karachi - UBIT",
      logo: require("@/assets/images/download (2).jpg"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "February 2023 - Present",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ..."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
    //   role: "Software Engineer",
    //   company: "Facebook",
    //   companylogo: require("./assets/images/facebookLogo.png"),
    //   date: "June 2018 – Present",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      role: "Front-End Developer",
      company: "Paintigo",
      companylogo: require("@/assets/images/logo-paintigo.png"),
      date: "January 2023 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "The Fundamentals of Digital Marketing",
      subtitle:
        "Completed Certification from Google Digital Garage for Fundamentals of digital marketing",
      image: require("@/assets/images/digitalMarketing.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1IaVU_lcHC8TCEcOaBH8lPzdmuvstrpI9/view?usp=sharing",
        },
      ],
    },
    {
      title: "Introduction to Front-End Development",
      subtitle:
        "Completed Certification from Meta for Introduction to Front-End Development",
      image: require("@/assets/images/ifed.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/SE4X6TKZ6GGF",
        },
      ],
    },
    {
      title: "Programming with JavaScript",
      subtitle:
        "Completed Certification from Meta for Programming with JavaScript",
      image: require("@/assets/images/pwj.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/M8Y27UBY8ER3",
        },
      ],
    },
    {
      title: "Version Control",
      subtitle: "Completed Certification from Meta for Version Control",
      image: require("@/assets/images/vc.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/SDSDA7AS24ZK",
        },
      ],
    },
    {
      title: "HTML and CSS in depth",
      subtitle: "Completed Certification from Meta for HTML and CSS in depth",
      image: require("@/assets/images/hacid.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/XW35JBDGSY5B",
        },
      ],
    },
    {
      title: "React Basics",
      subtitle: "Completed Certification from Meta for React Basics",
      image: require("@/assets/images/rb.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/LYB9U7A4PKJG",
        },
      ],
    },
    {
      title: "Advanced React",
      subtitle: "Completed Certification from Meta for Advanced React",
      image: require("@/assets/images/ar.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/BS3XJ2YR27VH",
        },
      ],
    },
    {
      title: "Principles of UX/UI Design",
      subtitle:
        "Completed Certification from Meta for Principles of UX/UI Design",
      image: require("@/assets/images/uiux.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "ghttps://www.coursera.org/account/accomplishments/certificate/2HNA6AS9K6LD",
        },
      ],
    },
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-##########",
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
