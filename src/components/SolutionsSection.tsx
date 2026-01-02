import { Activity, Cpu, BarChart3, Shield, Zap, Database } from "lucide-react";

const solutions = [
  {
    icon: Activity,
    title: "설비 진동 모니터링",
    description: "진동 센서를 통해 회전 기계의 이상 징후를 조기에 감지하고 예측 정비를 지원합니다.",
    features: ["실시간 진동 분석", "이상 패턴 감지", "정비 알림"],
  },
  {
    icon: Cpu,
    title: "디지털 트윈",
    description: "물리적 설비를 가상 환경에 구현하여 시뮬레이션 및 최적화 분석을 수행합니다.",
    features: ["3D 시각화", "시뮬레이션 분석", "운영 최적화"],
  },
  {
    icon: BarChart3,
    title: "데이터 분석 플랫폼",
    description: "수집된 센싱 데이터를 통합 관리하고 인사이트를 도출하는 분석 플랫폼입니다.",
    features: ["대시보드 제공", "리포트 자동화", "트렌드 분석"],
  },
  {
    icon: Shield,
    title: "안전 관리 시스템",
    description: "작업 환경의 위험 요소를 모니터링하고 사고 예방을 위한 경보를 제공합니다.",
    features: ["가스 누출 감지", "환경 모니터링", "비상 알림"],
  },
  {
    icon: Zap,
    title: "에너지 모니터링",
    description: "설비별 에너지 사용량을 측정하고 효율화 방안을 제시합니다.",
    features: ["전력 사용 분석", "비용 절감 제안", "탄소 배출 추적"],
  },
  {
    icon: Database,
    title: "통합 데이터 허브",
    description: "다양한 센서와 시스템의 데이터를 표준화하여 통합 관리합니다.",
    features: ["프로토콜 변환", "데이터 정규화", "API 연동"],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-industrial mb-4 tracking-wider">SOLUTIONS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-6 leading-tight">
            <span className="block sm:inline">현장을 이해하는</span>{" "}
            <span className="block sm:inline">센싱 솔루션</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            sentia는 산업 현장의 미세한 변화를 감지하고 해석하여
            정확한 판단과 의사결정을 지원하는 맞춤형 솔루션을 제공합니다.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-industrial/10 transition-colors">
                <solution.icon size={24} className="text-industrial" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {solution.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {solution.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
