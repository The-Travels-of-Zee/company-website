import { FaFacebook, FaLinkedinIn, FaEnvelope, FaBehance } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export const navbarLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact Us", href: "/contact" },
];

export const brands = [
  {
    title: "react",
    image: "./static/react_icon.webp",
  },
  {
    title: "wordpress",
    image: "./static/wordpress_icon.webp",
  },
  {
    title: "wix",
    image: "./static/wix_icon.webp",
  },
  {
    title: "shopify",
    image: "./static/shopify_icon.webp",
  },
  {
    title: "figma",
    image: "./static/figma_icon.webp",
  },
  {
    title: "adobe",
    image: "./static/adobe_icon.webp",
  },
  {
    title: "flutter",
    image: "./static/flutter_icon.webp",
  },
  {
    title: "nextjs",
    image: "./static/nextjs_icon.webp",
  },
  {
    title: "nodejs",
    image: "./static/nodejs_icon.webp",
  },
];

export const featureProjects = [
  {
    title: "Brainwave - AI Website Design",
    image: "./static/projects-ai-landing-page.png",
    live: "#",
    created_at: "2024-05-01",
    updated_at: "2024-05-02",
  },
  {
    title: "Mobile Banking/Trading App",
    image: "./static/projects-mobile-app-mockup.avif",
    live: "#",
    created_at: "2024-05-03",
    updated_at: "2024-05-04",
  },
  {
    title: "E-Banking Web App",
    image: "./static/projects-banking-app.png",
    live: "#",
    created_at: "2024-05-03",
    updated_at: "2024-05-04",
  },
];

export const statsList = [
  // { name: "Clients", value: "300+", video: "./videos/followers.mp4" },
  { name: "Happy Customers", value: "350", video: "./videos/smiley-face.mp4" },
  { name: "Client Satifaction", value: "100%", video: "./videos/thumbs-up.mp4" },
  { name: "Projects", value: "154", video: "./videos/projects.mp4" },
];

export const workLists = [
  {
    title: "Strategic Planning & Consulting",
    video: "./videos/Strategic-planning-onsulting.mp4",
    desc: "We analyze your business model and develop a clear roadmap tailored to your goals, helping you scale effectively and efficiently.",
  },
  {
    title: "Marketing & Brand Visibility",
    video: "./videos/marketing-brand-visibility.mp4",
    desc: "From SEO to social media, we amplify your brand’s reach and attract the right customers through data-driven campaigns.",
  },
  {
    title: "Modern Technology & Automation",
    video: "./videos/technology-automation.mp4",
    desc: "Leverage the power of modern tools and automation to streamline operations, reduce costs, and boost productivity.",
  },
];

export const workLists2 = [
  {
    title: "Complimentary Initial Meeting",
    desc: "We understand your business goals and assess your needs.",
  },
  {
    title: "Budget-Friendly Plan",
    desc: "Tailored strategies that align with your budget and objectives.",
  },
  {
    title: "Professional Implementation",
    desc: "We bring the plan to life using best-in-class tools and expertise.",
  },
  {
    title: "Thorough Quality Review",
    desc: "Every step is reviewed to ensure it meets your expectations.",
  },
  {
    title: "Continued Assistance",
    desc: "Ongoing support to help your business grow beyond launch.",
  },
];

export const services = [
  {
    id: 1,
    title: "Software Development",
    link: "https://thetravelsofzee.com/collections/frontpage",
    des: "Websites(Wordpress, Wix), Ecommerce Platforms(Shopify), Web Apps, Mobile Apps",
    image1: "./static/services-website-design.webp",
    image2: "./static/services-ai-image.avif",
    image3: "./static/services-mobile-mockup.avif",
    image4: "./static/services-mobileapp-design.avif",
  },
  {
    id: 2,
    title: "Content Writing",
    link: "https://thetravelsofzee.com/",
    des: "Blogs, SEO Content, Product Descriptions, Web Copy",
    image1: "./static/services-travel-blog.png",
    image2: "./static/services-web-copy.webp",
    image3: "./static/services-seo.avif",
    image4: "./static/services-product-description.avif",
  },
  {
    id: 3,
    title: "Graphic Design",
    link: "https://www.behance.net/thetravelsofzee",
    des: "Logos, Branding, Social Creatives, UI/UX Design",
    image1: "./static/services-palm-trees-design.png",
    image2: "./static/services-shirt-poster.png",
    image3: "./static/services-south-korea-cover.png",
    image4: "./static/services-mountain-design.png",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Zaineb Nawaz",
    designation: "CEO",
    image: "/static/T-logo.png",
    facebook: "#",
    twitter: "#",
    linkedIn: "https://www.linkedin.com/in/zaineb-nawaz/",
    instagram: "#",
  },
  {
    id: 2,
    name: "Shaheer Mansoor",
    designation: "Full Stack Software Engineer",
    image: "/images/shaheer-portrait.webp",
    facebook: "#",
    twitter: "#",
    linkedIn: "https://www.linkedin.com/in/shaheer-mansoor/",
    instagram: "#",
  },
  {
    id: 3,
    name: "Umair Bilal",
    designation: "Mobile App Developer",
    image: "/images/umair-portrait.webp",
    facebook: "#",
    twitter: "#",
    linkedIn: "https://www.linkedin.com/in/umair-bilal-/",
    instagram: "#",
  },
  {
    id: 4,
    name: "Suleman Waqqar",
    designation: "Business Development & Operations Manager",
    image: "/images/salman-portrait.webp",
    facebook: "#",
    twitter: "#",
    linkedIn: "https://www.linkedin.com/in/suleman-waqqar/",
    instagram: "#",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Kathy Ceuvas",
    project_name: "Web Page Redesign",
    designation: "Financial Coach",
    msg: "I am beyond thrilled with the work The Travels of Zee did on my website! From start to finish, the entire process was smooth, efficient, and professional.",
    image: "./images/client-kathy-portrait.webp",
  },
  {
    id: 2,
    name: "Yasir",
    project_name: "Website copywriter + SEO",
    designation: "Blogger",
    msg: "Great to work with you, very hardworking and honest with highly polished skills. Extremely recommended. I'll keep you in mind.",
    image: "./static/T-logo.png",
  },
];

export const footerLinks = [
  // { name: "About Us", href: "/about" },
  // { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

export const socialLinks = [
  { name: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61561092740301" },
  { name: <FaBehance />, href: "https://www.behance.net/thetravelsofzee/" },
  { name: <FaLinkedinIn />, href: "https://www.linkedin.com/company/the-travels-of-zee/" },
  { name: <PiInstagramLogoFill />, href: "https://www.instagram.com/thetravelsofzeeuk/" },
  { name: <FaEnvelope />, href: "mailto:info@thetravelsofzee.com" },
];

// Not currently used in the project
export const allProjects = [
  {
    id: 1,
    title: "AI Website Design",
    image: "./static/T-logo.png",
  },
  {
    id: 2,
    title: "Mobile App Concept",
    image: "./static/T-logo.png",
  },
  {
    id: 3,
    title: "Desktop App Concept",
    image: "./static/T-logo.png",
    live: "#",
    created_at: "2024-05-03",
    updated_at: "2024-05-04",
  },
  {
    id: 4,
    title: "Desktop App Concept",
    image: "./static/T-logo.png",
    live: "#",
    created_at: "2024-05-03",
    updated_at: "2024-05-04",
  },
];
