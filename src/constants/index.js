import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    sheridan,
    threejs,
    java,
    python,
    cpp, 
    ue5,
    skillhat,
    sirt,
    culturalink,
    winterway,
    randompasswordgenerator,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "Front-end Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name:"java", 
      icon: java
    },
    {
      name:"Python",
      icon: python
    }, 
    {
      name: 'C++', 
      icon: cpp
    }, 
    {
      name: "Unreal engine 5",
      icon: ue5
    }
  ];
  
  const experiences = [
    {
      title: "[Co-op] Junior Programmer Intern ",
      company_name: "SIRT - Research",
      icon: sheridan,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "Utilized Unreal Engine 5 Blueprints and C++ to successfully build and test a pipeline for plugin that transforms audio into animations through machine learning ",
        "Reduced data transfer latency by 10% and improved system coordination efficiency through establishing a UDP socket-based communication between different pipeline nodes",
        " Improved overall performance and functionality in unreal engine by integrating Dynamic Linked Library (DLLs) functions within Unreal Engine nodes",
      ],
    },
    {
      title: "[Fellowship] Diversity in Tech Talent Program",
      company_name: "SKillHat [Partners: Co.Lab, WIL, Atila & Riipen]",
      icon: skillhat,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        " Selected from over 1,000+ applicants for this $10,000 tech fellowship in web development",
        " Gained practical knowledge and creating projects using HTML, CSS, Semantic UI, JSON, JavaScript, React and third party libraries",
        " Collaborated with a team of 5 for WIL hackathon to solve real world problems and create a MVP project within 48 hours",
        " Received 1:1 mentorship from Atila and 40 hours real life work experience with riipen"
      ],
    },
    {
      title: "Peer Mentor Team Lead",
      company_name: "Sheridan College",
      icon: sheridan,
      iconBg: "#383E56",
      date: "Sep 2023 - Jan 2024",
      points: [
        "Earned nomination for Student Choice – Dare to Care Leadership Award in Winter 2023, recognizing exceptional commitment of a student leader to a supportive and inclusive campus environment",
        "Led weekly team meetings of roughly 12 peer mentors for professional development training while delivering new updates each week.",
        "Implemented targeted pop-up initiatives aimed at connecting students to valuable resources on campus, resulted in substantial 27% boost in student engagement",,
      ],
    },
    {
      title: "[Internship] Youth Outreach STEM Instructor",
      company_name: "Sheridan College [Partners: Actua, RBC Future Launch]",
      icon: sheridan,
      iconBg: "#E6DEDD",
      date: "May 2023 - Aug 2023",
      points: [
        "Provided hands-on guidance and support to young participants during external events, such as the Raspberry Pi event, focusing on Python and Scratch programming to run Raspberry Pi projects.",
        " Collaborated with a team of three individuals to develop and test newly created educational content tailored for youth in grades 1 to 8. ",
        "Successfully planned and executed more than 30 STEAM workshops within the community over a 3-month period",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "[NSBEHacks 2024] CultraLink ",
      description:
        "Web-based platform that allows users to create an account, post stories of their culture, recipes as well as write articles with content moderation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "flask",
          color: "orange-text-gradient",
        },
        {
          name: "cohereAPI",
          color: "pink-text-gradient",
        },
      ],
      image: culturalink,
      source_code_link: "https://github.com/anreetka/CulturaLink",
    },
    {
      name: "[ElleHacks 2024] WinterWay",
      description:
        "A full stack web application that helps users find routes with only considering connecting stops with enough bus shelter support for accessibility ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "GoogleMapsAPI",
          color: "pink-text-gradient",
        },
      ],
      image: winterway,
      source_code_link: "https://github.com/bhanuRakshita/Elle-Hacks-2024",
    },
    {
      name: "[DTTP] Random Password Generator",
      description:
        "A static web application for generating safe password based on user's choice to protect their account from various cybersecurity attacks ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript DOM",
          color: "pink-text-gradient",
        },
      ],
      image: randompasswordgenerator,
      source_code_link: "https://github.com/anreetka/Random-Password-Generator",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };