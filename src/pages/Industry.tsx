import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import IndustriesSection from "@/components/IndustriesSection";

const Industry = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHeader
          label="INDUSTRIES"
          title="각 산업 현장의 특성을 이해합니다"
          description="sentia는 제조, 에너지, 인프라 등 다양한 산업 현장의 고유한 조건을 이해하고, 각 환경에 맞는 센싱 기반의 판단 지원을 제공합니다."
        />
        <IndustriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Industry;
