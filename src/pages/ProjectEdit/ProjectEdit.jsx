import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProjectEdit() {
  const { id } = useParams();

  const [project, setProject] = useState([]);

  useEffect(() => {
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
  }, [id]);

  return <p>{project.name}</p>;
}

export default ProjectEdit;
