import { useIsRTL } from "@/hooks/useIsRTL";
import i18n from "@/i18n";
import { setCookie } from "cookies-next";

/**
 * @param {{text:string}}
 */
function Setting({ text }) {
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
    <li
      class="nav-item text-center pointer"
      style={{ cursor: "pointer", listStyle: "none" }}
      onClick={handleLang}
    >
        <p
          className={`nav-link active  link-offset-3 active-link fs-5 m-0 d-flex d-lg-none bg-daner`}
          style={{ cursor: "pointer" }}
        >
          {!isRTL ? "عربي" : "English"}
        </p>
      
        <i class="bi bi-globe d-none d-lg-flex"></i>
    </li>
  );
}

export default Setting;
