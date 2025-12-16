import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "데이터 수집",
    description: "다양한 산업용 센서를 통해 진동, 온도, 압력 등 설비 상태 데이터를 실시간으로 수집합니다.",
  },
  {
    number: "02",
    title: "데이터 전송",
    description: "수집된 데이터를 유/무선 통신을 통해 안전하게 클라우드 또는 온프레미스 서버로 전송합니다.",
  },
  {
    number: "03",
    title: "데이터 분석",
    description: "AI 기반 분석 엔진이 패턴을 분석하고 이상 징후를 감지하여 예측 정비를 지원합니다.",
  },
  {
    number: "04",
    title: "시각화 및 알림",
    description: "직관적인 대시보드를 통해 현장 상황을 파악하고 필요시 즉각적인 알림을 받습니다.",
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 gradient-subtle">
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-industrial mb-4">TECHNOLOGY</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            데이터 기반 설비 관리
          </h2>
          <p className="text-lg text-muted-foreground">
            센서 데이터의 수집부터 분석, 시각화까지 일관된 프로세스를 통해
            제조 현장의 효율성과 안전성을 높입니다.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step Card */}
                <div className="bg-card rounded-xl border border-border p-6 shadow-card relative z-10">
                  {/* Step Number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-industrial">{step.number}</span>
                    {index < steps.length - 1 && (
                      <ArrowRight size={20} className="text-muted-foreground hidden lg:block" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Connector Dot - Desktop */}
                <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-industrial border-4 border-background z-20" />
              </div>
            ))}
          </div>
        </div>

        {/* Digital Twin Section */}
        <div className="mt-20 bg-navy rounded-2xl p-8 lg:p-12 text-primary-foreground">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-medium text-industrial-light mb-4">DIGITAL TWIN</span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                디지털 트윈으로 현장을 가상화
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                물리적 설비와 동기화된 가상 모델을 통해 실시간 상태를 모니터링하고,
                다양한 시나리오를 시뮬레이션하여 최적의 운영 방안을 도출합니다.
              </p>
              <ul className="space-y-3">
                {[
                  "실시간 설비 상태 동기화",
                  "What-if 시나리오 분석",
                  "운영 효율 최적화 제안",
                  "예측 정비 일정 수립",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-industrial-light" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Representation */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Outer Ring */}
                <div className="absolute inset-0 border-2 border-dashed border-primary-foreground/20 rounded-full animate-spin" style={{ animationDuration: "30s" }} />
                
                {/* Middle Ring */}
                <div className="absolute inset-8 border border-primary-foreground/30 rounded-full" />
                
                {/* Inner Ring */}
                <div className="absolute inset-16 bg-industrial/20 backdrop-blur-sm rounded-full border border-industrial/30 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-industrial-light">99.9%</p>
                    <p className="text-xs text-primary-foreground/70">동기화 정확도</p>
                  </div>
                </div>

                {/* Floating Data Points */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-surface-elevated/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary-foreground/10">
                  <p className="text-xs">진동 데이터</p>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-surface-elevated/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary-foreground/10">
                  <p className="text-xs">온도 데이터</p>
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-surface-elevated/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary-foreground/10">
                  <p className="text-xs">압력 데이터</p>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-surface-elevated/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary-foreground/10">
                  <p className="text-xs">전력 데이터</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
