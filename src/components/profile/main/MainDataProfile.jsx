import React from "react";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaTools,
  FaLanguage,
} from "react-icons/fa";

const sections = {
  بياناتي: [
    { label: "الاسم كامل بالعربي", value: "عبد الرحمن القصبي ابراهيم" },
    { label: "الاسم كامل بالانجليزية", value: "Abdulrahman qassbi ebrahim" },
    { label: "رقم الهاتف", value: "+966541532515" },
    { label: "الجنسية", value: "مصري" },
    { label: "دولة الاقامة", value: "مصر" },
    { label: "الجنس", value: "ذكر" },
  ],
  التعليم: [
    { label: "مستوى التعليم", value: "بكالرويوس" },
    { label: "التخصص", value: "هندسة اتصالات" },
    { label: "GPA", value: "3.23" },
  ],
  الخبرات: [
    { label: "الشركة", value: "بكالرويوس" },
    { label: "الوظيفه", value: "مهندس برمجيات" },
    { label: "البداية", value: "1/1/2023" },
    { label: "النهاية", value: "لازلت اعمل" },
  ],
  الدورات: [
    { label: "اسم الدورة", value: "اساسيات البرمجة" },
    { label: "اسم المنظمة", value: "منظمة 1" },
    { label: "تاريخ الدورة", value: "1/1/2023" },
  ],
  المهارات: [{ value: "HTML" }, { value: "CSS" }, { value: "JS" }],
  اللغات: [{ value: "العربية" }, { value: "الانجليزية" }],
};

const icons = {
  بياناتي: (
    <FaUser
      className="mx-2 text-gold"
      style={{ width: "24px", height: "24px" }}
    />
  ),
  التعليم: (
    <FaGraduationCap
      className="mx-2 text-gold"
      style={{ width: "24px", height: "24px" }}
    />
  ),
  الخبرات: (
    <FaBriefcase
      className="mx-2 text-gold"
      style={{ width: "24px", height: "24px" }}
    />
  ),
  الدورات: (
    <FaCertificate
      className="mx-2 text-gold"
      style={{ width: "24px", height: "24px" }}
    />
  ),
  المهارات: (
    <FaTools
      className="mx-2 text-gold"
      style={{ width: "24px", height: "24px" }}
    />
  ),
  اللغات: (
    <FaLanguage
      className="mx-2 text-gold"
      style={{ width: "24px", height: "24px" }}
    />
  ),
};

function MainDataProfile() {
  return (
    <div
      className="row justify-content-between gap-3 mainScroll"
      style={{ height: "calc(100vh - 100px)", overflow: "scroll" }}
    >
      {Object.entries(sections).map(([sectionTitle, items], sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          <div className="col-12 mb-3 p-0">
            <div className="border-bottom w-50 d-flex align-items-center pb-1">
              {icons[sectionTitle]}
              <h4 className="text-gold ">{sectionTitle}</h4>
            </div>
          </div>
          {items.map((item, index) => (
            <div key={index} className="col-12 col-md-5 border-bottom">
              <h6 className="text-gold">{item.label}</h6>
              <p className="bolder">{item.value}</p>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default MainDataProfile;
