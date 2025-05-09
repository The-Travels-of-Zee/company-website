import { Content } from "next/font/google";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
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
    title: "slack",
    image: "./static/slack.png",
  },
  {
    title: "dropbox",
    image: "./static/dropbox.png",
  },
  {
    title: "spotify",
    image: "./static/spotify.png",
  },
  {
    title: "stripe",
    image: "./static/stripe.png",
  },
];

export const featureProjects = [
  {
    title: "AI Website Design",
    image: "./static/slack.png",
    live: "#",
    created_at: "2024-05-01",
    updated_at: "2024-05-02",
  },
  {
    title: "Mobile App Concept",
    image: "./static/dropbox.png",
    live: "#",
    created_at: "2024-05-03",
    updated_at: "2024-05-04",
  },
  {
    title: "Desktop App Concept",
    image: "./static/spotify.png",
    live: "#",
    created_at: "2024-05-03",
    updated_at: "2024-05-04",
  },
  {
    title: "Desktop App Concept",
    image: "./static/stripe.png",
    live: "#",
    created_at: "2024-05-03",
    updated_at: "2024-05-04",
  },
];

export const statsList = [
  { name: "Followers", value: "20324", video: "./videos/followers.mp4" },
  { name: "Solved Problems", value: "2510", video: "./videos/thumbs-up.mp4" },
  { name: "Happy Customers", value: "350", video: "./videos/smiley-face.mp4" },
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

export const services = [
  {
    id: 1,
    title: "Software Development",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image1: "./static/T-logo.png",
    image2: "./static/T-logo.png",
    image3: "./static/T-logo.png",
    image4: "./static/T-logo.png",
  },
  {
    id: 2,
    title: "Content Writing",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image1: "./static/T-logo.png",
    image2: "./static/T-logo.png",
    image3: "./static/T-logo.png",
    image4: "./static/T-logo.png",
  },
  {
    id: 3,
    title: "Graphic Design",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image1: "./static/T-logo.png",
    image2: "./static/T-logo.png",
    image3: "./static/T-logo.png",
    image4: "./static/T-logo.png",
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
    image: "/images/shaheer-potrait.webp",
    facebook: "#",
    twitter: "#",
    linkedIn: "https://www.linkedin.com/in/shaheer-mansoor/",
    instagram: "#",
  },
  {
    id: 3,
    name: "Umair Bilal",
    designation: "Mobile App Developer",
    image: "/static/T-logo.png",
    facebook: "#",
    twitter: "#",
    linkedIn: "https://www.linkedin.com/in/umair-bilal-/",
    instagram: "#",
  },
  {
    id: 4,
    name: "Suleman Waqqar",
    designation: "Business Development & Operations Manager",
    image: "/images/salman-potrait.webp",
    facebook: "#",
    twitter: "#",
    linkedIn: "https://www.linkedin.com/in/suleman-waqqar/",
    instagram: "#",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Satya Nadella",
    designation: "CEO, Microsoft",
    msg: "Team 'The Travels of Zee' routinely impressed not only me but the entire Microsoft team.",
    image: "./static/T-logo.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "CTO, Company",
    msg: "The Travels of Zee team excelled in crafting our impressive website, garnering client praise and ongoing benefits.",
    image: "./static/T-logo.png",
  },
  {
    id: 3,
    name: "Alice Johnson",
    designation: "CFO, Company",
    msg: "This is yet another testimonial message.",
    image: "./static/T-logo.png",
  },
  {
    id: 3,
    name: "Alice Johnson",
    designation: "CFO, Company",
    msg: "This is yet another testimonial message.",
    image: "./static/T-logo.png",
  },
];

export const footerLinks = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

export const socialLinks = [
  { name: <FaFacebook />, href: "https://www.facebook.com/" },
  { name: <FaTwitter />, href: "https://twitter.com/" },
  { name: <FaLinkedinIn />, href: "https://www.linkedin.com/" },
  { name: <PiInstagramLogoFill />, href: "https://www.instagram.com/" },
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
