import React, { useState } from "react";
import Botao from "./components/Botao";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");

  const adicionarTarefa = () => {
    if (texto.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      texto: texto,
      feita: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTexto("");
  };

  const toggleFeita = (id) => {
    const novaLista = tarefas.map((tarefa) =>
      tarefa.id === id
        ? { ...tarefa, feita: !tarefa.feita }
        : tarefa
    );

    setTarefas(novaLista);
  };

  const removerTarefa = (id) => {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novaLista);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do DevOps App</h1>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite uma tarefa..."
      />

      <Botao onClick={adicionarTarefa}>Adicionar</Botao>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <input
              type="checkbox"
              checked={tarefa.feita}
              onChange={() => toggleFeita(tarefa.id)}
            />

            <span
              style={{
                textDecoration: tarefa.feita ? "line-through" : "none",
                marginLeft: "8px",
              }}
            >
              {tarefa.texto}
            </span>

            <Botao onClick={() => removerTarefa(tarefa.id)}>
              Remover
            </Botao>
          </li>
        ))}
      </ul>
    </div>
  );
}