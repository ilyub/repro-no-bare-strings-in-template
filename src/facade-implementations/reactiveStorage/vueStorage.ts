import { computed, reactive, watch } from "vue";

import type { Facade } from "@skylib/facades/es/reactiveStorage";
import * as fn from "@skylib/functions/es/function";

export const implementation = fn.run((): Facade => {
  function vueStorage<T extends object>(data: T): T {
    return reactive(data) as T;
  }

  vueStorage.withChangesHandler = <T extends object, R>(
    data: T,
    onChange: (x: R) => void,
    reduce: (x: T) => R
  ): T => {
    const result = reactive(data) as T;

    const reduced = computed(() => reduce(result));

    watch(reduced, () => {
      onChange(reduced.value);
    });

    return result;
  };

  return vueStorage;
});
