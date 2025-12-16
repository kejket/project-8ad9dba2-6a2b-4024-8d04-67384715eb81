import { Factory, Droplets, Flame, Cog, Zap, Building2 } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "제조업",
    description: "생산 설비의 상태 모니터링 및 예측 정비",
  },
  {
    icon: Droplets,
    name: "화학/석유화학",
    description: "공정 안전 관리 및 누출 감지",
  },
  {
    icon: Flame,
    name: "철강/금속",
    description: "고온 환경 설비 모니터링",
  },
  {
    icon: Cog,
    name: "자동차",
    description: "생산라인 품질 관리 및 설비 효율화",
  },
  {
    icon: Zap,
    name: "에너지/발전",
    description: "발전 설비 상태 진단 및 효율 관리",
  },
  {
    icon: Building2,
    name: "건설/인프라",
    description: "구조물 안전 모니터링",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-industrial mb-4">INDUSTRIES</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            다양한 산업 분야에 적용
          </h2>
          <p className="text-lg text-muted-foreground">
            e-snt의 센싱 솔루션은 제조업부터 에너지, 인프라까지 
            다양한 산업 환경에 맞춤 적용됩니다.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:border-industrial/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-industrial/10 transition-colors">
                <industry.icon size={24} className="text-industrial" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
