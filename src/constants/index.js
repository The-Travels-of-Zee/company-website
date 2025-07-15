import {
  BookOpen,
  Brain,
  Briefcase,
  Cloud,
  Gift,
  LifeBuoy,
  Lock,
  Map,
  Monitor,
  RefreshCcw,
  Shield,
  ShieldCheck,
  User,
  Users,
} from "lucide-react";
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

export const talentTestimonials = [
  {
    name: "Leon Carter",
    project_name: "Machine Learning Backend",
    designation: "CTO, FinTech Startup",
    msg: "We hired 3 senior backend engineers in under 2 weeks, AI-powered screening matched our tech stack precisely.",
    image: "./static/T-logo.png",
  },

  {
    name: "Priya Desai",
    project_name: "Data Analyst",
    designation: "HR Head, eCommerce Brand",
    msg: "Their AI skill tests and portfolio scoring gave us total confidence in the candidates.",
    image: "./static/T-logo.png",
  },
  {
    name: "Samantha Lee",
    designation: "CTO, NovaHealth",
    project_name: "Technical Talent Acquisition",
    msg: "Thanks to their AI resume scoring and video analysis tools, we accelerated our screening process without sacrificing candidate quality.",
    image: "./static/T-logo.png",
  },
  {
    name: "Raj Mehta",
    designation: "Director of Engineering, Quantix",
    project_name: "Technical Talent Acquisition",
    msg: "We sourced highly specialized ML engineers and AI developers within days. Their technical talent network is truly next-level.",
    image: "./static/T-logo.png",
  },
  {
    name: "Carla Nguyen",
    designation: "Head of Talent, FinEdge",
    project_name: "Technical Talent Acquisition",
    msg: "The portfolio-based assessments helped us pinpoint candidates with both the skills and the experience to hit the ground running.",
    image: "./static/T-logo.png",
  },
  {
    name: "Daniel Romero",
    designation: "VP of HR, LogiTech Systems",
    project_name: "Technical Talent Acquisition",
    msg: "We reduced our time-to-hire significantly. Automated matching and smoother onboarding saved us weeks of manual coordination.",
    image: "./static/T-logo.png",
  },
];

export const developmentTestimonials = [
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

export const talentFaqs = [
  {
    id: 1,
    question: "How does AI enhance your talent acquisition?",
    answer:
      "Our AI automates screening, scores coding skills, reviews portfolios, and runs unbiased video assessments, letting you focus on the best-fit candidates. The system processes thousands of profiles in minutes, identifying top talent based on technical competency, cultural fit, and project requirements.",
    icon: "Brain",
    color: "text-cyan-500",
    bgGradient: "from-cyan-100 to-blue-100",
    borderColor: "border-cyan-200",
  },
  {
    id: 2,
    question: "Will AI replace human hiring?",
    answer:
      "No, AI amplifies our recruiters' expertise with data-backed insights. Human judgment remains central. Our AI handles the initial screening and analysis, while experienced recruiters make final decisions, conduct interviews, and ensure cultural alignment.",
    icon: "Users",
    color: "text-emerald-500",
    bgGradient: "from-emerald-100 to-teal-100",
    borderColor: "border-emerald-200",
  },
  {
    id: 3,
    question: "Are results unbiased and compliant?",
    answer:
      "Yes. We use transparent AI tools with bias monitoring, aligned with best practices and regulations. Our algorithms are regularly audited for fairness, and we maintain compliance with GDPR, EEOC guidelines, and industry standards.",
    icon: "Shield",
    color: "text-purple-500",
    bgGradient: "from-purple-100 to-pink-100",
    borderColor: "border-purple-200",
  },
  {
    id: 4,
    question: "What roles do you fill?",
    answer:
      "Specialist technical talent, backend/frontend engineers, data scientists, AI/ML engineers, via on-demand hiring and scalable sourcing. We cover full-stack development, DevOps, cloud architecture, mobile development, and emerging technologies.",
    icon: "Briefcase",
    color: "text-blue-500",
    bgGradient: "from-blue-100 to-indigo-100",
    borderColor: "border-blue-200",
  },
];

export const developmentFaqs = [
  {
    id: 1,
    question: "Can you build both websites and mobile apps for my business?",
    answer:
      "Yes! We offer full-stack development for web and mobile platforms. Whether you need a responsive website, an e-commerce store, or native apps for iOS and Android, our team covers it all—from frontend design to backend systems and cloud deployment.",
    icon: "Monitor",
    color: "text-indigo-500",
    bgGradient: "from-indigo-100 to-purple-100",
    borderColor: "border-indigo-200",
  },
  {
    id: 2,
    question: "I already have a website. Can you help improve or rebuild it?",
    answer:
      "Absolutely. Many of our clients come to us with outdated or underperforming websites. We modernize your digital presence using frameworks like React and Next.js, optimizing for speed, SEO, and mobile usability without starting from scratch—unless you want a full redesign.",
    icon: "RefreshCcw",
    color: "text-orange-500",
    bgGradient: "from-orange-100 to-yellow-100",
    borderColor: "border-orange-200",
  },
  {
    id: 3,
    question: "How secure are your backend and API solutions?",
    answer:
      "Security is baked into everything we build. Our backend systems use industry-standard practices like HTTPS, authentication tokens, and role-based access control. We also regularly test for vulnerabilities to keep your data and users safe.",
    icon: "ShieldCheck",
    color: "text-red-500",
    bgGradient: "from-red-100 to-rose-100",
    borderColor: "border-red-200",
  },
  {
    id: 4,
    question: "Do you offer cloud deployment and scaling support?",
    answer:
      "Yes, we help businesses deploy apps on AWS, Azure, or other cloud platforms. We also configure serverless architecture, auto-scaling, backups, and CI/CD pipelines so your product stays fast and stable—even as you grow.",
    icon: "Cloud",
    color: "text-sky-500",
    bgGradient: "from-sky-100 to-blue-100",
    borderColor: "border-sky-200",
  },
  {
    id: 5,
    question: "I’m non-technical—can you still work with me?",
    answer:
      "Definitely. Many of our clients don’t have a technical background. We explain everything clearly, guide you through the process, and handle the technical heavy lifting—so you can focus on your business while we bring your vision to life.",
    icon: "User",
    color: "text-emerald-500",
    bgGradient: "from-emerald-100 to-teal-100",
    borderColor: "border-emerald-200",
  },
  {
    id: 6,
    question: "What kind of support do you offer after launch?",
    answer:
      "We offer flexible post-launch support including bug fixes, updates, performance monitoring, and feature enhancements. Whether you want a monthly maintenance plan or on-demand help, we've got you covered.",
    icon: "LifeBuoy",
    color: "text-cyan-500",
    bgGradient: "from-cyan-100 to-blue-100",
    borderColor: "border-cyan-200",
  },
];

export const inHouseAppFaqs = [
  {
    id: 1,
    question: "What is FarahGPT, and how is it different from other AI assistants?",
    answer:
      "FarahGPT is an AI assistant built specifically for Muslims. Unlike general-purpose AIs, it provides faith-aligned guidance based on authentic Islamic knowledge. Whether you have questions on daily life, worship, or Islamic principles, FarahGPT answers with context, care, and cultural awareness.",
    icon: "BookOpen",
    color: "text-green-600",
    bgGradient: "from-green-100 to-lime-100",
    borderColor: "border-green-200",
  },
  {
    id: 2,
    question: "Is the information from FarahGPT verified?",
    answer:
      "Yes. FarahGPT uses a carefully curated and reviewed knowledge base that includes trusted Islamic sources. While it uses AI to respond, the content is supervised and updated regularly by qualified contributors to ensure alignment with authentic teachings.",
    icon: "ShieldCheck",
    color: "text-emerald-600",
    bgGradient: "from-emerald-100 to-teal-100",
    borderColor: "border-emerald-200",
  },
  {
    id: 3,
    question: "What can I expect from Muslifie once it's launched?",
    answer:
      "Muslifie is being developed as a one-stop travel companion for Muslims. You'll be able to find halal food, locate nearby prayer spaces, and connect with local Muslim guides in new cities—making your travel more spiritual, safe, and community-connected.",
    icon: "Map",
    color: "text-indigo-600",
    bgGradient: "from-indigo-100 to-purple-100",
    borderColor: "border-indigo-200",
  },
  {
    id: 4,
    question: "Can I contribute to Muslifie as a local guide or content creator?",
    answer:
      "Yes! Once live, Muslifie will allow users to sign up as local guides, recommend halal spots, and help fellow travelers. It’s built to be community-powered, so your contributions help others travel with confidence and ease.",
    icon: "Users",
    color: "text-orange-500",
    bgGradient: "from-orange-100 to-yellow-100",
    borderColor: "border-orange-200",
  },
  {
    id: 5,
    question: "Are these apps free to use?",
    answer:
      "Yes, both FarahGPT and Muslifie are designed to be accessible to the global Muslim community. While there may be premium features in the future, the core offerings of both apps will remain free and community-supported.",
    icon: "Gift",
    color: "text-pink-500",
    bgGradient: "from-pink-100 to-rose-100",
    borderColor: "border-pink-200",
  },
  {
    id: 6,
    question: "Is my data safe when using these apps?",
    answer:
      "We prioritize your privacy. Both apps are built with secure data handling practices, and we avoid unnecessary data collection. Your interactions with FarahGPT and your travel preferences in Muslifie remain private and protected.",
    icon: "Lock",
    color: "text-cyan-600",
    bgGradient: "from-cyan-100 to-blue-100",
    borderColor: "border-cyan-200",
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
