import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Cont } from "../../components/layout/Container/ContainerStyled";
import LinkButton from "../../components/layout/LinkButton/LinkButton";

import Message from "../../components/layout/Message/Message";
import ProjectCard from "../../project/ProjectCard/ProjectCard";

import { Projectss } from "./ProjectsStyled";

function Projects() {
  const [projects, setProjects] = useState([]);

  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
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
      })

      .catch((err) => console.log(err));
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
            projects.map((project) => <ProjectCard 
            id={project.id}
            name={project.name}
            budget={project.budget}
            category={project.category.name}
            key={project.id}
            
            />)}
        </div>
      </Cont>
    </Projectss>
  );
}

export default Projects;
