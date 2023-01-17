import styled from "styled-components";

export const Div = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  min-height: 75vh;

  .start {
    justify-content: flex-start;
  }
  .column {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
