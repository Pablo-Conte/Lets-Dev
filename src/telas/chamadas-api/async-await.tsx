import React from "react"

const AsyncAwait: React.FC = () =>  {

    const motoristaAceitou = true;

    console.log("Procurando motorista...")

    const chamarUber = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (motoristaAceitou){
                    resolve("Deu certo! Seu motorista está a caminho")
                } else {
                    reject("Deu errado! Procure outro motorista")
                }
            }, 3000);
        });
    };

    async function start() {
        const resposta = await chamarUber();
        console.log(resposta)
    }
    start();

    return (
        <div>
            <h1>AsyncAwait</h1>
        </div>
    )
}

export default AsyncAwait