import styled from "styled-components";

export const Section = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 4em;

h1{
    font-size: 2.5em;
    margin-bottom: 0.5em;

    span{
        color: #29abe1;
        padding: 0 0.2em;
        background-color: #000;
        border-radius: 10px;
    }
}

p{
    margin: 1.5em;
    color: #7b7b7b;
}

img{
    max-width: 350px;
    margin: 1em 0;

}

`