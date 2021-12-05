<script lang="ts">
import type { QInput } from "quasar";
import { computed, defineComponent, ref } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";
import { icons } from "./Input.extras";

export default defineComponent({
  name: "x-input",
  props: {
    modelValue: propOptions.required(is.string),
    resetButton: propOptions.boolean()
  },
  emits: {
    "update:model-value"(value: unknown) {
      return is.string(value);
    }
  },
  setup(props, { emit }) {
    const input = ref<QInput | undefined>(undefined);

    return {
      canReset: computed(() => props.modelValue.length > 0),
      icons,
      input,
      reset(): void {
        emit("update:model-value", "");
        assert.not.empty(input.value);
        input.value.focus();
      },
      updateModelValue(value: unknown): void {
        emit("update:model-value", value);
      }
    };
  }
});
</script>

<template>
  <q-input
    ref="input"
    dense
    :model-value="modelValue"
    @update:model-value="updateModelValue"
  >
    <template #append>
      <q-icon
        v-if="resetButton"
        v-show="canReset"
        class="cursor-pointer"
        :name="icons.close"
        @click="reset"
      />
    </template>
  </q-input>
</template>
