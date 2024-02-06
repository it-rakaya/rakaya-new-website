import Container from "@/components/Container";
import SelectItem from "@/components/SelectItem";
import Field from "@/components/contact-us/Field";
import React from "react";
import Select from "react-select";

const selectOptions = [
   { value: "1", label: "Hello World" },
   { value: "2", label: "Hello Solar System" },
   { value: "3", label: "Hello Universe" },
];
const index = () => {
   return (
      <Container className="col-lg-5">
         <h1 className="my-3">Contact us</h1>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            tempora, aperiam nesciunt quos, incidunt iste fugit corporis aliquid
            explicabo error iure. Voluptas nostrum quo qui possimus
            necessitatibus, tenetur voluptatibus harum maxime cum sequi rem
            ipsum dignissimos debitis veniam est soluta esse temporibus quasi,
            officia unde eveniet provident repellat impedit. Fuga incidunt
            soluta eveniet commodi saepe unde, ex dicta obcaecati temporibus
            nostrum officiis. Reprehenderit commodi ullam, tempora natus soluta
            quaerat! Inventore magnam aliquam placeat incidunt ex. Ad impedit
            quibusdam perferendis exercitationem suscipit necessitatibus, veniam
            modi quo ratione, blanditiis voluptates, fugiat maiores excepturi?
            Aut corporis error, praesentium magnam autem quia quos at.
         </p>
         <Field
            title="Hello World"
            description="This is an example field only"
            badge="BADGE">
            <input type="text" />
         </Field>

         <Field
            title="Hello World"
            description="This is an example field only"
            badge="BADGE">
            <Select
               options={selectOptions}
               // menuIsOpen
               styles={{
                  control: base => ({
                     ...base,
                     border: '1px solid #ced4da',
                     boxShadow: '0 !important',
                     '&:hover': {}
                  }),
                  dropdownIndicator: (base, state) => ({
                     ...base,
                     transition: 'all .2s ease',
                     transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null
                   }),
               }}
               components={{
                  Option: ({ data, selectOption, theme, isSelected }) => {
                     
                     return (
                        <SelectItem data={data} selectOption={selectOption} isSelected={isSelected}/>
                     );
                  },
                  MenuList: ({ children }) => (
                     <div className="m-0 p-0">{children}</div>
                  ),
               }}
            />
         </Field>
      </Container>
   );
};

export default index;
