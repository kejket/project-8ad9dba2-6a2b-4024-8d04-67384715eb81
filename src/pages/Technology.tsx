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
          title="정확하게 감지하고, 지능적으로 해석합니다"
          description="sentia는 산업 현장의 센서 데이터 수집, 전송, 분석, 시각화 기술을 기반으로 신뢰할 수 있는 판단과 의사결정을 지원합니다."
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
