import { 
  Box, 
  Radio, 
  Cpu, 
  BarChart3, 
  Monitor, 
  MessageSquare,
  Wrench,
  FlaskConical,
  ShieldAlert,
  Database,
  RefreshCw,
  Layers,
  Users
} from "lucide-react";
import DigitalTwinVisualization from "./DigitalTwinVisualization";

const components = [
  {
    icon: Box,
    title: "물리적 자산",
    description: "기계, 설비, 환경 등 실제 현장의 물리적 대상",
  },
  {
    icon: Radio,
    title: "실시간 데이터 파이프라인",
    description: "센서로부터 수집되는 실시간 데이터 전송 경로",
  },
  {
    icon: Cpu,
    title: "디지털 모델",
    description: "데이터 기반, 물리 기반, 또는 하이브리드 방식의 가상 모델",
  },
  {
    icon: BarChart3,
    title: "분석 및 시뮬레이션 엔진",
    description: "데이터 분석과 시나리오 시뮬레이션을 수행하는 엔진",
  },
  {
    icon: Monitor,
    title: "시각화 대시보드",
    description: "운영자가 상태를 직관적으로 파악할 수 있는 인터페이스",
  },
  {
    icon: MessageSquare,
    title: "피드백 및 의사결정 지원",
    description: "분석 결과를 바탕으로 운영 의사결정을 지원하는 메커니즘",
  },
];

const useCases = [
  {
    icon: Wrench,
    title: "예측 정비",
    description: "센서 데이터의 추세를 분석하여 설비 고장을 사전에 예측하고, 적절한 시점에 정비를 수행합니다. 이를 통해 계획되지 않은 가동 중단을 줄이고 정비 비용을 최적화할 수 있습니다.",
  },
  {
    icon: FlaskConical,
    title: "운영 변경 시뮬레이션",
    description: "실제 설비에 변경을 적용하기 전에 가상 환경에서 시뮬레이션을 수행합니다. 운영 조건 변경이 설비에 미치는 영향을 사전에 검토하여 리스크를 최소화합니다.",
  },
  {
    icon: ShieldAlert,
    title: "안전 시나리오 분석",
    description: "가상 모델을 활용하여 다양한 안전 시나리오를 분석합니다. 위험 상황을 시뮬레이션하고 대응 방안을 수립하여 현장 안전성을 높입니다.",
  },
];

const considerations = [
  {
    icon: Database,
    title: "데이터 품질이 모델 정확도에 직접적인 영향",
    description: "수집되는 센서 데이터의 품질과 정확성이 디지털 트윈 모델의 신뢰도를 결정합니다.",
  },
  {
    icon: RefreshCw,
    title: "모델의 지속적인 검증과 업데이트 필요",
    description: "설비 상태와 운영 조건이 변화함에 따라 모델도 주기적으로 검증하고 업데이트해야 합니다.",
  },
  {
    icon: Layers,
    title: "모든 공정에 고정밀 3D 모델이 필요하지는 않음",
    description: "목적에 따라 데이터 기반의 간소화된 모델로도 충분한 가치를 얻을 수 있습니다.",
  },
  {
    icon: Users,
    title: "운영 전문성을 대체하지 않고 보완",
    description: "디지털 트윈은 현장 운영자의 전문 지식과 경험을 대체하는 것이 아니라 의사결정을 지원하는 도구입니다.",
  },
];

const DigitalTwinSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-narrow section-padding">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-sm font-medium text-industrial mb-4">DIGITAL TWIN</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            디지털 트윈이란 무엇인가
          </h2>
          <div className="bg-secondary/50 rounded-xl p-6 border-l-4 border-industrial">
            <p className="text-foreground leading-relaxed">
              <strong>디지털 트윈(Digital Twin)</strong>은 물리적 설비나 공정을 디지털 환경에 가상으로 구현한 모델입니다. 
              센서로부터 수집되는 실시간 데이터를 반영하여, 설비의 현재 상태를 모니터링하고, 
              다양한 시나리오를 시뮬레이션하며, 향후 상태를 예측하는 데 활용됩니다.
            </p>
          </div>
        </div>

        {/* 3D Visualization */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-foreground mb-6">인터랙티브 시각화</h3>
          <DigitalTwinVisualization />
        </div>

        {/* Key Components */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-foreground mb-6">핵심 구성 요소</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {components.map((component, index) => (
              <div
                key={component.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-industrial/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center flex-shrink-0">
                  <component.icon size={20} className="text-industrial" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{component.title}</h4>
                  <p className="text-sm text-muted-foreground">{component.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Use Cases */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-foreground mb-6">제조 현장에서의 활용</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-card transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                  <useCase.icon size={24} className="text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{useCase.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-foreground mb-6">디지털 트윈 아키텍처</h3>
          <div className="bg-navy rounded-2xl p-8 text-primary-foreground">
            <div className="grid md:grid-cols-5 gap-4 items-center">
              {/* Physical Layer */}
              <div className="text-center p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                <Box size={32} className="mx-auto mb-3 text-industrial-light" />
                <p className="text-sm font-medium mb-1">물리 계층</p>
                <p className="text-xs text-primary-foreground/60">설비, 센서</p>
              </div>

              <div className="hidden md:flex justify-center">
                <div className="w-8 h-0.5 bg-primary-foreground/30" />
              </div>

              {/* Data Layer */}
              <div className="text-center p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                <Database size={32} className="mx-auto mb-3 text-industrial-light" />
                <p className="text-sm font-medium mb-1">데이터 계층</p>
                <p className="text-xs text-primary-foreground/60">수집, 저장, 처리</p>
              </div>

              <div className="hidden md:flex justify-center">
                <div className="w-8 h-0.5 bg-primary-foreground/30" />
              </div>

              {/* Digital Layer */}
              <div className="text-center p-4 rounded-xl bg-industrial/20 border border-industrial/30">
                <Cpu size={32} className="mx-auto mb-3 text-industrial-light" />
                <p className="text-sm font-medium mb-1">디지털 계층</p>
                <p className="text-xs text-primary-foreground/60">모델, 분석, 시각화</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-primary-foreground/10 text-center">
              <p className="text-sm text-primary-foreground/70">
                실시간 데이터가 물리 계층에서 디지털 계층으로 흐르고, 분석 결과와 의사결정이 다시 물리 계층에 반영됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* Important Considerations */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">도입 시 고려사항</h3>
          <p className="text-muted-foreground mb-6">
            디지털 트윈을 효과적으로 활용하기 위해 다음 사항을 고려해야 합니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {considerations.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-muted/50 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-steel" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwinSection;
