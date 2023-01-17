import { useEffect, useState } from "react";

import InputForm from "../components/layout/Form/Input/InputForm";
import SelectForm from "../components/layout/Form/Select/SelectForm";
import SubmitForm from "../components/layout/Form/Submit/SubmitForm";
import { Form } from "./ProjectFormStyled";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

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
      <SelectForm
        name="category_id"
        text="Selecione a categoria"
        options={categories}
      />
      <SubmitForm text={btnText} />
    </Form>
  );
}

export default ProjectForm;
