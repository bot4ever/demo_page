import styled from "styled-components";

export const Container = styled.div`
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center;
  }

  input {
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
`;
