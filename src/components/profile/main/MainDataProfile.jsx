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
import Accordion from "../../Accordion";
import useFetch from "../../../hooks/useFetch";

const icons = {
  بياناتي: (
    <FaUser
      className="mx-2 text-gold"
      style={{ width: "22px", height: "22px" }}
    />
  ),
  التعليم: (
    <FaGraduationCap
      className="mx-2 text-gold"
      style={{ width: "22px", height: "22px" }}
    />
  ),
  الخبرات: (
    <FaBriefcase
      className="mx-2 text-gold"
      style={{ width: "22px", height: "22px" }}
    />
  ),
  الدورات: (
    <FaCertificate
      className="mx-2 text-gold"
      style={{ width: "22px", height: "22px" }}
    />
  ),
  المهارات: (
    <FaTools
      className="mx-2 text-gold"
      style={{ width: "22px", height: "22px" }}
    />
  ),
  اللغات: (
    <FaLanguage
      className="mx-2 text-gold"
      style={{ width: "22px", height: "22px" }}
    />
  ),
};

const getLatestItem = (data, dateField = "start_date") => {
  return data?.reduce((latest, current) => {
    const latestDate = new Date(latest?.[dateField] || "1900-01-01");
    const currentDate = new Date(current?.[dateField]);
    return currentDate > latestDate ? current : latest;
  }, {});
};

function MainDataProfile({ mainProfile, isLoading }) {
  console.log("🚀 ~ MainDataProfile ~ mainProfile:", mainProfile)
  const { data: mainEducation, isLoading: loadingEducation } = useFetch({
    endpoint: "candidate-education",
    queryKey: ["candidate-education"],
  });
  const { data: mainExperiences, isLoading: loadingExperience } = useFetch({
    endpoint: "candidate-experiences",
    queryKey: ["candidate-experiences"],
  });
  const { data: mainCourses, isLoading: loadingCourses } = useFetch({
    endpoint: "candidate-courses",
    queryKey: ["candidate-courses"],
  });
  const { data: mainSkills, isLoading: loadingSkills } = useFetch({
    endpoint: "candidate-skills",
    queryKey: ["candidate-skills"],
  });
  const { data: mainLanguage, isLoading: loadingLanguage } = useFetch({
    endpoint: "candidate-languages",
    queryKey: ["candidate-languages"],
  });

  const profileData = mainProfile?.data?.candidate;
  const educationData = mainEducation?.data?.education;
  const experiencesData = mainExperiences?.data?.experiences;
  const coursesData = mainCourses?.data?.courses;
  const skillsData = mainSkills?.data?.skills;
  const languageData = mainLanguage?.data?.languages;

  // الحصول على أحدث تعليم وأحدث خبرة
  const latestEducationData = getLatestItem(educationData);
  const latestExperienceData = getLatestItem(experiencesData);

  const sections = {
    بياناتي: {
      required: false,
      isLoading,
      items: [
        {
          label: "الاسم كامل بالعربي",
          value: profileData?.full_name_ar || "_",
        },
        {
          label: "الاسم كامل بالانجليزية",
          value: profileData?.full_name_en || "_",
        },
        { label: "رقم الجوال", value: profileData?.phone || "_" },
        { label: "الجنسية", value: profileData?.nationality || "_" },
        {
          label: "دولة الاقامة",
          value: profileData?.country_of_residence || "_",
        },
        { label: "الجنس", value: profileData?.gender || "_" },
      ],
    },
    التعليم: {
      required: !educationData?.length,
      isLoading: loadingEducation,
      items: educationData?.length
        ? [
            {
              label: "مستوى التعليم",
              value: latestEducationData?.education_level || "_",
            },
            { label: "التخصص", value: latestEducationData?.major || "_" },
            { label: "الجامعة", value: latestEducationData?.university || "_" },
            {
              label: "GPA",
              value: `${latestEducationData?.gpa || "_"} من ${
                latestEducationData?.gpa_from || "_"
              }`,
            },
          ]
        : [
            {
              notFound: "لم يتم اضافة مستوى تعليمي الى الان",
              value: "NotFoundData",
            },
          ],
    },
    الخبرات: {
      required: !experiencesData?.length,
      isLoading: loadingExperience,
      items: experiencesData?.length
        ? [
            { label: "الشركة", value: latestExperienceData?.employer || "_" },
            { label: "الوظيفه", value: latestExperienceData?.position || "_" },
            {
              label: "البداية",
              value: latestExperienceData?.start_date || "_",
            },
            {
              label: "النهاية",
              value: latestExperienceData?.still_working
                ? "لازلت اعمل"
                : latestExperienceData?.end_date || "_",
            },
          ]
        : [{ notFound: "لم يتم اضافة خبرات الى الان", value: "NotFoundData" }],
    },
    الدورات: {
      required: !coursesData?.length,
      isLoading: loadingCourses,
      items: coursesData?.length
        ? coursesData.map((course, index) => ({
            label: "اسم الدورة",
            value: course?.course_name || `دورة ${index + 1}`,
          }))
        : [{ notFound: "لم يتم اضافة دورات الى الان", value: "NotFoundData" }],
    },
    المهارات: {
      required: !skillsData?.length,
      isLoading: loadingSkills,
      items: skillsData?.length
        ? skillsData.map((item) => ({ value: item?.skill, badge: true }))
        : [{ notFound: "لم يتم اضافة مهارات الى الان", value: "NotFoundData" }],
    },
    اللغات: {
      required: !languageData?.length,
      isLoading: loadingLanguage,
      items: languageData?.length
        ? languageData.map((item) => ({ value: item?.language, badge: true }))
        : [{ notFound: "لم يتم اضافة لغات الى الان", value: "NotFoundData" }],
    },
  };

  return (
    <div className="accordion border-0" id="accordionExample">
      {Object.entries(sections).map(
        ([sectionTitle, sectionData], sectionIndex) => (
          <Accordion
            key={sectionIndex}
            title={sectionTitle}
            icon={icons[sectionTitle]}
            items={sectionData.items}
            isOpenInitially={sectionIndex === 0}
            required={sectionData.required}
            isLoading={sectionData.isLoading}
          />
        )
      )}
    </div>
  );
}

export default MainDataProfile;
