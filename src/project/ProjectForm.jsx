import InputForm from "../components/layout/Form/Input/InputForm";
import SelectForm from "../components/layout/Form/Select/SelectForm";
import SubmitForm from "../components/layout/Form/Submit/SubmitForm";
import { Form } from "./ProjectFormStyled";

function ProjectForm({btnText}) {
  return (
    <Form>
      <InputForm
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />

      <InputForm
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <SelectForm name="category_id" text="Selecione a categoria" />
      <SubmitForm text={btnText} />
    </Form>
  );
}

export default ProjectForm;
