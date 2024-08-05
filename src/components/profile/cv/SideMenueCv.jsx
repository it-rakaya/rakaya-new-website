import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skills from "./skills/Skills";
import Language from "./language/Language";
import Certificate from "./cirtficate/Certificate";
import Courses from "./courses/Courses";

const tabs = [
  { id: "v-pills-home", label: "المستوى التعليمي", component: <Education /> },
  {
    id: "v-pills-profile",
    label: "الخبرات التعليمية",
    component: <Experience />,
  },
  { id: "v-pills-messages", label: "المهارات", component: <Skills /> },
  { id: "v-pills-language", label: "اللغات", component: <Language /> },
  { id: "v-pills-certificate", label: "الشهادات", component: <Certificate /> },
  {
    id: "v-pills-courses",
    label: "الدورات التدريبية",
    component: <Courses />,
  },
  
];

function SideMeneCv() {
  const [activeTab, setActiveTab] = useState("v-pills-home");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const getButtonClass = (tabId) => {
    return activeTab === tabId
      ? "nav-link bg-primary text-end mb-2 rounded-2 text-white active"
      : "nav-link bg-white text-end mb-2 rounded-2 text-black";
  };

  return (
    <div className="d-flex flex-column mt-5">
      <div className="mx-3 mb-5">
        <h5 className=" text-gold">السيرة الذاتية</h5>
        <p>الانطباع الاول عنك وفرصتك لحصول على مقابلات وظيفية</p>
      </div>
      <div className="row w-100">
        <div
          className="nav flex-column nav-pills me-md-3 col-md-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={getButtonClass(tab.id)}
              id={`${tab.id}-tab`}
              data-bs-toggle="pill"
              data-bs-target={`#${tab.id}`}
              type="button"
              role="tab"
              aria-controls={tab.id}
              aria-selected={activeTab === tab.id}
              onClick={() => handleTabClick(tab.id)}
            >
              <div className="d-flex justify-content-between align-items-center py-1">
                <p className="m-0">{tab.label}</p>
                <IoIosArrowBack />
              </div>
            </button>
          ))}
        </div>
        <div
          className="tab-content col-md-7  bg-white mx-2 rounded-3  profile_content"
          id="v-pills-tabContent"
          // style={{padding:"30px 120px "}}
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${
                activeTab === tab.id ? "show active" : ""
              }`}
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
              tabIndex="0"
            >
              {tab.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideMeneCv;
