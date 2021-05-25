import React, { Component } from "react";
import { useTable } from "react-table";

const Main = () => {
  const data = React.useMemo(() => [
    {
      col1: "Days",
      col2: "Marie",
      col3: "Imelda",
      col4: "Carina",
      col5: "Jessica",
      col6: "Mike",
      col7: "Haniel",
      col8: "Erik",
      col9: "Dylan",
    },
    {
      col1: "Mon",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
      col7: "",
      col8: "",
      col9: "",
    },
    {
      col1: "Tue",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
      col7: "",
      col8: "",
      col9: "",
    },
    {
      col1: "Wed",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
      col7: "",
      col8: "",
      col9: "",
    },
    {
      col1: "Thur",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
      col7: "",
      col8: "",
      col9: "",
    },
    {
      col1: "Fri",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
      col7: "",
      col8: "",
      col9: "",
    },
    {
      col1: "Sat",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
      col7: "",
      col8: "",
      col9: "",
    },
    {
      col1: "Sun",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
      col7: "",
      col8: "",
      col9: "",
    },
  ]);

  const columns = React.useMemo(() => [
    {
      Header: "Column1",
      accessor: "col1",
    },
    {
      Header: "Colum2",
      accessor: "col2",
    },
    {
      Header: "Colum3",
      accessor: "col3",
    },
    {
      Header: "Colum4",
      accessor: "col4",
    },
    {
      Header: "Colum5",
      accessor: "col5",
    },
    {
      Header: "Colum6",
      accessor: "col6",
    },
    {
      Header: "Colum7",
      accessor: "col7",
    },
    {
      Header: "Colum8",
      accessor: "col8",
    },
    {
      Header: "Column9",
      accessor: "col9",
    },
  ]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Main;
