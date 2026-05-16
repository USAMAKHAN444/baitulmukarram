import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const KalimasSection = () => {
  const kalimas = [
    {
      number: "1st",
      name: "Tayyibah | پہلا کلمہ طیبہ",
      arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَّسُوْلُ اللّٰهِ",
      english: "There is no god but Allah, Muhammad is the Messenger of Allah.",
      urdu: "اللہ کے سوا کوئی معبود نہیں، محمد ﷺ اللہ کے رسول ہیں۔"
    },
    {
      number: "2nd",
      name: "Shahadat | دوسرا کلمہ شہادت",
      arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ",
      english: "I bear witness that there is no god but Allah, He is One, without partner, and I bear witness that Muhammad is His servant and messenger.",
      urdu: "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، وہ یکتا ہے، اس کا کوئی شریک نہیں، اور میں گواہی دیتا ہوں کہ محمد ﷺ اس کے بندے اور رسول ہیں۔"
    },
    {
      number: "3rd",
      name: "Tamjeed | تیسرا کلمہ تمجید",
      arabic: "سُبْحَانَ اللّٰهِ، وَالْحَمْدُ لِلّٰهِ، وَلَا إِلٰهَ إِلَّا اللّٰهُ، وَاللّٰهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيمِ",
      english: "Glory be to Allah, and all praise be to Allah, and there is no god but Allah, and Allah is the Greatest. There is no power and no strength except with Allah, the Most High, the Most Great.",
      urdu: "اللہ پاک ہے، اور تمام تعریفیں اللہ ہی کے لیے ہیں، اور اللہ کے سوا کوئی معبود نہیں، اور اللہ سب سے بڑا ہے۔ گناہوں سے بچنے اور نیکی کرنے کی طاقت صرف اللہ عظیم و بلند کے ساتھ ہے۔"
    },
    {
      number: "4th",
      name: "Tawheed | چوتھا کلمہ توحید",
      arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِيْ وَيُمِيْتُ، وَهُوَ حَيٌّ لَا يَمُوْتُ أَبَدًا أَبَدًا، ذُو الْجَلَالِ وَالْإِكْرَامِ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ",
      english: "There is no god but Allah. He is One. He has no partner. His is the kingdom and His is the praise. He gives life and causes death. In His hand is all good and He is over all things powerful.",
      urdu: "اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اسی کی بادشاہی ہے اور اسی کے لیے تمام تعریف ہے، وہی زندگی دیتا ہے اور موت دیتا ہے، اور وہ ہمیشہ زندہ رہنے والا ہے، اسے کبھی موت نہیں آئے گی، وہ عزت و جلال والا ہے، اسی کے ہاتھ میں بھلائی ہے، اور وہ ہر چیز پر قادر ہے۔"
    },
    {
      number: "5th",
      name: "Astaghfar | پانچواں کلمہ استغفار",
      arabic: "أَسْتَغْفِرُ اللّٰهَ رَبِّي مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمْدًا أَوْ خَطَأً سِرًّا أَوْ عَلَانِيَةً، وَأَتُوْبُ إِلَيْهِ مِنَ الذَّنْبِ الَّذِي أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِي لَا أَعْلَمُ، إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوْبِ وَسَتَّارُ الْعُيُوْبِ وَغَفَّارُ الذُّنُوْبِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيْمِ",
      english: "I seek forgiveness from Allah, my Lord, from every sin I committed knowingly or unknowingly, secretly or openly, and I turn towards Him from the sin that I know and from the sin that I do not know. Certainly, You are the Knower of the unseen, the Concealer of faults, and the Forgiver of sins. There is no power and no strength except with Allah, the Most High, the Most Great.",
      urdu: "میں اپنے رب اللہ سے اپنے ہر گناہ کی معافی مانگتا ہوں، جو میں نے جان بوجھ کر یا غلطی سے، چھپ کر یا علانیہ کیے ہوں، اور ان گناہوں سے بھی توبہ کرتا ہوں جنہیں میں جانتا ہوں اور جنہیں میں نہیں جانتا۔ بے شک تو ہی غیب کا جاننے والا، عیبوں کو چھپانے والا اور گناہوں کو معاف کرنے والا ہے۔ اور کوئی طاقت و قوت نہیں مگر اللہ بلند و برتر کے ساتھ۔"
    },
    {
      number: "6th",
      name: "Radde Kufr | چھٹا کلمہ رد کفر",
      arabic: "اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَأَنَا أَعْلَمُ بِهِ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ بِهِ، تُبْتُ عَنْهُ وَتَبَرَّأْتُ مِنَ الْكُفْرِ وَالشِّرْكِ وَالْكِذْبِ وَالْغِيبَةِ وَالْبِدْعَةِ وَالنَّمِيمَةِ وَالْفَوَاحِشِ وَالْبُهْتَانِ وَالْمَعَاصِي كُلِّهَا، وَأَسْلَمْتُ وَأَقُوْلُ لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَّسُوْلُ اللّٰهِ",
      english: "O Allah! I seek refuge in You from associating anything with You knowingly. I seek Your forgiveness for the sin which I do not know. I repent from it and I declare myself free from disbelief, polytheism, lying, backbiting, innovation, slander, obscenity, false accusations, and all sins. I accept Islam and declare: There is no god but Allah, Muhammad is the Messenger of Allah.",
      urdu: "اے اللہ! میں تجھ سے پناہ مانگتا ہوں کہ میں جانتے بوجھتے تیرے ساتھ کسی کو شریک نہ کروں، اور ان گناہوں کی بخشش چاہتا ہوں جنہیں میں نہیں جانتا۔ میں ان سے توبہ کرتا ہوں اور کفر، شرک، جھوٹ، غیبت، بدعت، چغلی، بے حیائی، تہمت اور تمام گناہوں سے بیزاری ظاہر کرتا ہوں۔ میں اسلام قبول کرتا ہوں اور کہتا ہوں: اللہ کے سوا کوئی معبود نہیں، محمد ﷺ اللہ کے رسول ہیں۔"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🕋 The Six Kalimas | چھے کلمے
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Essential Islamic Declarations
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Learn the six fundamental declarations of Islamic faith with Arabic text, English, and Urdu translations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {kalimas.map((kalima, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-sm">
                    ✅ {kalima.number} Kalima – {kalima.name}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-black mb-3">Arabic:</h4>
                                      <p className="text-lg font-arabic leading-relaxed text-right bg-gradient-subtle p-4 rounded-lg border text-black">
                      {kalima.arabic}
                    </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-black mb-3">English Translation:</h4>
                                      <p className="text-black leading-relaxed">
                      {kalima.english}
                    </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-black mb-3">Urdu Translation:</h4>
                                      <p className="text-black leading-relaxed text-right">
                      {kalima.urdu}
                    </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KalimasSection;