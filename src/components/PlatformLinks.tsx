import { PLATFORMS, INSTITUTE_NAME_SHORT, openTelegram, openSkype } from "@/lib/institute";
import { cn } from "@/lib/utils";

const defaultTelegramMessage = `Assalamu Alaikum! I would like to learn more about ${INSTITUTE_NAME_SHORT}.`;
const defaultSkypeMessage = `Assalamu Alaikum! I would like to contact ${INSTITUTE_NAME_SHORT}.`;

/** Official-style brand icons (multi-color where applicable) */
const BrandIcon = ({ id }: { id: string }) => {
  switch (id) {
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
          <path
            fill="#25D366"
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.09.55 4.14 1.59 5.95L2 22l4.26-1.11a9.86 9.86 0 0 0 5.78 1.78h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.32 13.97c-.25.7-1.45 1.34-2 1.41-.51.06-1.17.09-1.89-.12-.44-.14-1.01-.33-1.74-.65-3.06-1.32-5.05-4.42-5.2-4.63-.15-.21-1.24-1.65-1.24-3.15 0-1.5.79-2.24 1.07-2.55.28-.31.61-.39.82-.39.2 0 .42.01.6.01.19 0 .46-.08.72.55.25.62.87 2.12.94 2.27.08.15.13.33.03.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.31.31-.13.61.18.3.81 1.34 1.74 2.17 1.2 1.06 2.21 1.39 2.52 1.55.31.15.49.13.67-.08.18-.21.77-.9.98-1.21.21-.31.42-.26.72-.16.3.1 1.88.89 2.2 1.05.33.16.55.24.63.37.08.13.08.76-.17 1.46z"
          />
        </svg>
      );
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
          <circle cx="12" cy="12" r="12" fill="#229ED9" />
          <path
            fill="#fff"
            d="M5.49 11.64l11.97-4.62c.55-.2 1.04.13.86.86l-2.03 9.58c-.15.68-.55.84-1.12.52l-3.1-2.29-1.5 1.44c-.17.17-.31.31-.63.31l.22-3.13 5.74-5.18c.25-.22-.05-.34-.39-.12L7.33 13.5l-3.02-.94c-.66-.21-.67-.66.14-.98z"
          />
        </svg>
      );
    case "zoom":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#2D8CFF" />
          <path
            fill="#fff"
            d="M6.5 8.5h7.5c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1H6.5c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1zm9.5 1.2 3.5-1.7c.35-.17.75.14.75.52v5.96c0 .38-.4.69-.75.52l-3.5-1.7V9.7z"
          />
        </svg>
      );
    case "google-meet":
      return (
        <img
          src="/icons/google-meet.png"
          alt=""
          className="w-6 h-6 object-contain"
          aria-hidden
        />
      );
    case "skype":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
          <circle cx="12" cy="12" r="12" fill="#00AFF0" />
          <path
            fill="#fff"
            d="M12.5 4.5c-3.6 0-6.5 2.6-6.5 5.8 0 1 .3 2 .9 2.7l-1.8 3.9 4.1-1.1c.7.2 1.5.3 2.3.3 3.6 0 6.5-2.6 6.5-5.8S16.1 4.5 12.5 4.5zm2.8 8.6c-.2.5-1 .9-1.4.9-.3 0-.7 0-1.1-.1-.3-.1-.6-.2-1-.4-1.8-.8-3-2.6-3.1-2.7-.1-.1-.8-.8-.8-1.6 0-.8.5-1.2.7-1.4.2-.2.4-.2.5-.2.1 0 .2 0 .3 0 .1 0 .3-.1.4.3.2.4.6 1.3.6 1.4 0 .1.1.2 0 .3-.1.1-.1.2-.2.3-.1.1-.2.2-.3.3-.1.1-.2.2-.1.4.1.2.5.8 1.1 1.4.8.7 1.5.9 1.7 1 .2.1.3.1.4-.1.1-.2.5-.8.6-1 .1-.2.2-.2.4-.1.2.1 1.1.5 1.3.6.2.1.4.1.4.2 0 .1 0 .5-.1.9z"
          />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
          <circle cx="12" cy="12" r="12" fill="#34A853" />
          <path
            fill="#fff"
            d="M8.5 6.8c.3-.3.8-.4 1.2-.2l1.8.9c.4.2.6.7.4 1.1l-.6 1.3c-.1.3 0 .6.2.8 1.4 1.4 2.6 2.6 4 4 .2.2.5.3.8.2l1.3-.6c.4-.2.9 0 1.1.4l.9 1.8c.2.4.1.9-.2 1.2-1 .9-2.3 1.4-3.6 1.2-2.4-.4-5.1-2.5-7.2-4.6S5.6 11.4 5.2 9c-.2-1.3.3-2.6 1.2-3.6.1-.1.2-.2.1-.1z"
          />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#EA4335" />
          <path
            fill="#fff"
            d="M4 7.5v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-9l-8 5-8-5zm1.4-.5 6.6 4.1 6.6-4.1H5.4z"
          />
        </svg>
      );
    default:
      return null;
  }
};

const handlePlatformClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  platformId: string
) => {
  if (platformId === "telegram") {
    e.preventDefault();
    openTelegram(defaultTelegramMessage);
    return;
  }
  if (platformId === "skype") {
    e.preventDefault();
    openSkype(defaultSkypeMessage);
  }
};

type PlatformLinksProps = {
  size?: "sm" | "md";
  className?: string;
};

const PlatformLinks = ({ size = "md", className }: PlatformLinksProps) => {
  const btnSize = size === "sm" ? "w-10 h-10" : "w-12 h-12";

  return (
    <div className={cn("flex flex-wrap gap-2.5 justify-center", className)}>
      {PLATFORMS.map((platform) => (
        <a
          key={platform.id}
          href={platform.href}
          target={
            platform.id === "phone" ||
            platform.id === "email" ||
            platform.id === "skype" ||
            platform.id === "telegram"
              ? undefined
              : "_blank"
          }
          rel="noopener noreferrer"
          aria-label={platform.label}
          title={platform.label}
          onClick={(e) => handlePlatformClick(e, platform.id)}
          className={cn(
            btnSize,
            "inline-flex items-center justify-center rounded-xl bg-white shadow-md border border-black/5 transition-transform hover:scale-110 hover:shadow-lg"
          )}
        >
          <BrandIcon id={platform.id} />
        </a>
      ))}
    </div>
  );
};

export default PlatformLinks;
