import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { markReturnToIslamicLearning } from "@/lib/learningTopics";
import { cn } from "@/lib/utils";

type LearningBackButtonProps = {
  className?: string;
  label?: string;
};

const LearningBackButton = ({
  className,
  label = "Back to Learning Topics",
}: LearningBackButtonProps) => {
  return (
    <Link
      to="/"
      onClick={() => markReturnToIslamicLearning()}
      state={{ returnToLearning: true }}
      className={className}
    >
      <Button variant="ghost" className="mb-4 hover:bg-black/5">
        <ArrowLeft className="w-4 h-4 mr-2" />
        {label}
      </Button>
    </Link>
  );
};

export default LearningBackButton;
