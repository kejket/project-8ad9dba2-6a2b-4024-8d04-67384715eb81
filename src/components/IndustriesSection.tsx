import { Factory, Droplets, Flame, Cog, Zap, Building2 } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "제조업",
    description: "설비 상태의 미세한 변화를 감지하여 정비 시점 판단을 지원합니다.",
  },
  {
    icon: Droplets,
    name: "화학/석유화학",
    description: "보이지 않는 위험 요소를 조기에 감지하여 공정 안전을 지원합니다.",
  },
  {
    icon: Flame,
    name: "철강/금속",
    description: "고온 환경 설비의 상태를 정확하게 파악하여 운영 판단을 돕습니다.",
  },
  {
    icon: Cog,
    name: "자동차",
    description: "생산라인의 이상 징후를 감지하여 품질 관리와 효율 개선을 지원합니다.",
  },
  {
    icon: Zap,
    name: "에너지/발전",
    description: "발전 설비의 상태를 지속적으로 모니터링하여 안정적 운영을 지원합니다.",
  },
  {
    icon: Building2,
    name: "건설/인프라",
    description: "구조물의 상태 변화를 감지하여 안전 관리 의사결정을 지원합니다.",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-industrial mb-4 tracking-wider">INDUSTRIES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-6 leading-tight">
            <span className="block sm:inline">다양한 산업 분야에</span>{" "}
            <span className="block sm:inline">적용</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            sentia의 센싱 솔루션은 제조업부터 에너지, 인프라까지 
            각 산업의 특성에 맞춰 정확한 현장 이해와 의사결정을 지원합니다.
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
