import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Clock, Droplets } from "lucide-react";
import { getTopicById } from "@/lib/learningTopics";
import { cn } from "@/lib/utils";

type NamazGuideSectionProps = {
  topicId?: string;
};

const NamazGuideSection = ({ topicId = "namaz" }: NamazGuideSectionProps) => {
  const topic = getTopicById(topicId) ?? getTopicById("namaz")!;
  const headerGradient = `bg-gradient-to-br ${topic.gradient}`;
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
    <section className="space-y-12">
        <div>
          <Card className={cn("shadow-lg mb-8 border-2", topic.accentBorder, headerGradient)}>
            <CardHeader className="text-center py-6 px-4">
              <div className="flex items-center justify-center mb-2 gap-3 flex-wrap">
                <Droplets className="w-8 h-8 text-white shrink-0" />
                <CardTitle className="text-xl sm:text-2xl text-white font-bold leading-snug">
                  ✨ Wudu (Ablution) | وضو کا طریقہ
                </CardTitle>
              </div>
              <p className="text-white/95 font-medium">
                Step‑by‑Step Instructions in English & Urdu
              </p>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wuduSteps.map((step, index) => (
              <Card key={index} className={cn("hover:shadow-lg transition-all border", topic.accentBorder)}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm", topic.accentBg)}>
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={cn("font-semibold mb-2", topic.accentText)}>{step.title}</h4>
                      <p className="text-sm text-gray-800 mb-2">{step.description}</p>
                      <p className="text-sm text-gray-700 text-right">{step.urdu}</p>
                      {step.detail && (
                        <p className="text-xs text-gray-600 mt-2 italic">{step.detail}</p>
                      )}
                      {step.arabic && (
                        <p className="text-sm text-gray-800 font-arabic mt-2 text-right">{step.arabic}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card className={cn("shadow-lg border-2", topic.accentBorder, "bg-white/90")}>
            <CardHeader className="text-center py-6">
              <div className="flex items-center justify-center mb-2 gap-3 flex-wrap">
                <Clock className={cn("w-8 h-8 shrink-0", topic.accentText)} />
                <CardTitle className={cn("text-xl sm:text-2xl font-bold leading-snug", topic.accentText)}>
                  🕒 📅 Farz Namaz Times | فرض نماز کے اوقات
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {namazTimes.map((prayer, index) => (
                  <div key={index} className={cn("text-center p-4 rounded-lg border-2 bg-white", topic.accentBorder)}>
                    <h4 className={cn("font-semibold mb-2", topic.accentText)}>{prayer.name}</h4>
                    <p className="text-sm text-gray-700 mb-2">{prayer.urdu}</p>
                    <Badge className={cn("text-xs text-white border-0", topic.buttonClass)}>{prayer.rakats}</Badge>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-700 mt-4">(یہ پانچ فرض نمازیں ہیں)</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className={cn("shadow-lg mb-8 border-2", topic.accentBorder, headerGradient)}>
            <CardHeader className="text-center py-6 px-4">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                ✅ Steps of Namaz | نماز کے اعمال
              </CardTitle>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {namazSteps.map((step, index) => (
              <Card key={index} className={cn("hover:shadow-lg transition-all border", topic.accentBorder)}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center", topic.accentBg)}>
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={cn("font-semibold mb-2", topic.accentText)}>{step.step}</h4>
                      <p className="text-sm text-gray-800 mb-2">{step.description}</p>
                      <p className="text-sm text-gray-700 text-right">{step.urdu}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className={cn("border-2 shadow-lg", topic.accentBorder, headerGradient)}>
          <CardHeader className="text-center py-6">
            <CardTitle className="text-xl sm:text-2xl text-white font-bold">
              🌟 Benefits & Importance
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4 py-6 bg-white/95 rounded-b-xl">
            <p className="text-gray-800 font-medium">
              Wudu cleanses both physically and spiritually, preparing you for prayer. (وضو جسمی و روحانی صفائی لاتا ہے)
            </p>
            <p className="text-gray-800 font-medium">
              Prayer connects you directly to Allah, mentally and morally. (نماز اللہ کے ساتھ رابطہ ہے)
            </p>
            <p className="text-gray-800 font-medium">
              Building consistent prayer habits early helps children spiritually. (بچوں میں نماز کی عادت ڈالنے سے ایمان مضبوط ہوتا ہے)
            </p>
          </CardContent>
        </Card>
    </section>
  );
};

export default NamazGuideSection;