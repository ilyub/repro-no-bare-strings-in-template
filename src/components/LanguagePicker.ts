import type { ComputedRef, InjectionKey } from "vue";

import type { LocaleName } from "@skylib/functions/es/types/locales";

export type ChangeLanguageAction = (language: LocaleName) => void;

export type InjectLanguagePickerSettings = InjectionKey<
  ComputedRef<LanguagePickerSettings>
>;

export interface Item {
  readonly caption: string;
  readonly flag: string;
  readonly lang: LocaleName;
}

export type Items = readonly Item[];

export interface LanguagePickerSettings {
  readonly changeLanguageAction: ChangeLanguageAction;
  readonly items: Items;
}

export const injectLanguagePickerSettings: InjectLanguagePickerSettings =
  Symbol("LanguagePickerSettings");
