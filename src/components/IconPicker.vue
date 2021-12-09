<script lang="ts">
import * as _ from "lodash-es";
import { computed, defineComponent, ref } from "vue";
// eslint-disable-next-line @skylib/consistent-import
import * as mdi from "@mdi/js-2";

import * as reflect from "@skylib/functions/es/reflect";

import { icons, lang } from "./IconPicker.extras";

export default defineComponent({
  name: "x-icon-picker",
  setup() {
    const page = ref(0);

    const show = ref(false);

    const names = Object.keys(mdi).filter(key => key.startsWith("mdi"));

    const frame = computed(() =>
      _.chunk(
        names.slice(0, 8 * 6).map(name => {
          return {
            icon: reflect.get(mdi, name),
            name
          };
        }),
        8
      )
    );

    return {
      frame,
      from: computed(() => page.value * 8 * 6 + 1),
      icons,
      lang,
      page,
      show,
      size: names.length,
      to: computed(() => page.value * 8 * 6 + 8 * 6)
    };
  }
});
</script>

<template>
  <x-nav-button :icon="icons.imageEditOutline" @click="show = true">
    <q-dialog v-model="show">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ lang.IconPicker }}</div>
        </q-card-section>
        <q-card-section class="q-py-none">
          <div v-for="(row, index) in frame" :key="index">
            <x-nav-button
              v-for="cell in row"
              :key="cell.name"
              :icon="cell.icon"
            />
          </div>
        </q-card-section>
        <q-card-actions>
          <x-nav-button :icon="icons.chevronLeft" />
          <q-space />
          <span>{{ from }} &ndash; {{ to }} {{ lang.of }} {{ size }}</span>
          <q-space />
          <x-nav-button :icon="icons.chevronRight" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </x-nav-button>
</template>
