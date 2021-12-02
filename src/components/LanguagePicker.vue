<script lang="ts">
import { computed, defineComponent } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";

import { injectRequire, propOptions } from "./api";
import { injectLanguagePickerSettings } from "./LanguagePicker";
import MenuItem from "./MenuItem.vue";
import NavButton from "./NavButton.vue";

export default defineComponent({
  name: "x-language-picker",
  components: {
    "x-menu-item": MenuItem,
    "x-nav-button": NavButton
  },
  props: {
    language: propOptions.required(is.unknown)
  },
  setup(props) {
    const settings = injectRequire(injectLanguagePickerSettings);

    return {
      activeItem: computed(() => {
        const item = settings.value.items.find(
          candidate => candidate.lang === props.language
        );

        assert.not.empty(item);

        return item;
      }),
      changeLanguage(newLanguage: unknown): void {
        const item = settings.value.items.find(
          candidate => candidate.lang === newLanguage
        );

        assert.not.empty(item);
        settings.value.changeLanguageAction(item.lang);
      },
      settings
    };
  }
});
</script>

<template>
  <div>
    <x-nav-button>
      <img
        :alt="activeItem.caption"
        height="20"
        :src="activeItem.flag"
        width="20"
      />
      <q-menu>
        <q-list>
          <x-menu-item
            v-for="(item, key) in settings.items"
            :key="key"
            :caption="item.caption"
            @click="changeLanguage(item.lang)"
          >
            <template #icon>
              <img
                :alt="item.caption"
                height="18"
                :src="item.flag"
                width="18"
              />
            </template>
          </x-menu-item>
        </q-list>
      </q-menu>
    </x-nav-button>
  </div>
</template>
