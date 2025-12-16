import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    inquiry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "상담 요청이 접수되었습니다",
      description: "담당자가 빠른 시일 내에 연락드리겠습니다.",
    });

    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      inquiry: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              제조 현장에 맞는 센싱 솔루션을 상담해 보세요
            </h2>
            <p className="text-muted-foreground text-lg">
              전문 엔지니어가 귀사의 현장 환경을 분석하고 최적의 솔루션을 제안해
              드립니다.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-8 shadow-sm space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-foreground">
                  회사명 <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="회사명을 입력하세요"
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPerson" className="text-foreground">
                  담당자명 <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="담당자 성함을 입력하세요"
                  required
                  className="bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                이메일 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@company.com"
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="inquiry" className="text-foreground">
                문의 내용 <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="inquiry"
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                placeholder="현장 환경, 관심 솔루션, 기타 문의사항을 자유롭게 작성해 주세요."
                rows={5}
                required
                className="bg-background resize-none"
              />
            </div>

            <Button
              type="submit"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "전송 중..." : "상담 요청하기"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              영업일 기준 1~2일 내 담당자가 연락드립니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
