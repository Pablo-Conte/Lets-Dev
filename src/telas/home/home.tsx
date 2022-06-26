import * as s from "./styled-home";
import {
  Footer,
  Header,
  TituloSecao,
  Card,
  InputButton,
} from "../../componentes";
import { Logo } from "../../imagens";
import { useContext, useEffect, useState} from "react";
import { MyContext } from "../../contexto";
import axios from "axios"

const Home = () => {
  console.log("teste")
  const[minhaFotoDePerfil, setMinhaFotoDePerfil] = useState()

  const usandoFoto = () => {
    return new Promise((resolve, reject) => {
        axios.get("https://api.github.com/users/pablo-conte")
        .then((resposta) => {
            setMinhaFotoDePerfil(resposta.data.avatar_url)
        })
        .catch((erro) => console.log(erro))
        .finally(() => console.log("Foi"));
    });
  };
  usandoFoto()

  const { setNomeUsuario, nomeUsuario } = useContext(MyContext)

  const telas = [
    {
      titulo: "Formulário em HTML e CSS",
      link: "/form-basico",
      descricao: (
        <p>
          O primeiro <i>“Hello World”</i> a gente nunca esquece. O primeiro
          formulário feito na aula de Introdução ao HTML e CSS.
        </p>
      ),
    },
    {
      titulo: "Formulário 2.0",
      link: "/form-completo",
      descricao: (
        <p>
          O primeiro <i>“console.log”</i> a gente também não esquece. O
          formulário funcional e agora com React JS + HTML + CSS.
        </p>
      ),
    },
    {
      titulo: "Consumindo API's",
      link: "/consumindo-apis",
      descricao:
        "Brincando com a API viaCEP, informando um CEP, salvando os valores digitados no estado e mostrando os dados na tela.",
    },
    {
      titulo: "A PAIPE e os Paipers",
      link: "/sobre-paipers",
      descricao:
        "Uma página bônus de presente para deixar o seu projeto ainda mais completo. E de quebra ficar por dentro do que acontece na Paipe.",
    },
  ];

  useEffect(() => {
    
    if (!nomeUsuario) {
      let nomeDoLocalStorage = localStorage.getItem("nomeUsuario")
      if (nomeDoLocalStorage) {
        setNomeUsuario(nomeDoLocalStorage)
      } else {
        let nome = prompt("Dígite seu nome Maninho: ")
        setNomeUsuario(nome)
      } 
    } else {
      localStorage.setItem("nomeUsuario", nomeUsuario)
    }
  }, [nomeUsuario]);

  return (
    <s.Container>
      <Header />
      <s.Banner>
        <h1>Que prazer te ver aqui, {nomeUsuario}!</h1>
        <img src={Logo} />
        <h2>
          Seja bem-vindo(a) ao Let’s Dev! O evento que vai transformar sua
          carreira.
        </h2>
        <p>
          Você está no módulo Front-end e vai aprender a criar um site básico do
          zero.
        </p>
      </s.Banner>
      <s.Content>
        <TituloSecao titulo="O que fizemos até agora..." />

        <s.GroupCards>
          {telas.map((card) => (
            <Card
              titulo={card.titulo}
              link={card.link}
              descricao={card.descricao}
            />
          ))}
        </s.GroupCards>

        <TituloSecao titulo="Um pouco sobre mim..." />
        
        <s.Row>
          <img src={minhaFotoDePerfil} alt="Foto de perfil do Pablo" 
          style={
            {
              height: '300px', 
              width: 'auto', 
              border: '7px solid #231f20', 
              boxShadow: '5px 5px 10px black',
              borderRadius: '5px'
              
            }}/>
          <s.Column>
            <h3>Pablo Conte Correa</h3>
            <p>
            Sou uma pessoa super empolgada com a tecnologia e tenho bastante interesse nas áreas de redes, programação back-end e cyber security, tanto que estou cada vez mais tentando melhorar minhas habilidades nestas áreas.
            </p>
            <s.ButtonGroup>
              <InputButton
                outLined
                type="button"
                value="LinkedIn"
                onClick={() => {
                  //Aqui vai o seu perfil do linkedIn
                  window.open("https://www.linkedin.com/in/pablo-conte-correa-2b97a7201/", "_blank");
                }}
              />
              <InputButton
                type="submit"
                value="Ver perfil"
                onClick={() => {
                  //Aqui vai o seu perfil do GitHub
                  window.open("https://github.com/pablo-conte", "_blank");
                }}
              />
            </s.ButtonGroup>
          </s.Column>
        </s.Row>
      </s.Content>
      <Footer />
    </s.Container>
  );
};

export default Home;
