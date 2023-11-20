<template>
  <div class="px-12">
    <h1 class="text-primary-gray font-bold text-3xl py-6">Projects</h1>
    <div class="flex justify-between space-x-12">
      <div v-for="project in projects" :key="project.id">
        <div
          class="bg-white shadow-md rounded-md h-96 hover:bg-primary-blue hover:opacity-50"
        >
          <img
            :src="/projectImages/ + project.photo + '.png'"
            :alt="project.photo"
            class="h-64 hover:shadow-primary-blue hover:opacity-90"
          />
          <div class="text-center text-primary-gray text-lg pt-12">
            {{ project.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const projects = [
  { id: 1, photo: "MovieFinder", name: "movieFinder" },
  { id: 2, photo: "AdviceGenerator", name: "Advice Generator" },
  { id: 3, photo: "fitness", name: "Fitness Landing Page" },
  { id: 4, photo: "CountryFlag", name: "country Flag Api" },
];
</script>
