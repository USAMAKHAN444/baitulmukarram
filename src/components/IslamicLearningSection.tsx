import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Building, 
  Heart, 
  Users, 
  MessageSquare, 
  Star,
  ArrowRight 
} from "lucide-react";

const IslamicLearningSection = () => {
  const learningTopics = [
    {
      title: "Essential Islamic Declarations",
      urdu: "چھے کلمے",
      description: "Learn the Six Kalimas - fundamental declarations of faith in Islam with Arabic text, translations, and meanings.",
      icon: Star,
      link: "/kalimas",
      color: "bg-emerald-100 text-emerald-800",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Complete Prayer Guide",
      urdu: "نماز کا طریقہ",
      description: "Step-by-step guide to performing Wudu (ablution) and Salah (prayer) with proper methods and supplications.",
      icon: Building,
      link: "/namaz",
      color: "bg-blue-100 text-blue-800",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Short Surahs Collection",
      urdu: "چھوٹی سورتیں",
      description: "Essential short chapters from the Quran with Arabic text, English and Urdu translations for daily recitation.",
      icon: BookOpen,
      link: "/surahs",
      color: "bg-purple-100 text-purple-800",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      title: "Daily Duas & Supplications",
      urdu: "روزانہ کی دعائیں",
      description: "Important daily prayers and supplications for various occasions throughout the day.",
      icon: Heart,
      link: "/duas",
      color: "bg-rose-100 text-rose-800",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      title: "Prophetic Teachings",
      urdu: "حدیث کارنر",
      description: "Beautiful sayings of Prophet Muhammad ﷺ with authentic sources and practical explanations.",
      icon: MessageSquare,
      link: "/hadith",
      color: "bg-amber-100 text-amber-800",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Islamic Manners & Ethics",
      urdu: "اسلامی آداب",
      description: "Learn proper Islamic etiquette and character building based on Quran and Sunnah teachings.",
      icon: Users,
      link: "/manners",
      color: "bg-green-100 text-green-800",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-overlay opacity-5"></div>
      <div className="absolute top-20 left-20 w-28 h-28 bg-gradient-accent rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-primary rounded-full opacity-5 animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="animate-fade-in-down">
            <Badge variant="outline" className="mb-4 bg-gradient-button-secondary text-white border-0 hover:shadow-lg transition-all duration-500 shadow-secondary">
              📚 Islamic Learning Portal | اسلامی تعلیمی مرکز
            </Badge>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Explore Islamic Knowledge
            </h2>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Discover comprehensive Islamic education covering essential topics for spiritual growth and daily practice.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningTopics.map((topic, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
              <Card className="group card-hover border-border/50 shadow-card hover:shadow-hover overflow-hidden bg-gradient-card-bg">
                <CardHeader className={`bg-gradient-to-br ${topic.gradient} text-white`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <topic.icon className="w-5 h-5" />
                    </div>
                    <Badge variant="secondary" className={`text-xs ${topic.color} group-hover:scale-105 transition-transform duration-300`}>
                      Learning
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-white transition-colors duration-300">
                    {topic.title}
                  </CardTitle>
                  <p className="text-sm text-black font-medium">{topic.urdu}</p>
                </CardHeader>
                
                <CardContent className="p-6">
                  <p className="text-black mb-6 leading-relaxed group-hover:text-black transition-colors duration-300">
                    {topic.description}
                  </p>
                  
                  <Link to={topic.link}>
                    <Button className="w-full group-hover:scale-105 transition-transform duration-300 bg-gradient-button-secondary hover:bg-gradient-button-primary hover:shadow-lg text-white">
                      Start Learning
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Benefits Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <Card className="mt-16 bg-gradient-button-primary border-accent/20 shadow-primary hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">
                🌟 Benefits of Islamic Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { emoji: "📖", title: "Authentic Knowledge", desc: "Learn from authentic Islamic sources with proper references" },
                  { emoji: "🌱", title: "Spiritual Growth", desc: "Strengthen your faith through proper Islamic education" },
                  { emoji: "💎", title: "Practical Application", desc: "Apply Islamic teachings in your daily life effectively" }
                ].map((benefit, idx) => (
                  <div key={idx} className="text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl mb-3 animate-bounce-slow">{benefit.emoji}</div>
                    <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-black text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IslamicLearningSection;