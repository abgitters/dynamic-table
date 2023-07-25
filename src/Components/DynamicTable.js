import React, { useEffect, useState } from "react";
const DynamicTable = () => {
  const [totalRows, setTotalRows] = useState(0);
  const [totalCols, setTotalCols] = useState(0);
  const [showtable, setShowtable] = useState(false);
  useEffect(() => {
    setShowtable(false);
  }, [totalRows, totalCols]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "rows") {
      setTotalRows(value);
    } else {
      setTotalCols(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowtable(!showtable);
  };

  const createTable = () => {
    const table = [];

    for (let i = 0; i < totalRows; i++) {
      const cells = [];

      for (let j = 0; j < totalCols; j++) {
        cells.push(
          <td
            style={{ border: "1px solid", padding: 3, borderRadius: 3 }}
            key={`${i}-${j}`}
          >{`${i + 1},${j + 1}`}</td>
        );
      }

      table.push(
        <tr style={{ padding: 3 }} key={i}>
          {cells}
        </tr>
      );
    }

    return table;
  };

  return (
    <>
      <h2>Dynamic Rows And Columns</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="rows"
          placeholder="rows"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <input
          type="number"
          name="columns"
          placeholder="columns"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>

      {showtable && (
        <table
          style={{
            border: "1px solid",
            borderRadius: 4,
            margin: "auto",
            marginTop: 30,
            padding: 3,
          }}
        >
          <tbody>{createTable()}</tbody>
        </table>
      )}
    </>
  );
};

export default DynamicTable;
