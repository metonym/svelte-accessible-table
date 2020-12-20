/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TableRowProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["tr"]> {}

export default class TableRow extends SvelteComponentTyped<
  TableRowProps,
  {
    click: WindowEventMap["click"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseout: WindowEventMap["mouseout"];
  },
  { default: {} }
> {}
