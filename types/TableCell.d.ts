/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TableCellProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["th"]> {
  /**
   * @default false
   */
  tabular?: boolean;
}

export default class TableCell extends SvelteComponentTyped<
  TableCellProps,
  {
    click: WindowEventMap["click"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseout: WindowEventMap["mouseout"];
  },
  { default: {} }
> {}
