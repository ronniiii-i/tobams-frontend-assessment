import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import LMS from "@/components/LMS";
import MDP from "@/components/MDP";
import Testimonials from "@/components/Testimonial";
import TransformationHub from "@/components/TransformationHub";
import WWD from "@/components/WWD";

export default function Home() {
  return (
    <>
      <Hero />
      <LMS />
      <WWD />
      <MDP />
      <TransformationHub />
      <CTA />
      <Testimonials />
    </>
  );
}
