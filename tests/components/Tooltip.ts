import { QTooltip } from "quasar";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import * as testUtils from "@vue/test-utils";

import { injectTooltipSettings } from "@/components/Tooltip";
import Tooltip from "@/components/Tooltip.vue";

installQuasarPlugin();

it.each([
  { delay: 0, show: true },
  { delay: 1000, show: true },
  { delay: 1000, show: false }
])("delay", settings => {
  const wrapper = testUtils.mount(Tooltip, {
    global: {
      provide: {
        [injectTooltipSettings as symbol]: settings
      }
    },
    props: {
      language: "en-US"
    }
  });

  const tooltip = wrapper.findComponent(QTooltip);

  if (settings.show) expect(tooltip.vm.delay).toStrictEqual(settings.delay);
  else expect(tooltip).not.toExist();
});
