import { useState } from "react";
import { Form } from "../../../project/ProjectForm/ProjectFormStyled";
import InputForm from "../Form/Input/InputForm";
import SubmitForm from "../Form/Submit/SubmitForm";

function ServiceForm({handleSubmit, btnText, projectData}){

    const [service, setService] = useState({})

    const submit = (e) => {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({...service, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={submit} className ={Form}>
            <InputForm 
                type='text'
                text='Nome do serviço'
                name = 'name'
                placeholder='insira o nome do serviço'
                handleOnChange={handleChange}
            />
            <InputForm 
                type='number'
                text='Custo do serviço'
                name = 'cost'
                placeholder='insira o valor total'
                handleOnChange={handleChange}
            />
            <InputForm 
                type='text'
                text='Descrição do serviço'
                name = 'description'
                placeholder='Descreva o serviço'
                handleOnChange={handleChange}
            />
            <SubmitForm text={btnText} />
        </form>
    )
}
export default ServiceForm;