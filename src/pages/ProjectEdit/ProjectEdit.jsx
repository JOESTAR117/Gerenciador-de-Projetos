import { parse, v4 as uuidv4 } from "uuid";

import { ProEdit } from "./ProjectEditStyled";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Loading from "../../components/layout/Loading/Loading";
import Container from "../../components/layout/Container/Container";
import ProjectForm from "../../project/ProjectForm/ProjectForm";
import Message from "../../components/layout/Message/Message";
import ServiceForm from "../../components/layout/Service/ServiceForm";

function ProjectEdit() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

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

  function editPost(project) {
    setMessage("");

    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto");
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(!showProjectForm);
        setMessage("Projeto atualizado!");
        setType("success");
      })
      .catch((err) => console.error(err));
  }

  function createService(project) {
    setMessage('')
    const lastService = project.services[project.services.length - 1];

    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    if (newCost > parseFloat(project.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor de serviço");
      setType("error");
      project.services.pop();
      return false;
    }
    project.cost = newCost;

    fetch(`http://localhost:5000/projects/${project.id}`,{
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify(project)
    }).then(resp => resp.json())
    .then((data) =>{
        console.log(data);
    })
    .catch(err => console.error(err.message))
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  return (
    <>
      {project.name ? (
        <ProEdit>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}

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
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className="service_form_container">
              <h2>Adicione um serviço:</h2>
              <button className="btn" onClick={toggleServiceForm}>
                {!showServiceForm ? "Adicionar serviço" : "Fechar"}
              </button>
              <div className="project_info">
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText="Adicionar Serviço"
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass="start">
              <p>item de Serviços</p>
            </Container>
          </Container>
        </ProEdit>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ProjectEdit;
