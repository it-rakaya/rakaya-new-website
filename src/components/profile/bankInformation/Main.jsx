import { Form, Formik } from 'formik'
import React from 'react'
import BaseInputField from '../../form/BaseInputField'
import Button from '../../Button'
import SelectBank from '../../form/SelectBank'

function Main() {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
    <Form>
      <div>
      <SelectBank label={" نوع البنك"} required />
      <BaseInputField
        name={"account_name"}
        label={"اسم صاحب الحساب حسب البطاقة البنكية"}
        placeholder={"ادخل الاسم"}
        required
      />
      <BaseInputField
        name={"owner_national_id"}
        label={"رقم الهوية / الاقامة لصاحب الحساب المصرفي"}
        placeholder={"xxxxxxxxxx"}
        type={"num"}
        maxDigits={"10"}
        required
      />
      <BaseInputField
        name="iban"
        label={"رقم الايبان"}
        placeholder={"عبد الرحمن الشيخ"}
        type={"IBAN"}
        required
      />
      </div>
      <div className="mt-3 d-flex justify-content-between">
        <Button>حفظ</Button>
      </div>
    </Form>
  </Formik>
  )
}

export default Main