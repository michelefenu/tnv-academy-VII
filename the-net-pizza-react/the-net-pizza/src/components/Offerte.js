import React from "react";

const Offerte = (props) => {
  const { piatti } = props;

  return (
    <div>
      <h1>Pizze sotto i 9 euro</h1>
      <ul>
        {piatti
          .filter((x) => +x.price <= 9)
          .map((x, index) => {
            return (
              <li key={index}>
                {x.title} - {x.price} €
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Offerte;
