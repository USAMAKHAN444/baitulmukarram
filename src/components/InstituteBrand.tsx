import { BookOpen } from "lucide-react";
import { INSTITUTE_HEADING, INSTITUTE_SUBHEADING } from "@/lib/institute";
import { cn } from "@/lib/utils";

type InstituteBrandProps = {
  variant?: "header" | "hero" | "footer";
  className?: string;
  align?: "left" | "center";
};

const InstituteBrand = ({
  variant = "header",
  className,
  align = "left",
}: InstituteBrandProps) => {
  const isHero = variant === "hero";
  const isFooter = variant === "footer";
  const centered = align === "center" || isHero;

  return (
    <div
      className={cn(
        "flex gap-2 sm:gap-3 items-center",
        isHero && "flex-col justify-center text-center w-full",
        !isHero && centered && "flex-col text-center",
        className
      )}
    >
      {!isHero && (
        <div className="shrink-0 rounded-lg shadow-secondary flex items-center justify-center p-1.5 sm:p-2 bg-gradient-button-secondary">
          <BookOpen
            className={cn(
              "text-white",
              isFooter ? "h-7 w-7 md:h-8 md:w-8" : "h-8 w-8"
            )}
          />
        </div>
      )}

      <div
        className={cn(
          isHero ? "space-y-2 w-full" : "min-w-0 leading-tight space-y-0.5",
          !isHero && centered && "text-center"
        )}
      >
        {isHero ? (
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
            {INSTITUTE_HEADING}
          </h1>
        ) : (
          <p
            className={cn(
              "font-bold gradient-text leading-tight",
              isFooter ? "text-sm md:text-base" : "text-sm sm:text-base"
            )}
          >
            {INSTITUTE_HEADING}
          </p>
        )}
        <h2
          className={cn(
            "font-bold leading-snug gradient-text",
            isHero
              ? "text-base sm:text-lg md:text-xl lg:text-2xl"
              : isFooter
                ? "text-xs sm:text-sm"
                : "text-[10px] sm:text-xs md:text-sm"
          )}
        >
          {INSTITUTE_SUBHEADING}
        </h2>
      </div>
    </div>
  );
};

export default InstituteBrand;
