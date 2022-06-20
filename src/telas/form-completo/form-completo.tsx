import React, { FormEvent, useEffect, useState } from 'react';
import * as s from "./styled-form-completo"
import { LogoExtended } from "../../imagens"
import Titulo from '../../componentes/Titulo';
import { Row, ColumnInput, Label, RowSelectors, InputButton, Footer } from '../../componentes';

const FormCompleto: React.FC = () => {
const [nome, setNome] = useState("");
const [idade, setIdade] = useState("");
const [ocupacao, setOcupacao] = useState("");
const [areaPreferencia, setareaPreferencia] = useState("Front-end");
const [curriculo, setCurriculo] = useState<any>("");
const [descricaoPerfil, setDescricaoPerfil] = useState("");
const [receberEmail, setReceberEmail] = useState(false);


    function enviarFormulario(event: FormEvent) {
        event.preventDefault();

        const mensagem = `${nome} tem ${idade} anos e atualmente é ${ocupacao}. Se ingressar no mundo do desenvolvimento, tem interesse na area de ${areaPreferencia}.
    
        Em sua descrição de perfil consta: "${descricaoPerfil}"

        Deseja receber e-mail: ${receberEmail ? "Sim" : "Não"}

        Curriculo: ${curriculo ? curriculo?.name : "Não informado"}
        
        `;
        alert(mensagem);
    }

    const cancelar = (event: FormEvent) => {
        event.preventDefault();
        alert("Cancelando...")
    }

    useEffect(() => {
        
    }, [])

    return (
        <>
            <s.Image src={LogoExtended} alt="Logo da Let's dev"/>
            <s.Container>

                <Titulo titulo='Formulário 2° Edição'/>
                <s.H2>Seja bem-vindo(a) ao primeiro desafio de sua jornada de aprendizado!</s.H2>
                <s.Instrucao>Preencha corretamente os campos abaixo para ingressar nessa SUPER JORNADA com o time Paipe</s.Instrucao>

                <s.Divisor />

                <s.Form onSubmit={enviarFormulario}>
                    <s.Aviso>
                        <strong>ATENÇÃO: </strong> os campos contendo (*) são de preenchimento obrigatório!
                    </s.Aviso>

                    <Row>
                        <ColumnInput className='input-text'>
                            <Label>Nome Completo: *</Label>
                            <input
                                type="text"
                                name="nome"
                                placeholder="Dígite seu nome aqui"
                                required
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </ColumnInput>
                        <ColumnInput>
                            <Label>Idade:</Label>
                            <input
                                type="number"
                                name="idade"
                                placeholder="Dígite sua idade aqui"
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                            />
                        </ColumnInput>
                    </Row>

                    <Row>
                        <ColumnInput className="select">
                            <Label>Ocupação:</Label>
                            <select name="ocupacao" value={ocupacao}
                                onChange={(e) => setOcupacao(e.target.value)}>
                                <option>Selecione sua ocupação</option>
                                <option>Estudante</option>
                                <option>Trabalhador CLT</option>
                                <option>Trabalhador CNPJ</option>
                                <option>Autônomo</option>
                                <option>Outros</option>
                            </select>
                        </ColumnInput>
                        <ColumnInput>
                            <Label>Área de Preferência</Label>
                            <Row style={{ gap: '25px' }}>
                                <RowSelectors>
                                    <input type="radio" id="front" name="area-preferencia" value="Front-end" checked= {areaPreferencia == "Front-end"} onChange={(e) => setareaPreferencia(e.target.value)}/>
                                    <Label htmlFor="front">Front-end</Label>

                                    <input type="radio" id="back" name="area-preferencia" value="Back-end" checked= {areaPreferencia == "Back-end"} onChange={(e) => setareaPreferencia(e.target.value)}/>
                                    <Label htmlFor="back">Back-end</Label>

                                    <input type="radio" id="full" name="area-preferencia" value="Full-stack" checked= {areaPreferencia == "Full-stack"} onChange={(e) => setareaPreferencia(e.target.value)}/>
                                    <Label htmlFor="full">Full-Stack</Label>
                                </RowSelectors>
                            </Row>
                        </ColumnInput>
                    </Row>

                    <ColumnInput>
                        <Label>Anexar Currículo:</Label>
                        <InputButton type="file" name="curriculo" 
                        //value={curriculo} 
                        onChange={(e) => setCurriculo(e.target?.files[0])}/>
                    </ColumnInput>

                    <ColumnInput style={{ marginBottom: '50px' }}>
                        <Label>Descrição do Perfil do usuário:</Label>
                        <textarea
                            name="descricao-perfil"
                            placeholder="Nos fale um pouco sobre o seu perfil pessoal e profissional"
                            value={descricaoPerfil} 
                            onChange={(e) => setDescricaoPerfil(e.target.value)}>
                        </textarea>
                    </ColumnInput>

                    <ColumnInput style={{ marginBottom: '115px' }}>
                        <RowSelectors>
                            <input type="checkbox" name="receber-email" id="receber-email" 
                            checked={receberEmail}
                            onChange={() => setReceberEmail(!receberEmail)}/>
                            <Label htmlFor="receber-email">
                                Desejo receber notificações sobre vagas por e-mail
                            </Label>
                        </RowSelectors>
                    </ColumnInput>

                    <Row style={{ justifyContent: 'space-between' }}>
                        <InputButton type='button' onClick={cancelar} value="Cancelar" outLined/>
                        <InputButton type="submit" value="Enviar" />
                    </Row>

                </s.Form>
            </s.Container>
            <Footer />
        </>
    );
}

export default FormCompleto;