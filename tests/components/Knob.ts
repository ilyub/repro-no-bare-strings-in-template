import * as testUtils from "@vue/test-utils";

import Knob from "@/components/Knob.vue";

it("Knob", () => {
  const wrapper = testUtils.mount(Knob);

  expect(wrapper).toBeDefined();
});
