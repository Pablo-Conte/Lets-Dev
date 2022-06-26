import {
    FormBasico, 
    FormCompleto,
    Callback,
    Promise,
    AsyncAwait,
    Home,
    ConsumindoApis
} from "./telas";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { MyContext } from "./contexto";
import { useState } from "react";

function App() {

    const [nomeUsuario, setNomeUsuario]= useState("")

    return (
        <MyContext.Provider value={{nomeUsuario, setNomeUsuario}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/form-basico" element={<FormBasico/>}></Route>
                    <Route path="/form-completo" element={<FormCompleto/>}></Route>
                    <Route path="/consumindo-apis" element={<ConsumindoApis/>}></Route>
                </Routes>
            </BrowserRouter>
        </MyContext.Provider>
        
    );
}

export default App;