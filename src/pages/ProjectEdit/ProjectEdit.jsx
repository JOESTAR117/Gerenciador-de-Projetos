import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../components/layout/Loading/Loading";
import { ProEdit } from "./ProjectEditStyled";
import Container from "../../components/layout/Container/Container";

function ProjectEdit() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        })
        .catch((error) => console.error(error.message));
    }, 500);
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <ProEdit>
          <Container customClass="column">
            <div className="details_container">
              <h1>Projeto: {project.name}</h1>
              <button className="btn" onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className="project_info">
                  <p>
                    <span>Categoria:</span>
                    {project.category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento:</span>
                    {project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado:</span>
                    R${project.cost}
                  </p>
                </div>
              ) : (
                <div className="project_info">
                  <p>form</p>
                </div>
              )}
            </div>
          </Container>
        </ProEdit>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ProjectEdit;
