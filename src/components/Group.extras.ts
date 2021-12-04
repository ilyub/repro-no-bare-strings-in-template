import * as is from "@skylib/functions/es/guards";

export interface GroupItem {
  readonly id: string;
  readonly show: boolean;
  readonly title: string;
}

export type GroupItems = readonly GroupItem[];

export const isGroupItem: is.Guard<GroupItem> = is.factory(
  is.object.of,
  { id: is.string, show: is.boolean, title: is.string },
  {}
);

export const isGroupItems = is.factory(is.array.of, isGroupItem);
