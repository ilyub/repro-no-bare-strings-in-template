import { computed } from "vue";
import * as testUtils from "@vue/test-utils";

import { injectLanguagePickerSettings } from "@/components/LanguagePicker.extras";
import LanguagePicker from "@/components/LanguagePicker.vue";

it("LanguagePicker", () => {
  const changeLanguageAction = jest.fn();

  const settings = {
    changeLanguageAction,
    items: [
      {
        caption: "English (USA)",
        flag: "us-flag",
        lang: "en-US"
      },
      {
        caption: "Russian",
        flag: "ru-flag",
        lang: "ru-RU"
      }
    ]
  };

  const wrapper = testUtils.mount(LanguagePicker, {
    global: {
      provide: {
        [injectLanguagePickerSettings as symbol]: computed(() => settings)
      }
    },
    props: {
      language: "en-US"
    }
  });

  expect(wrapper).toBeDefined();
});
