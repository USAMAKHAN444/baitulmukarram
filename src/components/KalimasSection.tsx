import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getTopicById } from "@/lib/learningTopics";
import { cn } from "@/lib/utils";

type KalimasSectionProps = {
  topicId?: string;
};

const KalimasSection = ({ topicId = "kalimas" }: KalimasSectionProps) => {
  const topic = getTopicById(topicId) ?? getTopicById("kalimas")!;
  const headerGradient = `bg-gradient-to-br ${topic.gradient}`;

  const kalimas = [
    {
      number: "1st",
      name: "Tayyibah | پہلا کلمہ طیبہ",
      arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَّسُوْلُ اللّٰهِ",
      english: "There is no god but Allah, Muhammad is the Messenger of Allah.",
      urdu: "اللہ کے سوا کوئی معبود نہیں، محمد ﷺ اللہ کے رسول ہیں۔",
    },
    {
      number: "2nd",
      name: "Shahadat | دوسرا کلمہ شہادت",
      arabic:
        "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ",
      english:
        "I bear witness that there is no god but Allah, He is One, without partner, and I bear witness that Muhammad is His servant and messenger.",
      urdu: "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، وہ یکتا ہے، اس کا کوئی شریک نہیں، اور میں گواہی دیتا ہوں کہ محمد ﷺ اس کے بندے اور رسول ہیں۔",
    },
    {
      number: "3rd",
      name: "Tamjeed | تیسرا کلمہ تمجید",
      arabic:
        "سُبْحَانَ اللّٰهِ، وَالْحَمْدُ لِلّٰهِ، وَلَا إِلٰهَ إِلَّا اللّٰهُ، وَاللّٰهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيمِ",
      english:
        "Glory be to Allah, and all praise be to Allah, and there is no god but Allah, and Allah is the Greatest. There is no power and no strength except with Allah, the Most High, the Most Great.",
      urdu: "اللہ پاک ہے، اور تمام تعریفیں اللہ ہی کے لیے ہیں، اور اللہ کے سوا کوئی معبود نہیں، اور اللہ سب سے بڑا ہے۔ گناہوں سے بچنے اور نیکی کرنے کی طاقت صرف اللہ عظیم و بلند کے ساتھ ہے۔",
    },
    {
      number: "4th",
      name: "Tawheed | چوتھا کلمہ توحید",
      arabic:
        "لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِيْ وَيُمِيْتُ، وَهُوَ حَيٌّ لَا يَمُوْتُ أَبَدًا أَبَدًا، ذُو الْجَلَالِ وَالْإِكْرَامِ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ",
      english:
        "There is no god but Allah. He is One. He has no partner. His is the kingdom and His is the praise. He gives life and causes death. In His hand is all good and He is over all things powerful.",
      urdu: "اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اسی کی بادشاہی ہے اور اسی کے لیے تمام تعریف ہے، وہی زندگی دیتا ہے اور موت دیتا ہے، اور وہ ہمیشہ زندہ رہنے والا ہے، اسے کبھی موت نہیں آئے گی، وہ عزت و جلال والا ہے، اسی کے ہاتھ میں بھلائی ہے، اور وہ ہر چیز پر قادر ہے۔",
    },
    {
      number: "5th",
      name: "Astaghfar | پانچواں کلمہ استغفار",
      arabic:
        "أَسْتَغْفِرُ اللّٰهَ رَبِّي مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمْدًا أَوْ خَطَأً سِرًّا أَوْ عَلَانِيَةً، وَأَتُوْبُ إِلَيْهِ مِنَ الذَّنْبِ الَّذِي أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِي لَا أَعْلَمُ، إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوْبِ وَسَتَّارُ الْعُيُوْبِ وَغَفَّارُ الذُّنُوْبِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيْمِ",
      english:
        "I seek forgiveness from Allah, my Lord, from every sin I committed knowingly or unknowingly, secretly or openly, and I turn towards Him from the sin that I know and from the sin that I do not know. Certainly, You are the Knower of the unseen, the Concealer of faults, and the Forgiver of sins. There is no power and no strength except with Allah, the Most High, the Most Great.",
      urdu: "میں اپنے رب اللہ سے اپنے ہر گناہ کی معافی مانگتا ہوں، جو میں نے جان بوجھ کر یا غلطی سے، چھپ کر یا علانیہ کیے ہوں، اور ان گناہوں سے بھی توبہ کرتا ہوں جنہیں میں نہیں جانتا۔ بے شک تو ہی غیب کا جاننے والا، عیبوں کو چھپانے والا اور گناہوں کو معاف کرنے والا ہے۔ اور کوئی طاقت و قوت نہیں مگر اللہ بلند و برتر کے ساتھ۔",
    },
    {
      number: "6th",
      name: "Radde Kufr | چھٹا کلمہ رد کفر",
      arabic:
        "اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَأَنَا أَعْلَمُ بِهِ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ بِهِ، تُبْتُ عَنْهُ وَتَبَرَّأْتُ مِنَ الْكُفْرِ وَالشِّرْكِ وَالْكِذْبِ وَالْغِيبَةِ وَالْبِدْعَةِ وَالنَّمِيمَةِ وَالْفَوَاحِشِ وَالْبُهْتَانِ وَالْمَعَاصِي كُلِّهَا، وَأَسْلَمْتُ وَأَقُوْلُ لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَّسُوْلُ اللّٰهِ",
      english:
        "O Allah! I seek refuge in You from associating anything with You knowingly. I seek Your forgiveness for the sin which I do not know. I repent from it and I declare myself free from disbelief, polytheism, lying, backbiting, innovation, slander, obscenity, false accusations, and all sins. I accept Islam and declare: There is no god but Allah, Muhammad is the Messenger of Allah.",
      urdu: "اے اللہ! میں تجھ سے پناہ مانگتا ہوں کہ میں جانتے بوجھتے تیرے ساتھ کسی کو شریک نہ کروں، اور ان گناہوں کی بخشش چاہتا ہوں جنہیں میں نہیں جانتا۔ میں ان سے توبہ کرتا ہوں اور کفر، شرک، جھوٹ، غیبت، بدعت، چغلی، بے حیائی، تہمت اور تمام گناہوں سے بیزاری ظاہر کرتا ہوں۔ میں اسلام قبول کرتا ہوں اور کہتا ہوں: اللہ کے سوا کوئی معبود نہیں، محمد ﷺ اللہ کے رسول ہیں۔",
    },
  ];

  return (
    <section className="space-y-8">
      <Card className={cn("border-2 shadow-md", topic.accentBorder, headerGradient)}>
        <CardContent className="py-5 px-4 text-center">
          <Badge className={cn("mb-3 text-white border-0", topic.buttonClass)}>
            🕋 The Six Kalimas | چھے کلمے
          </Badge>
          <p className="text-white/95 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Learn the six fundamental declarations of Islamic faith with Arabic text,
            English, and Urdu translations.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {kalimas.map((kalima, index) => (
          <Card
            key={index}
            className={cn(
              "overflow-hidden hover:shadow-lg transition-all duration-300 border-2",
              topic.accentBorder
            )}
          >
            <CardHeader className={cn("py-4 px-4", headerGradient)}>
              <CardTitle className="text-base sm:text-lg font-bold text-white leading-snug">
                ✅ {kalima.number} Kalima – {kalima.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 p-6 bg-white/90">
              <div>
                <h4 className={cn("font-semibold mb-3", topic.accentText)}>Arabic:</h4>
                <p
                  className={cn(
                    "text-lg font-arabic leading-relaxed text-right p-4 rounded-lg border-2 text-gray-900",
                    topic.accentBorder,
                    topic.pageBg
                  )}
                >
                  {kalima.arabic}
                </p>
              </div>

              <Separator className={cn(topic.accentBg, "opacity-25")} />

              <div>
                <h4 className={cn("font-semibold mb-3", topic.accentText)}>
                  English Translation:
                </h4>
                <p className="text-gray-800 leading-relaxed">{kalima.english}</p>
              </div>

              <Separator className={cn(topic.accentBg, "opacity-25")} />

              <div>
                <h4 className={cn("font-semibold mb-3", topic.accentText)}>
                  Urdu Translation:
                </h4>
                <p className="text-gray-800 leading-relaxed text-right">{kalima.urdu}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default KalimasSection;
