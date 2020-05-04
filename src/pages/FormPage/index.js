import React, { useState } from "react";
import * as Yup from "yup";

import { toast } from "react-toastify";

import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Form } from "@rocketseat/unform";
import Input from "../../components/Input";

import api from "../../services/api";

import logo from "../../assets/logo.svg";

import { Container, Content, ExplainationText, Response, Link } from "./styles";

const schema = Yup.object().shape({
  linkProduct: Yup.string().required("O link do endereço é obrigatório"),
  question: Yup.string().required("A pergunta é obrigatória"),
});

export default function FormPage() {
  const [responseApi, setResponseApi] = useState(null);

  async function handleSubmit({ linkProduct, question }) {
    try {
      const response = await api.post("attendances", {
        question,
        origin: linkProduct,
      });

      console.log(response.data);

      setResponseApi(response.data);
    } catch (err) {
      toast.error("Ocorreu um erro", err.response.data);
    }
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Hermes" />
        <ExplainationText>Experimente como o Hermes funciona!</ExplainationText>

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input
            label="Link do produto"
            name="linkProduct"
            placeholder="https://produto.mercadolivre.com.br"
          />

          <Input
            label="Pergunta"
            name="question"
            placeholder="Qual é a marca?"
          />

          <button type="submit">Testar</button>

          <Link>
            Não conhece o Hermes?{" "}
            <a href="https://adrianoapj.github.io/hermes/">Clique aqui</a>
          </Link>
        </Form>
      </Content>
      {responseApi && (
        <Response>
          <SyntaxHighlighter language="json" style={dracula}>
            {JSON.stringify(responseApi, null, 2)}
          </SyntaxHighlighter>
        </Response>
      )}
    </Container>
  );
}
