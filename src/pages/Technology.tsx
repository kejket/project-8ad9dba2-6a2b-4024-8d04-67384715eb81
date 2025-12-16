import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechnologyPageHeader from "@/components/TechnologyPageHeader";
import SensorModulesSection from "@/components/SensorModulesSection";
import SoftwareTechnologySection from "@/components/SoftwareTechnologySection";
import IntegrationArchitectureSection from "@/components/IntegrationArchitectureSection";
import DigitalTwinSection from "@/components/DigitalTwinSection";

const Technology = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <TechnologyPageHeader />
        <SensorModulesSection />
        <SoftwareTechnologySection />
        <IntegrationArchitectureSection />
        <DigitalTwinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Technology;
