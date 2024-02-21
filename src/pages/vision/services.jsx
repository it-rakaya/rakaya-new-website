import Container from "@/components/Container";
import VisionLayout from "@/components/vision/VisionLayout";
import React, { useState } from "react";
import styles from "@/styles/vision.module.scss";
import { motion } from "framer-motion";

const transition = {
   type: "spring",
   stiffness: 120,
   // damping: 10,
};

const containerVariant = {
   visible: {
      backgroundColor: "#C9B171",
   },
};

const titleVariant = {
   visible: {
      y: "0%",
      transition: { type: "spring", damping: 20, stiffness: 120 },
   },
   hidden: {
      y: "-35%",
      transition: { type: "spring", damping: 20, stiffness: 120 },
   },
};

const descriptionVariant = {
   visible: {
      opacity: 0,
      // y: "100%",
      // overflow: "hidden",
      transition: transition,
   },
   hidden: {
      opacity: 1,
      // y: "-100%",
      overflow: "auto",
      transition: { delay: 0.2 },
   },
};
const Card = ({ title, children }) => {
   const width = window.innerWidth;
   //for small views only
   const [animateCard, setAnimateCard] = useState(false);
   return (
      <motion.div
         variants={containerVariant}
         initial="visible"
         whileHover="hidden"
         // whileInView={document.body.offsetWidth < 600 ? "hidden" : "visible"}
         // whileInView={"hidden"}
         animate={animateCard ? "hidden" : "visible"}
         onClick={()=>{
            if(width <= 992){
               setAnimateCard(!animateCard)
            }
         }}
         className={`${styles['card']} col-lg-3 rounded-4 position-relative overflow-hidden`}>
         <motion.div
            variants={titleVariant}
            className="d-flex justify-content-center align-items-center h-100 px-5 text-white position-absoulte">
            <h4 className="text-center">{title}</h4>
         </motion.div>
         <motion.div
            variants={descriptionVariant}
            className={`d-flex flex-column text-center h-75 text-white bottom-0 px-2 gap-0 position-absolute ${styles["card-scroll"]}`}>
            {children}
         </motion.div>
      </motion.div>
   );
};

const services = () => {
   return (
      <VisionLayout title="خدماتنا">
         <p>
            نؤمن بأن كل عمل لا يتم بإتقان من غير أسس أخلاقية مهنية نسترشد بها
            وترسّخ علاقتنا بعملائنا 
         </p>
         <Container className="col-12 d-flex flex-wrap justify-content-center justify-content-lg-start mx-0 gap-3">
            <div className="row gap-3 justify-content-center justify-content-lg-start my-3 my-lg-0">
               <Card title={"استشارات تنظيمية"}>
                  <p className="mb-1">
                     للحصول على نظرة شاملة وتحديد الخطط والإجراءات الضرورية
                     للتحسين ، يساعدك فريقنا على:
                  </p>
                  <p className="my-1">
                     - بناء استراتيجيات العمل وخطط لتنفيذ الاستراتيجية وتطويرها 
                  </p>
                  <p className="my-1">
                     - تحديد الأهداف الاستراتيجية والرؤية وتصميم المؤشرات
                     الاستراتيجية
                  </p>
                  <p className="my-1">
                     - تطوير خارطة الطريق التشغيلي للاستراتيجيات والمبادرات
                  </p>
                  <p className="mb-1">
                     للحصول على نظرة شاملة وتحديد الخطط والإجراءات الضرورية
                     للتحسين ، يساعدك فريقنا على:
                  </p>
                  <p className="my-1">
                     - بناء استراتيجيات العمل وخطط لتنفيذ الاستراتيجية وتطويرها 
                  </p>
                  <p className="my-1">
                     - تحديد الأهداف الاستراتيجية والرؤية وتصميم المؤشرات
                     الاستراتيجية
                  </p>
                  <p className="my-1">
                     - تطوير خارطة الطريق التشغيلي للاستراتيجيات والمبادرات
                  </p>
               </Card>
               <Card title={"استشارات تنظيمية"}>
                  <p className="mb-1">
                     للحصول على نظرة شاملة وتحديد الخطط والإجراءات الضرورية
                     للتحسين ، يساعدك فريقنا على:
                  </p>
                  <p className="my-1">
                     - بناء استراتيجيات العمل وخطط لتنفيذ الاستراتيجية وتطويرها 
                  </p>
                  <p className="my-1">
                     - تحديد الأهداف الاستراتيجية والرؤية وتصميم المؤشرات
                     الاستراتيجية
                  </p>
                  <p className="my-1">
                     - تطوير خارطة الطريق التشغيلي للاستراتيجيات والمبادرات
                  </p>
                  <p className="mb-1">
                     للحصول على نظرة شاملة وتحديد الخطط والإجراءات الضرورية
                     للتحسين ، يساعدك فريقنا على:
                  </p>
                  <p className="my-1">
                     - بناء استراتيجيات العمل وخطط لتنفيذ الاستراتيجية وتطويرها 
                  </p>
                  <p className="my-1">
                     - تحديد الأهداف الاستراتيجية والرؤية وتصميم المؤشرات
                     الاستراتيجية
                  </p>
                  <p className="my-1">
                     - تطوير خارطة الطريق التشغيلي للاستراتيجيات والمبادرات
                  </p>
               </Card>
               <Card title={"استشارات تنظيمية"}>
                  <p className="mb-1">
                     للحصول على نظرة شاملة وتحديد الخطط والإجراءات الضرورية
                     للتحسين ، يساعدك فريقنا على:
                  </p>
                  <p className="my-1">
                     - بناء استراتيجيات العمل وخطط لتنفيذ الاستراتيجية وتطويرها 
                  </p>
                  <p className="my-1">
                     - تحديد الأهداف الاستراتيجية والرؤية وتصميم المؤشرات
                     الاستراتيجية
                  </p>
                  <p className="my-1">
                     - تطوير خارطة الطريق التشغيلي للاستراتيجيات والمبادرات
                  </p>
                  <p className="mb-1">
                     للحصول على نظرة شاملة وتحديد الخطط والإجراءات الضرورية
                     للتحسين ، يساعدك فريقنا على:
                  </p>
                  <p className="my-1">
                     - بناء استراتيجيات العمل وخطط لتنفيذ الاستراتيجية وتطويرها 
                  </p>
                  <p className="my-1">
                     - تحديد الأهداف الاستراتيجية والرؤية وتصميم المؤشرات
                     الاستراتيجية
                  </p>
                  <p className="my-1">
                     - تطوير خارطة الطريق التشغيلي للاستراتيجيات والمبادرات
                  </p>
               </Card>
            {/* </div> */}
            {/* <div className="row gap-3 justify-content-center justify-content-lg-start"> */}
               <Card title={"استشارات تنظيمية"}>
                  <p className="mb-1">
                     للحصول على نظرة شاملة وتحديد الخطط والإجراءات الضرورية
                     للتحسين ، يساعدك فريقنا على:
                  </p>
                  <p className="my-1">
                     - بناء استراتيجيات العمل وخطط لتنفيذ الاستراتيجية وتطويرها 
                  </p>
                  <p className="my-1">
                     - تحديد الأهداف الاستراتيجية والرؤية وتصميم المؤشرات
                     الاستراتيجية
                  </p>
                  <p className="my-1">
                     - تطوير خارطة الطريق التشغيلي للاستراتيجيات والمبادرات
                  </p>
                  <p className="mb-1">
                     للحصول على نظرة شاملة وتحديد الخطط والإجراءات الضرورية
                     للتحسين ، يساعدك فريقنا على:
                  </p>
                  <p className="my-1">
                     - بناء استراتيجيات العمل وخطط لتنفيذ الاستراتيجية وتطويرها 
                  </p>
                  <p className="my-1">
                     - تحديد الأهداف الاستراتيجية والرؤية وتصميم المؤشرات
                     الاستراتيجية
                  </p>
                  <p className="my-1">
                     - تطوير خارطة الطريق التشغيلي للاستراتيجيات والمبادرات
                  </p>
               </Card>
               <Card title={"استشارات تنظيمية"}>
                  <p className="mb-1">
                     للحصول على نظرة شاملة وتحديد الخطط والإجراءات الضرورية
                     للتحسين ، يساعدك فريقنا على:
                  </p>
                  <p className="my-1">
                     - بناء استراتيجيات العمل وخطط لتنفيذ الاستراتيجية وتطويرها 
                  </p>
                  <p className="my-1">
                     - تحديد الأهداف الاستراتيجية والرؤية وتصميم المؤشرات
                     الاستراتيجية
                  </p>
                  <p className="my-1">
                     - تطوير خارطة الطريق التشغيلي للاستراتيجيات والمبادرات
                  </p>
                  <p className="mb-1">
                     للحصول على نظرة شاملة وتحديد الخطط والإجراءات الضرورية
                     للتحسين ، يساعدك فريقنا على:
                  </p>
                  <p className="my-1">
                     - بناء استراتيجيات العمل وخطط لتنفيذ الاستراتيجية وتطويرها 
                  </p>
                  <p className="my-1">
                     - تحديد الأهداف الاستراتيجية والرؤية وتصميم المؤشرات
                     الاستراتيجية
                  </p>
                  <p className="my-1">
                     - تطوير خارطة الطريق التشغيلي للاستراتيجيات والمبادرات
                  </p>
               </Card>
               <Card title={"استشارات تنظيمية"}>
                  <p className="mb-1">
                     للحصول على نظرة شاملة وتحديد الخطط والإجراءات الضرورية
                     للتحسين ، يساعدك فريقنا على:
                  </p>
                  <p className="my-1">
                     - بناء استراتيجيات العمل وخطط لتنفيذ الاستراتيجية وتطويرها 
                  </p>
                  <p className="my-1">
                     - تحديد الأهداف الاستراتيجية والرؤية وتصميم المؤشرات
                     الاستراتيجية
                  </p>
                  <p className="my-1">
                     - تطوير خارطة الطريق التشغيلي للاستراتيجيات والمبادرات
                  </p>
                  <p className="mb-1">
                     للحصول على نظرة شاملة وتحديد الخطط والإجراءات الضرورية
                     للتحسين ، يساعدك فريقنا على:
                  </p>
                  <p className="my-1">
                     - بناء استراتيجيات العمل وخطط لتنفيذ الاستراتيجية وتطويرها 
                  </p>
                  <p className="my-1">
                     - تحديد الأهداف الاستراتيجية والرؤية وتصميم المؤشرات
                     الاستراتيجية
                  </p>
                  <p className="my-1">
                     - تطوير خارطة الطريق التشغيلي للاستراتيجيات والمبادرات
                  </p>
               </Card>
            </div>
         </Container>
      </VisionLayout>
   );
};

export default services;
