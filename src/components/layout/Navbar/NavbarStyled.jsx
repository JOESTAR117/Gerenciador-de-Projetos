import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  padding: 1em;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  img {
    width: 7.7em;
    height: 5em;
    object-fit: cover;
    zoom: 1.3;
  }

  .list {
    display: flex;
    list-style: none;
    align-items: center;

    .item {
      margin-right: 1em;

      a {
        color: #fff;
        text-decoration: none;
        transition: all 0.3s;
        font-size: 1.1em;

        &:hover {
          color: #29abe1;
        }
      }
    }
  }
`;
