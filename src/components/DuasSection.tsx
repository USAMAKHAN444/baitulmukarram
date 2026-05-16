import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sun, Utensils, Home, Plane, Droplets, Heart } from "lucide-react";

const DuasSection = () => {
  const duas = [
    {
      title: "Dua When Waking Up",
      urdu: "صبح اٹھنے کی دعا",
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
      english: "All praise is for Allah who gave us life after causing us to die, and to Him is the resurrection.",
      urduTranslation: "تمام تعریفیں اس اللہ کے لیے ہیں جس نے ہمیں موت کے بعد زندگی دی، اور اسی کی طرف لوٹنا ہے۔",
      icon: Sun,
      category: "Morning",
      categoryColor: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Dua Before Eating",
      urdu: "کھانے سے پہلے کی دعا",
      arabic: "بِسْمِ اللَّهِ",
      english: "In the name of Allah.",
      urduTranslation: "اللہ کے نام سے (کھانا شروع کرتے ہوئے)",
      icon: Utensils,
      category: "Meals",
      categoryColor: "bg-green-100 text-green-800"
    },
    {
      title: "Dua After Eating",
      urdu: "کھانے کے بعد کی دعا",
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِينِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
      english: "All praise is for Allah who fed me this and provided it for me without any strength or power on my part.",
      urduTranslation: "تمام تعریفیں اس اللہ کے لیے ہیں جس نے مجھے یہ کھلایا، اور مجھے قوت و طاقت کے بغیر رزق عطا فرمائی۔",
      icon: Utensils,
      category: "Meals",
      categoryColor: "bg-green-100 text-green-800"
    },
    {
      title: "Dua After Sneezing",
      urdu: "چھینک آنے کے بعد کی دعا",
      arabic: "الْحَمْدُ لِلَّهِ",
      english: "Praise be to Allah.",
      urduTranslation: "اللہ کا شکر ہے۔ (After sneezing one says: \"Alhamdulillah\")",
      icon: Heart,
      category: "Health",
      categoryColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Reply to Sneezing",
      urdu: "چھینک کی جواب میں دعا",
      arabic: "يَرْحَمُكَ اللَّهُ",
      english: "May Allah have mercy upon you.",
      urduTranslation: "اللہ آپ پر رحمت فرمائے۔ (Response after someone sneezes)",
      icon: Heart,
      category: "Health",
      categoryColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Dua Before Entering the Mosque",
      urdu: "مسجد میں داخل ہونے کی دعا",
      arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
      english: "O Allah, open for me the doors of Your mercy.",
      urduTranslation: "اے اللہ، اپنی رحمت کے دروازے میرے لیے کھول دے۔ (Common Masnoon dua)",
      icon: Home,
      category: "Mosque",
      categoryColor: "bg-purple-100 text-purple-800"
    },
    {
      title: "Dua When Leaving the Mosque",
      urdu: "مسجد سے نکلنے کی دعا",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
      english: "O Allah, I ask You for Your bounty.",
      urduTranslation: "اے اللہ، میں تجھ سے اپنے فضل کی درخواست کرتا ہوں۔",
      icon: Home,
      category: "Mosque",
      categoryColor: "bg-purple-100 text-purple-800"
    },
    {
      title: "Dua Before Entering the Washroom",
      urdu: "بیت الخلاء جانے سے پہلے",
      arabic: "اللَّهُـمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ",
      english: "O Allah, I seek refuge with You from all evil and evil-doers.",
      urduTranslation: "اے اللہ، میں تجھ سے تمام برائیوں اور بُری عورتوں کی پناہ مانگتا ہوں۔ (Masnoon dua before using toilet)",
      icon: Home,
      category: "Daily Life",
      categoryColor: "bg-gray-100 text-gray-800"
    },
    {
      title: "Dua After Wudu",
      urdu: "وضو کے بعد کی دعا",
      arabic: "أَشْهَدُ أَنْ لاَ إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      english: "I bear witness that there is no god but Allah, alone without partner, and I bear witness that Muhammad is His servant and messenger.",
      urduTranslation: "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اور میں گواہی دیتا ہوں کہ محمد ﷺ اس کے بندے اور رسول ہیں۔ (To be recited after completing ablution)",
      icon: Droplets,
      category: "Worship",
      categoryColor: "bg-cyan-100 text-cyan-800"
    },
    {
      title: "Dua When Traveling",
      urdu: "سفر کی دعا",
      arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ",
      english: "Glory be to Him who brought this under our control although we were unable to [control it].",
      urduTranslation: "پاک ہے وہ جس نے یہ ہمارے تابع فرمایا حالانکہ ہم اسے قابو میں نہیں رکھتے تھے۔ (Supplication before traveling—e.g., journey or ride)",
      icon: Plane,
      category: "Travel",
      categoryColor: "bg-indigo-100 text-indigo-800"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Daily Duas | روزانہ کی دعائیں
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Essential Daily Supplications
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Short, authentic supplications for everyday situations in Arabic with English and Urdu translations. 
            Ideal for learning and practice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {duas.map((dua, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-border/50 overflow-hidden">
              <CardHeader className="bg-gradient-subtle border-b">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-islamic rounded-lg">
                      <dua.icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-black">{index + 1}.</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className={`text-xs ${dua.categoryColor}`}>
                    {dua.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-black">
                  {dua.title} | {dua.urdu}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 space-y-6">
                {/* Arabic Text */}
                <div>
                  <h4 className="font-semibold text-black mb-3">Arabic:</h4>
                  <div className="bg-gradient-subtle p-4 rounded-lg border">
                    <p className="text-lg font-arabic leading-relaxed text-right text-black">
                      {dua.arabic}
                    </p>
                  </div>
                </div>

                <Separator />

                {/* English Translation */}
                <div>
                  <h4 className="font-semibold text-black mb-3">English:</h4>
                                      <p className="text-black leading-relaxed">
                      {dua.english}
                    </p>
                </div>

                <Separator />

                {/* Urdu Translation */}
                <div>
                  <h4 className="font-semibold text-black mb-3">Urdu:</h4>
                                      <p className="text-black leading-relaxed text-right">
                      {dua.urduTranslation}
                    </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Tips */}
        <Card className="mt-16 bg-gradient-gold border-accent/20 shadow-gold">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-black font-bold">
              🌟 Benefits of Daily Duas
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🤲</div>
                <h4 className="font-semibold text-black mb-2">Constant Remembrance</h4>
                <p className="text-black font-medium text-sm">Keep Allah in your heart throughout the day</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">✨</div>
                <h4 className="font-semibold text-black mb-2">Spiritual Blessing</h4>
                <p className="text-black font-medium text-sm">Receive Allah's blessings in daily activities</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">❤️</div>
                <h4 className="font-semibold text-black mb-2">Peace of Mind</h4>
                <p className="text-black font-medium text-sm">Find tranquility and gratitude in everyday moments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DuasSection;