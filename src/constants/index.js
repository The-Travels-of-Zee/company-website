import { images } from "next.config";
import { FaFacebook, FaLinkedinIn, FaEnvelope, FaBehance } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export const navbarLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Pricings", href: "/#pricing" },
  { name: "Contact Us", href: "/#contact" },
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

export const clientProjects = [
  {
    title: "Financial Freedom Pathway",
    image: "./static/projects-landing-page-design.webp",
    category: "Website Design",
    live: "https://www.financialfreedompathway.us/",
    created_at: "2024-05-01",
    updated_at: "2024-05-02",
  },
  {
    title: "The Natalie Strong Foundation",
    image: "./static/projects-natalie-strong-foundation.webp",
    category: "Website Redesign",
    live: "https://www.nataliestrong.org/",
    created_at: "2024-05-03",
    updated_at: "2024-05-04",
  },
];

export const companyProjects = [
  {
    title: "FarahGPT - Islamic Mentorship",
    image: "./static/projects-mobile-app-farahgpt.webp",
    category: "Mobile App",
    live: "https://farahgpt.com/",
    created_at: "2024-05-03",
    updated_at: "2024-05-04",
  },
  {
    title: "Muslifie - All in One Travel App",
    image: "./static/projects-mobile-app-muslifie.webp",
    category: "Mobile App",
    live: "https://muslifie.com/",
    created_at: "2024-06-11",
    updated_at: "2024-06-11",
  },
];

export const statsList = [
  // { name: "Clients", value: "300+", video: "./videos/followers.mp4" },
  { name: "Happy Customers", value: "30", video: "./videos/smiley-face.mp4" },
  { name: "Client Satifaction", value: "100%", video: "./videos/thumbs-up.mp4" },
  { name: "Projects", value: "50", video: "./videos/projects.mp4" },
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
    desc: "From Design to Development, we amplify your brand’s reach and attract the right customers through data-driven campaigns.",
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
    link: "https://muslifie.com/",
    des: "Websites(Wordpress, Wix), Ecommerce Platforms(Shopify), Web Apps, Mobile Apps",
    images: ["./static/projects-mobile-app-muslifie.webp"],
  },
  {
    id: 2,
    title: "Content Writing",
    link: "https://thetravelsofzee.com/blogs/muslim-friendly-travel-tips/top-halal-friendly-accommodations-in-tokyo",
    des: "Blogs, SEO Content, Product Descriptions, Web Copy",
    images: ["./static/services-web-copy.webp"],
  },
  {
    id: 3,
    title: "Graphic Design",
    link: "https://www.behance.net/thetravelsofzee",
    des: "Logos, Website Design, Mobile App Design, Branding, Social Creatives, UI/UX Design",
    images: ["./static/services-shirt-poster.png"],
  },
];

export const teamMembers = [
  {
    name: "Zaineb Nawaz",
    designation: "CEO",
    image: "/images/zaineb-portrait.webp",
    facebook: "#",
    twitter: "#",
    linkedIn: "https://www.linkedin.com/in/zaineb-nawaz/",
    instagram: "#",
  },
  {
    name: "Shaheer Mansoor",
    designation: "Full Stack Software Engineer",
    image: "/images/shaheer-portrait.webp",
    facebook: "#",
    twitter: "#",
    linkedIn: "https://www.linkedin.com/in/shaheer-mansoor/",
    instagram: "#",
  },
  {
    name: "Umair Bilal",
    designation: "Mobile App Developer",
    image: "/images/umair-portrait.webp",
    facebook: "#",
    twitter: "#",
    linkedIn: "https://www.linkedin.com/in/umair-bilal-/",
    instagram: "#",
  },
  {
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
  {
    id: 3,
    name: "Oscar A. Rodriguez",
    project_name: "Website Redesign + SEO",
    designation: "Executive Director at The Natalie Strong Foundation",
    msg: "The Travels of Zee did a fantastic job redesigning the website. They were professional, creative, and incredibly easy to work with and they delivered exactly what we needed.",
    image: "./images/Oscar-A-Rodriguez.avif",
  },
];

export const footerLinks = [
  // { name: "About Us", href: "/about" },
  // { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export const socialLinks = [
  { name: "facebook", icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61561092740301" },
  { name: "behance", icon: <FaBehance />, href: "https://www.behance.net/thetravelsofzee/" },
  { name: "linkedIn", icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/the-travels-of-zee/" },
  { name: "instagram", icon: <PiInstagramLogoFill />, href: "https://www.instagram.com/thetravelsofzeeuk/" },
  { name: "email", icon: <FaEnvelope />, href: "mailto:info@thetravelsofzee.com" },
];

export const privacyPolicy = `
**Last Updated: May 21, 2025**

At **The Travels of Zee**, your privacy matters to us. We only collect your email address when you voluntarily provide it through our **newsletter subscription form** or **contact form**.

## What We Collect

- **Email Address** — when you subscribe to our newsletter or reach out through our contact form.

## How We Use It

- To send you updates, travel stories, and occasional newsletters.  
- To respond to your inquiries or messages.

## What We Don’t Do

- We **do not sell**, share, or rent your email to third parties.  
- We **do not track** or store any personal data beyond your email address.

## Your Choices

You can unsubscribe from our emails at any time using the link at the bottom of any newsletter.  
If you’d like your email removed from our records, just contact us directly.

---

### **Contact Us**

If you have any questions about this policy, please reach out via our _[contact form](/contact)_.
`;
