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
    git,
    tailwind,
    nodejs,
    mongodb,
    github,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    
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
      title: "Full-Stack Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Reactjs Developer",
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
      name: "github",
      icon: github,
    },
    {
      name: "mongodb",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "typescript",
      icon: typescript,
    },
   
    
    
    
  ];
  
  const experiences = [
    {
      title: "Full-Stack Developer",
      company_name: "Signature IT Software Designer Pvt. Ltd. Lucknow",
      icon: shopify,
      iconBg: "#383E56",
      
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "TwoWaits Technologies Pvt. Ltd. Noida",
      icon: tesla,
      iconBg: "#E6DEDD",
      
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    {
      title: "Campus Executive",
      company_name: "Skill Vertex",
      icon: meta,
      iconBg: "#E6DEDD",
   
      points: [
        "I have build a community based on learning and building skills.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive group and ensuring cross-browser compatibility.",
        "Participating in comminity reviews and providing constructive feedback to other.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Participated and taken the 1st position in rockect launching in udaan ." ,
      name: "Udaan",
      designation: "1st Position",
      company: "Rocket Launcher",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Participated and taken the 1st position in drone making with coding technology in sandtank ." ,
      name: "Sand Tank",
      designation: "1st Position",
      company: "Drone Technology",
     image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Participated and taken the 1st position in public speaking regarding to upcoming technology growing skill in collage ." ,
      name: "Sand Tank",
      designation: "1st Position",
      company: "Public Speaking",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Luxeloom Store",
      description:
        "Web-based platform that allows users to search, t-shirt, and manage customized t-shirt from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "3D Portfolio",
      description:
        "Web application that showcase my talent and skill which i have perform during my studies and using many different 3d design based them.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "emailjs",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },

    {
      name: "Hazardous Dump (Published-IJRASET)",
      description:
        "A comprehensive hazardous dump platform that allows users to buy and sell there scrap online either it is biodegrable or non-biodegrable scrap both.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name:  "html",
          color: "pink-text-gradient",
        },
      ],

      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ] ;


  
  export { services, technologies, experiences, testimonials, projects };