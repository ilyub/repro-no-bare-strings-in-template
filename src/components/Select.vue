<script lang="ts">
import { computed, defineComponent } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";
import { isSelectOption, isSelectOptions } from "./Select";

export default defineComponent({
  name: "x-select",
  props: {
    modelValue: propOptions(is.numStrU),
    options: propOptions.required(isSelectOptions)
  },
  emits: {
    "update:model-value"(value: unknown) {
      assert.numStrU(value);

      return true;
    }
  },
  setup(props, { emit }) {
    return {
      activeOption: computed(() => {
        const result = props.options.find(
          option => option.value === props.modelValue
        );

        assert.not.empty(result, "invalid value");

        return result;
      }),
      updateModelValue(value: unknown): void {
        assert.byGuard(value, isSelectOption);
        emit("update:model-value", value.value);
      }
    };
  }
});
</script>

<template>
  <q-select
    filled
    :model-value="activeOption"
    :options="options"
    @update:model-value="updateModelValue"
  />
</template>
