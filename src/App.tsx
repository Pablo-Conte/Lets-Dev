import {
    FormBasico, 
    FormCompleto,
    Callback,
    Promise,
    AsyncAwait,
    Home,
    ConsumindoApis,
    SobrePaipers
} from "./pages";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { MyContext } from "./context";
import { useState } from "react";

function App() {

    const [nomeUsuario, setNomeUsuario]= useState("")

    return (
        <MyContext.Provider value={{nomeUsuario, setNomeUsuario}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/form-basico" element={<FormBasico/>}/>
                    <Route path="/form-completo" element={<FormCompleto/>}/>
                    <Route path="/consumindo-apis" element={<ConsumindoApis/>}/>
                    <Route path="/sobre-paipers" element={<SobrePaipers/>}/>
                </Routes>
            </BrowserRouter>
        </MyContext.Provider>
        
    );
}

export default App;