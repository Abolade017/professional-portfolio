<template>
  <div
    class="bg-white shadow-md rounded-md h-96 hover:bg-primary-blue hover:opacity-90 hover:shadow-none text-primary-gray hover:text-white"
  >
    <img
      :src="/projectImages/ + screenshot + '.png'"
      :alt="screenshot"
      class="h-64 w-full object-cover hover:bg-primary-blue hover:opacity-20 rounded-t-md"
    />
    <div class="text-center text-lg pt-12">
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
