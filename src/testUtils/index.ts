import { reactiveStorage } from "@skylib/facades/es/reactiveStorage";

import * as vueStorage from "../facade-implementations/reactiveStorage/vueStorage";

/**
 * Jest reset.
 */
export function jestReset(): void {
  reactiveStorage.setImplementation(vueStorage.implementation);
}

/**
 * Jest setup.
 */
export function jestSetup(): void {
  jestReset();
}
