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
    <>
      <Hero />
      <WorkList />
      <Services />

      <Suspense fallback={<Loading />}>
        <AsyncClientProject />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <AsyncCompanyProject />
      </Suspense>

      <StatsList />
      <TestimonialList />
      <Team />
      <ContactForm />
      <Subscribe />
    </>
  );
}
