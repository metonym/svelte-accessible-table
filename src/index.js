import TableContainer from "./TableContainer.svelte";
import TableHead from "./TableHead.svelte";
import TableBody from "./TableBody.svelte";
import TableRow from "./TableRow.svelte";
import TableCell from "./TableCell.svelte";

const Table = {
  Container: TableContainer,
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
};

export default Table;
export { TableContainer, TableHead, TableBody, TableRow, TableCell };
