<template>
  <div class="bg-primary-white w-full rounded-xl -mt-20">
    <h4 class="text-2xl text-primary-gray font-bold px-12 py-10">
      Development Skills
    </h4>
    <div class="px-12 py-4">
      <ul>
        <li v-for="skill in skills" :key="skill.id">
          <div class="flex justify-between items-center py-4">
            <div>{{ skill.skill }}</div>
            <div class="capitalize">{{ skill.level }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
let skills = [
  { id: 1, skill: "HTML", level: "intermediate" },
  { id: 2, skill: "CSS", level: "intermediate" },
  { id: 3, skill: "Tailwindcss", level: "intermediate" },
  { id: 4, skill: "Vue", level: "intermediate" },
  { id: 5, skill: "React", level: "intermediate" },
  { id: 6, skill: "Bootstrap", level: "intermediate" },
  { id: 7, skill: "SEO", level: "intermediate" },
];
</script>
