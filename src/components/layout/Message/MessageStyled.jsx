import styled from "styled-components";

export const Messages = styled.div`
  width: 100%;
  padding: 1em;
  border: 1px solid #000;
  margin: 20px;
  text-align: center;
  margin-bottom: 2em;
  border-radius: 5px;

  &.error {
    color: #621c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
  &.success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
`;
