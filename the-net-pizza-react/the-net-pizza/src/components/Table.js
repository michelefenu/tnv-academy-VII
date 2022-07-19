import React, { Component } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

class Table extends Component {
  render() {
    const { piatti } = this.props;

    return (
      <table className="table">
        <TableHeader />
        <TableBody piatti={piatti} />
      </table>
    );
  }
}

export default Table;
