<script>
  import { setContext } from "svelte";

  setContext("TableHead", {});
</script>

<thead
  {...$$restProps}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseout
  on:focus
  on:blur
  on:keydown>
  <slot />
</thead>
