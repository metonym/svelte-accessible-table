# svelte-accessible-table

[![NPM][npm]][npm-url]

> Accessible Svelte table component.

<!-- REPO_URL -->

---

<!-- TOC -->

## Installation

**Yarn**

```bash
yarn add -D svelte-accessible-table
```

**NPM**

```bash
npm i -D svelte-accessible-table
```

## Usage

```svelte
<script>
  import {
    TableContainer,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
  } from "svelte-accessible-table";
</script>

<TableContainer caption="Influential historical documents">
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
```

## API

### TableContainer

| Prop name | Value                                          |
| :-------- | :--------------------------------------------- |
| caption   | `string` or `slot:name` (default: `undefined`) |
| zebra     | `boolean` (default: `false`)                   |

### TableCell

| Prop name | Value                        |
| :-------- | :--------------------------- |
| tabular   | `boolean` (default: `false`) |

### Forwarded events

The following events are forwarded to the `TableHead`, `TableRow` and `TableCell` components.

- on:click
- on:mouseenter
- on:mouseleave

## TypeScript

Svelte version 3.31 or greater is required to use this component with TypeScript.

TypeScript definitions are located in the [types folder](./types).

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-accessible-table.svg?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/svelte-accessible-table
