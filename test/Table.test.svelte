<script lang="ts">
  import {
    TableContainer,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
  } from "../src";
  import Table from "../src/TableBody.svelte";
</script>

<!-- svelte-ignore missing-declaration -->
<TableContainer zebra caption="Influential historical documents">
  <TableHead>
    <TableRow>
      <TableCell>Document title</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>Year</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Declaration of Independence</TableCell>
      <TableCell>
        Statement adopted by the Continental Congress declaring independence
        from the British Empire
      </TableCell>
      <TableCell tabular>1776</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Bill of Rights</TableCell>
      <TableCell>
        Document containing the first ten amendments to the United States
        Constitution
      </TableCell>
      <TableCell tabular>1791</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Declaration of Sentiments</TableCell>
      <TableCell>
        A document written during the Seneca Falls Convention outlining the
        rights that American women should be entitled to as citizens
      </TableCell>
      <TableCell tabular>1848</TableCell>
    </TableRow>
  </TableBody>
</TableContainer>

<!-- svelte-ignore missing-declaration -->
<Table />
