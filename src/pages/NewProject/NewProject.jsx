import ProjectForm from "../../project/ProjectForm";
import { Div } from "./NewProjectStyled";

function NewProject(){
    return(
        <Div>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText='Criar Projeto'/>
        </Div>
    )
}

export default NewProject;