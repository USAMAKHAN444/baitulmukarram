import {
  Heart,
  Hand,
  Users,
  Sparkles,
  Home,
  MessageCircle,
  BookOpen,
  Shield,
  Globe,
  Award,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
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

type MannersSectionProps = {
  topicId?: string;
};

const MannersSection = ({ topicId = "manners" }: MannersSectionProps) => {
  const { topic, headerGradient } = useLearningTopic(topicId);

  const manners: {
    title: string;
    urdu: string;
    description: string;
    urduDescription: string;
    icon: LucideIcon;
    category: string;
  }[] = [
    {
      title: "Saying Bismillah",
      urdu: "بِسْمِ اللّٰهِ کہنا",
      description: 'Begin meals or actions by saying "Bismillah" (In the name of Allah).',
      urduDescription: 'کھانے یا کسی کام کی شروعات اللہ کے نام سے کریں، "بِسْمِ اللّٰهِ" کہہ کر۔',
      icon: Heart,
      category: "Daily Habits",
    },
    {
      title: "Greeting with Salaam",
      urdu: "سلام سے آغاز کریں",
      description: 'Always greet others with "Assalamu Alaikum"; reply with "Wa Alaikum Salaam."',
      urduDescription: 'دوسروں کو ہمیشہ "السلام علیکم" سے سلام کریں، جواب میں "وعلیکم السلام" کہیں۔',
      icon: Users,
      category: "Social Etiquette",
    },
    {
      title: "Respecting Parents & Elders",
      urdu: "بڑوں کا احترام",
      description: "Speak politely, obey their advice, and never call them by name.",
      urduDescription: "بڑوں سے ادب سے بات کریں، ان کی بات مانو، اور کبھی ان کو نام سے نہ بلائیں۔",
      icon: Heart,
      category: "Family Values",
    },
    {
      title: "Use Right Hand",
      urdu: "دایاں ہاتھ استعمال کریں",
      description: "Eat, drink, pass items using your right hand, as taught by the Prophet ﷺ.",
      urduDescription: "کھانا، پینا یا کسی چیز کا لینا، دینا ہمیشہ دایاں ہاتھ استعمال کریں۔",
      icon: Hand,
      category: "Prophetic Guidance",
    },
    {
      title: "Cleanliness is Half of Faith",
      urdu: "صفائی نصف ایمان ہے",
      description: "Keep your body, clothes, and surroundings clean. Islam places great value on hygiene.",
      urduDescription: "اپنے جسم، کپڑے اور ماحول کو صاف رکھیں۔ اسلام میں صفائی کو ایمان کا نصف کہا گیا ہے۔",
      icon: Sparkles,
      category: "Personal Hygiene",
    },
    {
      title: "Speak Kindly & Truthfully",
      urdu: "نرمی سے سچ بولیں",
      description: "Avoid harsh words or lies. Speak gently and truthfully.",
      urduDescription: "سخت الفاظ یا جھوٹ سے گریز کریں۔ ہمیشہ نرمی سے اور سچ بولیں۔",
      icon: MessageCircle,
      category: "Speech Ethics",
    },
    {
      title: "Be Kind & Forgiving",
      urdu: "مہربان اور درگزر والا بنیں",
      description: "Forgive others and show compassion; Allah loves those who pardon.",
      urduDescription: "دوسروں کو معاف کریں اور رحم دلی کا مظاہرہ کریں۔ اللہ انہیں پسند فرماتا ہے جو درگزر کرنے والے ہیں۔",
      icon: Heart,
      category: "Character Building",
    },
    {
      title: "Ask Permission Before Entering",
      urdu: "اجازت لے کر داخل ہوں",
      description: "Knock or say Salaam before entering a room or a house.",
      urduDescription: 'کسی کمرے یا گھر میں داخل ہونے سے پہلے "سلام" کہہ کر یا دروازہ کھٹکھٹا کر اجازت لیں۔',
      icon: Home,
      category: "Privacy Respect",
    },
    {
      title: "Avoid Backbiting, Lying & Gossip",
      urdu: "غیبت، جھوٹ اور گپ شپ سے بچیں",
      description: "Avoid harmful speech—backbiting, rumors, or lying damages faith.",
      urduDescription: "غیبت، افواہوں یا جھوٹ سے پرہیز کریں—یہ سب ایمان کو کمزور کرتے ہیں۔",
      icon: Shield,
      category: "Speech Ethics",
    },
    {
      title: "Help Others & Show Empathy",
      urdu: "دوسروں کی مدد کریں",
      description: "Assist those in need, be kind to animals, and help your family.",
      urduDescription: "ضرورت مند کی مدد کریں، جانوروں کے ساتھ مہربانی کریں، اور گھر والوں کا خیال رکھیں۔",
      icon: Globe,
      category: "Community Service",
    },
    {
      title: "Moderate Speech & Avoid Quarrels",
      urdu: "بات معتدل رکھیں، جھگڑے سے بچیں",
      description: "Avoid excessive talking or heated arguments. Choose silence over vain talk.",
      urduDescription: "بے مقصد باتوں یا تلخ گوئی سے پرہیز کریں۔ فضول گفتگو کے بجائے خاموشی کو ترجیح دیں۔",
      icon: MessageCircle,
      category: "Speech Ethics",
    },
    {
      title: "Greetings Gesture – Adab",
      urdu: "آداب کا اشارہ",
      description:
        'In some South Asian cultures, the "Adab" gesture—raising the right hand to the forehead respectfully—is used as greeting.',
      urduDescription:
        'ہندوستان و پاکستان میں اکثر "آداب" کے اشارے کے طور پر دایاں ہاتھ پیشانی کے سامنے اٹھا کر ادب سے سلام کیا جاتا ہے۔',
      icon: Hand,
      category: "Cultural Respect",
    },
    {
      title: "Seek Knowledge & Never Be Ashamed to Ask",
      urdu: "علم حاصل کریں، سوال کریں",
      description: "Learning Islamic knowledge is highly rewarded; never hesitate to ask questions.",
      urduDescription: "اسلامی تعلیم حاصل کرنا بڑا ثواب ہے؛ سوال پوچھنے میں کبھی جھجھک محسوس نہ کریں۔",
      icon: BookOpen,
      category: "Learning",
    },
  ];

  const categories = [
    { name: "Daily Habits", icon: Heart, count: manners.filter((m) => m.category === "Daily Habits").length },
    { name: "Social Etiquette", icon: Users, count: manners.filter((m) => m.category === "Social Etiquette").length },
    { name: "Family Values", icon: Heart, count: manners.filter((m) => m.category === "Family Values").length },
    { name: "Speech Ethics", icon: MessageCircle, count: manners.filter((m) => m.category === "Speech Ethics").length },
    { name: "Character Building", icon: Award, count: manners.filter((m) => m.category === "Character Building").length },
  ];

  return (
    <section className="space-y-8">
      <TopicIntro topic={topic} badge="🌿 Islamic Manners | اسلامی آداب">
        Teach children Islamic etiquette and good character based on Quran and Sunnah. Each point
        includes practical examples and Urdu translations for clarity.
      </TopicIntro>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((cat, index) => {
          const CatIcon = cat.icon;
          return (
            <Card
              key={index}
              className={cn("border-2 text-center shadow-sm overflow-hidden", topic.accentBorder)}
            >
              <div className={cn("py-3", headerGradient)}>
                <CatIcon className="w-7 h-7 text-white mx-auto" />
              </div>
              <CardContent className={cn("p-4", topic.pageBg)}>
                <p className={cn("font-semibold text-sm", topic.accentText)}>{cat.name}</p>
                <Badge className={cn("text-xs mt-2 text-white border-0", topic.buttonClass)}>
                  {cat.count} Tips
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {manners.map((manner, index) => {
          const Icon = manner.icon;
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
                    <TopicCategoryPill topic={topic}>{manner.category}</TopicCategoryPill>
                  </div>
                  <TopicCardTitle>
                    {manner.title} | {manner.urdu}
                  </TopicCardTitle>
                </>
              }
            >
              <div>
                <TopicLabel topic={topic}>English:</TopicLabel>
                <TopicTextBox topic={topic}>{manner.description}</TopicTextBox>
              </div>

              <TopicSeparator topic={topic} />

              <div>
                <TopicLabel topic={topic}>Urdu:</TopicLabel>
                <TopicTextBox topic={topic} align="right">
                  {manner.urduDescription}
                </TopicTextBox>
              </div>
            </TopicCard>
          );
        })}
      </div>

      <TopicBenefits topic={topic} title="🌟 Why Islamic Manners Matter?">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
          {[
            {
              icon: "🌱",
              title: "Character Development",
              text: "Build strong moral foundations and become a better person following Islamic teachings.",
            },
            {
              icon: "❤️",
              title: "Social Harmony",
              text: "Create positive relationships with family, friends, and community through good manners.",
            },
            {
              icon: "✨",
              title: "Spiritual Reward",
              text: "Earn Allah's pleasure and reward by following the beautiful example of Prophet Muhammad ﷺ.",
            },
          ].map((item) => (
            <div key={item.title}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className={cn("font-semibold mb-3", topic.accentText)}>{item.title}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className={cn("text-center border-t-2 pt-6", topic.accentBorder)}>
          <p className={cn("text-lg font-semibold mb-2", topic.accentText)}>
            "The best among you are those who have the best manners and character."
          </p>
          <p className="text-gray-600 text-sm">- Prophet Muhammad ﷺ (Sahih Bukhari)</p>
        </div>
      </TopicBenefits>
    </section>
  );
};

export default MannersSection;
