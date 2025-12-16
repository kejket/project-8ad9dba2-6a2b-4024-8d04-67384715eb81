import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Shield, BarChart3 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-industrial rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-industrial-light rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--industrial-blue)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--industrial-blue)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative container-narrow section-padding pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Activity size={16} className="text-industrial-light" />
              <span className="text-sm font-medium">Industrial Sensing Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              신뢰할 수 있는 기술,
              <br />
              <span className="text-industrial-light">사람을 이롭게 하는 기술</span>
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              e-snt는 산업 현장의 센싱 데이터를 기반으로 설비 모니터링과 안전 관리를 위한 솔루션을 제공합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl">
                데모 요청하기
                <ArrowRight size={20} />
              </Button>
              <Button variant="hero-outline" size="xl">
                솔루션 알아보기
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-sm text-primary-foreground/60 mb-4">신뢰받는 파트너</p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-2xl font-bold">100+</p>
                  <p className="text-xs text-primary-foreground/70">도입 현장</p>
                </div>
                <div className="w-px h-10 bg-primary-foreground/20" />
                <div className="text-center">
                  <p className="text-2xl font-bold">99.9%</p>
                  <p className="text-xs text-primary-foreground/70">데이터 정확도</p>
                </div>
                <div className="w-px h-10 bg-primary-foreground/20" />
                <div className="text-center">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-xs text-primary-foreground/70">실시간 모니터링</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
              {/* Main Visual Card */}
              <div className="relative bg-surface-elevated/10 backdrop-blur-md rounded-2xl border border-primary-foreground/10 p-8 shadow-glow">
                {/* Dashboard Preview */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-primary-foreground/80">실시간 설비 현황</span>
                    <span className="text-xs text-industrial-light">LIVE</span>
                  </div>

                  {/* Sensor Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-elevated/10 rounded-lg p-4 border border-primary-foreground/10">
                      <Activity size={20} className="text-industrial-light mb-2" />
                      <p className="text-xs text-primary-foreground/60">진동 센서</p>
                      <p className="text-lg font-semibold text-primary-foreground">정상</p>
                    </div>
                    <div className="bg-surface-elevated/10 rounded-lg p-4 border border-primary-foreground/10">
                      <Shield size={20} className="text-industrial-light mb-2" />
                      <p className="text-xs text-primary-foreground/60">온도 센서</p>
                      <p className="text-lg font-semibold text-primary-foreground">42.3°C</p>
                    </div>
                    <div className="bg-surface-elevated/10 rounded-lg p-4 border border-primary-foreground/10">
                      <BarChart3 size={20} className="text-industrial-light mb-2" />
                      <p className="text-xs text-primary-foreground/60">전력 사용량</p>
                      <p className="text-lg font-semibold text-primary-foreground">1,240 kW</p>
                    </div>
                    <div className="bg-surface-elevated/10 rounded-lg p-4 border border-primary-foreground/10 animate-pulse-subtle">
                      <div className="w-3 h-3 rounded-full bg-green-400 mb-2" />
                      <p className="text-xs text-primary-foreground/60">시스템 상태</p>
                      <p className="text-lg font-semibold text-primary-foreground">가동중</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-industrial rounded-lg p-3 shadow-lg animate-float">
                <Activity size={24} className="text-accent-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-surface-elevated rounded-lg p-3 shadow-card animate-float" style={{ animationDelay: "2s" }}>
                <Shield size={24} className="text-navy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
