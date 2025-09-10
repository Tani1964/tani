import {
  backend,
  carrent,
  carrent1,
  carrent2,
  creator,
  figma,
  git,
  mobile,
  noxie,
  swyi,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Leadership & Strategy",
    icon: web,
  },
  {
    title: "Youth Empowerment",
    icon: mobile,
  },
  {
    title: "Mentorship & Training",
    icon: backend,
  },
  {
    title: "Community Building",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Strategic Planning",
    icon: figma,
  },
  {
    name: "Public Speaking",
    icon: git,
  },
  {
    name: "Team Leadership",
    icon: web,
  },
  {
    name: "Mentorship",
    icon: mobile,
  },
  {
    name: "Community Engagement",
    icon: creator,
  },
  {
    name: "Youth Empowerment",
    icon: backend,
  },
  {
    name: "Innovation & Creativity",
    icon: noxie,
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
      "Leading youth-focused initiatives that reached over 500+ participants across schools and communities.",
      "Organized mentorship programs that improved member retention and impact by 40%.",
      "Spearheaded partnerships with schools and organizations to promote empowerment and leadership.",
    ],
  },
  {
    title: "Mentor & Instructor",
    company_name: "CAMA Academy",
    icon: "",
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Oct 2023",
    points: [
      "Guided 100+ students in fullstack development through structured mentorship.",
      "Boosted student satisfaction scores from 65% to 95%.",
      "Increased knowledge retention rates by 40% through tailored teaching strategies.",
    ],
  },
  {
    title: "Community & Tech Advisor",
    company_name: "Noxie Limited",
    icon: noxie,
    iconBg: "#383E56",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Shaped the digital presence strategy for the company’s restaurant launch.",
      "Contributed to a 20% increase in online engagement and community reach.",
    ],
  },
  {
    title: "Program Coordinator",
    company_name: "Oxosi-ani",
    icon: "",
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Generated reports contributing to a 15% increase in efficiency of partner company operations.",
      "Strategized for the market launch, resulting in a successful introduction with increased online visibility.",
    ],
  },
  {
    title: "President",
    company_name: "NACOS (Nigeria Association of Computing Students)",
    icon: "",
    iconBg: "#383E56",
    date: "Jan 2020 - Dec 2021",
    points: [
      "Oversaw academic and professional programs that impacted 300+ computing students.",
      "Introduced skill-based workshops and coding challenges to boost technical readiness.",
      "Strengthened collaboration with industry professionals for seminars and mentorship opportunities.",
    ],
  },
  {
    title: "Volunteer Coordinator",
    company_name: "Selfless Heart Foundation",
    icon: "",
    iconBg: "#E6DEDD",
    date: "May 2019 - Dec 2020",
    points: [
      "Coordinated outreach programs that provided educational support and resources to underprivileged children.",
      "Mobilized a team of 20+ volunteers to deliver impact-driven community projects.",
      "Promoted values of compassion, service, and youth engagement in underserved areas.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Their leadership transformed our youth program, bringing structure and energy that inspired everyone.",
    name: "Sarah Johnson",
    designation: "Program Director",
    company: "Youth Impact Initiative",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "An outstanding mentor who genuinely cares about growth and empowerment.",
    name: "Michael Ade",
    designation: "Student",
    company: "CAMA Academy",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Their strategic guidance gave our launch direction and success we didn’t think possible.",
    name: "Lisa Wang",
    designation: "CEO",
    company: "Noxie Limited",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Youth Empowerment Bootcamp",
    description:
      "Organized a week-long bootcamp training young people in leadership, technology, and problem-solving, reaching over 200+ participants.",
    tags: [
      {
        name: "leadership",
        color: "blue-text-gradient",
      },
      {
        name: "mentorship",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "#",
  },
  {
    name: "Community Mentorship Program",
    description:
      "Designed a mentorship pipeline that paired industry experts with students, boosting retention and skill adoption rates.",
    tags: [
      {
        name: "community",
        color: "pink-text-gradient",
      },
      {
        name: "growth",
        color: "green-text-gradient",
      },
    ],
    image: carrent1,
    source_code_link: "#",
  },
  {
    name: "School Outreach Initiative",
    description:
      "Partnered with local schools to deliver workshops on technology, personal growth, and leadership, impacting 300+ students.",
    tags: [
      {
        name: "outreach",
        color: "blue-text-gradient",
      },
      {
        name: "empowerment",
        color: "green-text-gradient",
      },
    ],
    image: carrent2,
    source_code_link: "#",
  },
];

export { experiences, projects, services, technologies, testimonials };

