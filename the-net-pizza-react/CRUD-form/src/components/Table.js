import React, { Component } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

class Table extends Component {
  render() {
    const { piatti, removePiatto, editPiatto } = this.props;

    return (
      <table className="table">
        <TableHeader />
        <TableBody piatti={piatti} removePiatto={removePiatto} editPiatto={editPiatto} />
      </table>
    );
  }
}

export default Table;
