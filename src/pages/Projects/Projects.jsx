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

  return (
    <Projectss>
      <div className="title_container">
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
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
