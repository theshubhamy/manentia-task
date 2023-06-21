import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import WorkDemo from "@/components/WorkDemo/WorkDemo";
import PricingPlan from "@/components/PricingPlans";
import Sponsors from "@/components/Sponsors";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Expertise />
      <WorkDemo />
      <PricingPlan />
      <Sponsors />
      <NewsLetter />
      <Footer />
    </main>
  );
}
