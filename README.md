# svelte-accessible-table

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Accessible table component.

## Install

```bash
yarn add -D svelte-accessible-table
```

## Usage

```html
<script>
  import Table from "svelte-accessible-table";
</script>

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
```

## API

### `Table.Container`

| Property name | Value                                          |
| :------------ | :--------------------------------------------- |
| caption       | `string` or `slot:name` (default: `undefined`) |
| zebra         | `boolean` (default: `false`)                   |

### `Table.Cell`

| Property name | Value                        |
| :------------ | :--------------------------- |
| tabular       | `boolean` (default: `false`) |

## Forwarded events

The following events are forwarded to the `Table.Head`, `Table.Row` and `Table.Cell` components.

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:focus
- on:blur
- on:keydown

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-accessible-table.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-accessible-table
[build]: https://travis-ci.com/metonym/svelte-accessible-table.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-accessible-table
