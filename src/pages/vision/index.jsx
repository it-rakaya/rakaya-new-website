import Container from "@/components/Container";
import ImgContainer from "@/components/ImgContainer";
import Header from "@/components/jobs/Header";
import Team from "@/components/vision/Team";
import VisionLayout from "@/components/vision/VisionLayout";
import { AnimatePresence } from "framer-motion";

const index = () => {
  const TeamData = [
    { name: "المستشار نبيل عابد", position: "رئيس مجلس الإدارة" },
    { name: "م. حاتم باناصر", position: "الرئيس التنفيذي" },
    { name: "أ. لميس الثقفي", position: "مستشارة تطوير أعمال" },
    { name: "أ. أحمد الغريب", position: "مدير المكتب التنفيذي" },
    { name: "م. عمر خان", position: "مدير إدارة تقنية المعلومات" },
    {
      name: "أ. مريم العمودي",
      position: "مديرة البحث والتطوير بصحة وسلامة الغذاء",
    },
    { name: "إبتهال دحلان", position: "مساند إداري" },
    { name: "الاء دحلان", position: "مساند إداري" },
    { name: "حسين الغشيري", position: "مساند إداري" },
    { name: "م. غيداء مغربي", position: "مهندسة برمجيات" },
    { name: "م. أسامة عبدالغني", position: "مهندس برمجيات" },
    { name: "ربى بوقس", position: "مصمم واجهات وتجربة المستخدم" },
    { name: "شوق خياط", position: "محاسبة مالية" },
    { name: "لمى بوقس", position: "مهندسة برمجيات" },
    { name: "غدير العريني", position: "أخصائي قانوني" },
    { name: "محمد الأحمر", position: "مهندس برمجيات" },
    { name: "عبدالرحمن الشيخ", position: "مهندس برمجيات" },
    { name: "دانة درار", position: "مشرفة قسم إسعاد العملاء" },
    { name: "تسنيم فطاني", position: "مشرفة قسم التسويق" },
    { name: "إنصاف السبحي", position: "أخصائية تقنية معلومات" },
    { name: "ريم العتمي", position: "مهندسة برمجيات" },
    { name: "رحيمة جعفر", position: "مساند إداري" },
    { name: "جواد الغريبي", position: "مهندس برمجيات" },
    { name: "سعيد المطري", position: "مصمم جرافيكي" },
    { name: "نادر حسن", position: "مستشار إداري واقتصادي" },
    { name: "بشرى المطري", position: "أخصائي جودة" },
    { name: "علوي حلواني", position: "مراقب جودة" },
    { name: "رياض برناوي", position: "مراقب جودة" },
    { name: "بدر الوذيناني", position: "مراقب جودة" },
    { name: "أحمد خياط", position: "مراقب جودة" },
    { name: "عبدالله باجابر", position: "مهندس برمجيات" },
    { name: "مؤيد الصبحي", position: "مهندس برمجيات" },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        <Header text={"ركايا البديعة"} />
        <VisionLayout title={"عن ركايا البديعة"}>
          <Container className="me-0 col-lg-10">
            <div className="row">
              <div className="col-lg-8">

                <p>
                  تواجه كل شركة في طريقها لتحقيق أهدافها ونموها في السوق تحديّات
                  كبيرة ، قد تكون إدارية من حيث تنظيمها وهيكلتها وإدارة المهام أو
                  تسويقية برواجها أو عدم وضوح رؤيتها في مرحلتها القادمة  ، لذلك وجدت
                  ركايا..
                  <br />
                  <br />
                  حتّى نكون نقاط للحروف وأسطر للصفحة البيضاء ومفاتيح لأي قُفل
                  بفريقنا المميز و مستشارينّا نقوم بدراسة مكمن العقدة لحلّها بوضع
                  خطط استراتيجية تلائم الشركة وتطوّر من أوضاعها
                </p>
              </div>
              <Container className="col-lg-4">
                <ImgContainer className="rounded">
                  <img
                    className="img-fluid rounded"
                    src="/studio/companies/rakaya.png"
                    alt=""
                    srcset=""
                  />
                </ImgContainer>
              </Container>

            </div>
            <hr />
            <div className="row">
              <div className="col-lg-8">

                <p>
                  ركايا البديعة هي أرض خصبة للأفكار الإبداعية والحلول اللامتناهية
                  وأساليب العمل الإحترافية وقوّتنا أننا نرى بأن الشركة ليست عماد
                  إداري فقط بل التقنية عامل مهم جدًا وأتمتة الأعمال جزء لاينفك
                  عنها
                </p>

                <p>
                  إتقان .. جوهرتنا التقنية تــكمن في أن مهندسي البرمجيات لدينا ليسوا
                  مجرد مبرمجين بل هم خلّاقو الإبداع ، يتمتعون بملكة عالية في
                  اهتمامهم لأدق التفاصيل ، وامتلاكهم لرؤية شاملة وقدرة استثنائية على
                  تحويل الأفكار إلى حلول تقنية مبتكرة وفعّالة
                </p>
              </div>
              <Container className="col-lg-4">
                <ImgContainer className="rounded">
                  <img
                    className="img-fluid rounded"
                    src="/studio/companies/etqan.png"
                    alt=""
                    srcset=""
                  />
                </ImgContainer>
              </Container>

            </div>
            <hr />
            <div className="row">
              <div className="col-lg-8">

                <p>
                  ولأن التميّز في مجال مزدهر مثل الاستشارات أمر مهم ولاهتمامنا
                  بالاستدامة والنمو الغذائي السليم ، نعتز في ركايا البديعة بوجود
                  القطاع المختص بتقديم الاستشارات الغذائية مع نخبة من الاستشاريين
                  المرخصين من الهيئة العامة للغذاء والدواء
                </p>
                <p>
                  جودة .. في جودة التشغيل الغذائي نتفرد بمستشارين غذائيين واختصاصيين
                  وفريق عمل متمرّس بخبرات تتجاوز 20 سنة ، نعكس التزامنا بتقديم أعلى
                  مستويات الخدمة والدعم لعملائنا مما يساهم في رفع جودة ووعي المنشآت
                  والقطاعات الغذائية
                </p>
              </div>
              <Container className="col-lg-4">
                <ImgContainer className="rounded">
                  <img
                    className="img-fluid rounded"
                    src="/studio/companies/etqan.png"
                    alt=""
                    srcset=""
                  />
                </ImgContainer>
              </Container>

            </div>
            <hr />

            <p>
              ركايا بقطاعاتها وأفرادها معك .. من البداية حتى النهاية داعمين و
              ممكنين
            </p>
            <div className="col-12 mt-5 mb-2">
              <h2>أعضاء ركايا</h2>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
              {TeamData?.map((item, index) => (
                <div className=" " key={index}>
                  <Team name={item?.name} position={item?.position} />
                </div>
              ))}
            </div>
          </Container>
        </VisionLayout>
      </AnimatePresence>
    </>
  );
};

export default index;
