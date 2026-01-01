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
          title="산업 현장을 위한 센싱 솔루션"
          description="e-snt의 센싱 솔루션은 제조 현장의 설비, 환경, 안전 요소를 실시간으로 모니터링하여 산업별 운영 요구에 유연하게 적용됩니다."
        />
        <IndustriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Industry;
