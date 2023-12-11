<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="flex justify-between items-center h-20 px-4 md:px-12">
      <RouterLink to="/">
        <h1 class="text-xl text-primary-gray font-medium">
          <span class="text-primary-blue">Adeola</span>Tawakalitu
        </h1>
      </RouterLink>
      <div class="flex">
        <div class="flex flex-shrink-0 items-center"></div>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
          <RouterLink
            to="/"
            class="inline-flex items-center border-b-2 border-primary-blue px-1 pt-1 font-medium text-primary-gray"
            >Home</RouterLink
          >
          <a
            href="#about"
            class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium text-primary-gray hover:border-gray-300 hover:text-gray-700"
            >About
          </a>
          <a
            href="#skills"
            class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium text-primary-gray hover:border-gray-300 hover:text-gray-700"
            >Skills</a
          >
          <a
            href="#projects"
            class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium text-primary-gray hover:border-gray-300 hover:text-gray-700"
            >Project</a
          >
        </div>
        <!-- <div class="hidden sm:ml-6 sm:flex sm:items-center"> -->
        <!-- Profile dropdown -->
        <!-- <Menu as="div" class="relative ml-3">
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu> -->
        <!-- </div> -->
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-primary-gray hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-blue"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-3 pt-2">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <RouterLink
          to="/"
          class="block border-l-4 border-primary-blue bg-gray-50 py-2 pl-3 pr-4 text-base font-medium text-primary-gray"
          >Home</RouterLink
        >
        <DisclosureButton
          as="a"
          href="#about"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-primary-gray hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >About</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="#skills"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-primary-gray hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >Skills
        </DisclosureButton>
        <DisclosureButton
          as="a"
          href="#projects"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-primary-gray hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >Project</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { RouterLink } from "vue-router";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
</script>
