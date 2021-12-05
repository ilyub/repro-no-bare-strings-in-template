import * as is from "@skylib/functions/es/guards";
import type { NumStrU } from "@skylib/functions/es/types/core";

export interface SelectOption<T extends NumStrU = NumStrU> {
  readonly disable?: boolean;
  readonly label: string;
  readonly value: T;
}

export type SelectOptions<T extends NumStrU = NumStrU> = ReadonlyArray<
  SelectOption<T>
>;

export const isSelectOption: is.Guard<SelectOption> = is.factory(
  is.object.of,
  { label: is.string, value: is.numStrU },
  { disable: is.boolean }
);

export const isSelectOptions = is.factory(is.array.of, isSelectOption);
