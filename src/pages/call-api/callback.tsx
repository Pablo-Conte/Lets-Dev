import React from "react"
import Axios from "axios"

const Callback: React.FC = () => {
    function printaNomeESobrenome(nome: String, callback: () => void) {
        console.log(nome);
        callback();
    }

    printaNomeESobrenome("João", () => {
        console.log("Silva")
    })

    return (
        <div>
            <h1>Callback</h1>
        </div>
    )
    
}

export default Callback