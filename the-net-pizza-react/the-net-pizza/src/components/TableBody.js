import React, { Fragment, useState } from "react";
import EditPiatto from "./EditPiatto";
import ReadonlyRow from "./ReadonlyRow";

const TableBody = (props) => {
  const { piatti, removePiatto, editPiatto } = props;

  const [selectedRowId, setSelectedRowId] = useState(null);
  const [editPiattoData, setEditPiattoData] = useState({
    title: '',
    category: '',
    price: ''
  })

  const handleEditClick = (index, piatto) => {
    setSelectedRowId(index);

    const formValues = {
      title: piatto.title,
      category: piatto.category,
      price: piatto.price
    }

    setEditPiattoData(formValues);
  }

  const handleEditPiattoChange = (event) => {
    const { name, value } = event.target;

    const newData = { ...editPiattoData };
    newData[name] = value;

    setEditPiattoData(newData);
  };

  const handleEditPiattoSubmit = () => {    
    const editedRow = {
      title: editPiattoData.title,
      category: editPiattoData.category,
      price: editPiattoData.price,
    };
    
    editPiatto(selectedRowId, editedRow)
    setSelectedRowId(null);
  };

  return (
    <tbody>
      {piatti.map((piatto, index) => {
        return (
          <Fragment>
            {index === selectedRowId ? (
              <EditPiatto key={index} editPiattoData={editPiattoData} handleEditPiattoChange={handleEditPiattoChange} piatto={piatto} index={index} handleEditPiattoSubmit={handleEditPiattoSubmit}/>
            ) : (
              <ReadonlyRow
                key={index}
                piatto={piatto}
                index={index}
                removePiatto={removePiatto}
                handleEditClick={handleEditClick}
                handleEditPiattoChange={handleEditPiattoChange}
              />
            )}
          </Fragment>
        );
      })}
    </tbody>
  );


};

export default TableBody;
