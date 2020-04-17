<script>
  export let caption = undefined; // string | slot:caption
  export let zebra = false;

  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  const _zebra = writable(zebra);
  const id = "caption" + Math.random().toString(36);

  setContext("TableContainer", { zebra: _zebra });

  $: _zebra.set(zebra);
</script>

<style>
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  caption {
    margin-left: 1rem;
    margin-bottom: 0.5rem;
    text-align: left;
  }
</style>

<table {...$$restProps} aria-describedby={id}>
  <slot name="caption" {id}>
    <caption {id}>{caption}</caption>
  </slot>
  <slot />
</table>
