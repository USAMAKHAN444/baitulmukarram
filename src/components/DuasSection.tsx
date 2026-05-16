import { Sun, Utensils, Home, Plane, Droplets, Heart, type LucideIcon } from "lucide-react";
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

type DuasSectionProps = {
  topicId?: string;
};

const DuasSection = ({ topicId = "duas" }: DuasSectionProps) => {
  const { topic } = useLearningTopic(topicId);

  const duas: {
    title: string;
    urdu: string;
    arabic: string;
    english: string;
    urduTranslation: string;
    icon: LucideIcon;
    category: string;
  }[] = [
    {
      title: "Dua When Waking Up",
      urdu: "صبح اٹھنے کی دعا",
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
      english:
        "All praise is for Allah who gave us life after causing us to die, and to Him is the resurrection.",
      urduTranslation:
        "تمام تعریفیں اس اللہ کے لیے ہیں جس نے ہمیں موت کے بعد زندگی دی، اور اسی کی طرف لوٹنا ہے۔",
      icon: Sun,
      category: "Morning",
    },
    {
      title: "Dua Before Eating",
      urdu: "کھانے سے پہلے کی دعا",
      arabic: "بِسْمِ اللَّهِ",
      english: "In the name of Allah.",
      urduTranslation: "اللہ کے نام سے (کھانا شروع کرتے ہوئے)",
      icon: Utensils,
      category: "Meals",
    },
    {
      title: "Dua After Eating",
      urdu: "کھانے کے بعد کی دعا",
      arabic:
        "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِينِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
      english:
        "All praise is for Allah who fed me this and provided it for me without any strength or power on my part.",
      urduTranslation:
        "تمام تعریفیں اس اللہ کے لیے ہیں جس نے مجھے یہ کھلایا، اور مجھے قوت و طاقت کے بغیر رزق عطا فرمائی۔",
      icon: Utensils,
      category: "Meals",
    },
    {
      title: "Dua After Sneezing",
      urdu: "چھینک آنے کے بعد کی دعا",
      arabic: "الْحَمْدُ لِلَّهِ",
      english: "Praise be to Allah.",
      urduTranslation:
        'اللہ کا شکر ہے۔ (After sneezing one says: "Alhamdulillah")',
      icon: Heart,
      category: "Health",
    },
    {
      title: "Reply to Sneezing",
      urdu: "چھینک کی جواب میں دعا",
      arabic: "يَرْحَمُكَ اللَّهُ",
      english: "May Allah have mercy upon you.",
      urduTranslation:
        'اللہ آپ پر رحمت فرمائے۔ (Response after someone sneezes)',
      icon: Heart,
      category: "Health",
    },
    {
      title: "Dua Before Entering the Mosque",
      urdu: "مسجد میں داخل ہونے کی دعا",
      arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
      english: "O Allah, open for me the doors of Your mercy.",
      urduTranslation: "اے اللہ، اپنی رحمت کے دروازے میرے لیے کھول دے۔ (Common Masnoon dua)",
      icon: Home,
      category: "Mosque",
    },
    {
      title: "Dua When Leaving the Mosque",
      urdu: "مسجد سے نکلنے کی دعا",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
      english: "O Allah, I ask You for Your bounty.",
      urduTranslation: "اے اللہ، میں تجھ سے اپنے فضل کی درخواست کرتا ہوں۔",
      icon: Home,
      category: "Mosque",
    },
    {
      title: "Dua Before Entering the Washroom",
      urdu: "بیت الخلاء جانے سے پہلے",
      arabic: "اللَّهُـمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ",
      english: "O Allah, I seek refuge with You from all evil and evil-doers.",
      urduTranslation:
        "اے اللہ، میں تجھ سے تمام برائیوں اور بُری عورتوں کی پناہ مانگتا ہوں۔ (Masnoon dua before using toilet)",
      icon: Home,
      category: "Daily Life",
    },
    {
      title: "Dua After Wudu",
      urdu: "وضو کے بعد کی دعا",
      arabic:
        "أَشْهَدُ أَنْ لاَ إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      english:
        "I bear witness that there is no god but Allah, alone without partner, and I bear witness that Muhammad is His servant and messenger.",
      urduTranslation:
        "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اور میں گواہی دیتا ہوں کہ محمد ﷺ اس کے بندے اور رسول ہیں۔ (To be recited after completing ablution)",
      icon: Droplets,
      category: "Worship",
    },
    {
      title: "Dua When Traveling",
      urdu: "سفر کی دعا",
      arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ",
      english:
        "Glory be to Him who brought this under our control although we were unable to [control it].",
      urduTranslation:
        "پاک ہے وہ جس نے یہ ہمارے تابع فرمایا حالانکہ ہم اسے قابو میں نہیں رکھتے تھے۔ (Supplication before traveling—e.g., journey or ride)",
      icon: Plane,
      category: "Travel",
    },
  ];

  return (
    <section className="space-y-8">
      <TopicIntro topic={topic} badge="🤲 Daily Duas | روزانہ کی دعائیں">
        Short, authentic supplications for everyday situations in Arabic with English and Urdu
        translations. Ideal for learning and practice.
      </TopicIntro>

      <motion className="grid grid-cols-1 lg:grid-cols-2 gap-8">