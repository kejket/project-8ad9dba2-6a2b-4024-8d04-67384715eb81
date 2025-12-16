import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndustryPageHeader from "@/components/IndustryPageHeader";
import IndustriesSection from "@/components/IndustriesSection";

const Industry = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <IndustryPageHeader />
        <IndustriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Industry;
