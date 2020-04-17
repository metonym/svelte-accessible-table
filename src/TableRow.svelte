<script>
  import { getContext, setContext } from "svelte";
  import { writable } from "svelte/store";

  const { zebra } = getContext("TableContainer");
  const cells = writable([]);

  setContext("TableRow", {
    cells,
    add: id => {
      cells.update(_ => [..._, id]);
    },
    remove: id => {
      cells.set($cells.filter(cell_id => cell_id !== id));
    }
  });
</script>

<style>
  tr {
    border-bottom: 1px solid #8d8d8d;
  }

  .zebra:not(:first-of-type):nth-child(even) {
    background-color: #f4f4f4;
  }
</style>

<tr
  {...$$restProps}
  class:zebra={$zebra}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseout
  on:focus
  on:blur
  on:keydown>
  <slot />
</tr>
