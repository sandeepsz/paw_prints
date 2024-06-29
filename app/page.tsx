import About from "@/components/About";
import Cta from "@/components/Cta";
import Donation from "@/components/Donation";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Help />
      <Donation />
      <Testimonial />
      <Cta />
    </>
  );
}
