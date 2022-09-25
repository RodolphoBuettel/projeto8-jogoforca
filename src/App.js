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





export default function App() {
    const [linhas, setlinhas] = React.useState([]);
    console.log(linhas);
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const [desabilitaButton, setdesabilitaButton] = React.useState(false);
    const [palavraSelecionada, setpalavraSelecionada] = React.useState([]);
    const [erro, seterro] = React.useState(1);
    const [fase, setfase] = React.useState(forca0);
    console.log(erro);
    console.log(fase);
    let arrayNovo = [];
    let array = [];
    
    console.log(palavraSelecionada);
    
    function EscolherPalavra() {
        
        const escolhida = palavras[Math.floor(Math.random() * palavras.length)];
        setpalavraSelecionada([...escolhida]);
        const traco = "_";
        for (let i = 0; i < [...escolhida].length; i++) {
            linhas.push(traco);
        }
        arrayNovo = linhas;
        setlinhas(arrayNovo);
        
        const desablita = true;
        setdesabilitaButton(desablita);
        
    }
    
    function Teclado(props) {
        const [habilitaTeclado, sethabilitaTeclado] = React.useState(false);
        const [cor, setcor] = React.useState("habilitado");
        
        function EscolherLetra(l) {
            sethabilitaTeclado(true);

            const mudaCor = "";
            setcor(mudaCor);

            palavraSelecionada.forEach((elemento, indice) => {
                if (elemento === l) {
                    linhas[indice] = palavraSelecionada[indice];
                }
                return linhas[indice];
            });
            if(!palavraSelecionada.includes(l)){
                console.log("errou");
                 seterro(erro + 1); 
                if(erro === 1){
                    setfase(forca1);
                }
                if(erro === 2){
                    setfase(forca2);
                }
                if(erro === 3){
                    setfase(forca3);
                }
                if(erro === 4){
                    setfase(forca4);
                }
                if(erro === 5){
                    setfase(forca5);
                }
                if(erro === 6){
                    setfase(forca6);
                }
                if(erro === 7){
                    alert("perdeu");
                    setlinhas(palavraSelecionada);
                }
            }
            array = linhas;
            setlinhas(array);
            console.log(array);
           
        }
        
        if (props.desabilitaButton === true) {
            return (<button disabled={habilitaTeclado} className={`letra ${cor}`} onClick=
                {() => EscolherLetra(props.l)}>{props.l}</button>);
        }
        else {
            return (<button disabled className={`letra`}>{props.l}</button>);
        }
    
    }


    return (
        <div className="jogo">
            <div>
                <img src={fase} />
            </div>
            <div className="escolherPalavra">
                <button disabled={desabilitaButton} className="escolha" onClick={EscolherPalavra}>Escolher Palavra</button>
            </div>
            <div className="teclado">
                {alfabeto.map((l, letra) => <Teclado key={letra} l={l} desabilitaButton={desabilitaButton}
                      />)}
            </div>
            <div className="chute">
                <a className="negrito">Já sei a palavra!</a>
                <input></input>
                <button className="">Chutar</button>
            </div>
            <div className="underline">
                <a className="linhas">{linhas}</a>
            </div>
        </div>
    )
}