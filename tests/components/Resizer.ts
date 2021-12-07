import * as testUtils from "@vue/test-utils";

import Resizer from "@/components/Resizer.vue";

it("Resizer", () => {
  const wrapper = testUtils.mount(Resizer, {
    props: {
      max: 200,
      min: 10,
      modelValue: 100
    }
  });

  expect(wrapper).toBeDefined();
});
