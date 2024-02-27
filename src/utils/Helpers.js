import i18n from "@/i18n";

export const isRTL = () => i18n.language === "ar";
export const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
