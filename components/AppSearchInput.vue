<script lang="ts" setup>
import { initFlowbite } from "flowbite";
const searchTerm = ref('All')
onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <div class="w-full h-[58px] bg-gray p-4 flex text-sm text-gray400">
    <div
      class="w-24 border-r border-[#ddd] pr-2 "
    >
      <button
        id="dropdown-button"
        data-dropdown-toggle="dropdown"
        class="flex-shrink-0 z-10 flex justify-between items-center w-full  text-sm font-medium text-center  focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        type="button"
      >
        {{searchTerm}}
       
        <IconsCaretDownIcon />
      </button>
      <div
        id="dropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdown-button"
        >
        <li>
          <button  @click="searchTerm = 'All'"
            type="button"
            class="inline-flex w-full px-4 py-2 hover:bg-[#f1f1f1] " data-dropdown-toggle="dropdown"
          >
            All
          </button>
        </li>
          <li>
            <button @click="searchTerm = 'Mockups'" data-dropdown-toggle="dropdown"
              type="button"
              class="inline-flex w-full px-4 py-2 hover:bg-[#f1f1f1] " 
            >
              Mockups
            </button>
          </li>
          <li>
            <button  @click="searchTerm = 'Design'" data-dropdown-toggle="dropdown"
              type="button"
              class="inline-flex w-full px-4 py-2 hover:bg-[#f1f1f1]"
            >
              Design
            </button>
          </li>
          <li>
            <button  @click="searchTerm = 'Logos'" data-dropdown-toggle="dropdown"
              type="button"
              class="inline-flex w-full px-4 py-2 hover:bg-[#f1f1f1]"
            >
              Logos
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-between ml-4 w-full">
      <input
        type="text"
        placeholder="Search for anything here"
        class="bg-transparent h-full border-0 focus:border-0 focus:outline-none focus:outline-0"
      />

      <IconsSearchIcon class="fill-[#999]" />
    </div>
  </div>
</template>
