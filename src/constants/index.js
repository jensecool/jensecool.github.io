const navLinks = [
  // {
  //   name: "Work",
  //   link: "#work",
  // },
  // {
  //   name: "Experience",
  //   link: "#experience",
  // },
  // {
  //   name: "Skills",
  //   link: "#skills",
  // },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const projectData = {
  title: "Periskal Academy",
  shortDescription:
    "A full-stack digital learning platform to modernize training in the maritime sector, replacing traditional TeamViewer sessions with a user-friendly online system.",
  longDescription: [
    "In collaboration with Periskal and AP Hogeschool, my team and I developed Periskal Academy, a comprehensive full-stack digital learning platform. Its primary goal was to modernize and streamline training in the maritime sector. Our solution replaces outdated traditional TeamViewer sessions, offering a user-friendly online system for self-paced training modules, integrated exams, and efficient certification processes.",
    "This project was a true full-stack endeavor, encompassing everything from database design and implementation to the user interface. We handled robust backend logic, efficient data management, and ensured a smooth, intuitive user experience. The collaboration aspect, working closely with industry partners and educational institutions, provided invaluable real-world project experience.",
    "Our core tech stack for Periskal Academy included Angular and Bulma for a responsive and modern frontend, providing a dynamic and engaging learning environment. For the backend, we utilized Java Spring Boot, ensuring a powerful, secure, and scalable foundation for the platform's functionalities. This combination allowed us to build a robust system capable of handling complex training workflows and user data effectively.",
    "Working on Periskal Academy was an incredible learning journey, offering deep insights into end-to-end development and the intricacies of bringing a large-scale application to life within a collaborative team setting. A huge shout-out to my teammates Mansur Sulejmanov, Matti Langbeen, and Adam Bakhmadov for their contributions as full-stack developers on this project. All data shown in screenshots is for testing purposes.",
  ],
  images: [
    "/images/project/periskal_1.png",
    "/images/project/periskal_2.png",
    "/images/project/periskal_3.png",
    "/images/project/periskal_4.png",
    "/images/project/periskal_5.png",
    "/images/project/periskal_6.png",
    "/images/project/periskal_7.png",
  ],
};

const words = [
  { text: "Computer Science", imgPath: "/images/ideas.svg" },
  { text: "Software development", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 22, suffix: "+", label: "Years Old" },
  { value: 3, suffix: "+", label: "Languages Spoken" },
  { value: 2026, suffix: "", label: "Graduation Year" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-12-bigger.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-13-bigger.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-17-bigger.png",
  },
  {
    imgPath: "/images/logos/company-logo-16-bigger.png",
  },
  {
    imgPath: "/images/logos/company-logo-15-bigger.png",
  },
  {
    imgPath: "/images/logos/company-logo-14-bigger.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Teamwork",
    desc: "With 4 years of organizing events in Scouting and project-based teamwork at school, I excel at working effectively and positively with people in a team setting.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Communicative and transparent, ensuring clear and consistent updates while fostering effective collaboration.",
  },
  {
    imgPath: "/images/time.png",
    title: "Problem-solving",
    desc: "Driven by curiosity and out-of-the-box thinking to analyze challenges and find innovative, effective solutions.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Development",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Java Development",
    modelPath: "/models/java-logo.glb",
    scale: 1.3,

    rotation: [0, 0, 0],
  },
  {
    name: ".NET Development",
    modelPath: "/models/backend-logo.glb",
    scale: 0.09,
    rotation: [0, 6.2, 0],
  },
  {
    name: "Typescript Development",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git Based Projects",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/jensecool/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://www.facebook.com/jense.cool/",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/jensecool/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projectData,
};
