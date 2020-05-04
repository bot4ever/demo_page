import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  min-height: 100%;
  height: auto;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

//   background: #7d40e7;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    padding-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #68e1fd;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    cursor: pointer;

    &:hover {
      background: ${darken(0.04, "#68E1FD")};
    }
  }
`;

export const Response = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 30px;
`;

export const ExplainationText = styled.p`
  margin-top: 10px;
  text-align: justify;
  color: #2a2951;
  font-weight: bold;
`;
