import { useNavigate } from "react-router-dom";

import ProjectForm from "../../project/ProjectForm/ProjectForm";

import { Div } from "./NewProjectStyled";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("https://my-json-server.typicode.com/JOESTAR117/BackendFalse/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate("/projects", {
          state: { message: "Projeto criado com sucesso!" },
        });
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <Div>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </Div>
  );
}

export default NewProject;
