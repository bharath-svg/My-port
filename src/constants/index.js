import thinkusable_logo from "../assets/images/thinkusable.png";
import adze_logo from "../assets/images/download.svg";
import zeksta_logo from "../assets/images/zeksta.svg";
import code_logo from "../assets/images/logo-sticky.svg";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  ecommsite,
  spaceXlog,
  cryptotracker,
  nextconsole,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  // 	imageUrl: rubyonrails,
  // 	name: "Ruby On Rails",
  // 	type: "Frontend",
  // },
  // {
  // 	imageUrl: golang,
  // 	name: "Golang",
  // 	type: "Backend",
  // },
  // 	imageUrl: python,
  // 	name: "Python",
  // 	type: "Backend",
  // },
  // 	imageUrl: postgres,
  // 	name: "Postgres",
  // 	type: "Database",
  // },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "Adze studio",
    icon: adze_logo,
    iconBg: "#accbe1",
    date: "Feb 2024 - present",
    points: [
      `Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), ensuring scalable, high-performance solutions.`,
      `Built dynamic React Native applications for Android with reusable components, delivering cross-platform solutions that run efficiently across web and mobile platforms.`,
      `Designed and developed RESTful APIs using Node.js and Express.js to support both web and mobile platforms, handling user authentication, data processing, and real-time updates.`,
      `Worked with MongoDB to model, store, and manage data for web and mobile applications, optimizing queries and enhancing data performance.`,
      `Implemented JWT-based authentication and OAuth2 for secure login and user session management across both web and mobile apps.`,
      `Integrated third-party services such as Firebase (for authentication and push notifications), Stripe, Razorpay (for payments), and Google Maps API (for location services) into both web and mobile apps.`,
      `Optimized web and mobile app performance, utilizing tools like code splitting, lazy loading, and image optimization to ensure faster loading times and better performance.`,
      `Collaborated with the design team to ensure UI/UX best practices were followed, using tools like Figma and Sketch to translate designs into pixel-perfect web and mobile interfaces.`,
      `Deployed applications using DigitalOcean for containerization and utilized CI/CD pipelines for streamlined deployments and improved development workflows.`,
      `Worked with Git for version control and GitHub for collaboration, adhering to agile practices with daily stand-ups, sprint planning, and retrospectives.`,
      `Conducted code reviews and mentored junior developers, providing guidance on best practices, performance optimizations, and debugging techniques.`,
      `Participated in end-to-end application lifecycle management, from requirement analysis and design to testing, deployment, and maintenance of both web and mobile apps.`,
      `Implemented utility and authentication features by integrating WhatsApp messaging via Combirds API, enabling secure and real-time user verification/data transmission.`,
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Zeksta technology pvt ltd",
    icon: zeksta_logo,
    iconBg: "#a2d2ff",
    date: "Feb 2022 - Nov 2023",
    points: [
      `Implemented JWT-based authentication and OAuth2 for secure login and user session management across both web and mobile apps.`,
      `Developed and maintained the frontend of Deluxe’s business products platform using React.js, ensuring a fast, responsive, and user-friendly experience.`,
      `Integrated React components with backend services, collaborating closely with backend developers to ensure smooth data flow and dynamic content rendering.`,
      `Optimized application performance, reducing load times and improving responsiveness across multiple devices and browsers.`,
      `Developed an internal admin panel for company employees to manage subscriptions, view/edit platform data, and perform administrative tasks efficiently.`,
      `Contributed to the reordering process feature, enabling users to easily reorder checks and other products with a few clicks, boosting customer satisfaction.`,
      `Collaborated with cross-functional teams to gather requirements, conduct design reviews, and iterate on features to meet user needs.`,
      `Followed best practices in code quality, testing, and version control, using Git for efficient collaboration and maintainable code.`,
      `Designed and implemented a CSS framework called newUI, enhancing the website's overall UI for a modern and visually appealing experience.`,
      `Integrated a secure payment page, enabling online donations and payments through the website.`,
      `Demonstrated adaptability by learning and implementing new technologies, adhering to coding standards, and contributing to testing and documentation.`,
    ],
  },
  {
    title: "React js Developer",
    company_name: "Codelink Infotech",
    icon: code_logo,
    iconBg: "#b7e4c7",
    date: "Sep 2020 - Feb 2022",
    points: [
      `Built dynamic, responsive UIs using React.js, improving user engagement and experience for web applications.`,
      `Developed reusable and modular components in React, reducing development time and ensuring consistency across the platform.`,
      `Managed state efficiently using React hooks (useState, useEffect) and Redux for complex state management in large applications.`,
      `Optimized application performance by implementing techniques such as lazy loading, code splitting, and memoization to ensure fast load times and smooth interactions.`,
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "mailto:bharathahy640@gmail.com",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/calebjoshuapaul/",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/calebjoshuapaul/",
  },
];

export const projects = [
  {
    // iconUrl: nextconsole,
    iconUrl: ecommsite,
    theme: "btn-back-yellow",
    name: "Shop Deluxe",
    description:
      "Developed and maintained software solutions for Deluxe's business products platform, enabling small businesses and financial institutions to streamline check printing and secure payments.",
    link: "https://www.deluxe.com/shopdeluxe/home?srsltid=AfmBOooZxmW31jC_YRv4q4VERQW3Q6vtLDpd8N5UH4pbhYPUrrGKlomV",
  },
  {
    // iconUrl: cryptotracker,
    iconUrl: nextconsole,
    theme: "btn-back-red",
    name: "OSI",
    description:
      "A non-profit professional association promoting evidence-based implantology practices calibrated to international standards. ",
    link: "https://osindia.org/",
  },
  {
    // iconUrl: spaceXlog,
    iconUrl: nextconsole,
    theme: "btn-back-green",
    name: "Skibboo (Andriod & ios)",
    description:
      "This web app lets the user view the launch log of SpaceX Sattelites, sort upcoming, successfull or failed launches and also to search launches between a set range. Click on a pariticular launch to view more details of the launch.",
    link: "https://play.google.com/store/apps/details?id=com.skibboo",
  },
  {
    iconUrl: ecommsite,
    theme: "btn-back-black",
    name: "Grabit (Andriod & ios)",
    description:
      "A food delivery app connecting users with local restaurants. Implemented user-friendly features including real-time tracking, payment integration, and personalized restaurant recommendations to enhance customer experience.",
    link: "https://play.google.com/store/apps/details?id=com.grabitcustomer",
  },
];
