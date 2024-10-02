import { Formik } from "formik";
import React from "react";
import { FaTools } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import DynamicIcons from "../../icons/DynamicIcons";

function OverView({ DetailsJob }) {
  const sortOverView = DetailsJob?.DetailsJob?.vacancy?.paragraphs?.sort(
    (a, b) => a?.arrangement - b?.arrangement
  );
  return (
    <div>
      {/* <AvailableJobLayout> */}
      <div className="row  m-auto py-5">
        <div className="accordion border-0" id="accordionExample">
          {sortOverView?.map((item, index) => (
            <div
              className="accordion-item border-0 border-bottom py-2"
              key={index}
            >
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button px-1 ${
                    index !== 0 ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${index}`}
                >
                  <DynamicIcons icon={item?.icon} />
                  <span className="mx-2 fw-bolder" style={{ fontSize: 18 }}>
                    {item?.title_ar}
                  </span>
                </button>
              </h2>
              <Formik initialValues={{}} onSubmit={() => {}}>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body row justify-content-between px-5">
                    <div className="col-md-12" key={index}>
                      {item?.content_ar?.split("\n").map((line, idx) => (
                        <p className="my-1 text-justify px-2" key={idx}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Formik>
            </div>
          ))}
        </div>
      </div>
      {/* </AvailableJobLayout> */}
    </div>
  );
}

export default OverView;
