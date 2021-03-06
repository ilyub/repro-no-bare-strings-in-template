import * as testUtils from "@vue/test-utils";

import Select from "@/components/Select.vue";

it("Select", () => {
  const wrapper = testUtils.mount(Select, {
    props: {
      options: [
        { disable: true, label: "Select option", value: undefined },
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: "a" }
      ]
    }
  });

  expect(wrapper).toBeDefined();
});
