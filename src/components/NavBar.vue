<template>
  <header class="">
    <div class="bg-white shadow-md h-20">
      <nav class="px-20">
        <div class="flex justify-between items-center h-20">
          <div>
            <h1 class="text-xl text-primary-gray">
              <span class="text-primary-blue">Adeola</span>Tawakalitu
            </h1>
          </div>
          <div class="flex justify-between space-x-12 text-primary-gray">
            <RouterLink to="/" class="hover:text-primary-blue">Home</RouterLink>
            <RouterLink to="/about" class="hover:text-primary-blue"
              >About
            </RouterLink>
            <RouterLink to="/projects" class="hover:text-primary-blue"
              >Project</RouterLink
            >
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
