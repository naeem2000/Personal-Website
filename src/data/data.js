import uploadToFirebase from "./images/file-upload-to-firebase-webApp.jpg";
import gdClone from "./images/google-drive-clone.jpg";
import carwash from "./images/shafieks-carwash.jpg";
import jobList from "./images/job-listing.jpg";
import CMRMNative from "./images/cmrmrn.jpg";
import faceDet from "./images/face-det.jpg";
import weather from "./images/weather.jpg";
import NewsRn from "./images/newsrn.jpg";
import ToDoRn from "./images/todorn.jpg";
import Javascript from "./images/js.jpg";
import mari from "./images/marilize.jpg";
import React from "./images/react.jpg";
import Html from "./images/html.jpg";
import Sass from "./images/sass.jpg";
import rob from "./images/rob.jpeg";
import Css from "./images/css.jpg";
import {
  AddLocationAltOutlined,
  FavoriteBorder,
  PersonOutlined,
  EmailOutlined,
  CloudOutlined,
  Instagram,
  LinkedIn,
  Facebook,
  GitHub,
  Public,
} from "@mui/icons-material";

export const navLink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];
export const home = [
  {
    text: "HELLO I'M",
    name: "NAEEM CARR",
    web: "WEB DEVELOPER",
    mobile: "MOBILE DEVELOPER",
    desc: "My name is Mogamat Naeem Carr. I am a front-end Mobile and Web Developer based in Cape Town, South Africa. I have developed many types of front-ends from well known frameworks to full fledged native code. I love coding responsive and brutalist apps. I love nature, pizza and exploring.",
  },
];
export const about = [
  {
    desc: "As a web and mobile developer with 3 years of experience, I am well-versed in various programming languages such as HTML, CSS, JavaScript, TypeScript, React, React-Native & SCSS. I have a proven track record of developing high-quality, responsive, and user-friendly websites and mobile applications that meet clients' needs and exceed their expectations. My expertise includes styling and developing applications that integrate with APIs, databases, and third-party services.",
    desc1:
      "Additionally, I have experience with version control systems such as Git and deployment tools such as AWS, Firebase, and Netlify. I am a quick learner and enjoy staying up-to-date with the latest trends and technologies in the industry. I am passionate about coding and creating innovative solutions that solve real-world problems.",
  },
];
export const services = [
  {
    id: 1,
    icon: Html,
    title: "HTML",
    desc: "Document Structure",
    desc1: "Semantic Markup",
    desc2: "Text Formatting",
    desc3: "Links and Images",
    desc4: "Forms and Input",
  },
  {
    id: 2,
    icon: Css,
    title: "CSS",
    desc: "Layouts",
    desc1: "Selectors",
    desc2: "Box Model",
    desc3: "Typography",
    desc4: "Transitions and Animations",
    desc5: "Best Practices",
    desc6: "Colors",
  },
  {
    id: 3,
    icon: Javascript,
    title: "JavaScript",
    desc: "Fundamentals",
    desc1: "Object-Oriented Programming",
    desc2: "DOM Manipulation",
    desc3: "Asynchronous Programming",
    desc4: "API's",
    desc5: "Development tools",
  },
  {
    id: 4,
    icon: React,
    title: "React.Js	",
    desc: "React Fundamentals",
    desc1: "Redux",
    desc2: "React-Router",
    desc3: "Hooks",
    desc4: "Server-side Rendering",
    desc5: "API's",
    desc6: "Styled Components",
  },
  {
    id: 5,
    icon: React,
    title: "React-Native",
    desc: "React Native Fundamentals",
    desc1: "Navigation",
    desc2: "API's",
    desc3: "Styling",
    desc4: "Expo",
    desc5: "Performance Optimization",
    desc6: "Publishing",
    desc7: "Debugging",
  },
  {
    id: 6,
    icon: Sass,
    title: "Sass",
    desc: "Sass Fundamentals",
    desc1: "Variables",
    desc2: "Nesting",
    desc3: "Mixins",
    desc4: "Functions",
    desc5: "Operators",
    desc6: "Control Directives",
    desc7: "Architecture",
  },
];
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "3",
    title: "HAPPY EMPLOYERS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "22",
    title: "PROJECTS COMPLETED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "30",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "746",
    title: "LINES OF CODE",
  },
];
export const portfolio1 = [
  {
    id: 1,
    cover: carwash,
    title: "Shafiek's Carwash",
    handle: "https://shafiekscarwash.netlify.app",
    divClass: "overlay",
  },
  {
    id: 2,
    cover: weather,
    title: "Weather App",
    handle: "https://weatherreactjsweb.netlify.app/",
    divClass: "overlay",
  },
  {
    id: 3,
    cover: faceDet,
    title: "Face Detector (Desktop)",
    handle: "https://face-detect-reactjs.netlify.app/",
    divClass: "overlay",
  },
  {
    id: 4,
    cover: gdClone,
    title: "Google Drive Clone",
    handle: "https://drive-clone-fe7b2.web.app/",
    divClass: "overlay",
  },
  {
    id: 5,
    cover: jobList,
    title: "Job Listing",
    handle: "https://job-listing-39b59.web.app/",
    divClass: "overlay",
  },
  {
    id: 6,
    cover: uploadToFirebase,
    title: "File Upload to Firebase Web App",
    handle: "https://younglings-uploadtofirebase.netlify.app",
    divClass: "overlay",
  },
];

export const portfolio2 = [
  {
    id: 1,
    cover: CMRMNative,
    title: "CMRM Mobile",
    subtitle: "(source code)",
    handle: "https://github.com/naeem2000/Claremont-Mosque-React-Native",
    class: "mobile-apps",
  },
  {
    id: 2,
    cover: NewsRn,
    title: "News App",
    subtitle: "(source code)",
    handle: "https://github.com/naeem2000/React-Native-News-App",
    divClass: "mobileoverlay",
  },
  {
    id: 3,
    cover: ToDoRn,
    title: "To-Do App",
    subtitle: "(source code)",
    handle: "https://github.com/naeem2000/react-native-todo-app",
    class: "mobile-apps",
  },
];

export const testimonials = [
  {
    id: 1,
    text: "Naeem has great communication skills and has really shown immense progress of interaction with his fellow team members. He has shown throughout the months that IT is his passion. He is highly recommended for work readiness, as he is a young, talented individual.",
    image: rob,
    name: "Robert Brady",
    post: "Facilitator at CapaCiTi",
  },
  {
    id: 2,
    text: "Naeem is a young man who has worked hard at producing a good set of assessments on time. He is a pleasant and competent person who does his best to help others where he can. Technically his competence is good in Web Development. With self-gained knowledge in Computer systems.",
    image: mari,
    name: "Marilize Koen",
    post: "Facilities Manager at CapaCiTi",
  },
];

export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Cape Town, South Africa",
    link: "https://www.google.com/maps/place/Cape+Town/@-33.915538,18.6560594,8z/data=!4m6!3m5!1s0x1dcc500f8826eed7:0x687fe1fc2828aa87!8m2!3d-33.9248685!4d18.4240553!16zL20vMDF5ajI?hl=en_GB",
  },

  {
    icon: <EmailOutlined />,
    text1: "mogamatnaeemcarr@gmail.com",
    link: "mailto:mogamatnaeemcarr@gmail.com",
  },
];
export const social = [
  {
    icon: <Facebook style={{ fontSize: "40px" }} />,
    link: "https://www.facebook.com/naeem.carr.3/",
  },
  {
    icon: <Instagram style={{ fontSize: "40px" }} />,
    link: "https://www.instagram.com/naeem__carr/",
  },
  {
    icon: <LinkedIn style={{ fontSize: "40px" }} />,
    link: "https://www.linkedin.com/in/mncarr/",
  },
  {
    icon: <GitHub style={{ fontSize: "40px" }} />,
    link: "https://github.com/naeem2000",
  },
];
