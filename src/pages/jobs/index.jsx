import Button from "@/components/Button";
import Container from "@/components/Container";
import JobsLayout from "@/components/jobs/JobsLayout";
import Link from "next/link";
import React from "react";

const Jobs = () => {
  return (
    <>
      <JobsLayout>
        <div className="">
          <Container className="m-5 col-9">
            <h2>عن العمل في ركايا</h2>
            <div className="my-4">
              <p className="p-0 m-0" style={{ fontWeight: "500" }}>
                هل فكرت يومًا بالسفر حول العالم؟ ولكن تمنعك الوظيفة المكتبية؟
              </p>
              <p className="p-0 m-0" style={{ fontWeight: "500" }}>
                ركايا مهتمة بالإنتاج الصحفي: المرئي والمكتوب والمسموع. ويهمّنا
                في ركايا الإنتاجية، والتوازن بين الحياة الاجتماعية والعمل.
              </p>
            </div>
            <div className="my-4">
              <p className="p-0 m-0" style={{ fontWeight: "500" }}>
                ركايا تعدك بتوفير المزايا الوظيفية التي تمكنك من العمل من أي
                مكان وزمان.
              </p>
              <p className="p-0 m-0" style={{ fontWeight: "500" }}>
                لا نلزمك بالعمل من مكتب ركايا (في الرياض) أو في وقت معين، ونُقدم
                مزايا مُنافسة حتى نخلق بيئة عمل مُحفزة. يمكنك الاطّلاع على
                المزايا وتفاصيلها الكاملة في الدستور.
              </p>
            </div>
          </Container>
          <Container className="m-5 col-9">
            <h2>متطلبات العمل</h2>

            <div className="my-4">
              <p
                className="p-0 m-0"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                في ركايا لا نُفرّق بين جنسية أو جنس أو عُمُر.
              </p>
              <p
                className="p-0 m-0"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                ولا نشترط الشهادة، ولا الخبرة الطويلة، ولا وجودك داخل السعودية.
              </p>
              <p className="p-0 m-0" style={{ fontWeight: "500" }}>
                هذا لا يلغي أهميّتها، لكنّ أبرز موظفينا وأعمدة الشركة بدؤوا معنا
                وهم «لسه طازه» من الجامعة (أو قبل الجامعة).
              </p>
              <p className="p-0 m-0 my-4" style={{ fontWeight: "500" }}>
                يهمّنا أولاً فيمن نبحث عنه أن يتحرك من تلقاء نفسه. أن ينجز
                المهمّات ويبحث عن الجديد ويؤدي واجباته دون حاجة إلى المتابعة
                المستمرة. كن مسؤولاً، كن فضوليًا.
              </p>
              <p className="p-0 m-0 my-4" style={{ fontWeight: "500" }}>
                يهمّنا كثيرًا الاختلاف في الثقافات والخلفيات، وإن كان ذلك
                «روسمًا» تتغنى به الشركات في أرجاء العالم اليوم فإنّه أمرٌ مهم
                لنا في ركايا. حتى إنّنا نستطيع القول إنّه دافعٌ لمصلحة الشركة في
                الدرجة الأولى؛ فالتنوع والاختلاف بين أفراد ركايا يفتح لنا آفاق
                فهم القضايا والموضوعات التي نكتب عنها ونصنع عنها الأفلام على نحو
                لم نكن نراه من قبل. ويفتح هذا لنا نافذة جديدة لننظر إلى القضايا
                من زوايا لم نكن لنستطيع فهمها لولا اختلافنا. ويقلّل احتمالات
                الخطأ في طرحنا الموضوعات المجتمعية والثقافية
              </p>
              <p className="p-0 m-0 mt-4" style={{ fontWeight: "500" }}>
                نبحث عن أشخاص يشاركونا ذات الرؤية واللغة للعمل معنا في شركة تسعى
                لتغيير ثقافة الصحافة العربية.
              </p>
              <p className="p-0 m-0" style={{ fontWeight: "500" }}>
                إن كانت لك الرغبة في مرافقتنا في مسيرة إثراء المحتوى العربي
                ولديك الرغبة للعمل ضمن فريق ركايا، كرمًا تفضّل بتعبئة النموذج
                الآتي.
              </p>
            </div>
          </Container>
          <Container className="m-5 col-12 text-center">
            <Link href={"/jobs/new"}>
              <Button className="px-5 py-2">التقديم</Button>
            </Link>
          </Container>
        </div>
      </JobsLayout>
    </>
  );
};

export default Jobs;
