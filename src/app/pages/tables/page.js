// Import library dan komponen yang diperlukan
"use client";
import { useTable } from "react-table";

import React from "react";
import DashboardLayout from "@/app/layout/DashboardLayout";

const TablePage = () => {
  const data = React.useMemo(
    () => [
      {
        id: 1,
        landCover: "Forest",
        year2011: 500,
        year2012: 600,
        year2013: 700,
        year2014: 700,
        year2015: 700,
        year2016: 700,
        year2017: 700,
        year2018: 700,
        year2019: 700,
        year2020: 700,
        year2021: 700,
      },
      {
        id: 2,
        landCover: "Grassland",
        year2011: 300,
        year2012: 400,
        year2013: 450,
        year2014: 700,
        year2015: 300,
        year2016: 200,
        year2017: 200,
        year2018: 740,
        year2019: 750,
        year2020: 800,
        year2021: 900,
      },
      {
        id: 3,
        landCover: "Forest",
        year2011: 500,
        year2012: 600,
        year2013: 700,
        year2014: 700,
        year2015: 700,
        year2016: 700,
        year2017: 700,
        year2018: 700,
        year2019: 700,
        year2020: 700,
        year2021: 700,
      },
      {
        id: 4,
        landCover: "Grassland",
        year2011: 300,
        year2012: 400,
        year2013: 450,
        year2014: 700,
        year2015: 300,
        year2016: 200,
        year2017: 200,
        year2018: 740,
        year2019: 750,
        year2020: 800,
        year2021: 900,
      },
      {
        id: 5,
        landCover: "Forest",
        year2011: 500,
        year2012: 600,
        year2013: 700,
        year2014: 700,
        year2015: 700,
        year2016: 700,
        year2017: 700,
        year2018: 700,
        year2019: 700,
        year2020: 700,
        year2021: 700,
      },
      {
        id: 6,
        landCover: "Grassland",
        year2011: 300,
        year2012: 400,
        year2013: 450,
        year2014: 700,
        year2015: 300,
        year2016: 200,
        year2017: 200,
        year2018: 740,
        year2019: 750,
        year2020: 800,
        year2021: 900,
      },
    ],
    []
  );

  // Kolom-kolom yang akan ditampilkan di tabel
  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Land Cover", accessor: "landCover" },
      { Header: "2011", accessor: "year2011" },
      { Header: "2012", accessor: "year2012" },
      { Header: "2013", accessor: "year2013" },
      { Header: "2014", accessor: "year2014" },
      { Header: "2015", accessor: "year2015" },
      { Header: "2016", accessor: "year2016" },
      { Header: "2017", accessor: "year2017" },
      { Header: "2018", accessor: "year2018" },
      { Header: "2019", accessor: "year2019" },
      { Header: "2020", accessor: "year2020" },
      { Header: "2021", accessor: "year2021" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <DashboardLayout>
      <div className="text-center p-2 font-semibold text-2xl text-gray-800 shadow-sm shadow-gray-400 mx-auto max-w-[fit-content] mb-2 rounded-sm bg-gray-100">
        Land Cover Table
      </div>

      {/* Tabel */}
      <table
        {...getTableProps()}
        className="min-w-full border border-gray-300 mt-3"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  {...column.getHeaderProps()}
                  className="p-2 border-b border-gray-300 bg-gray-200 text-left" // Tambahkan kelas untuk mengatur teks ke kiri
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
              <tr key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    key={cell.column.id}
                    {...cell.getCellProps()}
                    className="p-2 border-b border-gray-300 text-left" // Tambahkan kelas untuk mengatur teks ke kiri
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </DashboardLayout>
  );
};

export default TablePage;
