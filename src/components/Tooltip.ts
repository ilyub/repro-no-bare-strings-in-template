import type { ComputedRef, InjectionKey } from "vue";

export const injectTooltipDelay: InjectionKey<ComputedRef<number>> =
  Symbol("TooltipDelay");
