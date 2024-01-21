import React from "react";
import i18n from "@/i18n";
import { setCookie } from "cookies-next";
import { useIsRTL } from "@/hooks/useIsRTL";

function Setting() {
  const isRTL = useIsRTL();
  const handleLang = async () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    const newDir = newLanguage == "ar" ? "rtl" : "ltr";
    i18n.changeLanguage(newLanguage);
    document.documentElement.dir = newDir;
    document.documentElement.lang = newLanguage;
    setCookie("i18next", newLanguage, { path: "/" });
  };
  return (
    <div>
      <button onClick={handleLang}>{!isRTL ? "عربي" : "English"}</button>
    </div>
  );
}

export default Setting;
