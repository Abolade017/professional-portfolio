<template>
  <div
    class="bg-white shadow-md rounded-md h-96 hover:bg-primary-blue hover:opacity-90 hover:shadow-none"
  >
    <img
      :src="/projectImages/ + screenshot + '.png'"
      :alt="screenshot"
      class="h-64 object-cover hover:bg-primary-blue hover:opacity-20"
    />
    <div class="text-center text-primary-gray text-lg pt-12">
      <a :href="url" target="_blank"> {{ name }}</a>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  id: Number,
  name: String,
  url: String,
  screenshot: String,
});
</script>
