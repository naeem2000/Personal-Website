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
export const portfolio = [
  {
    id: 1,
    cover: carwash,
    name: "Brand",
    category: "web",
    title: "Shafiek's Carwash",
    handle: "https://shafiekscarwash.netlify.app",
  },
  {
    id: 2,
    cover: weather,
    name: "Brand",
    category: "development",
    title: "Weather App",
    handle: "https://weatherreactjsweb.netlify.app/",
  },
  {
    id: 3,
    cover: faceDet,
    name: "Brand",
    category: "development",
    title: "Face Detector (Desktop)",
    handle: "https://face-detect-reactjs.netlify.app/",
  },
  {
    id: 4,
    cover: gdClone,
    name: "Brand",
    category: "mobile",
    title: "Google Drive Clone",
    handle: "https://drive-clone-fe7b2.web.app/",
  },
  {
    id: 5,
    cover: jobList,
    name: "Brand",
    category: "web",
    title: "Job Listing",
    handle: "https://job-listing-39b59.web.app/",
  },
  {
    id: 6,
    cover: uploadToFirebase,
    name: "Brand",
    category: "mobile",
    title: "File Upload to Firebase Web App",
    handle: "https://younglings-uploadtofirebase.netlify.app",
  },
];
export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: rob,
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: mari,
    name: "Alex Ander",
    post: "Back End Developer",
  },
];
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
];
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "2651 Main Street, Suit 124",
    text2: "Seattle, WA, 98101",
  },
  {
    icon: <PhoneIphone />,
    text1: "0123456789",
    text2: "0345627891",
  },
  {
    icon: <EmailOutlined />,
    text1: "hello@thetheme.io",
    text2: "inf0@brex-theme.io",
  },
];
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
];
