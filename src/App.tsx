import React from 'react'
import Titulo from './componentes/Titulo'


function MeuSite() {

  // var titulo: string = "Olá mundo!"    -> usa-se como variável dentro do return do App, utilizando "{var_aqui}"
  // ou
  // var titulo: string = "Olá mundo!"
  
  /*function renderizarTitulo(){
    return titulo + " Seja Bem-vindo(a)" //retorna o conteúdo da variável titulo criada anteriormente + o que quisermos
  } */  // usa-se {nomefunção()}


  function minhaFuncao(){
    alert("Opá!")
  }

  const disparaAlert = (label: string) => {
    alert(label)
  }

  function MeuBotao(props: any){
    //const label = props.label            -> essa e a sintaxe de baixo são iguais

    const {label} = props;

    return(
      <button onClick={() => disparaAlert(label)}>
        {label}
      </button>
    )
  }

  return (
    <div>
      
    </div>

  );
}

export default MeuSite;





//1° letra maiúsculo quer dizer que tu cria um componente.
//2° letra minúscula quer dizer que tu cria uma função normal que vai retornar algo.
//class = className
//onclick = onClick
//funcao(){ } = const funcao = () => { }
//function MeuComponente(){ return <div/>} 
//function MeuComponente = () => {return <div/>}