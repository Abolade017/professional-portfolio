<script setup>
import { RouterLink } from "vue-router";
import Skills from "./Skills.vue";
</script>

<template>
  <div class="px-10 flex">
    <div class="w-2/5 bg-primary-blue relative text-lg pb-60">
      <div class="pl-24 h-96 flex items-center">
        <h2 class="text-primary-white">
          <span class="font-bold text-3xl"> I'm Adeola Tawakalitu,</span
          ><span class="block text-2xl"> Frontend Developer </span>
          <span> (vue.js and react.js)</span>
        </h2>
      </div>
      <div>
        <p class="pl-24 pb-4 text-primary-white text-lg">Follow me</p>
        <div class="flex space-x-4 pl-24">
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
      <div
        class="absolute -right-44 top-48 bg-primary-white opacity-85 h-80 w-80 rounded-full"
      >
        <img
          src="/public/display-picture.jpeg"
          alt="display picture"
          class="h-72 w-72 rounded-full absolute inset-4 border-2 border-primary-blue"
        />
      </div>
    </div>
    <div class="w-3/5 pl-20 flex justify-center h-full bg-white shadow-md">
      <div class="flex justify-center items-center pt-40 h-full pb-96">
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
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Skills class="absolute w-[1420px] inset-x-20" />
  <!-- <div class="w-2/5 bg-primary-blue"></div>
     <div class="w-3/5 bg-primary-white"></div> -->
</template>
