import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import SocialProof from "@/components/social-proof";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import Cta from "@/components/cta";
import Testimonials from "@/components/Testimonials";
import Fhs from "@/components/fhs";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Pricing />
        <Faq />
        <Testimonials />
        <Fhs />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
