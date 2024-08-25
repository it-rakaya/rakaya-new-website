import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import OverView from "./OverView";
import Apply from "./Apply";

const tabs = [
  { id: "v-pills-home", label: "النظرة العامة", component: <OverView /> },
  {
    id: "v-pills-profile",
    label: "التقديم",
    component: <Apply/>,
  },
];

function SideMenuJob() {
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
        <div
          className="mx-3 mb-5   rounded-5 p-2 px-4 col-md-10"
          // style={{
          // //   border: "1px solid #C9B171",
          // // }}
        >
          <div className="d-flex align-items-center gap-2 my-3 ">
            <h5 className="m-0">مطور واجهات امامية</h5>
            <p className="badge bg-primary m-0">عن بعد</p>
            <p className="badge bg-primary m-0">دوام كامل </p>
          </div>
          <h5 className=" text-gold">وصف الوظيفة</h5>
          <p>
            في ركايا، نتعهد بتقديم مجموعة من المزايا الوظيفية التي تتيح لك
            الحرية في اختيار مكان وزمان عملك. لا نفرض عليك الحاجة للعمل من مقرنا
            الرئيسي في مكة المكرمة أو التقيد بجدول زمني صارم، بل نركز على تقديم
            مزايا تنافسية لضمان توفير بيئة عمل محفزة ومرنة. للمزيد من المعلومات
            حول هذه المزايا وكيفية الاستفادة منها، يرجى الرجوع إلى
          </p>
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
          className="tab-content col-md-7  bg-white mx-2 rounded-3  mb-4"
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

export default SideMenuJob;
