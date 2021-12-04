import type { ComputedRef, InjectionKey } from "vue";

export type InjectTooltipSettings = InjectionKey<ComputedRef<TooltipSettings>>;

export interface TooltipSettings {
  readonly delay: number;
  readonly show: boolean;
}

export const injectTooltipSettings: InjectTooltipSettings =
  Symbol("TooltipSettings");
