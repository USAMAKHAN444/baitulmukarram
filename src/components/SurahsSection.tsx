import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const SurahsSection = () => {
  const surahs = [
    {
      name: "Surah Al‑Ikhlaas",
      urdu: "سورۃ الاخلاص",
      number: "112",
      verses: "4 Verses (Juz 30)",
      arabic: [
        "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِیمِ",
        "قُلْ هُوَ اللّٰهُ أَحَدٌ",
        "اللّٰهُ الصَّمَدُ",
        "لَمْ یَلِدْ وَلَمْ یُولَدْ",
        "وَلَمْ یَكُن لَّهُ كُفُوًا أَحَدٌ"
      ],
      english: [
        "In the name of Allah, the Most Gracious, the Most Merciful.",
        "Say, \"He is Allah, the One.",
        "Allah, the Eternal Refuge.",
        "He neither begets nor is born.",
        "Nor is there to Him any equivalent.\""
      ],
      urduTranslation: [
        "شروع اللہ کے نام سے جو نہایت مہربان، ہمیشہ رحم فرمانے والا ہے۔",
        "کہو: وہ اللہ ایک ہے۔",
        "اللہ بے نیاز ہے۔",
        "نہ اس نے کسی کو جنم دیا اور نہ وہ کسی سے پیدا ہوا۔",
        "اور کوئی اس کے برابر نہیں۔"
      ],
      icon: "🕋"
    },
    {
      name: "Surah Al‑Falaq",
      urdu: "سورۃ الفلق",
      number: "113",
      verses: "5 Verses (Juz 30)",
      arabic: [
        "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِیمِ",
        "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
        "مِن شَرِّ مَا خَلَقَ",
        "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
        "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"
      ],
      english: [
        "In the name of Allah, the Most Compassionate, the Most Merciful.",
        "Say, \"I seek refuge in the Lord of daybreak,",
        "from the evil of what He has created,",
        "and from the evil of the darkness when it settles,",
        "and from the evil of those who blow in knots,",
        "and from the evil of an envier when he envies.\""
      ],
      urduTranslation: [
        "شروع اللہ کے نام سے جو نہایت مہربان، رحم والا ہے۔",
        "کہو: میں صبح کے پروردگار کی پناہ مانگتا ہوں۔",
        "ہر چیز کی برائی سے جو اس نے پیدا کی۔",
        "اور اندھیری رات کی برائی سے جب اس کا اندھیرا چھا جائے۔",
        "اور گرہوں پر پڑھ پڑھ کر پھونکنے والیوں کی برائی سے۔",
        "اور حسد کرنے والے کی برائی سے جب وہ حسد کرنے لگے۔"
      ],
      icon: "🌙"
    },
    {
      name: "Surah An‑Nas",
      urdu: "سورۃ الناس",
      number: "114",
      verses: "6 Verses (Juz 30)",
      arabic: [
        "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِیمِ",
        "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        "مَلِكِ النَّاسِ",
        "إِلٰهِ النَّاسِ",
        "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
        "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
        "مِنَ الْجِنَّةِ وَالنَّاسِ"
      ],
      english: [
        "In the name of Allah, the Most Gracious, the Most Merciful.",
        "Say, \"I seek refuge in the Lord of mankind,",
        "the Sovereign of mankind,",
        "the God of mankind,",
        "from the evil of the whisperer who withdraws,",
        "who whispers in the breasts of mankind,",
        "from among jinn and men.\""
      ],
      urduTranslation: [
        "شروع اللہ کے نام سے جو بڑا مہربان، نہایت رحم والا ہے۔",
        "کہو: میں لوگوں کے پروردگار،",
        "لوگوں کے بادشاہ،",
        "لوگوں کے معبود برحق کی پناہ مانگتا ہوں۔",
        "(شیطان) وسوسہ انداز کی برائی سے جو اللہ کا نام سن کر چپ ہوجاتا ہے۔",
        "جو لوگوں کے دلوں میں وسوسے ڈالتا ہے،",
        "چاہے وہ جنات میں سے ہو یا انسانوں میں سے۔"
      ],
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            📖 Short Surahs | چھوٹی سورتیں
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Essential Quranic Chapters
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Learn the most commonly recited short Surahs with Arabic text, English, and Urdu translations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {surahs.map((surah, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-border/50 overflow-hidden">
              <CardHeader className="bg-gradient-islamic text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{surah.icon}</span>
                    <div>
                      <CardTitle className="text-xl mb-1 text-black">
                        {surah.name} ({surah.urdu})
                      </CardTitle>
                      <p className="text-black text-sm">
                        Surah No. {surah.number} • {surah.verses}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8 space-y-8">
                {/* Arabic Text */}
                <div>
                  <h4 className="font-semibold text-black mb-4 text-lg">Arabic:</h4>
                  <div className="bg-gradient-subtle p-6 rounded-lg border space-y-3">
                    {surah.arabic.map((verse, idx) => (
                      <p key={idx} className="text-xl font-arabic leading-relaxed text-right text-black">
                        {verse}
                      </p>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* English Translation */}
                <div>
                  <h4 className="font-semibold text-black mb-4 text-lg">English Translation:</h4>
                  <div className="space-y-3">
                    {surah.english.map((verse, idx) => (
                                              <p key={idx} className="text-black leading-relaxed pl-4 border-l-2 border-primary/20">
                          {verse}
                        </p>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Urdu Translation */}
                <div>
                  <h4 className="font-semibold text-black mb-4 text-lg">Urdu Translation:</h4>
                  <div className="space-y-3">
                    {surah.urduTranslation.map((verse, idx) => (
                                              <p key={idx} className="text-black leading-relaxed pr-4 border-r-2 border-primary/20 text-right">
                          {verse}
                        </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Benefits */}
        <Card className="mt-16 bg-gradient-gold border-accent/20 shadow-gold">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-black font-bold">
              🌟 Benefits of Learning Short Surahs
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🕌</div>
                <h4 className="font-semibold text-black mb-2">Daily Prayers</h4>
                <p className="text-black font-medium text-sm">Essential for completing your five daily prayers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-semibold text-black mb-2">Protection</h4>
                <p className="text-black font-medium text-sm">Seek Allah's protection from evil and harm</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">❤️</div>
                <h4 className="font-semibold text-black mb-2">Spiritual Connection</h4>
                <p className="text-black font-medium text-sm">Strengthen your relationship with Allah</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SurahsSection;