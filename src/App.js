import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const opcoesIniciais = [
    { id: 1, texto: "Esportivo", votos: 0 },
    { id: 2, texto: "Casual", votos: 0 },
    { id: 3, texto: "Social", votos: 0 },
    { id: 4, texto: "Infantil", votos: 0 },
  ];

  const [opcoes, setOpcoes] = useState(opcoesIniciais);
  const [tema, setTema] = useState("claro");

  const votar = (id) => {
    const novaOpcao = opcoes.map((opcao) =>
      opcao.id === id ? { ...opcao, votos: opcao.votos + 1 } : opcao
    );
    setOpcoes(novaOpcao);
  };

  const totalVotos = opcoes.reduce((total, opcao) => total + opcao.votos, 0);

  return (
    <div className={`App ${tema}`}>
      <div className="conteudo">
        <h1>Qual seu tipo de calçado favorito?</h1>

        <div className="botoes">
          {opcoes.map((opcao) => (
            <button key={opcao.id} onClick={() => votar(opcao.id)}>
              {opcao.texto}
            </button>
          ))}
        </div>

        <div className="resultados">
          <h2>Resultado da votação:</h2>
          {opcoes.map((opcao) => {
            const percentual = totalVotos
              ? ((opcao.votos / totalVotos) * 100).toFixed(1)
              : 0;
            return (
              <div key={opcao.id} className="opcao-resultado">
                <strong>{opcao.texto}</strong>: {opcao.votos} votos (
                {percentual}%)
                <div className="barra">
                  <div
                    className="preenchimento"
                    style={{ width: `${percentual}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {}
      <div className="seletor-tema">
        <div
          className={`bloco-tema claro ${tema === "claro" ? "ativo" : ""}`}
          onClick={() => setTema("claro")}
        >
          🌞 Tema Claro
        </div>
        <div
          className={`bloco-tema escuro ${tema === "escuro" ? "ativo" : ""}`}
          onClick={() => setTema("escuro")}
        >
          🌙 Tema Escuro
        </div>
      </div>
    </div>
  );
}
