/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TableHeadProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["thead"]> {}

export default class TableHead extends SvelteComponentTyped<
  TableHeadProps,
  {
    click: WindowEventMap["click"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseout: WindowEventMap["mouseout"];
  },
  { default: {} }
> {}
