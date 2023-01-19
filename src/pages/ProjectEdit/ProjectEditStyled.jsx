import styled from "styled-components";

export const ProEdit = styled.div`
padding: 2em;
width: 100%;


h1, h2, p{
    margin-bottom: 0.5em;
}
h1{
    background-color: #000;
    color: #29abe1;
    padding: .4em ;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
}
span{
    font-weight: bold;
}
.details_container,.service_form_container{
    border-bottom: 1px solid #7a7a7a;
    margin-bottom: 1.2em;
    padding-bottom: 1.2em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.btn{
    background-color: #000000;
    color: #ffffff;
    padding: 0.5em 1em;
    text-decoration: none;
    transition: all 0.4s;
    border-radius: 20px;
    cursor: pointer;
    max-height: 40px;
    border: none;

    :hover {
      color: #29abe1;
    }
}
.project_info{
    width: 100%;
}

`