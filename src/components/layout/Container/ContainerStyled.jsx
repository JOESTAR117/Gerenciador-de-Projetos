import styled from "styled-components";

export const Cont = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;

  .start {
    justify-content: flex-start;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
 

    p{
      padding-right: 2em;
    }
  }
  .column {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
