import * as testUtils from "@vue/test-utils";

import type { GroupItems } from "@/components/Group.extras";
import Group from "@/components/Group.vue";

it("Group", () => {
  const items: GroupItems = [
    {
      id: "section1",
      show: true,
      title: "Aaa bbb"
    },
    {
      id: "section2",
      show: true,
      title: "Bbb ccc"
    },
    {
      id: "section3",
      show: true,
      title: "Ccc ddd"
    }
  ];

  const wrapper = testUtils.mount(Group, {
    props: {
      items
    }
  });

  expect(wrapper).toBeDefined();
});
