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
  code,
  virtuallypros,
  tenece,
  verified,
  jobit,
  tripguide,
  threejs,
  music,
  shirt,
  food,
  yt,
  workout,
  orderbook,
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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Full-Stack Engineer",
    company_name: "Verified Creators",
    icon: verified,
    iconBg: "#383E56",
    date: "2021 - PRESENT",
    points: [
      "Select and apply the correct technologies, strategies, and algorithms to effectively solve problems.",
      "Developing and maintaining web applications using React.js, Node.js, Next.js, React Native,  and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Mentoring junior developers.",
    ],
  },
  {
    title: "Senior Software Developer",
    company_name: "Tenece Professional Services",
    icon: tenece,
    iconBg: "#E6DEDD",
    date: "2018 - 2021",
    points: [
      "Collaborate with team members to build product features and solutions according to client specifications.",
      "Analyse underperforming components in system to improve their performance.",
      "Implement new features to existing codebase.",
      "Prompt technical support.",
      "Developed all-around responsive interfaces, not neglecting older browsers and smaller screen-sizes.",
      "Contributed to the estimation and scoping of projects.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "VirtuallyPros",
    icon: virtuallypros,
    iconBg: "#383E56",
    date: "2016 - 2018",
    points: [
      "Maintained, and Implemented new features to active projects.",
      "Collaborate with team members and stakeholders such as Project Managers, QA, Product designers, to deliver features that solve customers problems effectively and efficiently.",
      "Played the role of Team Lead in Project development.",
      "Supervised and mentored junior developers.",
      "Participated in code review sessions to ensure code quality across codebase.",
    ],
  },
  {
    title: "Freelance Software Engineer",
    company_name: "",
    icon: code,
    iconBg: "#E6DEDD",
    date: "2014 - 2016",
    points: [
      "As a freelance software engineer, I have extensive experience working with multiple programming languages and frameworks such as JavaScript, Python, React.js, Node.js, Express.js, React Native, Django, Flask, wordpress, AWS, Google Cloud, etc. I have worked with various clients to design and develop custom software solutions that meet their unique business needs.",
      "My responsibilities as a freelance software engineer include analyzing client requirements, developing software designs, writing code, and testing software functionality. I have worked on projects ranging from small-scale web applications to complex enterprise-level software systems.",
      "As a freelance software engineer, I managed teams consisting of other developers using agile methodologies to manage project timelines and work collaboratively with other team members.",
      "One of my major projects involved developing a cloud-based application for a financial services company. I worked closely with the client to design and develop the application using JavaScript (React.js, Node.js, Next.js, React Native) and python, ensuring that it met all of their requirements while remaining scalable and easy to maintain.",
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
    name: "Music Player",
    description:
      "This web app is a music player app like Spotify, or YouTube Music. It gets music data (like: music lyrics, trending music, top artists, top charts, music categories) from Shazam API. Developed using React.js, Redux, Tailwind CSS, Shazam API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/khaled-305/music-player",
    demo_link: "https://adorable-otter-7060e0.netlify.app/",
  },
  {
    name: "Custom T-Shirt Design Maker",
    description:
      "Web application that enable users to create custom t-shirt design, change color of the t-shirt, upload logo, generate design using ChatGPT. This was designed using react.js, tailwindcss, framer motion, three.js, node.js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "node.js/express.js",
        color: "pink-text-gradient",
      },
      {
        name: "framer motion",
        color: "blue-text-gradient",
      },
    ],
    image: shirt,
    source_code_link: "https://github.com/khaled-305/threejs-shirt-app",
    demo_link: "https://threejs-shirt-app.vercel.app/",
  },
  {
    name: "Food Devlivery App",
    description:
      "A full-stack food delivery web app developed using React.js. In this web app, user's can view different categories of food and drinks, add items to cart, update quantity of items in cart, authenticate using google auth.. etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Framer motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/khaled-305/food-delivery-app",
    demo_link: "https://astonishing-profiterole-37547b.netlify.app/",
  },
  {
    name: "YouTube Clone App",
    description:
      "This is a YouTube clone application developed using data from YouTube v3 API. With a responsive video section, custom categories, youtube channel pages, video page and video player, advanced filtering for related channels and videos.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "youTube API",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "blue-text-gradient",
      },
    ],
    image: yt,
    source_code_link: "https://github.com/khaled-305/YT-clone",
    demo_link: "https://adorable-licorice-000394.netlify.app/",
  },
  {
    name: "Fitness App",
    description:
      "This is a fitness/workout app. It provides the user with different workout categories, workout instructions and examples, it pulls related workout video categories from youtube and displays for the user to select from.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Rapid API",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: workout,
    source_code_link: "https://github.com/khaled-305/fitness-app",
    demo_link: "https://fitness-app-asl4-l9lp9so9g-khaled-305.vercel.app/",
  },
  {
    name: "Crypto Order Book",
    description:
      "This project is a crypto order book, developed with react and web socket. It displays the current price of Bitcoin and etherium, and the buy and sale changes in real time. It has options to change feed from 'BTC' to 'ETC'. You can also group or spread the result as you wish.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Web Socket",
        color: "pink-text-gradient",
      },
      {
        name: "SASS",
        color: "green-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "blue-text-gradient",
      },
    ],
    image: orderbook,
    source_code_link: "https://github.com/khaled-305/crypto-order-book",
    demo_link: "https://clinquant-hamster-ad6502.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
