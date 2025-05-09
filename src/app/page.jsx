import FeatureProject from "@/components/FeatureProject";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StatsList from "@/components/StatList";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";
import TestimonialList from "@/components/TestimonialList";
import WorkList from "@/components/WorkList";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkList />
      <Services />
      <FeatureProject />
      <StatsList />
      <TestimonialList />
      <Team />
      <Subscribe />
    </>
  );
}
