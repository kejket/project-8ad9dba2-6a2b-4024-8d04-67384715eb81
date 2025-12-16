import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechnologyPageHeader from "@/components/TechnologyPageHeader";
import TechnologySection from "@/components/TechnologySection";

const Technology = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <TechnologyPageHeader />
        <TechnologySection />
      </main>
      <Footer />
    </div>
  );
};

export default Technology;
