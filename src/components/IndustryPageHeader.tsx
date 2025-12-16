const IndustryPageHeader = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
      {/* Background Pattern - Industrial/Manufacturing overlay */}
      <div className="absolute inset-0">
        {/* Grid pattern for industrial feel */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="industry-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary-foreground"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#industry-grid)" />
        </svg>

        {/* Abstract data visualization overlay */}
        <div className="absolute inset-0 opacity-10">
          {/* Horizontal measurement lines */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-industrial-light/50 to-transparent"
              style={{
                top: `${25 + i * 18}%`,
                left: '5%',
                right: '40%',
              }}
            />
          ))}
          
          {/* Data point indicators */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`point-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-industrial-light/60"
              style={{
                top: `${20 + (i % 4) * 18}%`,
                left: `${8 + i * 6}%`,
              }}
            />
          ))}

          {/* Vertical bars suggesting industrial metrics */}
          <div className="absolute right-[15%] top-[20%] bottom-[30%] flex gap-3 items-end opacity-20">
            {[65, 80, 45, 90, 70, 55].map((height, i) => (
              <div
                key={`bar-${i}`}
                className="w-2 bg-industrial-light/40 rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-transparent to-navy/70" />
      </div>

      {/* Content */}
      <div className="relative container-narrow section-padding py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Label */}
          <span className="inline-block text-sm font-medium tracking-wider text-industrial-light mb-6">
            INDUSTRIES
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            산업 현장을 위한 센싱 솔루션
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl">
            e-snt의 센싱 솔루션은 제조 현장의 설비, 환경, 안전 요소를 실시간으로 모니터링하여 
            산업별 운영 요구에 유연하게 적용됩니다.
          </p>

          {/* Decorative accent */}
          <div className="mt-10 flex items-center gap-4">
            <div className="w-10 h-0.5 bg-industrial" />
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-industrial" />
              <div className="w-1.5 h-1.5 rounded-full bg-industrial/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-industrial/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default IndustryPageHeader;
