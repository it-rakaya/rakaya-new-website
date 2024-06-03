import { Form, Formik } from "formik";
import React, { useState } from "react";
import Section from "../Section";
import { ConnectedFocusError } from "focus-formik-error";
import PersonalInformationMainData from "./PersonalInformationMainData";
import BankInformationMainData from "./BankInformationMainData";
import AttachmentsMainData from "./AttachmentsMainData";
import Button from "@/components/Button";
import { validationSchemaCompleteApplication } from "../initialValue&Validation";

function Main({ dataCandidate, loadingData, updateData }) {
  const [check, setCheck] = useState(false);

  const initialValuesCompleteApplication = {
    name: dataCandidate?.name || "",
    email: dataCandidate?.email || "",
    phone: dataCandidate?.phone || "",
    resident_status: dataCandidate?.resident_status || "",
    national_id: dataCandidate?.national_id || "",
    ramz: dataCandidate?.code || "",
    nationality: dataCandidate?.nationality || "",
    birthdate: dataCandidate?.birthdate || "",
    address: dataCandidate?.address || "",
    bank_id: dataCandidate?.bank_information?.bank_id || "",
    account_name: dataCandidate?.bank_information?.account_name || "",
    iban: dataCandidate?.bank_information?.iban || "",
    candidate_portfolio: dataCandidate?.iban || "",
    scrub_size: dataCandidate?.scrub_size || "",
    owner_national_id: dataCandidate?.bank_information?.owner_national_id || "",
    candidate_portfolio: dataCandidate?.attachment_candidate_profile_personal,
    candidate_iban: dataCandidate?.attachment_candidate_iban,
    candidate_national_id: dataCandidate?.attachment_candidate_national_id,
  };
  const handelSubmit = (values) => {
    const {
      candidate_iban,
      candidate_portfolio,
      candidate_national_id,
      ...rest
    } = values;

    let submissionValues = {
      ...rest,
      ...(candidate_portfolio?.type
        ? { "attachments[33]": candidate_portfolio }
        : {}),
      ...(candidate_national_id?.type
        ? { "attachments[46]": candidate_national_id }
        : {}),

      ...(candidate_iban?.type ? { "attachments[45]": candidate_iban } : {}),
    };
    updateData(submissionValues);

    delete values.ramz;
  };
  return (
    <div>
      <Formik
        initialValues={initialValuesCompleteApplication}
        validationSchema={validationSchemaCompleteApplication}
        onSubmit={(values) => handelSubmit(values)}
      >
        <Form>
          <ConnectedFocusError />
          <Section
            title={"المعلومات الشخصية"}
            subtitle={
              " يرجى التأكد  من المعلومات الشخصية  حسب الوثائق الحكومية"
            }
          >
            <PersonalInformationMainData />
          </Section>
          <Section
            title={"معلومات الحساب البنكي"}
            subtitle={"يفضل أن يكون بيانات الحساب البنكي  لنفس الشخص المتقدم "}
          >
            <BankInformationMainData />
          </Section>
          <Section title={"مرفقات أخرى"}>
            <AttachmentsMainData setCheck={setCheck} check={check} />
            <div className="my-4">
              <Button
                color="secondary"
                type="submit"
                isLoading={loadingData}
                disabled={!check}
              >
                اكمال البيانات
              </Button>
            </div>
          </Section>
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
