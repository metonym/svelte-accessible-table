<script>
  import Table from "svelte-accessible-table";
</script>

<svelte:head>
  <title>svelte-accessible-table</title>
</svelte:head>

<Table.Container caption="Influential historical documents">
  <Table.Head>
    <Table.Row>
      <Table.Cell>Document title</Table.Cell>
      <Table.Cell>Description</Table.Cell>
      <Table.Cell>Year</Table.Cell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Declaration of Independence</Table.Cell>
      <Table.Cell>
        Statement adopted by the Continental Congress declaring independence
        from the British Empire.
      </Table.Cell>
      <Table.Cell tabular>1776</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Bill of Rights</Table.Cell>
      <Table.Cell>
        Document containing the first ten amendments to the United States
        Constitution.
      </Table.Cell>
      <Table.Cell tabular>1791</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Declaration of Sentiments</Table.Cell>
      <Table.Cell>
        A document written during the Seneca Falls Convention outlining the
        rights that American women should be entitled to as citizens.
      </Table.Cell>
      <Table.Cell tabular>1848</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Container>
