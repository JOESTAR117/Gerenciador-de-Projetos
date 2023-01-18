import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;

  .start {
    justify-content: flex-start;
  }
  .column {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
