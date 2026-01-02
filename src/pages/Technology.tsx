import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SensorModulesSection from "@/components/SensorModulesSection";
import SoftwareTechnologySection from "@/components/SoftwareTechnologySection";
import IntegrationArchitectureSection from "@/components/IntegrationArchitectureSection";
import DigitalTwinSection from "@/components/DigitalTwinSection";

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHeader
          label="CORE TECHNOLOGY"
          title="정확하게 감지하고, 의미 있게 해석합니다"
          description="sentia는 센싱 기술로 산업 현장의 물리적 상태를 정확하게 측정하고, 그 데이터를 분석하여 신뢰할 수 있는 판단의 기반을 제공합니다."
        />
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
