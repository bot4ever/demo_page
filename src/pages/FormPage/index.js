import React, { useState } from "react";
import * as Yup from "yup";

import { MdClose } from "react-icons/md";

import { toast } from "react-toastify";

import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Form, Select } from "@rocketseat/unform";
import Input from "../../components/Input";

import api from "../../services/api";

import logo from "../../assets/logo.svg";

import {
  Main,
  Background,
  ModalContainer,
  Container,
  Content,
  ExplainationText,
  Button,
  Response,
  Link,
  Header,
  SyntaxContainer,
  CloseButton,
} from "./styles";

const schema = Yup.object().shape({
  linkProduct: Yup.string().required("O link do endereço é obrigatório"),
  question: Yup.string().required("A pergunta é obrigatória"),
});

export default function FormPage() {
  const [responseApi, setResponseApi] = useState(null);
  const [showModal, setShowModal] = useState(
    localStorage.getItem("showModal") || "true"
  );
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("userInfo") || ""
  );
  const [loading, setLoading] = useState(false);

  const [visibleBackground, setVisibleBackground] = useState(true);

  async function uptadeShowModal(value) {
    localStorage.setItem("showModal", value);

    setShowModal(localStorage.getItem("showModal"));
  }

  async function putInfo({ name, info }) {
    localStorage.setItem("userName", name);
    localStorage.setItem("userInfo", info);

    setShowModal(localStorage.getItem("modal"));

    setUserName(localStorage.getItem("userName"));
    setUserInfo(localStorage.getItem("userInfo"));

    localStorage.setItem("showModal", false);
  }

  async function handleSubmit({ linkProduct, question }) {
    setLoading(true);
    try {
      console.log("Pedido feito");
      const response = await api.post("/attendances", {
        question,
        origin: linkProduct,
      });

      setLoading(false);
      console.log(response.data);

      setVisibleBackground(true);

      setResponseApi(response.data);
    } catch (err) {
      toast.error(`Ocorreu um erro: ${err.response.data.error}`);
    }
  }

  function getTime(date) {
    const hours = date.getHours();

    switch (hours) {
      case hours >= 6 && hours <= 12:
        return "boa dia";
      case hours >= 12 && hours <= 18:
        return "boa tarde";
      default:
        return "boa noite";
    }
  }

  const options = [
    { id: "user", title: "Eu sou consumidor" },
    { id: "developer", title: "Eu sou desenvolvedor" },
  ];

  return (
    <Main>
      {showModal === "true" ? (
        <Background>
          <ModalContainer>
            <Form onSubmit={putInfo}>
              <Input label="Seu Nome" name="name" placeholder="Seu Nome" />

              <Select
                options={options}
                name="info"
                placeholder="Escolha a sua opção"
              />

              <Button type="submit">Testar API</Button>
            </Form>
          </ModalContainer>
        </Background>
      ) : (
        <></>
      )}
      <Container>
        <Content>
          <img src={logo} alt="Hermes" />
          <ExplainationText>
            Experimente como o Hermes funciona!
          </ExplainationText>

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

            <Button type="submit">
              {loading ? "Carregando..." : "Testar"}
            </Button>

            <Link>
              Não conhece o Hermes?{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://adrianoapj.github.io/hermes/"
              >
                Clique aqui
              </a>
            </Link>

            <Button type="button" onClick={() => uptadeShowModal("true")}>
              Mudar Perfil
            </Button>
          </Form>
        </Content>
        {responseApi && (
          <Response>
            {userInfo === "developer" ? (
              <>
                {visibleBackground === true ? (
                  <Background>
                    <ModalContainer>
                      <Header>
                        <img src={logo} alt="Hermes" />
                        <CloseButton
                          type="button"
                          onClick={() => {
                            setVisibleBackground(false);
                            setResponseApi(null);
                          }}
                        >
                          <MdClose size={20} color="#333" />
                        </CloseButton>
                      </Header>
                      <SyntaxContainer>
                        <SyntaxHighlighter language="json" style={dracula}>
                          {JSON.stringify(responseApi, null, 2)}
                        </SyntaxHighlighter>
                      </SyntaxContainer>
                    </ModalContainer>
                  </Background>
                ) : (
                  <> </>
                )}
              </>
            ) : (
              <>
                {visibleBackground === true ? (
                  <Background>
                    <ModalContainer>
                      <Header>
                        <img src={logo} alt="Hermes" />
                        <CloseButton
                          type="button"
                          onClick={() => {
                            setVisibleBackground(false);
                            setResponseApi(null);
                          }}
                        >
                          <MdClose size={20} color="#333" />
                        </CloseButton>
                      </Header>
                      <ExplainationText justify={true}>
                        {`Olá ${userName}, ${getTime(new Date())}`}!
                        {responseApi.answer.map((response) => (
                          <p>
                            a resposta para a sua pergunta {response.question}{" "}
                            é: {response.answer}
                            <hr />
                          </p>
                        ))}
                      </ExplainationText>
                    </ModalContainer>
                  </Background>
                ) : (
                  <> </>
                )}
              </>
            )}
          </Response>
        )}
      </Container>
    </Main>
  );
}

/*{
  "question": "Tamanho do Display",
  "feature": "Tamanho do Display",
  "answer": "6.2\""
},
{
  "question": "Sintonizador de TV",
  "feature": "Sintonizador de TV",
  "answer": "Não possui"
},
{
  "question": "bateria",
  "feature": "Alimentação, tipo de bateria",
  "answer": "Bateria de Íons de Lítio de 3400 mAh"
}*/
