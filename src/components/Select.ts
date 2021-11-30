import * as is from "@skylib/functions/es/guards";
import type { NumStr } from "@skylib/functions/es/types/core";

export interface SelectOption {
  readonly disable?: true;
  readonly label: string;
  readonly value?: NumStr;
}

export const isSelectOption: is.Guard<SelectOption> = is.factory(
  is.object.of,
  { label: is.string },
  { disable: is.true, value: is.numStr }
);

export type SelectOptions = readonly SelectOption[];

export const isSelectOptions = is.factory(is.array.of, isSelectOption);
