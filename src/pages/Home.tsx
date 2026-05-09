import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import AudienceSection from '../components/AudienceSection';
import StatsSection from '../components/StatsSection';
import FeaturesSection from '../components/FeaturesSection';
import TraveloIntro from '../components/TraveloIntro';
import RoleSection from '../components/RoleSection';
import Testimonials from '../components/Testimonials';
import PartnersSection from '../components/PartnersSection';
import CTABanner from '../components/CTABanner';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <AudienceSection />
      <StatsSection />
      <FeaturesSection />
      <TraveloIntro />
      <RoleSection />
      <Testimonials />
      <PartnersSection />
      <CTABanner />
    </div>
  );
}
