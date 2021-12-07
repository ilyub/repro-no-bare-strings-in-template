<script lang="ts">
import { defineComponent } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";

interface Offset {
  readonly x: number;
  readonly y: number;
}

interface ResizerEvent {
  readonly isFinal: boolean;
  readonly isFirst: boolean;
  readonly offset: Offset;
}

const isOffset: is.Guard<Offset> = is.factory(
  is.object.of,
  { x: is.number, y: is.number },
  {}
);

const isResizerEvent: is.Guard<ResizerEvent> = is.factory(
  is.object.of,
  { isFinal: is.boolean, isFirst: is.boolean, offset: isOffset },
  {}
);

export default defineComponent({
  name: "x-resizer",
  props: {
    max: propOptions(is.number),
    min: propOptions.required(is.number),
    modelValue: propOptions.required(is.number)
  },
  emits: {
    "update:model-value"(value: unknown) {
      return is.number(value);
    }
  },
  setup(props, { emit }) {
    return {
      handlePan(event: unknown): void {
        assert.byGuard(event, isResizerEvent);

        if (event.isFinal)
          emit(
            "update:model-value",
            limitMin(limitMax(props.modelValue + event.offset.x))
          );
      }
    };

    function limitMax(value: number): number {
      return is.not.empty(props.max) ? Math.min(value, props.max) : value;
    }

    function limitMin(value: number): number {
      return Math.max(value, props.min);
    }
  }
});
</script>

<template>
  <div v-touch-pan.horizontal.mouse="handlePan"></div>
</template>

<style lang="scss" scoped>
div {
  cursor: col-resize;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 5px;
  z-index: 1000;
  height: 100%;
}
</style>
