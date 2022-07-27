import React from "react";

const ReadonlyRow = ({ index, piatto, removePiatto, handleEditClick }) => {
  
  return (
    <tr>
      <td>{piatto.title}</td>
      <td>{piatto.category}</td>
      <td>{piatto.price} €</td>
      <td>
        <button
          className="btn btn-danger me-2"
          onClick={() => removePiatto(index)}
        >
          Delete
        </button>
        <button className="btn btn-warning" onClick={() => handleEditClick(index, piatto)}>
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadonlyRow;