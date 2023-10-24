<script lang="ts" setup>
</script>
<template>
    <div class="h-screen overflow-hidden">

        <AppHeader />

        <div class="flex h-full">
            <div class="lg:w-[257px]">

                <AppSideBar class="h-full " />
            </div>
            <div class="w-full lg:w-[calc(100vw-257px)] h-full overflow-scroll bg-white mt-[2px]">
                <slot />
            </div>

        </div>
    </div>
</template>