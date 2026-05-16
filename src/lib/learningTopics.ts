import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Building,
  Heart,
  MessageSquare,
  Star,
  Users,
} from "lucide-react";

export const ISLAMIC_LEARNING_SECTION_ID = "islamic-learning";
export const SCROLL_RESTORE_KEY = "scroll-to-islamic-learning";

export type LearningTopic = {
  id: string;
  title: string;
  urdu: string;
  description: string;
  icon: LucideIcon;
  link: string;
  badgeClass: string;
  gradient: string;
  buttonClass: string;
  pageBg: string;
  accentText: string;
  accentBg: string;
  accentBorder: string;
};

export const learningTopics: LearningTopic[] = [
  {
    id: "kalimas",
    title: "Essential Islamic Declarations",
    urdu: "چھے کلمے",
    description:
      "Learn the Six Kalimas - fundamental declarations of faith in Islam with Arabic text, translations, and meanings.",
    icon: Star,
    link: "/kalimas",
    badgeClass: "bg-emerald-100 text-emerald-800",
    gradient: "from-emerald-500 to-teal-600",
    buttonClass:
      "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700",
    pageBg: "bg-emerald-50/80",
    accentText: "text-emerald-800",
    accentBg: "bg-emerald-500",
    accentBorder: "border-emerald-200",
  },
  {
    id: "namaz",
    title: "Complete Prayer Guide",
    urdu: "نماز کا طریقہ",
    description:
      "Step-by-step guide to performing Wudu (ablution) and Salah (prayer) with proper methods and supplications.",
    icon: Building,
    link: "/namaz",
    badgeClass: "bg-blue-100 text-blue-800",
    gradient: "from-blue-500 to-indigo-600",
    buttonClass:
      "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
    pageBg: "bg-blue-50/80",
    accentText: "text-blue-800",
    accentBg: "bg-blue-500",
    accentBorder: "border-blue-200",
  },
  {
    id: "surahs",
    title: "Short Surahs Collection",
    urdu: "چھوٹی سورتیں",
    description:
      "Essential short chapters from the Quran with Arabic text, English and Urdu translations for daily recitation.",
    icon: BookOpen,
    link: "/surahs",
    badgeClass: "bg-purple-100 text-purple-800",
    gradient: "from-purple-500 to-violet-600",
    buttonClass:
      "bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700",
    pageBg: "bg-purple-50/80",
    accentText: "text-purple-800",
    accentBg: "bg-purple-500",
    accentBorder: "border-purple-200",
  },
  {
    id: "duas",
    title: "Daily Duas & Supplications",
    urdu: "روزانہ کی دعائیں",
    description:
      "Important daily prayers and supplications for various occasions throughout the day.",
    icon: Heart,
    link: "/duas",
    badgeClass: "bg-rose-100 text-rose-800",
    gradient: "from-rose-500 to-pink-600",
    buttonClass:
      "bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700",
    pageBg: "bg-rose-50/80",
    accentText: "text-rose-800",
    accentBg: "bg-rose-500",
    accentBorder: "border-rose-200",
  },
  {
    id: "hadith",
    title: "Prophetic Teachings",
    urdu: "حدیث کارنر",
    description:
      "Beautiful sayings of Prophet Muhammad ﷺ with authentic sources and practical explanations.",
    icon: MessageSquare,
    link: "/hadith",
    badgeClass: "bg-amber-100 text-amber-800",
    gradient: "from-amber-500 to-orange-600",
    buttonClass:
      "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700",
    pageBg: "bg-amber-50/80",
    accentText: "text-amber-900",
    accentBg: "bg-amber-500",
    accentBorder: "border-amber-200",
  },
  {
    id: "manners",
    title: "Islamic Manners & Ethics",
    urdu: "اسلامی آداب",
    description:
      "Learn proper Islamic etiquette and character building based on Quran and Sunnah teachings.",
    icon: Users,
    link: "/manners",
    badgeClass: "bg-green-100 text-green-800",
    gradient: "from-green-500 to-emerald-600",
    buttonClass:
      "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700",
    pageBg: "bg-green-50/80",
    accentText: "text-green-800",
    accentBg: "bg-green-500",
    accentBorder: "border-green-200",
  },
];

export const getTopicById = (id: string) =>
  learningTopics.find((t) => t.id === id);

export const markReturnToIslamicLearning = () => {
  sessionStorage.setItem(SCROLL_RESTORE_KEY, "1");
};

export const consumeScrollRestore = () => {
  if (sessionStorage.getItem(SCROLL_RESTORE_KEY)) {
    sessionStorage.removeItem(SCROLL_RESTORE_KEY);
    return true;
  }
  return false;
};

export const scrollToIslamicLearning = (behavior: ScrollBehavior = "auto") => {
  document.getElementById(ISLAMIC_LEARNING_SECTION_ID)?.scrollIntoView({
    behavior,
    block: "start",
  });
};
