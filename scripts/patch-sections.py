from pathlib import Path

def patch_return(path: Path, new_return: str):
    text = path.read_text()
    start = text.index("  return (")
    end = text.index("\n};\n\nexport default")
    path.write_text(text[:start] + new_return + text[end:])
    print("patched", path.name)

def patch_import(path: Path, new_head: str, data_marker: str):
    text = path.read_text()
    idx = text.index(data_marker)
    path.write_text(new_head + text[idx:])
    print("imports", path.name)

base = Path(__file__).resolve().parents[1] / "src/components"

DUAS_RETURN = Path(__file__).with_name("duas-return.tsx").read_text()
HADITH_RETURN = Path(__file__).with_name("hadith-return.tsx").read_text()
MANNERS_RETURN = Path(__file__).with_name("manners-return.tsx").read_text()

HADITH_IMPORT = """import { Badge } from "@/components/ui/badge";
import { Heart, Sparkles, Users, GraduationCap, Smile, Shield, Globe } from "lucide-react";
import {
  TopicArabicBox,
  TopicBenefits,
  TopicCard,
  TopicCardTitle,
  TopicIntro,
  TopicLabel,
  TopicSeparator,
  useLearningTopic,
} from "@/components/learning/TopicThemedBlocks";
import { cn } from "@/lib/utils";

type HadithSectionProps = {
  topicId?: string;
};

const HadithSection = ({ topicId = "hadith" }: HadithSectionProps) => {
  const { topic } = useLearningTopic(topicId);
"""

MANNERS_IMPORT = """import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Hand, Users, Sparkles, Home, MessageCircle, BookOpen, Shield, Globe, Smile, Award } from "lucide-react";
import {
  TopicBenefits,
  TopicCard,
  TopicCardTitle,
  TopicIntro,
  TopicLabel,
  TopicSeparator,
  useLearningTopic,
} from "@/components/learning/TopicThemedBlocks";
import { cn } from "@/lib/utils";

type MannersSectionProps = {
  topicId?: string;
};

const MannersSection = ({ topicId = "manners" }: MannersSectionProps) => {
  const { topic } = useLearningTopic(topicId);
"""

patch_return(base / "DuasSection.tsx", DUAS_RETURN)
patch_import(base / "HadithSection.tsx", HADITH_IMPORT, "  const hadiths =")
patch_return(base / "HadithSection.tsx", HADITH_RETURN)
patch_import(base / "MannersSection.tsx", MANNERS_IMPORT, "  const manners =")
patch_return(base / "MannersSection.tsx", MANNERS_RETURN)
