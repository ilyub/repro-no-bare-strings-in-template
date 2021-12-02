import type { ComputedRef, InjectionKey } from "vue";

export interface TooltipSettings {
  readonly delay: number;
  readonly show: boolean;
}

export const injectTooltipSettings: InjectionKey<ComputedRef<TooltipSettings>> =
  Symbol("TooltipSettings");
