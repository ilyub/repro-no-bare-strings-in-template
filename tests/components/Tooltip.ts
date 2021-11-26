import { QTooltip } from "quasar";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import * as testUtils from "@vue/test-utils";

import { injectTooltipDelay } from "@/components/Tooltip";
import Tooltip from "@/components/Tooltip.vue";

installQuasarPlugin();

it.each([0, 1000, 2000])("delay", delay => {
  const wrapper = testUtils.mount(Tooltip, {
    global: {
      provide: {
        [injectTooltipDelay as symbol]: delay
      }
    },
    props: {
      language: "en-US"
    }
  });

  expect(wrapper.findComponent(QTooltip).vm.delay).toStrictEqual(delay);
});
