import { Link } from "react-router-dom";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

import { Card } from "./ProjectCardStyled";

function ProjectCard({ id, name, budget, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <Card>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <p className="category_text">
        <span className={category}></span> {category}
      </p>
      <div className="actions">
        <Link to={`/project/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </Card>
  );
}

export default ProjectCard;
