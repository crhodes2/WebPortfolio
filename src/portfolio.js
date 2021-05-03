/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Christian Rhodes",
  title: "Bonjour! Christian here!",
  subTitle: emoji(
    "A passionate Software and Web Developer with two degrees in Software Engineering and Information Technology. I have a strong passion in technology and am always looking forward to the latest tech trends. I consider myself as one with a flexible mind who can think creatively and logically."
  ),
  resumeLink:
    "https://www.dropbox.com/scl/fi/pi0mdlerubfqaubrwtebi/Christian_Rhodes_Resume-ReactJS.docx?dl=0&rlkey=ga69rfq1nbuvdysbt2kr4g0u0",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/crhodes2",
  linkedin: "https://www.linkedin.com/in/christian-r-rhodes",
  gmail: "christianrhodes.86@gmail.com",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/christian.rhodes.9212/",
  medium: "https://medium.com/@christianrhodes.86",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do 👨🏾‍💻",
  subTitle: "BUILD + WRITE + DRAW = CREATE",
  skills: [
    emoji(
      "⚡ Develop functional UI and front-end projects for web and desktop apps"
    ),
    emoji(
      "⚡ Integrate 3rd party services such as Firebase / GitHub / Jira"
    ),
    emoji("⚡ SQL Database, Web, Virtual Reality, and Machine Learning")

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "c#",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Oregon Institute of Technology - Wilsonville, OR",
      logo: require("./assets/images/oregontechlogo.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "April 2016 - June 2019",
      desc: "Ranked on the Dean's List for 4 quarters and the President's List for 1 quarter. Took Took courses about Software Engineering, SQL Database, Operating Systems, and more ..."
    },
    {
      schoolName: "Portland State University - Portland, OR",
      logo: require("./assets/images/psulogo.png"),
      subHeader: "Bachelor of Arts in Business Administration - Information Systems and Accounting",
      duration: "September 2004 - June 2013",
      desc:
        "Took courses on Computer Networking, .NET and Visual Basic programming, Accounting, Financial Forecasting, Auditing and more ..."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming / Coding",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Firmware Engineer in Test",
      company: "Trail Tech",
      companylogo: require("./assets/images/trailtech.png"),
      date: "August 2020 – January 2021",
      desc:
        "Perform manual and CAN protocol testing of devices and key product features per scripted test plans",
      descBullets: [
        "Record test execution results using JIRA and Python",
        "Characterize and log defect information for issues found during testing",
        "Work with engineers to reproduce problems found during testing and validate fixes"
      ]
    },
    {
      role: "IT Systems Specialist",
      company: "Providence Health Systems",
      companylogo: require("./assets/images/providence.png"),
      date: "January 2020 – March 2020",
      desc:
        "Managed caregivers in network databases including unlocking accounts and adding permissions.",
      descBullets: [
        "Record test execution results using JIRA and Python",
        "Installed and configured computer hardware, software, systems, and networks",
        "Granted and modified caregivers’ access to Providence applications – Imprivata, MediTech, EPIC and Citrix",
        "Repair and replace equipment as necessary and provide technical support across the company"
      ]
    },
    {
      role: "Software Engineering Development Intern",
      company: "Cambia Health",
      companylogo: require("./assets/images/cambia.png"),
      date: "July 2019 – September 2019",
      desc:
        "Designed and implemented test cases using BDD Gherkin/Cucumber and Ruby",
      descBullets : [
        "Communicated with Soft Dev team in the development of Journi and LHR health record database",
        "Created admin endpoint set to create functionality for LHR service in compliance with FHIR standard."
      ]
    },
    {
      role: "Release Engineer Intern",
      company: "Jama Software",
      companylogo: require("./assets/images/jama.png"),
      date: "June 2018 – September 2018",
      desc:
        "Developed a GitHub web app for Pull Request testing in Python, Flask and ngrok",
      descBullets : [
        "Implemented OAuth sessions/environment variables for app to communicate with JamaConnect",
        "Added informational messages for a data import job in Resque Ruby library",
        "Delivered lightning talks and presented status of web application to colleagues and management"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "crhodes2", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some are complete... some are a work in progress...",
  projects: [
    {
      image: require("./assets/images/boreas.png"),
      projectName: "Boreas VR - Virtual Reality Weather",
      projectDesc: "Boreas VR is your friendly Weather Application in Virtual Reality built using C#, Unity 3D, and Windows Mixed Reality. ",
      footerLink: [
        {
          name: "Check out the Demo on YouTube",
          url: "https://www.youtube.com/watch?v=O_i1V4gzIrI"
        },
      ]
    },
    {
      image: require("./assets/images/fieldscribe.png"),
      projectName: "FieldScribe",
      projectDesc: "A track-and-field event recording application set to replace written track record with technology. Using C#, SQL Database, and REST API",
      footerLink: [
        {
          name: "Check repository website to learn more",
          url: "http://www.github.com/FieldScribe"
        }
      ]
    },
    {
      image: require("./assets/images/slackEmblem.png"),
      projectName: "Slack Emblem",
      projectDesc: "A Slack Clone application, with characters from the Tactics RPG video game series Fire Emblem as Slack Users. Using Firebase and React.JS",
      footerLink: [
        {
          name: "Sign In to the App!",
          url: "http://slackemblem.web.app"
        }
      ]
    },

    {
      image: require("./assets/images/disney+.PNG"),
      projectName: "A Disney+ Clone",
      projectDesc: "Building my own version of the Disney+ Streaming App. Wish me luck! Not affiliated with the actual Disney+ app",
      footerLink: [
        {
          name: "Coming Soon to my GitHub page...",
          url: "http://www.github.com/crhodes2"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("📱 Call Me | Text Me | Email Me 📧"),
  subtitle:
    "I am open to talk business. Or simply to chat.",
  number: "(503) 997 8710",
  email_address: "rhodeschristian@icloud.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
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
  twitterDetails
};
