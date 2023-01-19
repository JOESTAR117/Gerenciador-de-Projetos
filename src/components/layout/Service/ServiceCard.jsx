import { Card } from "../../../project/ProjectCard/ProjectCardStyled";

import {BsFillTrashFill} from 'react-icons/bs'



function ServiceCard({id, name, cost, description, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id,cost)
    }

    return(
        <Card>
            <h4>{name}</h4>
            <p>
                <span>Custo total:</span>
                R${cost}
            </p>
            <p>{description}</p>
            <div className="actions">
                <button onClick={remove}>
                <BsFillTrashFill />
                Excluir
                </button>
            </div>
        </Card>
    )
}

export default ServiceCard;