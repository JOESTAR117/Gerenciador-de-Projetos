import styled from "styled-components";

export const Form_control = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 1em;

label{
    margin-bottom: 0.6em;
    font-weight: bold;
}
input{
    padding:  0.7em;
    border-radius: 0;
    border: none;
    background-color:#e2e2e2 ;

    ::placeholder{
        color: #7b7b7b;
    }
}

`