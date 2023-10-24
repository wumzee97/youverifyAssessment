<script lang="ts" setup>
import { useSideBarStore } from "@/stores/sideBar";
const sideBarStore = useSideBarStore();

const toggleSideBar = () => {
  sideBarStore.toggle();
};
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

      <div class="relative hidden lg:inline-block text-left ml-6">
        <div class="group">
          <button
            type="button"
            class="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-primary focus:outline-none"
          >
            Solomon

            <IconsCaretDownSmallIcon class="ml-6 fill-[#023A59]" />
          </button>

          <div
            class="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300"
          >
            <div class="py-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >My Profile</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Settings</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Logout</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
