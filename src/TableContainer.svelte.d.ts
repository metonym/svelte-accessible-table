/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TableContainerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["table"]> {
  caption?: string;

  /**
   * @default false
   */
  zebra?: boolean;
}

export default class TableContainer extends SvelteComponentTyped<
  TableContainerProps,
  {},
  { default: {}; caption: { id: string } }
> {}
