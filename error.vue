<script setup lang="ts">
</script>
<template>
    <NuxtLayout name="404">
        <div class="flex flex-col items-center justify-center h-full">
            <h1 class=" font-bold text-[64px] text-primary">Page Not Found!</h1>
            <p>The page you are requesting is not found!</p>

            <NuxtLink to="/" class="h-12 w-[180px] rounded-md mt-6 flex items-center justify-center font-bold text-primary border-2 hover:bg-primary hover:border-none hover:text-white">
                Go to Dashboard
            </NuxtLink>
        </div>

    </NuxtLayout>
</template>