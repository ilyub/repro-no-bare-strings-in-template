import * as testUtils from "@vue/test-utils";

import IconPicker from "@/components/IconPicker.vue";

it("IconPicker", () => {
  const wrapper = testUtils.mount(IconPicker);

  expect(wrapper).toBeDefined();
});
