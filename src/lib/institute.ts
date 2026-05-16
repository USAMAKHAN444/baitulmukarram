export const INSTITUTE_HEADING = "Bait Ul Mukarram";

export const INSTITUTE_SUBHEADING = "Online International Islamic Institute";

export const INSTITUTE_NAME = `${INSTITUTE_HEADING} — ${INSTITUTE_SUBHEADING}`;

export const INSTITUTE_NAME_SHORT = INSTITUTE_HEADING;

export const INSTITUTE_TAGLINE =
  "Where Quranic Knowledge Begins with Faith";

export const PHONE_DISPLAY = "+92 337 5617879";
export const PHONE_E164 = "+923375617879";
export const PHONE_WHATSAPP = "923375617879";

export const EMAIL = "baitulmukarramislamicinstitute@gmail.com";

export const WHATSAPP_URL = `https://wa.me/${PHONE_WHATSAPP}`;
export const TELEGRAM_URL = `https://t.me/+${PHONE_WHATSAPP}`;
export const SKYPE_URL = `skype:${PHONE_E164}?chat`;
export const PHONE_URL = `tel:${PHONE_E164}`;
export const EMAIL_URL = `mailto:${EMAIL}`;

export const openWhatsApp = (message?: string) => {
  const url = message
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;
  window.open(url, "_blank", "noopener,noreferrer");
};

export const openEmail = (subject: string, body: string) => {
  const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
};

export const openPhone = () => {
  window.location.href = PHONE_URL;
};

export const openTelegram = (message?: string) => {
  if (message) {
    window.open(
      `https://t.me/share/url?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    return;
  }
  window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer");
};

export const openSkype = (message?: string) => {
  const url = message
    ? `skype:${PHONE_E164}?chat&topic=${encodeURIComponent(message)}`
    : SKYPE_URL;
  window.location.href = url;
};

export const PLATFORMS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: WHATSAPP_URL,
  },
  {
    id: "telegram",
    label: "Telegram",
    href: TELEGRAM_URL,
  },
  {
    id: "zoom",
    label: "Zoom",
    href: "https://zoom.us/download",
  },
  {
    id: "google-meet",
    label: "Google Meet",
    href: "https://meet.google.com/",
  },
  {
    id: "skype",
    label: "Skype",
    href: SKYPE_URL,
  },
  {
    id: "phone",
    label: "Call",
    href: PHONE_URL,
  },
  {
    id: "email",
    label: "Email",
    href: EMAIL_URL,
  },
] as const;

export type EnrollmentData = {
  name: string;
  email: string;
  phone: string;
  age: string;
  course: string;
  experience: string;
  message: string;
};

export type ContactData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const courseLabels: Record<string, string> = {
  tajweed: "Tajweed (Quran Recitation)",
  tarjuma: "Tarjuma (Translation)",
  tafseer: "Tafseer (Explanation)",
  hifz: "Hifz Program (Memorization)",
  nazra: "Nazra Program",
  duas: "Short Surahs & Duas",
  "islamic-studies": "Islamic Studies",
  arabic: "Arabic Language",
};

const experienceLabels: Record<string, string> = {
  beginner: "Complete Beginner",
  basic: "Basic Level",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export const buildEnrollmentMessage = (data: EnrollmentData) => {
  const course = courseLabels[data.course] || data.course || "Not specified";
  const experience =
    experienceLabels[data.experience] || data.experience || "Not specified";

  return [
    `*New Enrollment — ${INSTITUTE_NAME_SHORT}*`,
    "",
    `*Name:* ${data.name}`,
    `*Email:* ${data.email}`,
    `*Phone:* ${data.phone}`,
    data.age ? `*Age:* ${data.age}` : null,
    `*Course:* ${course}`,
    `*Experience:* ${experience}`,
    data.message ? `*Message:* ${data.message}` : null,
    "",
    "Sent via website enrollment form.",
  ]
    .filter(Boolean)
    .join("\n");
};

export const buildContactEmailBody = (data: ContactData) =>
  [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    "",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");
