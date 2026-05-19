import React from "react";
export default function Botao({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ marginLeft: "5px" }}>
      {children}
    </button>
  );
}
