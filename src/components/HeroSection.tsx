import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import InstituteBrand from "@/components/InstituteBrand";
import { Users, Clock, GraduationCap, MessageCircle, Globe, Award } from "lucide-react";
import { INSTITUTE_NAME_SHORT, openWhatsApp } from "@/lib/institute";

type HeroSectionProps = {
  onEnrollClick?: () => void;
};

const HeroSection = ({ onEnrollClick }: HeroSectionProps) => {
  const handleWhatsAppClick = () => {
    openWhatsApp(
      `Assalamu Alaikum! I would like to learn more about ${INSTITUTE_NAME_SHORT}.`
    );
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden gradient-hero-bg">
      <div className="absolute inset-0 bg-gradient-overlay opacity-10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-accent rounded-full opacity-10 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-primary rounded-full opacity-5 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-secondary rounded-full opacity-20 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-down" style={{ animationDelay: "0.2s" }}>
            <Badge
              variant="outline"
              className="mb-6 text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 bg-gradient-button-secondary text-white border-0 shadow-secondary hover:shadow-lg"
            >
              🌟 Premier Online Quran Learning Platform
            </Badge>
          </div>

          <div className="animate-fade-in-up mb-8" style={{ animationDelay: "0.4s" }}>
            <InstituteBrand variant="hero" align="center" />
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 space-y-2">
              <p className="font-semibold text-black animate-pulse-slow">Faith. Knowledge. Guidance.</p>
              <p className="text-black">
                A Premier Online Quran Learning Platform for Women and Children
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <p className="text-base sm:text-lg text-black mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              At {INSTITUTE_NAME_SHORT}, we are dedicated to spreading the light of the Quran and
              Sunnah through accessible and structured online learning. Our institute is specially
              designed for women and children, providing a safe, nurturing environment to gain
              authentic Islamic knowledge from the comfort of home.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
            <div className="animate-scale-in w-full sm:w-auto" style={{ animationDelay: "1s" }}>
              <Button
                size="xl"
                variant="enroll"
                className="text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 shadow-elegant hover:shadow-xl w-full sm:w-auto"
                onClick={onEnrollClick}
              >
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Enroll Now
              </Button>
            </div>
            <div className="animate-scale-in w-full sm:w-auto" style={{ animationDelay: "1.2s" }}>
              <Button
                size="xl"
                variant="whatsapp"
                onClick={handleWhatsAppClick}
                className="text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Join WhatsApp
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto">
            <div className="text-center animate-fade-in-up hover-lift" style={{ animationDelay: "1.4s" }}>
              <div className="flex justify-center mb-2">
                <div className="p-2 md:p-3 bg-gradient-button-secondary rounded-full shadow-secondary">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <p className="text-xs md:text-sm font-semibold stats-color">1000+ Students</p>
              <p className="text-xs text-black">Worldwide</p>
            </div>
            <div className="text-center animate-fade-in-up hover-lift" style={{ animationDelay: "1.6s" }}>
              <div className="flex justify-center mb-2">
                <div className="p-2 md:p-3 bg-gradient-button-secondary rounded-full shadow-secondary">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <p className="text-xs md:text-sm font-semibold stats-color">Certified Teachers</p>
              <p className="text-xs text-black">Expert Guidance</p>
            </div>
            <div className="text-center animate-fade-in-up hover-lift" style={{ animationDelay: "1.8s" }}>
              <div className="flex justify-center mb-2">
                <div className="p-2 md:p-3 bg-gradient-button-secondary rounded-full shadow-secondary">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <p className="text-xs md:text-sm font-semibold stats-color">Flexible Timing</p>
              <p className="text-xs text-black">Your Schedule</p>
            </div>
            <div className="text-center animate-fade-in-up hover-lift" style={{ animationDelay: "2s" }}>
              <div className="flex justify-center mb-2">
                <div className="p-2 md:p-3 bg-gradient-button-secondary rounded-full shadow-secondary">
                  <Globe className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <p className="text-xs md:text-sm font-semibold stats-color">100% Online</p>
              <p className="text-xs text-black">From Home</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
