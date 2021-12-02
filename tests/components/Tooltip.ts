import { QTooltip } from "quasar";
import { computed } from "vue";
import * as testUtils from "@vue/test-utils";

import { injectTooltipSettings } from "@/components/Tooltip";
import Tooltip from "@/components/Tooltip.vue";

it.each([
  { delay: 0, show: true },
  { delay: 1000, show: true },
  { delay: 1000, show: false }
])("delay", settings => {
  const wrapper = testUtils.mount(Tooltip, {
    global: {
      provide: {
        [injectTooltipSettings as symbol]: computed(() => settings)
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
