import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import WhyWorkTogether from "@/components/WhyWorkTogether";
import Services from "@/components/Services";

// Lazy load components that are below the fold
const WhyTwoExpertise = dynamic(() => import("@/components/WhyTwoExpertise"), {
  loading: () => <div className="min-h-[400px]" />,
});
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => <div className="min-h-[400px]" />,
});
const WhoIsItFor = dynamic(() => import("@/components/WhoIsItFor"), {
  loading: () => <div className="min-h-[400px]" />,
});
const ExpertiseAreas = dynamic(() => import("@/components/ExpertiseAreas"), {
  loading: () => <div className="min-h-[400px]" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="min-h-[400px]" />,
});
const WhyOnline = dynamic(() => import("@/components/WhyOnline"), {
  loading: () => <div className="min-h-[400px]" />,
});
const TrustArea = dynamic(() => import("@/components/TrustArea"), {
  loading: () => <div className="min-h-[200px]" />,
});
const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <div className="min-h-[200px]" />,
});
const Newsletter = dynamic(() => import("@/components/Newsletter"), {
  loading: () => <div className="min-h-[300px]" />,
});
const BMICalculator = dynamic(() => import("@/components/BMICalculator"), {
  loading: () => <div className="min-h-[400px]" />,
});
const SocialMedia = dynamic(() => import("@/components/SocialMedia"), {
  loading: () => <div className="min-h-[300px]" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <WhyWorkTogether />
      <Services />
      <BMICalculator />
      <WhyTwoExpertise />
      <HowItWorks />
      <WhoIsItFor />
      <ExpertiseAreas />
      <FAQ />
      <Testimonials />
      <WhyOnline />
      <TrustArea />
      <SocialMedia />
      <Newsletter />
      <CTA />
    </>
  );
}



