<template>
  <NavBar class="" />
  <div class="px-0 md:px-10 flex flex-col md:flex-row" id="about">
    <div
      class="w-full md:w-2/5 bg-primary-blue relative text-lg pb-32 md:pb-60"
    >
      <div class="pl-4 md:pl-24 h-96 flex items-center">
        <h2 class="text-primary-white">
          <span class="font-bold text-3xl"> I'm Adeola Tawakalitu,</span
          ><span class="block text-2xl"> Frontend Developer </span>
          <span> (vue.js and react.js)</span>
        </h2>
      </div>
      <div>
        <p class="pl-4 md:pl-24 pb-4 text-primary-white text-lg">Follow me</p>
        <div class="flex space-x-4 pl-4 md:pl-24">
          <a href="https://github.com/Abolade017" target="_blank ">
            <font-awesome-icon
              icon="fa-brands fa-github "
              class="text-primary-white h-6 w-6"
            />
          </a>
          <div class="border border-r border-primary-white"></div>

          <a
            href="https://www.instagram.com/adeola.tawakalitu2/"
            target="_blank"
          >
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              class="text-primary-white h-6 w-6"
            />
          </a>
          <div class="border border-r border-primary-white"></div>

          <a
            href="https://www.linkedin.com/in/adeola-tawakaltu-478711190/"
            target="_blank"
          >
            <font-awesome-icon
              icon="fa-brands fa-linkedin"
              class="text-primary-white h-6 w-6"
            />
          </a>
          <div class="border border-r border-primary-white"></div>
        </div>
      </div>
      <div class="hidden md:block">
        <div
          class="absolute right-14 md:-right-44 top-52 md:top-48 bg-primary-white opacity-85 h-32 w-32 md:h-80 md:w-80 rounded-full"
        >
          <img
            src="/public/display-picture.jpeg"
            alt="display picture"
            class="h-24 w-24 md:h-72 md:w-72 rounded-full absolute inset-4 border-2 border-primary-blue"
          />
        </div>
      </div>
    </div>
    <div
      class="w-full md:w-3/5 pl-4 md:pl-20 flex justify-center h-full bg-white shadow-md"
    >
      <div
        class="flex justify-center items-center pt-10 md:pt-40 h-full pb-48 md:pb-96"
      >
        <div class="">
          <h3 class="text-primary-gray text-xl font-bold pb-6">About Me</h3>
          <p class="text-primary-gray opacity-60 text-base">
            My name is Adeola Tawakalitu Adenike, I am a Frontend Developer,
            <br />
            having experience on vue.js and react.js, <br />
            my objective is to deliver a quality work to my clients.
          </p>
          <div class="mt-6">
            <button
              class="bg-primary-blue text-primary-white py-2 px-4 text-base rounded-md"
            >
              <RouterLink to="/about"> Learn more</RouterLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Skills class="" id="skills" />
  <div id="projects">
    <div class="px-4 md:px-12">
      <h1 class="text-primary-gray font-bold text-3xl py-6 pl-4 md:pl-0">
        Projects
      </h1>
      <div class="flex flex-wrap justify-between">
        <div
          v-for="project in projects"
          :key="project.id"
          class="w-1/2 md:w-1/4 px-2 md:px-6 py-4 md:py-0"
        >
          <Project
            :name="project.name"
            :screenshot="project.photo"
            :url="project.url"
          />
        </div>
      </div>
      <div class="flex justify-end items-center pt-4">
        <RouterLink to="/projects" class="text-primary-blue text-lg"
          >See More</RouterLink
        >
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import { RouterLink } from "vue-router";
import NavBar from "../components/NavBar.vue";
import Skills from "../components/Skills.vue";
import Project from "../components/Projects.vue";
import Footer from "../components/Footer.vue";
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
];
</script>
