import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  ISLAMIC_LEARNING_SECTION_ID,
  learningTopics,
  markReturnToIslamicLearning,
} from "@/lib/learningTopics";

const IslamicLearningSection = () => {
  return (
    <section
      id={ISLAMIC_LEARNING_SECTION_ID}
      className="py-20 bg-gradient-section-bg relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-gradient-overlay opacity-5"></div>
      <div className="absolute top-20 left-20 w-28 h-28 bg-gradient-accent rounded-full opacity-10 animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-primary rounded-full opacity-5 animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="animate-fade-in-down">
            <Badge
              variant="outline"
              className="mb-4 bg-gradient-button-secondary text-white border-0 hover:shadow-lg transition-all duration-500 shadow-secondary"
            >
              📚 Islamic Learning Portal | اسلامی تعلیمی مرکز
            </Badge>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Explore Islamic Knowledge
            </h2>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Discover comprehensive Islamic education covering essential topics for
              spiritual growth and daily practice.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <Card className="group card-hover border-border/50 shadow-card hover:shadow-hover overflow-hidden bg-gradient-card-bg h-full flex flex-col">
                  <CardHeader
                    className={`bg-gradient-to-br ${topic.gradient} text-white pb-6 pt-6 space-y-2`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${topic.badgeClass} group-hover:scale-105 transition-transform duration-300`}
                      >
                        Learning
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-white leading-snug">
                      {topic.title}
                    </CardTitle>
                    <p className="text-sm text-white/95 font-medium leading-relaxed">
                      {topic.urdu}
                    </p>
                  </CardHeader>

                  <CardContent className="p-6 flex flex-col flex-1">
                    <p className="text-black mb-6 leading-relaxed flex-1">
                      {topic.description}
                    </p>

                    <Link
                      to={topic.link}
                      state={{ returnToLearning: true }}
                      onClick={() => markReturnToIslamicLearning()}
                    >
                      <Button
                        className={`w-full text-white border-0 group-hover:scale-105 transition-transform duration-300 ${topic.buttonClass}`}
                      >
                        Start Learning
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
          <Card className="mt-16 bg-gradient-button-primary border-accent/20 shadow-primary hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">
                🌟 Benefits of Islamic Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    emoji: "📖",
                    title: "Authentic Knowledge",
                    desc: "Learn from authentic Islamic sources with proper references",
                  },
                  {
                    emoji: "🌱",
                    title: "Spiritual Growth",
                    desc: "Strengthen your faith through proper Islamic education",
                  },
                  {
                    emoji: "💎",
                    title: "Practical Application",
                    desc: "Apply Islamic teachings in your daily life effectively",
                  },
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="text-center hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-3xl mb-3 animate-bounce-slow">
                      {benefit.emoji}
                    </div>
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
