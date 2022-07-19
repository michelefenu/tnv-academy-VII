import React from "react";

const TableBody = (props) => {

  const { piatti } = props;

  return (
    <tbody>
      {piatti.map((piatto, index) => {
        return (
          <tr key={index}>
            <td>{piatto.nome}</td>
            <td>{piatto.categoria}</td>
            <td>{piatto.prezzo} €</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
