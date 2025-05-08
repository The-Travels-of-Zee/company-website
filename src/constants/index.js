import { FaFacebook, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export const navbarLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Team", href: "#team" },
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

export const statLinks = [
  { name: "Followers", value: "240,324", image: "/icons/stats.png" },
  { name: "Solved Problems", value: "6,510", image: "/icons/solved.png" },
  { name: "Happy Customers", value: "4,350", image: "/icons/customer.png" },
  { name: "Projects", value: "19,324", image: "/icons/project.png" },
];

export const workLists = [
  {
    title: "AI Website Design",
    image: "./icons/Heart.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae veniam magnam? Eum, repudiandae accusantium.",
  },
  {
    title: "Mobile App Concept",
    image: "./icons/Heart.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae veniam magnam? Eum, repudiandae accusantium.",
  },
  {
    title: "Desktop App Concept",
    image: "./icons/Heart.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae veniam magnam? Eum, repudiandae accusantium.",
  },
];

export const services = [
  {
    id: 1,
    title: "Web Design",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image1: "./static/T-logo.png",
    image2: "./static/T-logo.png",
    image3: "./static/T-logo.png",
    image4: "./static/T-logo.png",
  },
  {
    id: 2,
    title: "Mobile App Design",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image1: "./static/T-logo.png",
    image2: "./static/T-logo.png",
    image3: "./static/T-logo.png",
    image4: "./static/T-logo.png",
  },
  {
    id: 3,
    title: "UI/UX Design",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image1: "./static/T-logo.png",
    image2: "./static/T-logo.png",
    image3: "./static/T-logo.png",
    image4: "./static/T-logo.png",
  },
  {
    id: 4,
    title: "Branding",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image1: "./static/T-logo.png",
    image2: "./static/T-logo.png",
    image3: "./static/T-logo.png",
    image4: "./static/T-logo.png",
  },
  {
    id: 5,
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
    name: "John Doe",
    image: "./static/T-logo.png",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "./static/T-logo.png",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: "./static/T-logo.png",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 4,
    name: "Bob Brown",
    image: "./static/T-logo.png",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, Company",
    msg: "This is a testimonial message.",
    image: "./static/T-logo.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "CTO, Company",
    msg: "This is another testimonial message.",
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
