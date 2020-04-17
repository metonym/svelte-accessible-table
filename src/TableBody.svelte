<script>
  import { setContext } from "svelte";

  setContext("TableBody", {});
</script>

<tbody aria-live="polite" {...$$restProps}>
  <slot />
</tbody>
