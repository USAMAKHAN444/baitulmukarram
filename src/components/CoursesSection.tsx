import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Volume2, MessageSquare, Brain, Baby, Heart, Users, Clock } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      icon: Volume2,
      title: "Tajweed (Quran Recitation Rules)",
      description: "Master the correct pronunciation and recitation of Quranic verses with Tajweed principles.",
      features: ["Proper pronunciation", "Recitation rules", "Voice training", "Melodious recitation"],
      badge: "🕋 Essential"
    },
    {
      icon: MessageSquare,
      title: "Tarjuma (Quran Translation)",
      description: "Understand the Quran's meanings with guided word-by-word translations in Urdu and English.",
      features: ["Word-by-word translation", "Urdu & English", "Context understanding", "Vocabulary building"],
      badge: "📖 Popular"
    },
    {
      icon: BookOpen,
      title: "Tafseer (Quran Explanation)",
      description: "Deepen your understanding with authentic Tafseer, exploring the wisdom and context of Quranic teachings.",
      features: ["Authentic interpretation", "Historical context", "Scholarly insights", "Practical application"],
      badge: "📘 Advanced"
    },
    {
      icon: Brain,
      title: "Hifz Program (Memorization)",
      description: "Memorize full or selected portions of the Quran through structured, personalized plans with weekly reviews.",
      features: ["Structured memorization", "Weekly reviews", "Personal guidance", "Retention techniques"],
      badge: "🧠 Intensive"
    },
    {
      icon: Heart,
      title: "Hifz of Short Surahs & Daily Duas",
      description: "Begin your journey by memorizing essential Surahs and daily supplications for prayer and everyday life.",
      features: ["Essential Surahs", "Daily duas", "Prayer essentials", "Beginner friendly"],
      badge: "🌿 Beginner"
    },
    {
      icon: Baby,
      title: "Nazra Program for Children",
      description: "A foundational Quran reading program tailored by age groups from 4-14 years.",
      features: ["Age-appropriate curriculum", "Step-by-step learning", "Interactive sessions", "Child-friendly approach"],
      badge: "👶 Kids Special"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-overlay opacity-5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-accent rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-primary rounded-full opacity-5 animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="animate-fade-in-down">
            <Badge variant="outline" className="mb-4 bg-gradient-button-secondary text-white border-0 hover:shadow-lg transition-all duration-500 shadow-secondary">
              📚 Our Courses
            </Badge>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Comprehensive Islamic Education Programs
            </h2>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Our carefully curated Quranic and Islamic courses are suitable for all ages. 
              There are no age restrictions, and our flexible schedule ensures every student learns at their own pace.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
              <Card className="group card-hover border-border/50 shadow-card hover:shadow-hover bg-gradient-card-bg">
                <CardHeader className="bg-gradient-to-br from-purple-500 to-blue-600 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-button-secondary rounded-lg shadow-secondary group-hover:bg-gradient-button-primary transition-all duration-300">
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-gradient-button-primary text-white hover:bg-gradient-button-secondary transition-all duration-300">
                      {course.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 text-white group-hover:text-white transition-colors duration-300">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6">
                  <p className="text-black mb-6 leading-relaxed group-hover:text-black transition-colors duration-300">
                    {course.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {course.features.map((feature, idx) => (
                                              <li key={idx} className="flex items-center text-sm text-black group-hover:text-black transition-colors duration-300">
                          <div className="w-2 h-2 bg-gradient-button-primary rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          {feature}
                        </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full group-hover:scale-105 transition-transform duration-300 bg-gradient-button-secondary hover:bg-gradient-button-primary hover:shadow-lg text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Free Islamic Education Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <Card className="bg-gradient-button-primary border-accent/20 shadow-primary hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4 text-white">
                🎁 Free Islamic Education for All Students
              </CardTitle>
              <CardDescription className="text-black text-lg">
                All enrolled students benefit from additional free Islamic studies to build strong moral and spiritual foundations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { emoji: "🕌", title: "How to Perform Salah (Namaz)" },
                  { emoji: "🗣️", title: "The Six Kalimas" },
                  { emoji: "📜", title: "Authentic Hadith Lessons" },
                  { emoji: "🧕", title: "Islamic Manners & Character" },
                  { emoji: "📘", title: "Introduction to Arabic" },
                  { emoji: "💬", title: "Student Portal" }
                ].map((item, idx) => (
                  <div key={idx} className="text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-3 animate-bounce-slow">{item.emoji}</div>
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
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

export default CoursesSection;