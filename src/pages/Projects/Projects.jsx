import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Cont } from "../../components/layout/Container/ContainerStyled";
import LinkButton from "../../components/layout/LinkButton/LinkButton";
import Loading from "../../components/layout/Loading/Loading";

import Message from "../../components/layout/Message/Message";
import ProjectCard from "../../project/ProjectCard/ProjectCard";

import { Projectss } from "./ProjectsStyled";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setProjects(data);
          setRemoveLoading(true);
        })

        .catch((err) => console.log(err));
    }, 1000);
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json)
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projeto removido com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <Projectss>
      <div className="title_container">
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}

      {projectMessage && <Message type="success" msg={projectMessage} />}

      <Cont>
        <div className="start">
          {projects.length > 0 &&
            projects.map((project) => (
              <ProjectCard
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category.name}
                key={project.id}
                handleRemove={removeProject}
              />
            ))}
          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados!</p>
          )}
        </div>
      </Cont>
    </Projectss>
  );
}

export default Projects;
