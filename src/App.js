import React from "react";

import "./css/reset.css";
import "./css/estilo.css";

import forca0 from "./img/forca0.png";
import forca1 from "./img/forca1.png";
import forca2 from "./img/forca2.png";
import forca3 from "./img/forca3.png";
import forca4 from "./img/forca4.png";
import forca5 from "./img/forca5.png";
import forca6 from "./img/forca6.png";


function Teclado(props){
    return(
        <button className="letra">{props.l.toUpperCase()}</button>
        );
}


export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="jogo">   
        <div><img src={forca0} /></div>
        <div className="escolherPalavra">
            <button className="escolha">Escolher Palavra</button>
        </div>
        <div className="teclado">
            {alfabeto.map((l) => <Teclado l = {l}/>)}
        </div>
        <div className="chute">
            <a className="negrito">Já sei a palavra!</a>
            <input></input>
            <button className="">Chutar</button>
        </div>
        </div>
    )
}