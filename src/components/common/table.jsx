import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table table-hover my-1">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      ></TableHeader>
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
