<script>
  export let tabular = false;

  import { getContext, onDestroy } from "svelte";

  const ctx_table_head = getContext("TableHead");
  const ctx_table_row = getContext("TableRow");
  const id = "cell" + Math.random().toString(36);

  let first_Td = false;
  let unsubscribe = undefined;

  onDestroy(() => {
    if (ctx_table_row !== undefined) {
      ctx_table_row.remove(id);
    }

    if (unsubscribe !== undefined) {
      unsubscribe();
    }
  });

  $: if (ctx_table_row !== undefined) {
    ctx_table_row.add(id);
    unsubscribe = ctx_table_row.cells.subscribe(value => {
      first_Td = value.indexOf(id) === 0;
    });
  }
</script>

<style>
  td,
  th {
    padding: 0.75rem 1rem;
    text-align: left;
  }

  .tabular {
    -webkit-font-feature-settings: "tnum" 1, "kern" 1;
    font-feature-settings: "tnum" 1, "kern" 1;
  }
</style>

{#if ctx_table_head}
  <th
    {...$$restProps}
    scope="col"
    class:tabular
    on:click
    on:mouseover
    on:mouseenter
    on:mouseout
    on:focus
    on:blur
    on:keydown>
    <slot />
  </th>
{:else}
  {#if first_Td}
    <th
      {...$$restProps}
      scope="row"
      class:tabular
      on:click
      on:mouseover
      on:mouseenter
      on:mouseout
      on:focus
      on:blur
      on:keydown>
      <slot />
    </th>
  {:else}
    <td
      {...$$restProps}
      class:tabular
      on:click
      on:mouseover
      on:mouseenter
      on:mouseout
      on:focus
      on:blur
      on:keydown>
      <slot />
    </td>
  {/if}
{/if}
