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
let arrayDeLinhas = [];
let arrayDeLetrasTrocadas = [];

function Teclado(props) {
    const [habilitaTeclado, sethabilitaTeclado] = React.useState(false);
    const [cor, setcor] = React.useState("habilitado");

    function EscolherLetra(l) {
        sethabilitaTeclado(true);

        const mudaCor = "";
        setcor(mudaCor);

        props.palavra.forEach((elemento, indice) => {
            if (elemento === l) {
                props.linhas[indice] = props.palavra[indice];
            }
            return props.linhas[indice];
        });
        if (!props.palavra.includes(l)) {
            props.seterro(props.erro + 1);
            if (props.erro === 1) {
                props.setfase(forca1);
            }
            if (props.erro === 2) {
                props.setfase(forca2);
            }
            if (props.erro === 3) {
                props.setfase(forca3);
            }
            if (props.erro === 4) {
                props.setfase(forca4);
            }
            if (props.erro === 5) {
                props.setfase(forca5);
            }
            if (props.erro === 6) {
                props.setfase(forca6);
                props.setcontrolaInput("vermelho");
                props.setdesabilitaButton(false);
                return props.setlinhas([...props.palavra]);
            }

        }
        arrayDeLetrasTrocadas = [...props.linhas];
        props.setlinhas(arrayDeLetrasTrocadas);
        let j = 0;
        for (let i = 0; i < props.palavra.length; i++) {
            if (props.linhas[i] === props.palavra[i]) {
                j++;
            }
            if (j === props.palavra.length) {
                props.setdesabilitaButton(false);
                props.setcontrolaInput("verde");
            }
        }
    }

    if (props.desabilitaButton === true) {
        return (<button disabled={habilitaTeclado} data-identifier="letter" className={`letra ${cor}`} 
        onClick= {() => EscolherLetra(props.l)}>{props.l.toUpperCase()}</button>);
    }
    else {
        return (<button disabled data-identifier="letter" className={`letra`}>{props.l.toUpperCase()}</button>);
    }

}


export default function App() {
    const [linhas, setlinhas] = React.useState([]);
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const [desabilitaButton, setdesabilitaButton] = React.useState(false);
    const [palavraSelecionada, setpalavraSelecionada] = React.useState([]);
    const [erro, seterro] = React.useState(1);
    const [fase, setfase] = React.useState(forca0);
    const [controlaInput, setcontrolaInput] = React.useState("");
    const [chute, setchute] = React.useState("");
    const [desabilitaChute, setdesabilitaChute] = React.useState(true);
    const [chutar, setChutar] = React.useState("");

    function Chutar() {
        console.log(chute);
        const palavraString = palavraSelecionada.toString();
        const stringSemVirgula = palavraString.replace(/,/g, "").replace(/\./g, "");
        console.log(stringSemVirgula);

        if (chute === stringSemVirgula) {
            setlinhas(stringSemVirgula);
            setcontrolaInput("verde");
            setdesabilitaChute(true);
            return setdesabilitaButton(false); 
        }
        else {
            setlinhas(stringSemVirgula);
            setcontrolaInput("vermelho");
            setfase(forca6);
            setdesabilitaChute(true);
            return setdesabilitaButton(false);
        }
    }

    function removerCaracteres(str) {
        str = str.toLowerCase();
        str = str.replace(new RegExp('[????????]', 'gi'), 'a');
        str = str.replace(new RegExp('[??????]', 'gi'), 'e');
        str = str.replace(new RegExp('[??????]', 'gi'), 'i');
        str = str.replace(new RegExp('[????????]', 'gi'), 'o');
        str = str.replace(new RegExp('[??????]', 'gi'), 'u');
        str = str.replace(new RegExp('[??]', 'gi'), 'c');
        return str;
    }

    function EscolherPalavra() {

        
        const escolhida = removerCaracteres(palavras[Math.floor(Math.random() * palavras.length)]);
        setpalavraSelecionada([...escolhida]);
        console.log(escolhida);
        const traco = "_";
        for (let i = 0; i < [...escolhida].length; i++) {
            linhas.push(traco);
        }
        arrayDeLinhas = linhas;
        setlinhas(arrayDeLinhas);
        
        const desablita = true;
        setdesabilitaButton(desablita);
        setdesabilitaChute(false);
        setChutar("chutar");
        setfase(forca0);
        seterro(1);
        setcontrolaInput("");
        
    }

    return (
        <div className="jogo">
            <div>
                <img src={fase} data-identifier="game-image" />
            </div>
            <div className="escolherPalavra">
                <button disabled={desabilitaButton} data-identifier="choose-word" className="escolha" onClick={EscolherPalavra}>Escolher Palavra</button>
            </div>
            <div className="teclado">
                {alfabeto.map((l, letra) => <Teclado key={letra} l={l} desabilitaButton={desabilitaButton}
                    linhas={linhas} erro={erro} fase={fase} palavra={palavraSelecionada} seterro={seterro}
                    setfase={setfase} setlinhas={setlinhas} arrayDeLetrasTrocadas={arrayDeLetrasTrocadas}
                    setcontrolaInput={setcontrolaInput} setdesabilitaButton={setdesabilitaButton} />)}
            </div>
            <div className="chute">
                <a className="negrito">J?? sei a palavra!</a>
                <input placeholder="Chute" data-identifier="type-guess" value={chute}
                 onChange={e => setchute(e.target.value)} />
                <button className={chutar} data-identifier="guess-button" disabled={desabilitaChute} onClick={Chutar}>Chutar</button>
            </div>
            <div className="underline">
                <h1 className={`linhas ${controlaInput}`} data-identifier="word">{linhas}</h1>
            </div>
        </div>
    )
}