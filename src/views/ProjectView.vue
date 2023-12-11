<template>
  <div class="px-2 md:px-12">
    <h1 class="text-primary-gray font-bold text-3xl py-6">My Projects</h1>
    <div class="flex flex-wrap gap-y-8">
      <div
        v-for="project in projects"
        :key="project.id"
        class="w-1/2 md:w-1/4 px-2 md:px-6"
      >
        <Project
          :name="project.name"
          :screenshot="project.photo"
          :url="project.url"
        />
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center py-10">
    <button
      class="bg-primary-blue h-14 w-48 rounded-2xl text-white text-xl"
      @click="goBack"
    >
      Go Back
    </button>
  </div>
</template>
<script setup>
import Project from "../components/Projects.vue";
import { useRouter } from "vue-router";
const projects = [
  {
    id: 1,
    photo: "MovieFinder",
    name: "movieFinder",
    url: "https://movie-finder-3a181b.netlify.app/",
  },
  {
    id: 2,
    photo: "AdviceGenerator",
    name: "Advice Generator",
    url: "https://advice-generator-appd83a1.netlify.app/",
  },
  {
    id: 3,
    photo: "fitness",
    name: "Fitness Landing Page",
    url: "https://fitness-gym-7df655.netlify.app/",
  },
  {
    id: 4,
    photo: "CountryFlag",
    name: "country Flag Api",
    url: "https://country-api-flag-b4682.netlify.app/",
  },
  {
    id: 5,
    photo: "task-tracker",
    name: "Task Tracker",
    url: "https://task-tracker-17a494.netlify.app/",
  },
  {
    id: 6,
    photo: "Travel",
    name: "Travel Landing Page",
    url: "https://travelhut-0d0385.netlify.app/",
  },
  {
    id: 7,
    photo: "hospital",
    name: "Health Crae Landing Page",
    url: "https://health-care-6ddb0e.netlify.app/",
  },
  {
    id: 8,
    photo: "furniture",
    name: "Furniture Landing Page",
    url: "https://furnitureid.netlify.app/",
  },
  {
    id: 9,
    photo: "expense-manager",
    name: "Expense Manager",
    url: "https://expense-manager-c020a3.netlify.app/",
  },
  {
    id: 10,
    photo: "shopping",
    name: "Shopping Landing Page",
    url: "https://sneakercompany.netlify.app/",
  },
  {
    id: 11,
    photo: "IpAddress",
    name: "IP Adrress",
    url: "https://ipaddress-dcdf69.netlify.app/",
  },
  {
    id: 12,
    photo: "JobListing",
    name: "Job Listing",
    url: "https://joblistings-733f30.netlify.app/",
  },
  {
    id: 13,
    photo: "Notification",
    name: "Notification Page",
    url: "https://tranquil-notification-page.netlify.app/",
  },
  {
    id: 14,
    photo: "Multipleform",
    name: "Multiple Form",
    url: "https://multiple-form-step.netlify.app/",
  },
  {
    id: 15,
    photo: "weather",
    name: "Weather App",
    url: "https://capable-palmier-f36970.netlify.app/",
  },
  {
    id: 16,
    photo: "NewsLetter",
    name: "NewsLetter Landing Page",
    url: "https://newsletter-subscribe-779870.netlify.app/",
  },
];
const router = useRouter();
function goBack() {
  return router.push({ path: "/", name: "home" });
}
</script>
