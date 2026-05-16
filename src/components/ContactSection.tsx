import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, Clock, Globe, Users, Award, Star, Shield, Heart } from "lucide-react";
import PlatformLinks from "@/components/PlatformLinks";
import {
  INSTITUTE_NAME_SHORT,
  INSTITUTE_TAGLINE,
  PHONE_DISPLAY,
  PHONE_URL,
  EMAIL,
  EMAIL_URL,
  openWhatsApp,
  openEmail,
  openTelegram,
  openSkype,
} from "@/lib/institute";

type ContactSectionProps = {
  onEnrollClick?: () => void;
};

const ContactSection = ({ onEnrollClick }: ContactSectionProps) => {
  const handleWhatsAppClick = () => {
    openWhatsApp(
      `Assalamu Alaikum! I am interested in enrolling at ${INSTITUTE_NAME_SHORT}.`
    );
  };

  const handleEmailClick = () => {
    openEmail(
      `Inquiry — ${INSTITUTE_NAME_SHORT}`,
      `Assalamu Alaikum,\n\nI would like to learn more about your courses.\n\nJazakAllah Khair`
    );
  };

  const handleTelegramClick = () => {
    openTelegram(
      `Assalamu Alaikum! I am interested in enrolling at ${INSTITUTE_NAME_SHORT}.`
    );
  };

  const handleSkypeClick = () => {
    openSkype(
      `Assalamu Alaikum! I would like to contact ${INSTITUTE_NAME_SHORT}.`
    );
  };

  const features = [
    {
      icon: Users,
      title: "Trusted by families worldwide",
      description: "Join thousands of satisfied students globally",
      color: "text-blue-600",
    },
    {
      icon: Heart,
      title: "Women and child-focused learning",
      description: "Safe, nurturing environment for Islamic education",
      color: "text-pink-600",
    },
    {
      icon: Award,
      title: "Free Islamic studies with every course",
      description: "Comprehensive education beyond Quran learning",
      color: "text-green-600",
    },
    {
      icon: Star,
      title: "Experienced, certified educators",
      description: "Learn from qualified and passionate teachers",
      color: "text-yellow-600",
    },
    {
      icon: Users,
      title: "Child-friendly curriculum",
      description: "Age-appropriate learning methods for young minds",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Flexible class timings",
      description: "Study at your convenient time worldwide",
      color: "text-indigo-600",
    },
    {
      icon: MessageCircle,
      title: "Urdu & English instruction",
      description: "Learn in your preferred language",
      color: "text-teal-600",
    },
    {
      icon: Shield,
      title: "100% Online & Home-Based",
      description: "Safe learning from the comfort of your home",
      color: "text-red-600",
    },
  ];

  const educators = [
    { title: "Certified Female Tutors", description: "For women and girls", icon: "👩‍🏫" },
    { title: "Trained Male Tutors", description: "Available for boys", icon: "👨‍🏫" },
    { title: "Tajweed & Hifz Specialists", description: "Expert in Quran recitation", icon: "📿" },
    { title: "Child Education Experts", description: "Specialized in teaching children", icon: "🧒" },
    { title: "Islamic Studies Scholars", description: "Deep knowledge of Islamic sciences", icon: "📚" },
    { title: "Multilingual Teachers", description: "Fluent in Urdu and English", icon: "🌍" },
  ];

  return (
    <section className="py-20 bg-gradient-section-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-overlay opacity-5"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-accent rounded-full opacity-10 animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-primary rounded-full opacity-5 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="animate-fade-in-down">
            <Badge
              variant="outline"
              className="mb-4 bg-gradient-button-secondary text-white border-0 hover:shadow-lg transition-all duration-500 shadow-secondary"
            >
              📞 Contact Us & Enroll Today
            </Badge>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Take the Next Step in Your Islamic Journey
            </h2>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Join thousands of students worldwide who are deepening their connection with the
              Quran and Islamic knowledge.
            </p>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Card className="mb-16 bg-gradient-button-primary text-white shadow-elegant overflow-hidden hover:shadow-xl transition-all duration-500">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl mb-4">Get Started Today!</CardTitle>
              <p className="text-black text-lg">
                Reach out to us and begin your Islamic learning journey with {INSTITUTE_NAME_SHORT}.
              </p>
            </CardHeader>
            <CardContent className="text-center space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
                  <div className="p-4 bg-gradient-button-secondary rounded-full shadow-secondary">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Phone / WhatsApp</h4>
                    <a href={PHONE_URL} className="text-black hover:underline block">
                      {PHONE_DISPLAY}
                    </a>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="mt-3 hover:scale-105 transition-transform duration-300 bg-gradient-button-accent text-white hover:bg-gradient-button-accent"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <div className="flex flex-wrap gap-2 justify-center mt-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="hover:scale-105 transition-transform duration-300 bg-[#229ED9] text-white hover:bg-[#1e8bc4]"
                        onClick={handleTelegramClick}
                      >
                        Telegram
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="hover:scale-105 transition-transform duration-300 bg-[#00AFF0] text-white hover:bg-[#0099d6]"
                        onClick={handleSkypeClick}
                      >
                        Skype
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
                  <div className="p-4 bg-gradient-button-secondary rounded-full shadow-secondary">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Email</h4>
                    <a href={EMAIL_URL} className="text-black font-medium hover:underline block break-all">
                      {EMAIL}
                    </a>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="mt-3 hover:scale-105 transition-transform duration-300 bg-gradient-button-accent text-white hover:bg-gradient-button-accent"
                      onClick={handleEmailClick}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
                  <div className="p-4 bg-gradient-button-secondary rounded-full shadow-secondary">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Learning Mode</h4>
                    <p className="text-black">100% Online Worldwide</p>
                    <Badge
                      variant="secondary"
                      className="mt-3 bg-gradient-button-primary text-white hover:bg-gradient-button-secondary transition-all duration-300"
                    >
                      Home-Based Learning
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <h4 className="font-semibold text-lg mb-4 text-black">Online Platforms</h4>
                <div className="flex justify-center">
                  <PlatformLinks />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Badge
              variant="outline"
              className="mb-4 bg-gradient-button-secondary text-white border-0 hover:shadow-lg transition-all duration-500 shadow-secondary"
            >
              👩‍🏫 Our Educators
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              Learn from Qualified & Passionate Teachers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educators.map((educator, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${1 + index * 0.1}s` }}>
                <Card className="text-center card-hover border-border/50 shadow-card hover:shadow-hover bg-gradient-card-bg">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4 animate-bounce-slow">{educator.icon}</div>
                    <h4 className="font-semibold text-black mb-2">{educator.title}</h4>
                    <p className="text-sm text-black">{educator.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
            <Badge
              variant="outline"
              className="mb-4 bg-gradient-button-secondary text-white border-0 hover:shadow-lg transition-all duration-500 shadow-secondary"
            >
              ✅ Why Choose {INSTITUTE_NAME_SHORT}?
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              Excellence in Islamic Education
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${1.4 + index * 0.1}s` }}>
                <Card className="text-center card-hover border-border/50 shadow-card hover:shadow-hover bg-gradient-card-bg group">
                  <CardContent className="p-6">
                    <div className={`mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 mx-auto" />
                    </div>
                    <h4 className="font-semibold text-black mb-2 text-sm">{feature.title}</h4>
                    <p className="text-xs text-black leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "1.6s" }}>
          <Card className="bg-gradient-button-primary border-accent/20 shadow-primary hover:shadow-xl transition-all duration-500 hover:scale-[1.02] text-center">
            <CardContent className="p-12">
              <div className="text-6xl mb-6 animate-float">🕌</div>
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
                "The best among you are those who learn the Quran and teach it."
              </blockquote>
              <p className="text-black text-lg mb-8 italic">- Prophet Muhammad ﷺ</p>
              <div className="space-y-4">
                <p className="text-xl font-semibold text-white">
                  Join {INSTITUTE_NAME_SHORT} — {INSTITUTE_TAGLINE}.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="islamic"
                    className="text-lg px-8 hover:scale-105 transition-transform duration-300"
                    onClick={onEnrollClick}
                  >
                    Enroll Now
                  </Button>
                  <Button
                    size="lg"
                    variant="whatsapp"
                    onClick={handleWhatsAppClick}
                    className="text-lg px-8 hover:scale-105 transition-transform duration-300"
                  >
                    Join WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
