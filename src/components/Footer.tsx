const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground py-16">
      <div className="container-narrow section-padding">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <span className="text-2xl font-bold mb-4 block">e-snt</span>
            <p className="text-primary-foreground/70 mb-4 max-w-md">
              신뢰할 수 있는 기술, 사람을 이롭게 하는 기술.
              산업 현장의 센싱 솔루션 전문 기업입니다.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>서울특별시 강남구 테헤란로 000, 00빌딩 00층</p>
              <p>사업자등록번호: 000-00-00000</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2">
              {[
                { label: "솔루션", href: "#solutions" },
                { label: "기술", href: "#technology" },
                { label: "산업분야", href: "#industries" },
                { label: "회사소개", href: "#about" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>
                <a href="tel:+82-00-0000-0000" className="hover:text-primary-foreground transition-colors">
                  02-0000-0000
                </a>
              </li>
              <li>
                <a href="mailto:contact@e-snt.co.kr" className="hover:text-primary-foreground transition-colors">
                  contact@e-snt.co.kr
                </a>
              </li>
              <li>평일 09:00 - 18:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 e-snt. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
