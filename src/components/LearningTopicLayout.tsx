import { useEffect, type ReactNode } from "react";
import LearningBackButton from "@/components/LearningBackButton";
import {
  getTopicById,
  markReturnToIslamicLearning,
  type LearningTopic,
} from "@/lib/learningTopics";
import { cn } from "@/lib/utils";

type LearningTopicLayoutProps = {
  topicId: string;
  children: ReactNode;
};

const LearningTopicLayout = ({ topicId, children }: LearningTopicLayoutProps) => {
  const topic = getTopicById(topicId);

  useEffect(() => {
    return () => {
      markReturnToIslamicLearning();
    };
  }, []);

  if (!topic) {
    return <div className="min-h-screen bg-background">{children}</div>;
  }

  return (
    <div className={cn("min-h-screen", topic.pageBg)}>
      <div className="container mx-auto px-4 py-8">
        <LearningBackButton />
        <TopicHeader topic={topic} />
        {children}
      </div>
    </div>
  );
};

const TopicHeader = ({ topic }: { topic: LearningTopic }) => {
  const Icon = topic.icon;
  return (
    <div
      className={cn(
        "mb-8 rounded-xl p-6 text-white shadow-lg bg-gradient-to-br",
        topic.gradient
      )}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-white/20 rounded-lg">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{topic.title}</h1>
          <p className="text-white/95 text-lg mt-1">{topic.urdu}</p>
        </div>
      </div>
    </div>
  );
};

export default LearningTopicLayout;
