import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, Hand, Users, Sparkles, Home, MessageCircle, HelpCircle, BookOpen, Shield, Globe, Smile, Award } from "lucide-react";

const MannersSection = () => {
  const manners = [
    {
      title: "Saying Bismillah",
      urdu: "بِسْمِ اللّٰهِ کہنا",
      description: "Begin meals or actions by saying \"Bismillah\" (In the name of Allah).",
      urduDescription: "کھانے یا کسی کام کی شروعات اللہ کے نام سے کریں، \"بِسْمِ اللّٰهِ\" کہہ کر۔",
      icon: Heart,
      category: "Daily Habits",
      color: "bg-red-100 text-red-800"
    },
    {
      title: "Greeting with Salaam",
      urdu: "سلام سے آغاز کریں",
      description: "Always greet others with \"Assalamu Alaikum\"; reply with \"Wa Alaikum Salaam.\"",
      urduDescription: "دوسروں کو ہمیشہ \"السلام علیکم\" سے سلام کریں، جواب میں \"وعلیکم السلام\" کہیں۔",
      icon: Users,
      category: "Social Etiquette",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Respecting Parents & Elders",
      urdu: "بڑوں کا احترام",
      description: "Speak politely, obey their advice, and never call them by name.",
      urduDescription: "بڑوں سے ادب سے بات کریں، ان کی بات مانو، اور کبھی ان کو نام سے نہ بلائیں۔",
      icon: Heart,
      category: "Family Values",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Use Right Hand",
      urdu: "دایاں ہاتھ استعمال کریں",
      description: "Eat, drink, pass items using your right hand, as taught by the Prophet ﷺ.",
      urduDescription: "کھانا، پینا یا کسی چیز کا لینا، دینا ہمیشہ دایاں ہاتھ استعمال کریں۔",
      icon: Hand,
      category: "Prophetic Guidance",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Cleanliness is Half of Faith",
      urdu: "صفائی نصف ایمان ہے",
      description: "Keep your body, clothes, and surroundings clean. Islam places great value on hygiene.",
      urduDescription: "اپنے جسم، کپڑے اور ماحول کو صاف رکھیں۔ اسلام میں صفائی کو ایمان کا نصف کہا گیا ہے۔",
      icon: Sparkles,
      category: "Personal Hygiene",
      color: "bg-cyan-100 text-cyan-800"
    },
    {
      title: "Speak Kindly & Truthfully",
      urdu: "نرمی سے سچ بولیں",
      description: "Avoid harsh words or lies. Speak gently and truthfully.",
      urduDescription: "سخت الفاظ یا جھوٹ سے گریز کریں۔ ہمیشہ نرمی سے اور سچ بولیں۔",
      icon: MessageCircle,
      category: "Speech Ethics",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Be Kind & Forgiving",
      urdu: "مہربان اور درگزر والا بنیں",
      description: "Forgive others and show compassion; Allah loves those who pardon.",
      urduDescription: "دوسروں کو معاف کریں اور رحم دلی کا مظاہرہ کریں۔ اللہ انہیں پسند فرماتا ہے جو درگزر کرنے والے ہیں۔",
      icon: Heart,
      category: "Character Building",
      color: "bg-pink-100 text-pink-800"
    },
    {
      title: "Ask Permission Before Entering",
      urdu: "اجازت لے کر داخل ہوں",
      description: "Knock or say Salaam before entering a room or a house.",
      urduDescription: "کسی کمرے یا گھر میں داخل ہونے سے پہلے \"سلام\" کہہ کر یا دروازہ کھٹکھٹا کر اجازت لیں۔",
      icon: Home,
      category: "Privacy Respect",
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      title: "Avoid Backbiting, Lying & Gossip",
      urdu: "غیبت، جھوٹ اور گپ شپ سے بچیں",
      description: "Avoid harmful speech—backbiting, rumors, or lying damages faith.",
      urduDescription: "غیبت، افواہوں یا جھوٹ سے پرہیز کریں—یہ سب ایمان کو کمزور کرتے ہیں۔",
      icon: Shield,
      category: "Speech Ethics",
      color: "bg-red-100 text-red-800"
    },
    {
      title: "Help Others & Show Empathy",
      urdu: "دوسروں کی مدد کریں",
      description: "Assist those in need, be kind to animals, and help your family.",
      urduDescription: "ضرورت مند کی مدد کریں، جانوروں کے ساتھ مہربانی کریں، اور گھر والوں کا خیال رکھیں۔",
      icon: Globe,
      category: "Community Service",
      color: "bg-emerald-100 text-emerald-800"
    },
    {
      title: "Moderate Speech & Avoid Quarrels",
      urdu: "بات معتدل رکھیں، جھگڑے سے بچیں",
      description: "Avoid excessive talking or heated arguments. Choose silence over vain talk.",
      urduDescription: "بے مقصد باتوں یا تلخ گوئی سے پرہیز کریں۔ فضول گفتگو کے بجائے خاموشی کو ترجیح دیں۔",
      icon: MessageCircle,
      category: "Speech Ethics",
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Greetings Gesture – Adab",
      urdu: "آداب کا اشارہ",
      description: "In some South Asian cultures, the \"Adab\" gesture—raising the right hand to the forehead respectfully—is used as greeting.",
      urduDescription: "ہندوستان و پاکستان میں اکثر \"آداب\" کے اشارے کے طور پر دایاں ہاتھ پیشانی کے سامنے اٹھا کر ادب سے سلام کیا جاتا ہے۔",
      icon: Hand,
      category: "Cultural Respect",
      color: "bg-violet-100 text-violet-800"
    },
    {
      title: "Seek Knowledge & Never Be Ashamed to Ask",
      urdu: "علم حاصل کریں، سوال کریں",
      description: "Learning Islamic knowledge is highly rewarded; never hesitate to ask questions.",
      urduDescription: "اسلامی تعلیم حاصل کرنا بڑا ثواب ہے؛ سوال پوچھنے میں کبھی جھجھک محسوس نہ کریں۔",
      icon: BookOpen,
      category: "Learning",
      color: "bg-teal-100 text-teal-800"
    }
  ];

  const categories = [
    { name: "Daily Habits", icon: Heart, count: manners.filter(m => m.category === "Daily Habits").length },
    { name: "Social Etiquette", icon: Users, count: manners.filter(m => m.category === "Social Etiquette").length },
    { name: "Family Values", icon: Heart, count: manners.filter(m => m.category === "Family Values").length },
    { name: "Speech Ethics", icon: MessageCircle, count: manners.filter(m => m.category === "Speech Ethics").length },
    { name: "Character Building", icon: Award, count: manners.filter(m => m.category === "Character Building").length },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Islamic Manners | اسلامی آداب
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Beautiful Islamic Character & Etiquette
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Teach children Islamic etiquette and good character based on Quran and Sunnah. 
            Each point includes practical examples and Urdu translations for clarity.
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {categories.map((cat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                <cat.icon className="w-8 h-8 text-black mx-auto mb-2" />
                <p className="font-semibold text-sm text-black">{cat.name}</p>
                <Badge variant="secondary" className="text-xs mt-1">{cat.count} Tips</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {manners.map((manner, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-border/50 overflow-hidden group">
              <CardHeader className="bg-gradient-subtle border-b">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-islamic rounded-lg">
                      <manner.icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-black">{index + 1}.</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className={`text-xs ${manner.color}`}>
                    {manner.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-black group-hover:text-black transition-colors">
                  {manner.title} | {manner.urdu}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                {/* English Description */}
                <div>
                  <h4 className="font-semibold text-black mb-2">English:</h4>
                  <p className="text-black leading-relaxed">
                    {manner.description}
                  </p>
                </div>

                <Separator />

                {/* Urdu Description */}
                <div>
                  <h4 className="font-semibold text-black mb-2">Urdu:</h4>
                  <p className="text-black leading-relaxed text-right">
                    {manner.urduDescription}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <Card className="mt-16 bg-gradient-islamic text-primary-foreground shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              🌟 Why Islamic Manners Matter?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="font-semibold mb-3">Character Development</h4>
                <p className="text-black text-sm leading-relaxed">
                  Build strong moral foundations and become a better person following Islamic teachings.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h4 className="font-semibold mb-3">Social Harmony</h4>
                <p className="text-black text-sm leading-relaxed">
                  Create positive relationships with family, friends, and community through good manners.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="font-semibold mb-3">Spiritual Reward</h4>
                <p className="text-black text-sm leading-relaxed">
                  Earn Allah's pleasure and reward by following the beautiful example of Prophet Muhammad ﷺ.
                </p>
              </div>
            </div>
            
            <Separator className="bg-primary-foreground/20" />
            
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">
                "The best among you are those who have the best manners and character."
              </p>
              <p className="text-black text-sm">
                - Prophet Muhammad ﷺ (Sahih Bukhari)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MannersSection;