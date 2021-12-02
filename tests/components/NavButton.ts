import { QTooltip } from "quasar";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import * as testUtils from "@vue/test-utils";

import NavButton from "@/components/NavButton.vue";
import { injectTooltipSettings } from "@/components/Tooltip";

installQuasarPlugin();

it("prop: tooltip", () => {
  {
    const wrapper = testUtils.mount(NavButton, {
      global: {
        provide: {
          [injectTooltipSettings as symbol]: { delay: 1000, show: true }
        }
      },
      props: {
        tooltip: "sample-tooltip"
      }
    });

    expect(wrapper.findComponent(QTooltip)).toExist();
  }

  {
    const wrapper = testUtils.mount(NavButton, {
      global: {
        provide: {
          [injectTooltipSettings as symbol]: { delay: 1000, show: true }
        }
      },
      props: {
        language: "en-US"
      }
    });

    expect(wrapper.findComponent(QTooltip)).not.toExist();
  }
});

it("slot: default", () => {
  const wrapper = testUtils.mount(NavButton, {
    global: {
      provide: {
        [injectTooltipSettings as symbol]: { delay: 1000, show: true }
      }
    },
    slots: {
      default: '<div class="sample-class">sample-contents</div>"'
    }
  });

  expect(wrapper.find(".sample-class")).textToEqual("sample-contents");
});
