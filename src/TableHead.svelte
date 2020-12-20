<script>
  import { setContext } from "svelte";

  setContext("TableHead", {});
</script>

<thead {...$$restProps} on:click on:mouseenter on:mouseout>
  <slot />
</thead>
