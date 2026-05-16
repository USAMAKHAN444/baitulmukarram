import {
  Heart,
  Sparkles,
  Users,
  GraduationCap,
  Smile,
  Shield,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  TopicArabicBox,
  TopicBenefits,
  TopicCard,
  TopicCardTitle,
  TopicCategoryPill,
  TopicIntro,
  TopicLabel,
  TopicSeparator,
  TopicTextBox,
  useLearningTopic,
} from "@/components/learning/TopicThemedBlocks";
import { cn } from "@/lib/utils";

type HadithSectionProps = {
  topicId?: string;
};

const HadithSection = ({ topicId = "hadith" }: HadithSectionProps) => {
  const { topic } = useLearningTopic(topicId);

  const hadiths: {
    title: string;
    urdu: string;
    arabic: string;
    english: string;
    urduTranslation: string;
    reference: string;
    explanation: string;
    icon: LucideIcon;
  }[] = [
    {
      title: "Hadith on Intentions (Niyyah)",
      urdu: "نیت کی اہمیت",
      arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
      english:
        "Actions are judged by intentions, and everyone will be rewarded according to what they intended.",
      urduTranslation:
        "اعمال کا دار و مدار نیتوں پر ہے، اور ہر شخص کو وہی ملے گا جس کی اس نے نیت کی۔",
      reference: "Sahih Bukhari 1",
      explanation:
        "Always have a pure intention before doing any good deed. Even small acts become big in reward with sincere intention.",
      icon: Heart,
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
    },
    {
      title: "Hadith on Cleanliness",
      urdu: "صفائی نصف ایمان ہے",
      arabic: "الطُّهُورُ شَطْرُ الْإِيمَانِ",
      english: "Cleanliness is half of faith.",
      urduTranslation: "صفائی نصف ایمان ہے۔",
      reference: "Sahih Muslim 223",
      explanation:
        "Keeping your body, clothes, and surroundings clean is part of your religious duties.",
      icon: Sparkles,
    },
    {
      title: "Hadith on Good Character",
      urdu: "بہترین مسلمان کون؟",
      arabic: "إِنَّ مِنْ خِيَارِكُمْ أَحْسَنَكُمْ أَخْلَاقًا",
      english: "The best among you are those who have the best manners and character.",
      urduTranslation: "تم میں سب سے بہتر وہ ہے جس کا اخلاق سب سے اچھا ہے۔",
      reference: "Sahih Bukhari 3559",
      explanation:
        "Islam teaches good behavior, honesty, humility, and kindness as essential traits of a believer.",
      icon: Users,
    },
    {
      title: "Hadith on Seeking Knowledge",
      urdu: "علم حاصل کرنا فرض ہے",
      arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
      english: "Seeking knowledge is an obligation upon every Muslim.",
      urduTranslation: "علم حاصل کرنا ہر مسلمان پر فرض ہے۔",
      reference: "Sunan Ibn Majah 224",
      explanation:
        "Islamic learning is not optional; every Muslim must learn the basics of faith and practice.",
      icon: GraduationCap,
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
    },
  ];

  return (
    <section className="space-y-8">
      <TopicIntro topic={topic} badge="📖 Hadith Corner | حدیث کارنر">
        Explore the beautiful sayings of Prophet Muhammad ﷺ with authentic sources, Urdu and
        English translations, and practical explanations.
      </TopicIntro>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {hadiths.map((hadith, index) => {
          const Icon = hadith.icon;
          return (
            <TopicCard
              key={index}
              topic={topic}
              header={
                <>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-bold text-white">{index + 1}.</span>
                    </div>
                    <TopicCategoryPill topic={topic}>Hadith</TopicCategoryPill>
                  </div>
                  <TopicCardTitle>
                    {hadith.title} | {hadith.urdu}
                  </TopicCardTitle>
                </>
              }
            >
              <div>
                <TopicLabel topic={topic}>Arabic:</TopicLabel>
                <TopicArabicBox topic={topic}>
                  <p className="text-lg font-arabic leading-relaxed text-right">{hadith.arabic}</p>
                </TopicArabicBox>
              </div>

              <TopicSeparator topic={topic} />

              <div>
                <TopicLabel topic={topic}>Translation (English):</TopicLabel>
                <TopicTextBox topic={topic}>&ldquo;{hadith.english}&rdquo;</TopicTextBox>
              </div>

              <TopicSeparator topic={topic} />

              <div>
                <TopicLabel topic={topic}>Urdu Translation:</TopicLabel>
                <TopicTextBox topic={topic} align="right">
                  &ldquo;{hadith.urduTranslation}&rdquo;
                </TopicTextBox>
              </div>

              <TopicSeparator topic={topic} />

              <div>
                <TopicLabel topic={topic}>Reference:</TopicLabel>
                <Badge variant="outline" className={cn("text-xs", topic.accentBorder, topic.accentText)}>
                  {hadith.reference}
                </Badge>
              </div>

              <TopicSeparator topic={topic} />

              <div className={cn("rounded-lg border-2 p-4", topic.accentBorder, topic.pageBg)}>
                <TopicLabel topic={topic} className="mb-2">
                  Explanation:
                </TopicLabel>
                <p className="text-sm text-gray-800 leading-relaxed">{hadith.explanation}</p>
              </div>
            </TopicCard>
          );
        })}
      </div>

      <TopicBenefits topic={topic} title="🌟 Benefits of Learning Hadith">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: "📖",
              title: "Follow the Prophet ﷺ",
              text: "Learn how to live according to the Sunnah in daily life",
            },
            {
              icon: "💡",
              title: "Practical Wisdom",
              text: "Apply timeless guidance to character, family, and community",
            },
            {
              icon: "❤️",
              title: "Stronger Faith",
              text: "Grow love for Allah and His Messenger through authentic teachings",
            },
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

export default HadithSection;
