import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, Droplets } from "lucide-react";

const NamazGuideSection = () => {
  const wuduSteps = [
    {
      step: 1,
      title: "Intention (Niyyah)",
      description: "I intend to perform Wudu for prayer.",
      urdu: "میں وضو کرنے کی نیت کرتا/کرتی ہوں نماز کے لئے۔",
      detail: "Say Bismillah before starting. (شروع میں \"بِسْمِ اللّٰهِ\" پڑھیں)"
    },
    {
      step: 2,
      title: "Wash Hands",
      description: "Wash hands up to wrists 3 times, making sure water reaches between fingers.",
      urdu: "دونوں ہاتھ تین بار کلائی تک دھوئیں—انگلیوں کے بیچ تک پانی پہنچائیں"
    },
    {
      step: 3,
      title: "Rinse Mouth",
      description: "Rinse mouth 3 times: take water in palms, swish, then spit.",
      urdu: "زبان میں پانی لے کر تین بار کلی کریں"
    },
    {
      step: 4,
      title: "Clean Nose",
      description: "Clean nose 3 times by sniffing water then blowing it out.",
      urdu: "ناک میں پانی لے کر تین بار صاف کریں"
    },
    {
      step: 5,
      title: "Wash Face",
      description: "Wash face from forehead to chin 3 times.",
      urdu: "چہرہ ماتھے سے ٹھوڑی تک تین بار دھوئیں"
    },
    {
      step: 6,
      title: "Wash Arms",
      description: "Wash arms right then left: both hands up to elbows, 3 times each.",
      urdu: "پہلے دایاں پھر بایاں ہاتھ کہنی تک تین بار دھوئیں"
    },
    {
      step: 7,
      title: "Wipe Head (Masah)",
      description: "Wipe head once with wet hands.",
      urdu: "ایک بار گیلے ہاتھ سے پورے سر کا مسح کریں"
    },
    {
      step: 8,
      title: "Wipe Ears",
      description: "Wipe ears: inner ear with index finger and outer ear with thumb.",
      urdu: "اندرونی کان انگلی اور باہر والی کان کا مسح انگوٹھے سے کریں"
    },
    {
      step: 9,
      title: "Wash Feet",
      description: "Wash feet up to ankles three times, right first, then left.",
      urdu: "پاؤں ٹخنوں تک تین بار، پہلے دایاں پھر بایاں دھوئیں"
    },
    {
      step: 10,
      title: "Recite Shahadah",
      description: "After Wudu, recite the Shahadah pointing finger upward",
      urdu: "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں...",
      arabic: "أَشْهَدُ أَنْ لا إِلٰهَ إِلَّا اللّٰهُ..."
    }
  ];

  const namazTimes = [
    { name: "Fajr", rakats: "2 Rakat", urdu: "فجر" },
    { name: "Dhuhr", rakats: "4 Rakat", urdu: "ظہر" },
    { name: "Asr", rakats: "4 Rakat", urdu: "عصر" },
    { name: "Maghrib", rakats: "3 Rakat", urdu: "مغرب" },
    { name: "Isha", rakats: "4 Rakat", urdu: "عشاء" }
  ];

  const namazSteps = [
    {
      step: "Niyyah (Intent)",
      description: "Intend the specific prayer silently.",
      urdu: "میں نیت کرتا/کرتی ہوں …نماز پڑھنے کی اللہ کے لیے"
    },
    {
      step: "Takbir (اللّٰهُ أَكْبَر)",
      description: "Raise hands shoulder-high (men to ears), and say \"Allah-u-Akbar\".",
      urdu: "اللہ اکبر کہیں اور ہاتھ اٹھائیں"
    },
    {
      step: "Qiyam (Standing)",
      description: "Recite Surah Fatiha, then another short Surah.",
      urdu: "سورہ فاتحہ اور کوئی دوسری سورت پڑھیں"
    },
    {
      step: "Ruku (Bowing)",
      description: "Bend, place hands on knees, say \"Subhana Rabbiyal Azeem\" three times.",
      urdu: "رکوع میں تین بار سبحان ربی الاعظم پڑھیں"
    },
    {
      step: "I'tidal (Standing up)",
      description: "Stand and say \"Sami'Allahu liman hamidah. Rabbana wa lakal hamd.\"",
      urdu: "کھڑے ہو کر الحمد للہ کہیں"
    },
    {
      step: "Sujood (Prostration)",
      description: "Place forehead, nose, palms, knees, toes on ground, say \"Subhana Rabbiyal A'la\" three times.",
      urdu: "سجدہ میں تین بار سبحان ربی الاعلی پڑھیں"
    },
    {
      step: "Sit (Between two Sujood)",
      description: "Sit and say \"Rabbighfir li\".",
      urdu: "بیٹھ کر رب اغفر لی پڑھیں"
    },
    {
      step: "Second Sujood",
      description: "Repeat previous Sujood step.",
      urdu: "دوسرا سجدہ کریں"
    },
    {
      step: "Tashahhud (تشہد)",
      description: "Sit after last Rakat and recite Tashahhud.",
      urdu: "تشہد پڑھیں"
    },
    {
      step: "Ending Tasleem (سلام)",
      description: "Turn head right then left and say \"As-Salamu Alaikum wa Rahmatullah.\"",
      urdu: "سلام پھیر کر دائیں، پھر بائیں طرف"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Namaz Guide | نماز کا طریقہ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Complete Prayer Guide
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Learn the proper way to perform Wudu (ablution) and Namaz (prayer) with step-by-step instructions.
          </p>
        </div>

        {/* Wudu Section */}
        <div className="mb-20">
          <Card className="bg-gradient-gold border-accent/20 shadow-gold mb-8">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Droplets className="w-8 h-8 text-black mr-3" />
                <CardTitle className="text-2xl text-black font-bold">
                  ✨ Wudu (Ablution) | وضو کا طریقہ
                </CardTitle>
              </div>
              <p className="text-black font-medium">
                Step‑by‑Step Instructions in English & Urdu
              </p>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wuduSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-islamic transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                                      <div className="w-8 h-8 bg-gradient-islamic rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {step.step}
                </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-black mb-2">{step.title}</h4>
                      <p className="text-sm text-black mb-2">{step.description}</p>
                      <p className="text-sm text-black text-right">{step.urdu}</p>
                      {step.detail && (
                        <p className="text-xs text-black mt-2 italic">{step.detail}</p>
                      )}
                      {step.arabic && (
                        <p className="text-sm text-black font-arabic mt-2 text-right">{step.arabic}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Prayer Times */}
        <div className="mb-16">
          <Card className="bg-gradient-subtle border-border/50 shadow-elegant">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-black mr-3" />
                <CardTitle className="text-2xl text-black">
                  📅 Farz Namaz Times | فرض نماز کے اوقات
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {namazTimes.map((prayer, index) => (
                  <div key={index} className="text-center p-4 bg-card rounded-lg border">
                    <h4 className="font-semibold text-black mb-2">{prayer.name}</h4>
                    <p className="text-sm text-black mb-1">{prayer.urdu}</p>
                    <Badge variant="secondary" className="text-xs">{prayer.rakats}</Badge>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-black mt-4">(یہ پانچ فرض نمازیں ہیں)</p>
            </CardContent>
          </Card>
        </div>

        {/* Prayer Steps */}
        <div>
          <Card className="bg-gradient-islamic text-primary-foreground shadow-elegant mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                ✅ Steps of Namaz | نماز کے اعمال
              </CardTitle>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {namazSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-islamic transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-black" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-black mb-2">{step.step}</h4>
                      <p className="text-sm text-black mb-2">{step.description}</p>
                      <p className="text-sm text-black text-right">{step.urdu}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <Card className="mt-16 bg-gradient-gold border-accent/20 shadow-gold">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-black font-bold">
              🌟 Benefits & Importance
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-black font-medium">
              Wudu cleanses both physically and spiritually, preparing you for prayer. (وضو جسمی و روحانی صفائی لاتا ہے)
            </p>
            <p className="text-black font-medium">
              Prayer connects you directly to Allah, mentally and morally. (نماز اللہ کے ساتھ رابطہ ہے)
            </p>
            <p className="text-black font-medium">
              Building consistent prayer habits early helps children spiritually. (بچوں میں نماز کی عادت ڈالنے سے ایمان مضبوط ہوتا ہے)
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NamazGuideSection;