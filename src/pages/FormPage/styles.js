import styled from "styled-components";
import { darken } from "polished";

import "react-toastify/dist/ReactToastify.css";

export const Main = styled.div``;

export const Container = styled.div`
  min-height: 100%;
  height: auto;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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
    margin-right: 10px;
    margin-top: 30px;
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
  padding: 20px;
`;

export const ExplainationText = styled.p`
  margin-top: 10px;
  text-align: ${(props) => (props.justify ? "justify" : "center")};
  color: #2a2951;
  font-weight: bold;
`;

export const Link = styled.p`
  padding: 20px 0;
  color: #2a2951;

  a {
    color: #68e1fd;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: ${darken(0.06, "#68E1FD")};
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);

  overflow: hidden;
  min-height: 100%;
  height: auto;
  padding: 20px;
`;

export const ModalContainer = styled.div`
  border-radius: 10px;
  background: #fff;

  padding: 20px;

  p {
    line-height: 4vh;
  }

  hr {
    margin: 4px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    margin-top: 30px;
    margin-bottom: 10px;
    margin-left: 10px;

    select {
      width: 100%;
      background: #fff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;

      border: 2px solid #ddd;

      transition: border-color 0.2s;
    }

    input::placeholder {
      color: #999999;
    }

    input:focus {
      border-color: #111;
    }
  }
`;

export const Button = styled.button`
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
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;

  padding-bottom: 1vh;
`;

export const CloseButton = styled.button`
  display: flex;

  border-radius: 50%;
  background: #fff;

  cursor: pointer;
`;

export const SyntaxContainer = styled.div`
  width: 60vw;
`;
