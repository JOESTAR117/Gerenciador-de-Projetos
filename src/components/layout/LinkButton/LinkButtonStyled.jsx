import styled from "styled-components";

export const Btn = styled.button`
  border: none;
  background-color: #ffffff;
  transition: all 0.2s ease-in-out;

  .btn_bounce {
    background-color: #000000;
    color: #ffffff;
    padding: 0.5em 1em;
    text-decoration: none;
    transition: all 0.4s;
    border: none;
    font-size: 1.6em;
    border-radius: 20px;
    margin: 0 auto;
    display: table;
    animation: btn_bounce 0.7s infinite;
    animation-direction: alternate;

    :hover {
      animation: none;
    }

    @keyframes btn_bounce {
      0% {
        transform: scale(1);
        filter: brightness(100%);
        color: #29abe1;
      }
      100% {
        transform: translateY(20%);
        transform: translateZ(-20%);
      }
    }
  }
`;
