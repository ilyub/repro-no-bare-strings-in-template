<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "x-knob"
});
</script>

<template>
  <q-knob
    color="primary"
    show-value
    size="55px"
    :thickness="0.18"
    track-color="grey-3"
  />
</template>
