import {
  TopicArabicBox,
  TopicBenefits,
  TopicCard,
  TopicCardTitle,
  TopicIntro,
  TopicLabel,
  TopicSeparator,
  TopicTextBox,
  useLearningTopic,
} from "@/components/learning/TopicThemedBlocks";
import { cn } from "@/lib/utils";

type SurahsSectionProps = {
  topicId?: string;
};

const SurahsSection = ({ topicId = "surahs" }: SurahsSectionProps) => {
  const { topic } = useLearningTopic(topicId);
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
    <section className="space-y-8">
      <TopicIntro topic={topic} badge="📖 Short Surahs | چھوٹی سورتیں">
        Learn the most commonly recited short Surahs with Arabic text, English, and Urdu
        translations.
      </TopicIntro>

      <div className="grid grid-cols-1 gap-8">
        {surahs.map((surah, index) => (
          <TopicCard
            key={index}
            topic={topic}
            header={
              <div className="flex items-center gap-3">
                <span className="text-2xl shrink-0">{surah.icon}</span>
                <div>
                  <TopicCardTitle className="text-lg sm:text-xl">
                    {surah.name} ({surah.urdu})
                  </TopicCardTitle>
                  <p className="text-white/90 text-sm mt-1">
                    Surah No. {surah.number} • {surah.verses}
                  </p>
                </div>
              </div>
            }
          >
            <div>
              <TopicLabel topic={topic} className="text-lg">
                Arabic:
              </TopicLabel>
              <TopicArabicBox topic={topic} className="space-y-3 p-6">
                {surah.arabic.map((verse, idx) => (
                  <p
                    key={idx}
                    className="text-xl font-arabic leading-relaxed text-right text-gray-900"
                  >
                    {verse}
                  </p>
                ))}
              </TopicArabicBox>
            </div>

            <TopicSeparator topic={topic} />

            <div>
              <TopicLabel topic={topic} className="text-lg">
                English Translation:
              </TopicLabel>
              <div className="space-y-3">
                {surah.english.map((verse, idx) => (
                  <TopicTextBox key={idx} topic={topic} className="border-l-4">
                    {verse}
                  </TopicTextBox>
                ))}
              </div>
            </div>

            <TopicSeparator topic={topic} />

            <div>
              <TopicLabel topic={topic} className="text-lg">
                Urdu Translation:
              </TopicLabel>
              <div className="space-y-3">
                {surah.urduTranslation.map((verse, idx) => (
                  <TopicTextBox key={idx} topic={topic} align="right" className="border-r-4">
                    {verse}
                  </TopicTextBox>
                ))}
              </div>
            </div>
          </TopicCard>
        ))}
      </div>

      <TopicBenefits topic={topic} title="🌟 Benefits of Learning Short Surahs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { icon: "🕌", title: "Daily Prayers", text: "Essential for completing your five daily prayers" },
            { icon: "🛡️", title: "Protection", text: "Seek Allah's protection from evil and harm" },
            { icon: "❤️", title: "Spiritual Connection", text: "Strengthen your relationship with Allah" },
          ].map((item) => (
            <div key={item.title}>
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className={cn("font-semibold mb-2", topic.accentText)}>{item.title}</h4>
              <p className="text-gray-700 text-sm font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </TopicBenefits>
    </section>
  );
};

export default SurahsSection;