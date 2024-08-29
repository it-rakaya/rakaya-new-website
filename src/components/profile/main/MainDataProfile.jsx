import React from "react";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaTools,
  FaLanguage,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "../../Accordion"
import TestIcons from "../../icons/TestIcons";

const sections = {
  بياناتي: {
    required: true,
    items: [
      { label: "الاسم كامل بالعربي", value: "عبد الرحمن القصبي ابراهيم" },
      { label: "الاسم كامل بالانجليزية", value: "Abdulrahman qassbi ebrahim" },
      { label: "رقم الجوال", value: "+966541532515" },
      { label: "الجنسية", value: "مصري" },
      { label: "دولة الاقامة", value: "مصر" },
      { label: "الجنس", value: "ذكر" },
    ],
  },
  التعليم: {
    required: false,
    items: [
      { label: "مستوى التعليم", value: "بكالرويوس" },
      { label: "التخصص", value: "هندسة اتصالات" },
      { label: "GPA", value: "3.23" },
    ],
  },
  الخبرات: {
    required: false,
    items: [
      { label: "الشركة", value: "بكالرويوس" },
      { label: "الوظيفه", value: "مهندس برمجيات" },
      { label: "البداية", value: "1/1/2023" },
      { label: "النهاية", value: "لازلت اعمل" },
    ],
  },
  الدورات: {
    required: false,
    items: [
      { label: "اسم الدورة", value: "اساسيات البرمجة" },
      { label: "اسم المنظمة", value: "منظمة 1" },
      { label: "تاريخ الدورة", value: "1/1/2023" },
    ],
  },
  المهارات: {
    required: true,
    items: [
      { value: "HTML", badge: true },
      { value: "CSS", badge: true },
      { value: "JS", badge: true },
    ],
  },
  اللغات: {
    required: true,
    items: [
      { value: "العربية", badge: true },
      { value: "الانجليزية", badge: true },
    ],
  },
};

const icons = {
  بياناتي: (
    <FaUser
      className="mx-2 text-gold "
      style={{ width: "22px", height: "22px" }}
    />
  ),
  التعليم: (
    <FaGraduationCap
      className="mx-2 text-gold "
      style={{ width: "22px", height: "22px" }}
    />
  ),
  الخبرات: (
    <FaBriefcase
      className="mx-2 text-gold "
      style={{ width: "22px", height: "22px" }}
    />
  ),
  الدورات: (
    <FaCertificate
      className="mx-2 text-gold "
      style={{ width: "22px", height: "22px" }}
    />
  ),
  المهارات: (
    <FaTools
      className="mx-2 text-gold "
      style={{ width: "22px", height: "22px" }}
    />
  ),
  اللغات: (
    <FaLanguage
      className="mx-2 text-gold "
      style={{ width: "22px", height: "22px" }}
    />
  ),
};

function MainDataProfile() {
  return (
    <div className="accordion border-0 " id="accordionExample">
      {Object.entries(sections).map(
        ([sectionTitle, sectionData], sectionIndex) => (
          <Accordion
            key={sectionIndex}
            title={sectionTitle}
            icon={icons[sectionTitle]}
            items={sectionData.items}
            isOpenInitially={sectionIndex === 0}
            required={sectionData.required}
          />
        )
      )}
        {/* <TestIcons/> */}
    </div>
  );
}

export default MainDataProfile;
