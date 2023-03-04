import {
  Settings,
  CropRotate,
  ViewInAr,
  PieChart,
  Code,
  BarChart,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";

import uploadToFirebase from "./images/file-upload-to-firebase-webApp.png";
import gdClone from "./images/google-drive-clone.PNG";
import carwash from "./images/shafieks-carwash.png";
import jobList from "./images/job-listing.PNG";
import weather from "./images/weather.PNG";
import faceDet from "./images/face-det.PNG";
import mari from "./images/marilize.jpg";
import rob from "./images/rob.jpeg";

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
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];
export const about = [
  {
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    desc1:
      "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
  },
];
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI	",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "High Performance Mobile Apps",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
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
  },
  {
    id: 2,
    cover: weather,
    title: "Weather App",
    handle: "https://weatherreactjsweb.netlify.app/",
  },
  {
    id: 3,
    cover: faceDet,
    title: "Face Detector (Desktop)",
    handle: "https://face-detect-reactjs.netlify.app/",
  },
  {
    id: 4,
    cover: gdClone,
    title: "Google Drive Clone",
    handle: "https://drive-clone-fe7b2.web.app/",
  },
  {
    id: 5,
    cover: jobList,
    title: "Job Listing",
    handle: "https://job-listing-39b59.web.app/",
  },
  {
    id: 6,
    cover: uploadToFirebase,
    title: "File Upload to Firebase Web App",
    handle: "https://younglings-uploadtofirebase.netlify.app",
  },
];

export const portfolio2 = [
  {
    id: 1,
    cover: uploadToFirebase,
    title: "File Upload to Firebase Web App",
    handle: "https://younglings-uploadtofirebase.netlify.app",
  },
  {
    id: 2,
    cover: uploadToFirebase,
    title: "File Upload to Firebase Web App",
    handle: "https://younglings-uploadtofirebase.netlify.app",
  },
  {
    id: 3,
    cover: uploadToFirebase,
    title: "File Upload to Firebase Web App",
    handle: "https://younglings-uploadtofirebase.netlify.app",
  },
  {
    id: 4,
    cover: uploadToFirebase,
    title: "File Upload to Firebase Web App",
    handle: "https://younglings-uploadtofirebase.netlify.app",
  },
  {
    id: 5,
    cover: uploadToFirebase,
    title: "File Upload to Firebase Web App",
    handle: "https://younglings-uploadtofirebase.netlify.app",
  },
  {
    id: 6,
    cover: uploadToFirebase,
    title: "File Upload to Firebase Web App",
    handle: "https://younglings-uploadtofirebase.netlify.app",
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
  },

  {
    icon: <EmailOutlined />,
    text1: "mogamatnaeemcarr@gmail.com",
  },
];
export const social = [
  {
    icon: <Facebook />,
    link: "https://www.facebook.com/naeem.carr.3/",
  },
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/naeem__carr/",
  },
  {
    icon: <LinkedIn />,
    link: "https://www.linkedin.com/in/mncarr/",
  },
  {
    icon: <GitHub />,
    link: "https://github.com/naeem2000",
  },
];
