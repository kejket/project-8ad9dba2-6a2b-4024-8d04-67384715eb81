const TechnologyPageHeader = () => {
  return (
    <section className="relative w-full bg-navy overflow-hidden">
      {/* Background Pattern - Abstract data flow */}
      <div className="absolute inset-0 opacity-10">
        {/* Horizontal data lines */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-industrial-light to-transparent"
            style={{
              top: `${15 + i * 15}%`,
              left: 0,
              right: 0,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
        
        {/* Vertical connection nodes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-1 h-1 rounded-full bg-industrial-light"
            style={{
              top: `${20 + (i % 3) * 30}%`,
              left: `${10 + i * 11}%`,
            }}
          />
        ))}
        
        {/* Network grid pattern */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary-foreground/5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative container-narrow section-padding py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Label */}
          <span className="inline-block text-sm font-medium tracking-wider text-industrial-light mb-6">
            CORE TECHNOLOGY
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            센싱 데이터 기반의 핵심 기술
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl">
            e-snt는 산업 현장의 센서 데이터 수집, 전송, 분석, 시각화 기술을 기반으로 
            안정적인 설비 운영과 안전 관리를 지원합니다.
          </p>

          {/* Decorative line */}
          <div className="mt-10 flex items-center gap-3">
            <div className="w-12 h-0.5 bg-industrial" />
            <div className="w-2 h-2 rounded-full bg-industrial" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default TechnologyPageHeader;
