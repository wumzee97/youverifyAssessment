<script lang="ts" setup></script>
<template>
    <div class="w-full h-[58px] bg-gray p-4  flex text-sm  text-gray400">
        <div class="w-24 border-r border-[#ddd] pr-2 flex justify-between items-center">
            <p class="">All</p>

            <IconsCaretDownIcon />
        </div>
        <div class="flex justify-between ml-4 w-full">

            <input type="text" placeholder="Search for anything here" class="bg-transparent h-full focus:outline-none">

            <IconsSearchIcon class="fill-[#999]" />
        </div>
    </div>
</template>