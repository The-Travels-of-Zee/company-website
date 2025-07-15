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
import BusinessOverview from "@/components/BusinessOverview";
import Comparison from "@/components/Comparison";
import { developmentFaqs, developmentTestimonials, inHouseAppFaqs, talentFaqs, talentTestimonials } from "@/constants";

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
      <ServicesTabsComponent
        talentAdditionalComponent={
          <>
            {/* <BusinessOverview /> */}
            <Comparison />
            <Pricing />
            <TestimonialList activeTab="talent" testimonials={talentTestimonials} />
            <Faq activeTab="talent" faqs={talentFaqs} />
            <ContactForm activeTab="talent" />
          </>
        }
        developmentAdditionalComponent={
          <>
            <WorkList />
            <Services />
            <TestimonialList activeTab="development" testimonials={developmentTestimonials} />
            <Faq activeTab="development" faqs={developmentFaqs} />
            <ContactForm activeTab="development" />
          </>
        }
        appsAdditionalComponent={
          <>
            <Suspense fallback={<Loading />}>
              <AsyncCompanyProject />
            </Suspense>
            <Faq activeTab="apps" faqs={inHouseAppFaqs} />
            <ContactForm activeTab="apps" />
          </>
        }
      />

      {/* <Suspense fallback={<Loading />}>
        <AsyncClientProject />
      </Suspense> */}

      {/* <EngagementModels /> */}

      {/* <StatsList /> */}
      {/* <Team /> */}
      {/* <ContactForm /> */}
      <Subscribe />
    </div>
  );
}
