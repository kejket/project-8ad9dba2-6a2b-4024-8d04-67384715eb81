import { Heart, Target, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 gradient-subtle">
      <div className="container-narrow section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-medium text-industrial mb-4">ABOUT e-snt</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              신뢰할 수 있는 기술,
              <br />사람을 이롭게 하는 기술
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              e-snt는 산업 현장의 안전과 효율을 높이기 위해 
              센싱 기술과 데이터 플랫폼을 연구하고 개발합니다.
              기술이 사람을 이롭게 한다는 믿음 아래, 
              제조 현장의 문제를 해결하는 실질적인 솔루션을 제공합니다.
            </p>

            {/* Values */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center flex-shrink-0">
                  <Heart size={20} className="text-industrial" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">사람 중심</h3>
                  <p className="text-sm text-muted-foreground">
                    현장 작업자의 안전과 편의를 최우선으로 생각합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center flex-shrink-0">
                  <Target size={20} className="text-industrial" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">실용적 기술</h3>
                  <p className="text-sm text-muted-foreground">
                    현장에서 실제로 활용 가능한 솔루션을 개발합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-industrial" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">파트너십</h3>
                  <p className="text-sm text-muted-foreground">
                    고객사와 함께 문제를 정의하고 해결책을 찾습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-navy rounded-2xl p-8 text-primary-foreground">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <p className="text-4xl font-bold text-industrial-light mb-2">10+</p>
                  <p className="text-sm text-primary-foreground/70">년 경험</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <p className="text-4xl font-bold text-industrial-light mb-2">100+</p>
                  <p className="text-sm text-primary-foreground/70">도입 현장</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <p className="text-4xl font-bold text-industrial-light mb-2">50+</p>
                  <p className="text-sm text-primary-foreground/70">기술 파트너</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <p className="text-4xl font-bold text-industrial-light mb-2">24/7</p>
                  <p className="text-sm text-primary-foreground/70">기술 지원</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-primary-foreground/10">
                <p className="text-center text-sm text-primary-foreground/60">
                  "기술은 사람을 위해 존재합니다"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
