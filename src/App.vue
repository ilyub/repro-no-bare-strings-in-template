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

import type { LocaleName } from "@skylib/functions/es/types/locales";

import Knob from "./components/Knob.vue";
import type { LanguagePickerSettings } from "./components/LanguagePicker";
import { injectLanguagePickerSettings } from "./components/LanguagePicker";
import LanguagePicker from "./components/LanguagePicker.vue";
import MenuItem from "./components/MenuItem.vue";
import NavButton from "./components/NavButton.vue";
import type { SelectOptions } from "./components/Select";
import Select from "./components/Select.vue";
import type { TooltipSettings } from "./components/Tooltip";
import { injectTooltipSettings } from "./components/Tooltip";
import Tooltip from "./components/Tooltip.vue";

export default defineComponent({
  name: "app",
  components: {
    "x-knob": Knob,
    "x-language-picker": LanguagePicker,
    "x-menu-item": MenuItem,
    "x-nav-button": NavButton,
    "x-select": Select,
    "x-tooltip": Tooltip
  },
  setup() {
    type SelectValue = 1 | "a" | undefined;

    const language = ref<LocaleName>("en-US");

    const selectOptions: SelectOptions<SelectValue> = [
      { disable: true, label: "Select option", value: undefined },
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: "a" }
    ];

    const selectValue = ref<SelectValue>(undefined);

    const tooltipDelay = ref(1000);

    const tooltipShow = ref(true);

    provide(
      injectLanguagePickerSettings,
      computed((): LanguagePickerSettings => {
        return {
          changeLanguageAction(lang): void {
            language.value = lang;
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
      language,
      mdiAccount,
      mdiArrowDown,
      mdiArrowLeft,
      mdiArrowRight,
      mdiArrowUp,
      mdiClose,
      mdiPen,
      selectOptions,
      selectValue,
      tooltipDelay,
      tooltipShow,
      us
    };
  }
});
</script>

<template>
  <div class="q-ma-lg">
    <table class="q-mb-lg">
      <tr>
        <td>
          Show tooltips:
          <q-toggle v-model="tooltipShow" />
          with delay of
          <x-knob
            v-model="tooltipDelay"
            class="q-ml-sm q-mr-sm"
            :disable="!tooltipShow"
            :max="3000"
            :min="0"
          />
          ms
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <td>Knob</td>
        <td>
          <x-knob :max="1000" :min="0" :step="10" />
        </td>
      </tr>
      <tr>
        <td>Language picker</td>
        <td>
          <x-language-picker :language="language" />
        </td>
      </tr>
      <tr>
        <td>Menu item</td>
        <td>
          <q-btn flat :icon="mdiAccount" round>
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
          </q-btn>
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
        <td>Select</td>
        <td>
          <x-select v-model="selectValue" :options="selectOptions" />
        </td>
      </tr>
      <tr>
        <td>Tooltip</td>
        <td>
          <q-btn flat :icon="mdiArrowDown" round>
            <x-tooltip>Down tooltip</x-tooltip>
          </q-btn>
          <q-btn flat :icon="mdiArrowDown" round>
            <x-tooltip direction="down">Down tooltip</x-tooltip>
          </q-btn>
          <q-btn flat :icon="mdiArrowDown" round>
            <x-tooltip direction="down-left">Down-left tooltip</x-tooltip>
          </q-btn>
          <q-btn flat :icon="mdiArrowDown" round>
            <x-tooltip direction="down-right">Down-right tooltip</x-tooltip>
          </q-btn>
          <q-btn flat :icon="mdiArrowLeft" round>
            <x-tooltip direction="left">Left tooltip</x-tooltip>
          </q-btn>
          <q-btn flat :icon="mdiArrowLeft" round>
            <x-tooltip direction="left-down">Left-down tooltip</x-tooltip>
          </q-btn>
          <q-btn flat :icon="mdiArrowLeft" round>
            <x-tooltip direction="left-up">Left-up tooltip</x-tooltip>
          </q-btn>
          <q-btn flat :icon="mdiArrowRight" round>
            <x-tooltip direction="right">Right tooltip</x-tooltip>
          </q-btn>
          <q-btn flat :icon="mdiArrowRight" round>
            <x-tooltip direction="right-down">Right-down tooltip</x-tooltip>
          </q-btn>
          <q-btn flat :icon="mdiArrowRight" round>
            <x-tooltip direction="right-up">Right-up tooltip</x-tooltip>
          </q-btn>
          <q-btn flat :icon="mdiArrowUp" round>
            <x-tooltip direction="up">Up tooltip</x-tooltip>
          </q-btn>
          <q-btn flat :icon="mdiArrowUp" round>
            <x-tooltip direction="up-left">Up-left tooltip</x-tooltip>
          </q-btn>
          <q-btn flat :icon="mdiArrowUp" round>
            <x-tooltip direction="up-right">Up-right tooltip</x-tooltip>
          </q-btn>
        </td>
      </tr>
    </table>
  </div>
</template>
