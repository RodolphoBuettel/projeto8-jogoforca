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

import palavras from "./Palavras";


function Teclado(props) {
    const [habilitaTeclado, sethabilitaTeclado] = React.useState(false);
    const [cor, setcor] = React.useState("habilitado");

    function EsoclherLetra(){
        sethabilitaTeclado(true);
        const mudaCor = "";
        setcor(mudaCor);
        
    }
        if(props.desabilitaButton === true){
           return( <button disabled = {habilitaTeclado} className={`letra ${cor}`} onClick =
            {EsoclherLetra}>{props.l.toUpperCase()}</button>);
        }
        else{
            return(<button disabled className={`letra`}>{props.l.toUpperCase()}</button>);
        }     
        
}


export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const [renderizarLinhnas, setrenderizarLinhas] = React.useState([]);
   
    const [desabilitaButton, setdesabilitaButton] = React.useState(false);
    const [erro, seterro] = React.useState(0);

    function EscolherPalavra() {

        const palavraSelecionada = palavras[Math.floor(Math.random() * palavras.length)];
        console.log(palavraSelecionada);
        let letrasDaPalavra = palavraSelecionada.split('');
        console.log(letrasDaPalavra);

        const traco = "_ ";
        let linhas = [];
        for (let i = 0; i < letrasDaPalavra.length; i++) {
            linhas.push(traco);
        }
        setrenderizarLinhas(linhas);

        const desablita = true;
        setdesabilitaButton(desablita);

        console.log(linhas);
    }
    return (
        <div className="jogo">
            <div>
                <img src={forca0} />
            </div>
            <div className="escolherPalavra">
                <button disabled = {desabilitaButton} className="escolha" onClick={EscolherPalavra}>Escolher Palavra</button>
            </div>
            <div className="teclado">
                {alfabeto.map((l, letra) => <Teclado key={letra} l={l} desabilitaButton = {desabilitaButton} />)}
            </div>
            <div className="chute">
                <a className="negrito">Já sei a palavra!</a>
                <input></input>
                <button className="">Chutar</button>
            </div>
            <div className="underline">
                <a className="linhas">{renderizarLinhnas}</a>
            </div>
        </div>
    )
}