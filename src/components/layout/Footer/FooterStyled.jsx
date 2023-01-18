import styled from "styled-components";

export const Foot = styled.footer`
  background-color: #000000;
  color: #fff;
  padding: 2em;
  text-align: center;
  .social_list {
    display: flex;
    justify-content: center;
    list-style-type: none;
    flex-wrap: wrap;

    li a {
      color: #fff;
      margin: 0 1em;

      &:hover {
        color: #29abe1;
      }

      svg {
        font-size: 1.3em;
        cursor: pointer;
      }
    }
  }
  .copy_right {
    margin-top: 2em;
    span {
      font-weight: bold;
      color: #29abe1;
    }
  }
`;
