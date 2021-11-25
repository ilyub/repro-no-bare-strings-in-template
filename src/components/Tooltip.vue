<script lang="ts">
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";

export default defineComponent({
  name: "x-tooltip",
  props: {
    anchor: propOptions(is.string),
    direction: propOptions.default(is.string, "down"),
    self: propOptions(is.string)
  },
  setup(props) {
    return {
      combinedAnchor: computed(() => {
        switch (props.direction) {
          case "down":
            return "bottom middle";

          case "left":
            return "center left";

          case "right":
            return "center right";

          case "up":
            return "top middle";

          default:
            return props.anchor;
        }
      }),
      combinedSelf: computed(() => {
        switch (props.direction) {
          case "down":
            return "top middle";

          case "left":
            return "center right";

          case "right":
            return "center left";

          case "up":
            return "bottom middle";

          default:
            return props.self;
        }
      }),
      transitionHide: computed(() => {
        switch (props.direction) {
          case "down":
            return "jump-up";

          case "left":
            return "jump-right";

          case "right":
            return "jump-left";

          case "up":
            return "jump-down";

          default:
            return props.self;
        }
      }),
      transitionShow: computed(() => {
        switch (props.direction) {
          case "down":
            return "jump-down";

          case "left":
            return "jump-left";

          case "right":
            return "jump-right";

          case "up":
            return "jump-up";

          default:
            return props.self;
        }
      })
    };
  }
});
</script>

<template>
  <q-tooltip
    :anchor="combinedAnchor"
    :delay="1000"
    :self="combinedSelf"
    :transition-hide="transitionHide"
    :transition-show="transitionShow"
  >
    <slot></slot>
  </q-tooltip>
</template>
