import React from "react";
import VisionLayout from "../../components/vision/VisionLayout";
import Container from "../../components/Container";

const Product = ({ title, description }) => (
   <Container>
      <div className="d-flex align-items-baseline mb-1 gap-3 text-gold">
         <i class="bi bi-grid-1x2 fs-4"></i>
         <h4>{title}</h4>
      </div>
      <p>{description}</p>
   </Container>
);

const Products = () => {
   return (
      <VisionLayout title="">
         <Container className="col-lg-8 col-md-10 me-0">
         <Product
            title="منصة رفادة لجودة التشغيل"
            description="منصة إلكترونية بنظام متكامل تهدف إلى التقييم  التفاعلي للخطط التشغيلية والمتابعة المحكمة للارتقاء بخدمات قطاع الإعاشة والتغذية والضيافة خلال موسمي الحج والعمرة.
         رفادة هي مجموعة حلول أُعدّت بإتقان"
         />
         <Product
            title="منصة إنتقاء وارتقاء"
            description="شرح مختصر للمنصة شرح مختصر للمنصة شرح مختصر للمنصة شرح مختصر للمنصة شرح مختصر للمنصة شرح مختصر للمنصة شرح مختصر للمنصة شرح مختصر للمنصة شرح مختصر للمنصة شرح مختصر للمنصة شرح مختصر للمنصة شرح مختصر للمنصة شرح مختصر للمنصة شرح مختصر للمنصة"
         />
         </Container>
      </VisionLayout>
   );
};

export default Products;
