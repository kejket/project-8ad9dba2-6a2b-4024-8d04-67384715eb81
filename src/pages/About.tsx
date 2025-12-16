import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Shield, 
  Wrench, 
  Users, 
  Target,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "사람을 위한 기술",
    description: "기술의 궁극적인 목적은 현장에서 일하는 사람들의 안전과 편의를 높이는 것입니다. 우리는 모든 솔루션을 설계할 때 사용자의 관점에서 출발합니다.",
  },
  {
    icon: Shield,
    title: "신뢰할 수 있는 품질",
    description: "산업 현장에서 시스템의 안정성은 선택이 아닌 필수입니다. 우리는 검증된 기술과 철저한 테스트를 통해 고객이 믿고 사용할 수 있는 솔루션을 제공합니다.",
  },
  {
    icon: Wrench,
    title: "엔지니어링 중심 문화",
    description: "문제 해결은 마케팅 메시지가 아닌 기술적 역량에서 시작됩니다. 우리 팀은 현장의 실제 과제를 이해하고 실용적인 해결책을 찾는 데 집중합니다.",
  },
  {
    icon: Users,
    title: "장기적 파트너십",
    description: "일회성 납품이 아닌 지속적인 협력을 추구합니다. 고객의 현장을 함께 이해하고, 운영 과정에서 발생하는 요구사항에 꾸준히 대응합니다.",
  },
];

const commitments = [
  {
    title: "현장 중심 접근",
    description: "실제 제조 환경의 조건과 제약을 이해하고, 그에 맞는 현실적인 솔루션을 설계합니다.",
  },
  {
    title: "투명한 커뮤니케이션",
    description: "기술적 한계와 가능성을 솔직하게 공유하고, 기대치를 명확히 조율합니다.",
  },
  {
    title: "지속적인 개선",
    description: "도입 이후에도 데이터를 분석하고 피드백을 반영하여 솔루션을 발전시켜 나갑니다.",
  },
  {
    title: "기술 지원 책임",
    description: "문제 발생 시 신속하게 대응하고, 운영 안정성을 유지할 수 있도록 지원합니다.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-20 gradient-hero">
          <div className="container-narrow section-padding">
            <div className="max-w-3xl pt-12">
              <span className="inline-block text-sm font-medium text-industrial-light mb-4">ABOUT US</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                신뢰할 수 있는 기술,
                <br />사람을 이롭게 하는 기술
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
                e-snt는 산업 현장의 안전과 운영 효율을 높이기 위해 
                센싱 기술과 데이터 플랫폼을 연구하고 개발합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-sm font-medium text-industrial mb-4">OUR MISSION</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                    우리가 하는 일
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      제조 현장에서는 설비의 상태를 정확히 파악하고, 
                      이상 징후를 조기에 감지하는 것이 안전과 생산성 모두에 직결됩니다.
                    </p>
                    <p>
                      e-snt는 산업용 센서를 통해 설비의 물리적 상태를 측정하고, 
                      수집된 데이터를 분석하여 운영자가 적시에 판단할 수 있도록 지원합니다.
                    </p>
                    <p>
                      우리는 과장된 약속 대신, 
                      현장에서 실제로 작동하는 기술을 만드는 데 집중합니다.
                    </p>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center flex-shrink-0">
                        <Target size={20} className="text-industrial" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">명확한 목표</h3>
                        <p className="text-sm text-muted-foreground">
                          산업 현장의 안전성과 운영 효율 향상
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center flex-shrink-0">
                        <Wrench size={20} className="text-industrial" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">실용적 접근</h3>
                        <p className="text-sm text-muted-foreground">
                          현장 조건에 맞는 검증된 기술 적용
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center flex-shrink-0">
                        <Clock size={20} className="text-industrial" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">지속적 지원</h3>
                        <p className="text-sm text-muted-foreground">
                          도입 후에도 함께하는 기술 파트너
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 gradient-subtle">
          <div className="container-narrow section-padding">
            <div className="max-w-3xl mb-12">
              <span className="inline-block text-sm font-medium text-industrial mb-4">CORE VALUES</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                우리가 믿는 가치
              </h2>
              <p className="text-muted-foreground">
                e-snt의 모든 활동은 다음의 핵심 가치를 기반으로 합니다.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-card transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                    <value.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment to Customers */}
        <section className="py-20 bg-navy text-primary-foreground">
          <div className="container-narrow section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-medium text-industrial-light mb-4">OUR COMMITMENT</span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  고객에 대한 약속
                </h2>
                <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                  우리는 고객과의 관계를 단순한 거래가 아닌 
                  함께 문제를 해결해 나가는 파트너십으로 생각합니다.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {commitments.map((commitment, index) => (
                  <div
                    key={commitment.title}
                    className="flex items-start gap-4 p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                  >
                    <div className="w-8 h-8 rounded-full bg-industrial/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={16} className="text-industrial-light" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{commitment.title}</h3>
                      <p className="text-sm text-primary-foreground/70">
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Culture */}
        <section className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3">
                  <span className="inline-block text-sm font-medium text-industrial mb-4">ENGINEERING CULTURE</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                    엔지니어링 중심의 조직
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      e-snt는 기술 역량을 핵심 경쟁력으로 삼는 조직입니다. 
                      우리 팀은 센서 하드웨어, 임베디드 시스템, 데이터 분석, 
                      클라우드 플랫폼 등 다양한 분야의 엔지니어들로 구성되어 있습니다.
                    </p>
                    <p>
                      현장의 문제를 직접 확인하고, 기술적 가능성을 검토하며, 
                      실제로 작동하는 솔루션을 만들어 내는 과정을 중요하게 생각합니다.
                    </p>
                    <p>
                      화려한 프레젠테이션보다 동작하는 프로토타입을, 
                      추상적인 비전보다 구체적인 구현을 우선시합니다.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-4">우리 팀의 전문 분야</h3>
                    <ul className="space-y-3">
                      {[
                        "산업용 센서 및 하드웨어 설계",
                        "임베디드 시스템 개발",
                        "데이터 수집 및 전송 프로토콜",
                        "시계열 데이터 분석",
                        "클라우드 플랫폼 구축",
                        "산업 현장 시스템 통합",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-industrial flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-subtle">
          <div className="container-narrow section-padding">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                함께 이야기 나누고 싶습니다
              </h2>
              <p className="text-muted-foreground mb-8">
                현장의 과제에 대해 논의하고, 우리가 어떻게 도움을 드릴 수 있는지 
                함께 검토해 보겠습니다.
              </p>
              <Button variant="navy" size="xl">
                상담 문의하기
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
