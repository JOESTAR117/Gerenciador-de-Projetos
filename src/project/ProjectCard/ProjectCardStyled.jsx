import styled from "styled-components";

export const Card = styled.div`
  padding: 1em;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
  margin-right: 1em;
  align-items: center;


  h4 {
    background-color: #000000;
    color: #29abe1;
    padding: 0.4em;
    margin-bottom: 1.3em;
    font-size: 1.3em;
    border-radius: 10px;
  }
  p {
    color: #7a7a7af2;
    margin-bottom: 1em;

    span {
      font-weight: bold;
    }
  }

  .category_text {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;

    span {
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #ccc;
      margin-right: 5px;
    }

    .Infra {
      background-color: #ffaebc;
    }
    .Desenvolvimento {
      background-color: #a0e7e5;
    }
    .Designer {
      background-color: #84f8c8;
    }
    .Planejamento {
      background-color: #fbe7c6;
    }
  }
  .actions {
    margin-top: 1.2em;
    display: flex;
    align-items: center;

    a,
    button {
 
      text-decoration: none;
      border: none;
      background-color: #ffffff;
      color: #7a7a7af2;
      font-weight: bold;
      font-size: 0.9em;
      padding: 0.6em 1em;
      cursor: pointer;
      margin-right: 1em;
      border: 1px solid #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.5s;

      &:hover {
        background-color: #000000;
        color: #29abe1;
      }

      svg {
        margin-right: 0.5em;
      }
    }
  }
`;
