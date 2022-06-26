import axios from "axios";
import React, {useState} from "react";

const AsyncAwait: React.FC = () =>  {

    const motoristaAceitou = true;
    const[minhaFotoDePerfil, setMinhaFotoDePerfil] = useState()

    const chamarUber = () => {
        return new Promise((resolve, reject) => {
            axios.get("https://api.github.com/users/pablo-conte")
            .then((resposta) => {
                setMinhaFotoDePerfil(resposta.data.avatar_url)
            })
            .catch((erro) => console.log(erro))
            .finally(() => console.log("Foi"));
        });
    };

    async function start() {
        const resposta = await chamarUber();
        console.log(resposta);
    }
    start();

    return (
        <div>
            <img src={minhaFotoDePerfil} alt="Foto do Pablo"/>
        </div>
    );
}

export default AsyncAwait