import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta_sans",
});

const avenir = localFont({
  src: "../font/Avenir Regular.ttf",
  variable: "--font-avenir_regular",
});

export const metadata = {
  metadataBase: new URL("https://business.thetravelsofzee.com/"),
  title: "The Travels of Zee",
  description:
    "A Full-Spectrum Software Development Company Delivering Cutting-Edge Solutions Across AI, Web, Mobile, Cloud, and Enterprise Systems",
  openGraph: {
    title: "The Travels of Zee",
    description:
      "A Full-Spectrum Software Development Company Delivering Cutting-Edge Solutions Across AI, Web, Mobile, Cloud, and Enterprise Systems",
    url: "./",
    siteName: "The Travels of Zee",
    images: ["/favicon/web-app-manifest-512x512.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "The Travels of Zee",
    description:
      "A Full-Spectrum Software Development Company Delivering Cutting-Edge Solutions Across AI, Web, Mobile, Cloud, and Enterprise Systems",
    card: "summary_large_image",
    images: ["/favicon/web-app-manifest-512x512.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="/favicon/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/favicon/web-app-manifest-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/favicon/web-app-manifest-512x512.png" sizes="512x512" type="image/png" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
      <body
        className={`${poppins.variable} ${jakarta_sans.variable} ${avenir.variable} bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800`}
      >
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
