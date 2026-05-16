import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getTopicById, type LearningTopic } from "@/lib/learningTopics";
import { cn } from "@/lib/utils";

export const useLearningTopic = (topicId: string) => {
  const topic = getTopicById(topicId) ?? getTopicById("kalimas")!;
  const headerGradient = `bg-gradient-to-br ${topic.gradient}`;
  return { topic, headerGradient };
};

type TopicIntroProps = {
  topic: LearningTopic;
  badge: string;
  children: ReactNode;
};

export const TopicIntro = ({ topic, badge, children }: TopicIntroProps) => {
  const headerGradient = `bg-gradient-to-br ${topic.gradient}`;
  return (
    <Card className={cn("border-2 shadow-md", topic.accentBorder, headerGradient)}>
      <CardContent className="py-5 px-4 text-center">
        <Badge className={cn("mb-3 text-white border-0", topic.buttonClass)}>{badge}</Badge>
        <p className="text-white/95 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {children}
        </p>
      </CardContent>
    </Card>
  );
};

type TopicCardProps = {
  topic: LearningTopic;
  header: ReactNode;
  children: ReactNode;
  className?: string;
};

export const TopicCard = ({ topic, header, children, className }: TopicCardProps) => {
  const headerGradient = `bg-gradient-to-br ${topic.gradient}`;
  return (
    <Card
      className={cn(
        "overflow-hidden hover:shadow-lg transition-all duration-300 border-2",
        topic.accentBorder,
        className
      )}
    >
      <CardHeader className={cn("py-4 px-4", headerGradient)}>{header}</CardHeader>
      <CardContent className={cn("space-y-5 p-6", topic.pageBg)}>{children}</CardContent>
    </Card>
  );
};

export const TopicCardTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <CardTitle
    className={cn("text-base sm:text-lg font-bold text-white leading-snug", className)}
  >
    {children}
  </CardTitle>
);

export const TopicLabel = ({
  topic,
  children,
  className,
}: {
  topic: LearningTopic;
  children: ReactNode;
  className?: string;
}) => (
  <h4 className={cn("font-semibold mb-3", topic.accentText, className)}>{children}</h4>
);

export const TopicArabicBox = ({
  topic,
  children,
  className,
}: {
  topic: LearningTopic;
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "rounded-lg border-2 p-4 text-gray-900 bg-white/80 shadow-sm",
      topic.accentBorder,
      className
    )}
  >
    {children}
  </div>
);

export const TopicTextBox = ({
  topic,
  children,
  className,
  align = "left",
}: {
  topic: LearningTopic;
  children: ReactNode;
  className?: string;
  align?: "left" | "right";
}) => (
  <div
    className={cn(
      "rounded-lg border-2 p-4 bg-white/75 text-gray-800 leading-relaxed",
      topic.accentBorder,
      align === "right" && "text-right",
      className
    )}
  >
    {children}
  </div>
);

export const TopicSeparator = ({ topic }: { topic: LearningTopic }) => (
  <Separator className={cn(topic.accentBg, "opacity-25")} />
);

type TopicBenefitsProps = {
  topic: LearningTopic;
  title: string;
  children: ReactNode;
};

export const TopicBenefits = ({ topic, title, children }: TopicBenefitsProps) => {
  const headerGradient = `bg-gradient-to-br ${topic.gradient}`;
  return (
    <Card className={cn("border-2 shadow-lg overflow-hidden", topic.accentBorder)}>
      <CardHeader className={cn("text-center py-6", headerGradient)}>
        <CardTitle className="text-xl sm:text-2xl text-white font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className={cn("py-8 px-6", topic.pageBg)}>{children}</CardContent>
    </Card>
  );
};

export const TopicCategoryPill = ({
  topic,
  children,
}: {
  topic: LearningTopic;
  children: ReactNode;
}) => (
  <Badge className={cn("text-xs text-white border-0 shrink-0", topic.badgeClass, topic.buttonClass)}>
    {children}
  </Badge>
);
