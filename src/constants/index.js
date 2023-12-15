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
    meta,
    swyi,
    tesla,
    noxie,
    carrent,
    carrent1,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Vice President",
      company_name: "SWYI",
      icon: swyi,
      iconBg: "#383E56",
      date: "March 2021 - Present",
      points: [
       
      ],
    },
    {
      title: "FullStack Web developer",
      company_name: "CAMA Academy",
      icon: "",
      iconBg: "#E6DEDD",
      date: "Feb 2023 - PRESENT",
      points: [
        "Remodeled their website for them making them gain more reach to customers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other the board.",
      ],
    },
    {
      title: "FullStack Web tutor [contract]",
      company_name: "CAMA Academy",
      icon: "",
      iconBg: "#E6DEDD",
      date: "AUG 2023 - OCT 2023",
      points: [
        "Increased student satisfaction scores from 65% to 95% and boosted knowledge retention rates from 60% to 85% through strategic changes implemented during the course, resulting in a remarkable 40% overall improvement.",
        "Participating in code reviews of students, mentoring them and providing constructive feedback to the board.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "NOXIE",
      icon: noxie,
      iconBg: "#383E56",
      date: "AUG 2023 - SEP 2023",
      points: [
        "Worked on the launch and preparation of their new restaurant",
        "Demonstrated proficiency in various technical domains, including graphic design, web design, and online presence architecture, contributing to the project's comprehensive success.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Oxosi-ani",
      icon: "",
      iconBg: "#E6DEDD",
      date: "JUN 2022 - AUG 2022",
      points: [
        "Generated reports contributing to a 15% increase in the efficiency of partner company Noxie Limited. Strategized for the market launch, resulting in a successful introduction with a 20% increase in online engagement.",
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
      name: "Uchegbu Family tree",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Tani1964/family-tree",
    },
    {
      name: "Dashboard Practice",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "MUI",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent1,
      source_code_link: "https://github.com/Tani1964/family-tree",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };