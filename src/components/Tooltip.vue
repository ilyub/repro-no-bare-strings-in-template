<script lang="ts">
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { injectRequire, propOptions } from "./api";
import type { TooltipSettings } from "./Tooltip";
import { injectTooltipSettings } from "./Tooltip";

export default defineComponent({
  name: "x-tooltip",
  props: {
    direction: propOptions.default(is.string, "down")
  },
  setup(props) {
    const settings = injectRequire<TooltipSettings>(injectTooltipSettings);

    return {
      combinedAnchor: computed(() => {
        switch (props.direction) {
          case "down":
            return "bottom middle";

          case "down-left":
            return "bottom right";

          case "down-right":
            return "bottom left";

          case "left":
            return "center left";

          case "left-down":
            return "top left";

          case "left-up":
            return "bottom left";

          case "right":
            return "center right";

          case "right-down":
            return "top right";

          case "right-up":
            return "bottom right";

          case "up":
            return "top middle";

          case "up-left":
            return "top right";

          case "up-right":
            return "top left";

          default:
            return "bottom middle";
        }
      }),
      combinedSelf: computed(() => {
        switch (props.direction) {
          case "down":
            return "top middle";

          case "down-left":
            return "top right";

          case "down-right":
            return "top left";

          case "left":
            return "center right";

          case "left-down":
            return "top right";

          case "left-up":
            return "bottom right";

          case "right":
            return "center left";

          case "right-down":
            return "top left";

          case "right-up":
            return "bottom left";

          case "up":
            return "bottom middle";

          case "up-left":
            return "bottom right";

          case "up-right":
            return "bottom left";

          default:
            return "top middle";
        }
      }),
      offset: computed(() => {
        switch (props.direction) {
          case "down":
          case "down-left":
          case "down-right":
            return [0, 10];

          case "left":
          case "left-down":
          case "left-up":
            return [10, 0];

          case "right":
          case "right-down":
          case "right-up":
            return [10, 0];

          case "up":
          case "up-left":
          case "up-right":
            return [0, 10];

          default:
            return [0, 10];
        }
      }),
      settings,
      transitionHide: computed(() => {
        switch (props.direction) {
          case "down":
          case "down-left":
          case "down-right":
            return "jump-up";

          case "left":
          case "left-down":
          case "left-up":
            return "jump-right";

          case "right":
          case "right-down":
          case "right-up":
            return "jump-left";

          case "up":
          case "up-left":
          case "up-right":
            return "jump-down";

          default:
            return "jump-up";
        }
      }),
      transitionShow: computed(() => {
        switch (props.direction) {
          case "down":
          case "down-left":
          case "down-right":
            return "jump-down";

          case "left":
          case "left-down":
          case "left-up":
            return "jump-left";

          case "right":
          case "right-down":
          case "right-up":
            return "jump-right";

          case "up":
          case "up-left":
          case "up-right":
            return "jump-up";

          default:
            return "jump-down";
        }
      })
    };
  }
});
</script>

<template>
  <q-tooltip
    v-if="settings.show"
    :anchor="combinedAnchor"
    :delay="settings.delay"
    :offset="offset"
    :self="combinedSelf"
    :transition-hide="transitionHide"
    :transition-show="transitionShow"
  >
    <slot></slot>
  </q-tooltip>
</template>
