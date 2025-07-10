import { Suspense } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientProjects from "@/components/ClientProjects";
import CompanyProjects from "@/components/CompanyProjects";
import StatsList from "@/components/StatList";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";
import TestimonialList from "@/components/TestimonialList";
import WorkList from "@/components/WorkList";
import ContactForm from "@/components/ContactForm";
import Loading from "./loading";
import EngagementModels from "@/components/EngagementModels";
import ServicesTabsComponent from "@/components/ServicesTabsComponent";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";

async function AsyncClientProject() {
  // Simulate server-side data fetching
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <ClientProjects />;
}
async function AsyncCompanyProject() {
  // Simulate server-side data fetching
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <CompanyProjects />;
}

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Hero />
      <ServicesTabsComponent />
      <Pricing />
      <Faq />
      <WorkList />
      <Services />

      {/* <Suspense fallback={<Loading />}>
        <AsyncClientProject />
      </Suspense> */}

      <Suspense fallback={<Loading />}>
        <AsyncCompanyProject />
      </Suspense>

      {/* <EngagementModels /> */}

      <StatsList />
      <TestimonialList />
      {/* <Team /> */}
      <ContactForm />
      <Subscribe />
    </div>
  );
}
