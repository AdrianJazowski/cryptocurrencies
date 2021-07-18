/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: "90%",
    border: "2px solid darkgrey",
    margin: "auto",
  },
  tableRow: {
    "&:hover": {
      background: "lightgrey",
    },
  },
});

const CryptocurrenciesTable = ({ rows }) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price ($)</TableCell>
            <TableCell align="right">Volume ($)</TableCell>
            <TableCell align="right">MarketCap ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow className={classes.tableRow} key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price} </TableCell>
              <TableCell align="right">{row.volume} </TableCell>
              <TableCell align="right">{row.marketCap} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptocurrenciesTable;
