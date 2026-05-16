import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, BookOpen, Sparkles, Users, GraduationCap, Smile, Shield, Globe } from "lucide-react";

const HadithSection = () => {
  const hadiths = [
    {
      title: "Hadith on Intentions (Niyyah)",
      urdu: "نیت کی اہمیت",
      arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
      english: "Actions are judged by intentions, and everyone will be rewarded according to what they intended.",
      urduTranslation: "اعمال کا دار و مدار نیتوں پر ہے، اور ہر شخص کو وہی ملے گا جس کی اس نے نیت کی۔",
      reference: "Sahih Bukhari 1",
      explanation: "Always have a pure intention before doing any good deed. Even small acts become big in reward with sincere intention.",
      icon: Heart,
      color: "bg-red-100 text-red-800"
    },
    {
      title: "Hadith on Kindness",
      urdu: "نرمی اور مہربانی",
      arabic: "مَنْ لَا يَرْحَمُ لَا يُرْحَمُ",
      english: "He who does not show mercy will not be shown mercy.",
      urduTranslation: "جو رحم نہیں کرتا، اُس پر بھی رحم نہیں کیا جائے گا۔",
      reference: "Sahih Bukhari 7376",
      explanation: "Be kind to people, animals, and the environment. Mercy invites Allah's mercy.",
      icon: Heart,
      color: "bg-pink-100 text-pink-800"
    },
    {
      title: "Hadith on Cleanliness",
      urdu: "صفائی نصف ایمان ہے",
      arabic: "الطُّهُورُ شَطْرُ الْإِيمَانِ",
      english: "Cleanliness is half of faith.",
      urduTranslation: "صفائی نصف ایمان ہے۔",
      reference: "Sahih Muslim 223",
      explanation: "Keeping your body, clothes, and surroundings clean is part of your religious duties.",
      icon: Sparkles,
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Hadith on Good Character",
      urdu: "بہترین مسلمان کون؟",
      arabic: "إِنَّ مِنْ خِيَارِكُمْ أَحْسَنَكُمْ أَخْلَاقًا",
      english: "The best among you are those who have the best manners and character.",
      urduTranslation: "تم میں سب سے بہتر وہ ہے جس کا اخلاق سب سے اچھا ہے۔",
      reference: "Sahih Bukhari 3559",
      explanation: "Islam teaches good behavior, honesty, humility, and kindness as essential traits of a believer.",
      icon: Users,
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Hadith on Seeking Knowledge",
      urdu: "علم حاصل کرنا فرض ہے",
      arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
      english: "Seeking knowledge is an obligation upon every Muslim.",
      urduTranslation: "علم حاصل کرنا ہر مسلمان پر فرض ہے۔",
      reference: "Sunan Ibn Majah 224",
      explanation: "Islamic learning is not optional; every Muslim must learn the basics of faith and practice.",
      icon: GraduationCap,
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Hadith on Smiling",
      urdu: "مسکرانا صدقہ ہے",
      arabic: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
      english: "Your smile to your brother is charity.",
      urduTranslation: "اپنے بھائی کے چہرے پر مسکرانا بھی صدقہ ہے۔",
      reference: "Tirmidhi 1956",
      explanation: "Small acts of kindness and positivity are valuable in Islam.",
      icon: Smile,
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Hadith on Trust",
      urdu: "امانت داری",
      arabic: "لَا إِيمَانَ لِمَنْ لَا أَمَانَةَ لَهُ",
      english: "He has no faith who is not trustworthy.",
      urduTranslation: "جس میں امانت داری نہیں، اُس کا ایمان بھی مکمل نہیں۔",
      reference: "Musnad Ahmad 12373",
      explanation: "Being honest and trustworthy is a sign of a true believer.",
      icon: Shield,
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      title: "Hadith on Mercy to Animals",
      urdu: "جانوروں پر رحم",
      arabic: "فِي كُلِّ ذَاتِ كَبِدٍ رَطْبَةٍ أَجْرٌ",
      english: "There is a reward for serving any living being.",
      urduTranslation: "ہر جاندار پر رحم کرنے میں اجر ہے۔",
      reference: "Sahih Bukhari 2466",
      explanation: "Islam teaches kindness to all creatures, not just humans.",
      icon: Globe,
      color: "bg-green-100 text-green-800"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            📖 Hadith Corner | حدیث کارنر
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Beautiful Sayings of Prophet Muhammad ﷺ
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Explore the beautiful sayings of Prophet Muhammad ﷺ with authentic sources, 
            Urdu & English translation, and practical explanations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hadiths.map((hadith, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-border/50 overflow-hidden group">
              <CardHeader className="bg-gradient-islamic text-primary-foreground">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-foreground/20 rounded-lg">
                      <hadith.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-black">{index + 1}.</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className={`text-xs ${hadith.color}`}>
                    Hadith
                  </Badge>
                </div>
                <CardTitle className="text-lg text-black group-hover:text-black transition-colors">
                  {hadith.title} | {hadith.urdu}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 space-y-6">
                {/* Arabic Text */}
                <div>
                  <h4 className="font-semibold text-black mb-3">Arabic:</h4>
                  <div className="bg-gradient-subtle p-4 rounded-lg border">
                    <p className="text-lg font-arabic leading-relaxed text-right text-black">
                      {hadith.arabic}
                    </p>
                  </div>
                </div>

                <Separator />

                {/* English Translation */}
                <div>
                  <h4 className="font-semibold text-black mb-3">Translation (English):</h4>
                                      <p className="text-black leading-relaxed font-medium">
                      "{hadith.english}"
                    </p>
                </div>

                <Separator />

                {/* Urdu Translation */}
                <div>
                  <h4 className="font-semibold text-black mb-3">Urdu Translation:</h4>
                                      <p className="text-black leading-relaxed text-right">
                      "{hadith.urduTranslation}"
                    </p>
                </div>

                <Separator />

                {/* Reference */}
                <div>
                  <h4 className="font-semibold text-black mb-2">Reference:</h4>
                  <Badge variant="outline" className="text-xs">
                    {hadith.reference}
                  </Badge>
                </div>

                {/* Explanation */}
                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <h4 className="font-semibold text-black mb-2">Explanation:</h4>
                                      <p className="text-sm text-black leading-relaxed">
                      {hadith.explanation}
                    </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <Card className="mt-16 bg-gradient-gold border-accent/20 shadow-gold">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-black font-bold">
              🌟 Benefits of Learning Hadith
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-semibold text-black mb-2">Authentic Guidance</h4>
                <p className="text-black font-medium text-sm">Learn from the perfect example of Prophet Muhammad ﷺ</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌱</div>
                <h4 className="font-semibold text-black mb-2">Character Building</h4>
                <p className="text-black font-medium text-sm">Develop beautiful Islamic manners and ethics</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💎</div>
                <h4 className="font-semibold text-black mb-2">Spiritual Reward</h4>
                <p className="text-black font-medium text-sm">Earn great reward by following prophetic teachings</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HadithSection;