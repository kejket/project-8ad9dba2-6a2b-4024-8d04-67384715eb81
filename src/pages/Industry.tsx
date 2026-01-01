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
          title="제조 현장을 정확하게 이해합니다"
          description="sentia의 센싱 솔루션은 제조 현장의 미세한 변화와 보이지 않는 위험 요소를 감지하여 산업별 운영 요구에 맞는 안전하고 효율적인 판단을 지원합니다."
        />
        <IndustriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Industry;
