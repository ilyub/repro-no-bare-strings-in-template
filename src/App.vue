<script lang="ts">
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import ru from "flag-icon-css/flags/1x1/ru.svg";
import us from "flag-icon-css/flags/1x1/us.svg";
import { computed, defineComponent, provide, ref } from "vue";
import {
  mdiAccount,
  mdiArrowDown,
  mdiArrowLeft,
  mdiArrowRight,
  mdiArrowUp,
  mdiClose,
  mdiPen
} from "@mdi/js";

import { lang } from "@skylib/facades/es/lang";
import { Dictionary } from "@skylib/framework/es/facade-implementations/lang/dictionary";
import type { LocaleName } from "@skylib/functions/es/types/locales";

import type { GroupItems } from "./components/Group.extras";
import type { LanguagePickerSettings } from "./components/LanguagePicker.extras";
import { injectLanguagePickerSettings } from "./components/LanguagePicker.extras";
import type { SelectOptions } from "./components/Select.extras";
import type { TooltipSettings } from "./components/Tooltip.extras";
import { injectTooltipSettings } from "./components/Tooltip.extras";

export default defineComponent({
  name: "app",
  setup() {
    type SelectValue = 1 | "a" | "b" | undefined;

    const inputValue1 = ref("");

    const inputValue2 = ref("");

    const knobValue = ref(100);

    const language = ref<LocaleName>("en-US");

    const resizerShow = ref(true);

    const resizerWidth = ref(200);

    const searchString = ref("");

    const selectOptions: SelectOptions<SelectValue> = [
      { label: "Select option", value: undefined },
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: "a" },
      { disable: true, label: "Option 3", value: "b" }
    ];

    const selectValue = ref<SelectValue>(undefined);

    const showSection1 = ref(true);

    const showSection2 = ref(true);

    const showSection3 = ref(true);

    const tooltipDelay = ref(1000);

    const tooltipShow = ref(true);

    provide(
      injectLanguagePickerSettings,
      computed((): LanguagePickerSettings => {
        return {
          changeLanguageAction(value): void {
            language.value = value;
            Dictionary.configure({ localeName: value });
          },
          items: [
            {
              caption: "English (USA)",
              flag: us,
              lang: "en-US"
            },
            {
              caption: "Russian",
              flag: ru,
              lang: "ru-RU"
            }
          ]
        };
      })
    );

    provide(
      injectTooltipSettings,
      computed((): TooltipSettings => {
        return {
          delay: tooltipDelay.value,
          show: tooltipShow.value
        };
      })
    );

    return {
      groupItems: computed(
        (): GroupItems => [
          {
            id: "section2",
            show: showSection2.value,
            title: "Section 2 bbb ccc"
          },
          {
            id: "section1",
            show: showSection1.value,
            title: "Section 1 aaa bbb"
          },
          {
            id: "section3",
            show: showSection3.value,
            title: "Section 12 ccc ddd"
          }
        ]
      ),
      inputValue1,
      inputValue2,
      knobValue,
      lang,
      language,
      mdiAccount,
      mdiArrowDown,
      mdiArrowLeft,
      mdiArrowRight,
      mdiArrowUp,
      mdiClose,
      mdiPen,
      resizerShow,
      resizerWidth,
      searchString,
      selectOptions,
      selectValue,
      showSection1,
      showSection2,
      showSection3,
      tooltipDelay,
      tooltipShow,
      us
    };
  }
});
</script>

<template>
  <table class="q-ma-lg q-mb-xl">
    <caption>
      Sample components
    </caption>
    <tr>
      <td>Group</td>
      <td>
        <x-input v-model="searchString" label="Search for settings" />
        <div class="q-mt-md">
          Show
          <q-checkbox v-model="showSection1" /> 1
          <q-checkbox v-model="showSection2" /> 2
          <q-checkbox v-model="showSection3" /> 3
        </div>
        <x-group
          class="q-mt-lg"
          :items="groupItems"
          not-found-label="No results found"
          :search-string="searchString"
        >
          <template #section2>Section 2</template>
          <template #section1>Section 1</template>
          <template #section3>Section 12</template>
        </x-group>
      </td>
    </tr>
    <tr>
      <td>Input</td>
      <td>
        <x-input v-model="inputValue1" />
        <x-input v-model="inputValue2" reset-button />
      </td>
    </tr>
    <tr>
      <td>Knob</td>
      <td>
        <x-knob v-model="knobValue" :max="1000" :step="10" />
      </td>
    </tr>
    <tr>
      <td>Language picker</td>
      <td class="flex items-center">
        <x-language-picker :language="language" />
        {{ lang.SampleWord }}
      </td>
    </tr>
    <tr>
      <td>Menu item</td>
      <td>
        <x-nav-button :icon="mdiAccount">
          <q-menu>
            <q-list>
              <x-menu-item caption="Settings" :icon="mdiPen" />
              <x-menu-item caption="Language">
                <template #icon>
                  <img alt="Alt text" height="18" :src="us" width="18" />
                </template>
              </x-menu-item>
              <q-separator />
              <x-menu-item caption="Exit" />
            </q-list>
          </q-menu>
        </x-nav-button>
      </td>
    </tr>
    <tr>
      <td>Nav button</td>
      <td>
        <x-nav-button :icon="mdiArrowDown" tooltip="Down tooltip" />
        <x-nav-button
          :icon="mdiArrowDown"
          tooltip="Down tooltip"
          tooltip-direction="down"
        />
        <x-nav-button
          :icon="mdiArrowLeft"
          tooltip="Left tooltip"
          tooltip-direction="left"
        />
        <x-nav-button
          :icon="mdiArrowRight"
          tooltip="Right tooltip"
          tooltip-direction="right"
        />
        <x-nav-button
          :icon="mdiArrowUp"
          tooltip="Up tooltip"
          tooltip-direction="up"
        />
        <x-nav-button>
          <img alt="Alt text" height="20" :src="us" width="20" />
        </x-nav-button>
      </td>
    </tr>
    <tr>
      <td>Resizer</td>
      <td>
        <q-toggle v-model="resizerShow" />
        <div
          class="q-mt-sm resizer"
          :style="{
            width: `${resizerWidth}px`
          }"
        >
          <x-resizer
            v-show="resizerShow"
            v-model="resizerWidth"
            :max="300"
            :min="100"
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>Select</td>
      <td>
        <x-select v-model="selectValue" :options="selectOptions" />
      </td>
    </tr>
    <tr>
      <td>Tooltip</td>
      <td>
        <div>
          Show tooltips:
          <q-toggle v-model="tooltipShow" />
          with delay of
          <x-knob
            v-model="tooltipDelay"
            class="q-ml-sm q-mr-sm"
            :disable="!tooltipShow"
            :max="3000"
            :step="100"
          />
          ms
        </div>
        <div>
          <x-nav-button :icon="mdiArrowDown">
            <x-tooltip>Down tooltip</x-tooltip>
          </x-nav-button>
          <x-nav-button :icon="mdiArrowDown">
            <x-tooltip direction="down">Down tooltip</x-tooltip>
          </x-nav-button>
          <x-nav-button :icon="mdiArrowDown">
            <x-tooltip direction="down-left">Down-left tooltip</x-tooltip>
          </x-nav-button>
          <x-nav-button :icon="mdiArrowDown">
            <x-tooltip direction="down-right">Down-right tooltip</x-tooltip>
          </x-nav-button>
          <x-nav-button :icon="mdiArrowLeft">
            <x-tooltip direction="left">Left tooltip</x-tooltip>
          </x-nav-button>
          <x-nav-button :icon="mdiArrowLeft">
            <x-tooltip direction="left-down">Left-down tooltip</x-tooltip>
          </x-nav-button>
          <x-nav-button :icon="mdiArrowLeft">
            <x-tooltip direction="left-up">Left-up tooltip</x-tooltip>
          </x-nav-button>
          <x-nav-button :icon="mdiArrowRight">
            <x-tooltip direction="right">Right tooltip</x-tooltip>
          </x-nav-button>
          <x-nav-button :icon="mdiArrowRight">
            <x-tooltip direction="right-down">Right-down tooltip</x-tooltip>
          </x-nav-button>
          <x-nav-button :icon="mdiArrowRight">
            <x-tooltip direction="right-up">Right-up tooltip</x-tooltip>
          </x-nav-button>
          <x-nav-button :icon="mdiArrowUp">
            <x-tooltip direction="up">Up tooltip</x-tooltip>
          </x-nav-button>
          <x-nav-button :icon="mdiArrowUp">
            <x-tooltip direction="up-left">Up-left tooltip</x-tooltip>
          </x-nav-button>
          <x-nav-button :icon="mdiArrowUp">
            <x-tooltip direction="up-right">Up-right tooltip</x-tooltip>
          </x-nav-button>
        </div>
      </td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
table {
  border-collapse: collapse;

  td {
    padding: 10px;
    border: 1px solid $grey-4;
  }
}

.resizer {
  position: relative;
  height: 50px;
  background: blue;
}
</style>
