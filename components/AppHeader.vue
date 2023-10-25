<script lang="ts" setup>
import { initFlowbite } from "flowbite";
import { useSideBarStore } from "@/stores/sideBar";
const sideBarStore = useSideBarStore();

const toggleSideBar = () => {
  sideBarStore.toggle();
};

onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <header
    class="h-[72px] shadow lg:px-6 px-2 flex items-center justify-between bg-white z-50"
  >
    <div class="flex">
      <button
        @click="toggleSideBar"
        class="border-2 rounded lg:hidden h-[40px] w-[40px] mr-2 flex items-center justify-center"
      >
        <IconsHamburgerIcon height="15px" width="15px" />
      </button>
      <img src="../assets/images/logo.png" class="h-[45.28px]" alt="" />
    </div>

    <div class="w-[59%] hidden lg:flex items-center">
      <button
        class="h-8 w-8 rounded-full shadow-md ml-16 flex items-center justify-center"
      >
        <IconsArrowLeftIcon />
      </button>

      <AppSearchInput class="ml-6" />
    </div>

    <div class="flex">
      <button
        class="ml-6 w-12 h-12 rounded-xl bg-accent bg-opacity-[20%] flex items-center justify-center relative"
      >
        <IconsNotificationIcon />
        <div
          class="h-[19px] w-[19px] rounded-full bg-danger absolute text-white text-xs flex items-center justify-center top-[5px] right-[5px]"
        >
          2
        </div>
      </button>

      <img
        src="../assets/images/avatar.png"
        class="h-[42px] w-[42px] rounded-full ml-6"
        alt=""
      />

      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-[#023A59] focus:outline-none font-medium hidden rounded-lg text-sm px-5  ml-2 text-center lg:inline-flex items-center"
        type="button"
      >
        Solomon
       <IconsCaretDownSmallIcon class="fill-[#023A59] ml-2" />
      </button>

      <!-- Dropdown menu -->
      <div
        id="dropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-[#f1f1f1] dark:hover:bg-gray-600 dark:hover:text-white"
              >Dashboard</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-[#f1f1f1]  dark:hover:bg-gray-600 dark:hover:text-white"
              >Settings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-[#f1f1f1]  dark:hover:bg-gray-600 dark:hover:text-white"
              >Earnings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-[#f1f1f1] dark:hover:bg-gray-600 dark:hover:text-white"
              >Sign out</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
