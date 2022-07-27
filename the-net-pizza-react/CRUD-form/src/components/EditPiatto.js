import React from "react";

const EditPiatto = ({ editPiattoData, handleEditPiattoChange, handleEditPiattoSubmit }) => {
  return (
    <tr>
      <td>
        <input
          className="form-control"
          type="text"
          name="title"
          id="title"
          placeholder="Inserisci il nome..."
          onChange={handleEditPiattoChange}
          value={editPiattoData.title}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          name="category"
          id="category"
          placeholder="Inserisci la categoria..."
          onChange={handleEditPiattoChange}
          value={editPiattoData.category}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="number"
          name="price"
          id="price"
          placeholder="Inserisci il prezzo..."
          onChange={handleEditPiattoChange}
          value={editPiattoData.price}
        />
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => handleEditPiattoSubmit()}>
          Save
        </button>
      </td>
    </tr>
  );
};

export default EditPiatto;
