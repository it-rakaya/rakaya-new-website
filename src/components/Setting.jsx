import { useIsRTL } from "@/hooks/useIsRTL";
import i18n from "@/i18n";
import { setCookie } from "cookies-next";

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
  const handleLangItemClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <li
        class="nav-item text-center pointer"
        onClick={handleLang}
      >
        
        <p className={`nav-link active  link-offset-3 active-link fs-5 m-0`}  style={{ cursor: "pointer" }}>
          {!isRTL ? "عربي" : "English"}
        </p>
      </li>
    </div>
  );
}

export default Setting;
