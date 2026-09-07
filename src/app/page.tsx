import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LMS from "@/components/LMS";
import MDP from "@/components/MDP";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonial";
import TrainingConsultant from "@/components/TrainingConsultant";
import TransformationHub from "@/components/TransformationHub";
import WorkTogether from "@/components/WorkTogether";
import WWD from "@/components/WWD";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LMS />
      <WWD />
      <MDP />
      <TransformationHub />
      <TrainingConsultant />
      <CTA />
      <Testimonials />
      <WorkTogether />
      <Footer />
    </>
  );
}
