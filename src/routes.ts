import type { RouteRecordRaw } from "vue-router";

export const routes: readonly RouteRecordRaw[] = [
  {
    component: { template: "<div />" },
    path: "/:catchAll(.*)"
  }
];
