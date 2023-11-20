<template>
  <div class="px-12">
    <h1 class="text-primary-gray font-bold text-3xl py-6">Projects</h1>
    <div class="flex justify-between">
      <div v-for="project in projects" :key="project.id">
        <div class="bg-white shadow-md rounded-md hover:shadow-primary-blue">
          <img
            :src="/projectImages/ + project.photo + '.png'"
            :alt="project.name"
            class="h-96 hover:bg-primary-blue"
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
  { id: 2, photo: "AdviceGenerator", name: "Advice generator" },
  { id: 3, photo: "fitness", name: "Fitness Landing Page" },
  { id: 4, photo: "CountryFlag", name: "country Flag Api" },
  // { id: 5, photo: "JobListing", name: "JOb Listing" },
];
</script>
