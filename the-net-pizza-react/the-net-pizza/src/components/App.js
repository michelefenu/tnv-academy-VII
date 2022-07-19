import React, { Component } from "react";
import Table from "./Table";
import Offerte from "./Offerte";

class App extends Component {
  render() {
    const title = "Gestione Menu";

    const piatti = [
      {
        nome: "Margherita",
        categoria: "pizza",
        prezzo: 5,
      },
      {
        nome: "Marinara",
        categoria: "pizza",
        prezzo: 3,
      },
      {
        nome: "Quattro Formaggi",
        categoria: "pizza",
        prezzo: 8,
      },
      {
        nome: "Quattro Stagione",
        categoria: "pizza",
        prezzo: 8,
      },
      {
        nome: "Focaccia",
        categoria: "pizza",
        prezzo: 3,
      },
    ];

    return (
      <div>
        <h1>{title}</h1>
        <Table piatti={piatti} />
        <Offerte piatti={piatti} />
      </div>
    );
  }
}

export default App
