<script setup lang="ts">
const props = defineProps<{ title: string; link: string }>();
const route = useRoute();
const currentRoute = computed(() => route.path);

const sideBarStore = useSideBarStore()
</script>
<template>
  <NuxtLink :to="props.link" @click="sideBarStore.toggle()">
    <div
      class="h-[46px] w-full px-8 mb-4 flex items-center hover:bg-[#f1f1f1]"
      :class="currentRoute == props.link ? 'active' : null"
    >
      <slot
        name="icon"
        :is-active="currentRoute == props.link ? true : false"
      ></slot>

      <p class="ml-6 text-lg">
        {{ props.title }}
      </p>
    </div>
  </NuxtLink>
</template>

<style scoped>
.active {
  @apply bg-primary text-white border-l-[4px] border-dark;
}
</style>
