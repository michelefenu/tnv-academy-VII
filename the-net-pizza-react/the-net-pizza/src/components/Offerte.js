import React from "react";

const Offerte = (props) => {
  const { piatti } = props;

  return (
    <div>
      <h1>Pizze sotto i 5 euro</h1>
      <ul>
        {piatti
          .filter((x) => x.prezzo <= 5)
          .map((x, index) => {
            return (
              <li key={index}>
                {x.nome} - {x.prezzo} €
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Offerte;
