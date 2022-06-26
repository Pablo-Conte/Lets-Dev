import React from "react"

const Callback: React.FC = () => {
    function printaNome(nome: String, callback: () => void) {
        console.log(nome);
        callback();
    }

    printaNome("João", () => {
        console.log("Silva")
    })

    return (
        <div>
            <h1>Callback</h1>
        </div>
    )
    
}

export default Callback