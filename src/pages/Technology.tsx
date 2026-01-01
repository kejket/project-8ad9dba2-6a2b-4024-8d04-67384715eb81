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
          title="센싱 데이터 기반의 핵심 기술"
          description="e-snt는 산업 현장의 센서 데이터 수집, 전송, 분석, 시각화 기술을 기반으로 안정적인 설비 운영과 안전 관리를 지원합니다."
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
