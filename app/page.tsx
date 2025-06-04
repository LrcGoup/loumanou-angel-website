import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import FeaturesSection from "@/components/features-section"
import StatsSection from "@/components/stats-section"
import { Hero } from "@/components/hero"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesSection />
      <FeaturesSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <Contact />
    </div>
  );
}