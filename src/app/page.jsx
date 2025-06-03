import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeatureProject from "@/components/ClientProjects";
import CompanyProjects from "@/components/CompanyProjects";
import StatsList from "@/components/StatList";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";
import TestimonialList from "@/components/TestimonialList";
import WorkList from "@/components/WorkList";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkList />
      <Services />
      <FeatureProject />
      <CompanyProjects />
      <StatsList />
      <TestimonialList />
      <Team />
      <ContactForm />
      <Subscribe />
    </>
  );
}
