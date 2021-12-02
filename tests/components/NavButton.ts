import { QTooltip } from "quasar";
import { computed } from "vue";
import * as testUtils from "@vue/test-utils";

import NavButton from "@/components/NavButton.vue";
import { injectTooltipSettings } from "@/components/Tooltip";

it("prop: tooltip", () => {
  {
    const tooltipSettings = { delay: 1000, show: true };

    const wrapper = testUtils.mount(NavButton, {
      global: {
        provide: {
          [injectTooltipSettings as symbol]: computed(() => tooltipSettings)
        }
      },
      props: {
        tooltip: "sample-tooltip"
      }
    });

    expect(wrapper.findComponent(QTooltip)).toExist();
  }

  {
    const tooltipSettings = { delay: 1000, show: true };

    const wrapper = testUtils.mount(NavButton, {
      global: {
        provide: {
          [injectTooltipSettings as symbol]: computed(() => tooltipSettings)
        }
      }
    });

    expect(wrapper.findComponent(QTooltip)).not.toExist();
  }
});

it("slot: default", () => {
  const tooltipSettings = { delay: 1000, show: true };

  const wrapper = testUtils.mount(NavButton, {
    global: {
      provide: {
        [injectTooltipSettings as symbol]: computed(() => tooltipSettings)
      }
    },
    slots: {
      default: '<div class="sample-class">sample-contents</div>"'
    }
  });

  expect(wrapper.find(".sample-class")).textToEqual("sample-contents");
});
