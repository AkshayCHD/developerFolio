﻿
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "AkshayCHD",
  title: "Hi all, I'm Akshay",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Structures and Algorithms",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "60%"
    },
    {
      Stack: "Blockchain Development",
      progressPercentage: "90%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Intern",  
      company: "Block8",
      companylogo:  require("./assets/images/block8logo.png"),
      date: "January 2020 – Present",
      desc: 'The internship was divided in three phases as follows',
      subPoints: [
        "In the first phase we gatherered some general learnings abount the company's tech stack, and created some minor project on them",
        "In the second phase we created a full stack leave management system application using loopback framework for backend, to build a scalable and efficient api",
        "In the third phase we worked on a project that was aimed at creating a decentralized instant exchange for ERC20 tokens, on the ethereum blockchain, that could manage the exchange rates based on supply and demand on the respective tokens"
      ]
    },
    {
      role: "Google Summer of Code",
      company: "KDE",
      companylogo: require("./assets/images/gsoclogo.png"),
      date: "May 2017 – May 2018",
      desc: "Leveraged knowledge of version control tools like git, phabricator, arcanist and languages like qml, javascript, Qt.",
      subPoints: [
        "Worked on KDE’s Project Gcompris to add multiple datasets to activities",
        "Improved activity code by integrating logic to use multiple datasets instead of a single one.",
        "Improved the reach of an activity my making it usable for students of various age groups",
        "Leveraged knowledge of version control tools like git, phabricator, arcanist and languages like qml, javascript, Qt."
      ]
    },
    {
      role: "Software Engineer Intern",  
      company: "Chaincode Consulting LLP",
      companylogo: require("./assets/images/chaincodeconsultinglogo.png"),
      date: "Jan 2019 – Sep 2019",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      subPoints: [
        "Studied the architecture of hyperledger fabric.",
        "Worked on making the fabric network more dynamic by using Fabric CA instead of static certificate generators like cryptogen and implementing functionality to add new orgs.",
        "Improved the reach of an activity my making it usable for students of various age groups",
        "Leveraged knowledge in hyperledger fabric architecture and implementation, node js, GoLang."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_AUTH,
  githubUserName: "AkshayCHD", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "SIH 2019 Winner",
      subtitle: "Won SIH 2019 Hardware edition, under the problem statement given by company Kokuyo Camlin",
      image:
        require("./assets/images/sihlogo.png"),
      footerLink: [
        { name: "Certificate", url: "https://drive.google.com/file/d/1lfaI-ftCnS_luvLSRU6oboBMigt_uuRy/view?usp=sharing" }
      ]
    },
    {
      title: "Codechef CDSAP Certification",
      subtitle: "Successfully passed Codechef's CCDSAP Foundation level exam",
      image: 
        require("./assets/images/codecheflogo.jpg"),
      footerLink: [{ name: "Certificate", url: "https://www.codechef.com/certificates/public/f337745" }]
    },
    {
      title: "Winner at Advitya IIT Ropar",
      subtitle: "Secured positions at IIT Ropar's intercollege hackathons twice.",
      image: require("./assets/images/iitroparlogo.png"),
      footerLink: [
        { name: "Year 2017", url: "https://drive.google.com/file/d/18MgikYU6ScZpat6Qq7-62_iYSTpWhGs4/view?usp=sharing" },
        { name: "Year 2018", url: "https://drive.google.com/file/d/1MFwIop4R6TmSGSfpJ94myksDS3sIJbMC/view?usp=sharing" }
      ]
    },

    {
      title: "Winner at Pecfest Chandigarh",
      subtitle: "Secured positions at PEC Chandigarh's annual intercollege hackathon",
      image:  require("./assets/images/pecchandigarhlogo.png"),
      footerLink: [
        { name: "Year 2017", url: "https://drive.google.com/file/d/1-CIW84lxipr8HChp49CznzzMwFoUeEBX/view?usp=sharing" },
        { name: "Year 2018", url: "https://drive.google.com/file/d/13b5sYSFP1geH2WduVnguNcHSLTGYl97G/view?usp=sharing" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "My Journey with Gcompris",
      subtitle: "KDE conf 2020",
      slides_url: "https://docs.google.com/presentation/d/10DK7GMzlBHcmBvXbPV3BW2xpUGBwcxvb6d6Yp9iiXqQ/edit?usp=sharing",
      event_url: "https://conf.kde.in/",
      image:
        require("./assets/images/kdelogo.png"),
    },
    {
      title: "Unblocking Blockchain",
      subtitle: "Block8 Blockchain Bootcamp",
      slides_url: "https://docs.google.com/presentation/d/1TadCwf5jZXjlqaHRzPrSBIVoDBRHYV-hue_rrW_IVGo/edit?usp=sharing",
      image:
        require("./assets/images/kdelogo.png"),
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
