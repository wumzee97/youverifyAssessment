<script lang="ts" setup>
import {useSideBarStore} from '@/stores/sideBar'
import {storeToRefs} from 'pinia'
const sideBarStore = useSideBarStore()

const {isOpen} = storeToRefs(sideBarStore)
const dimmer = ref(true);
</script>
<template>
    <!-- {{ isOpen }} -->
  <div class="  lg:fixed  z-40"  >
    <div class="absolute flex border-r border-[#ddd] h-full z-30 lg:mt-[2px] bg-white ] " >
        <div ref="content" class="transition-all duration-700  overflow-x-hidden lg:w-[257px] lg:max-w-[257px]" :class="[isOpen ? 'max-w-[257px]' : 'max-w-0 ']">
            <div class="pt-4 px-8 " >
              <p class="font-bold text-default">Cheta And Daughters Limited</p>
              <p class="text-default">RC123456789</p>
            </div>
            <div class="mt-20">
              <AppMenuItem title="Dashboard" link="/" >
                <template #icon="slotProps">
                  <IconsDashboardIcon :is-active="slotProps.isActive" />
                </template>
              </AppMenuItem>
              <AppMenuItem title="Agents" link="/agents">
                <template #icon="slotProps">
                  <IconsAgentsIcon :is-active="slotProps.isActive" />
                </template>
              </AppMenuItem>
              <AppMenuItem title="Task" link="/task">
                <template #icon="slotProps">
                  <IconsTasksIcon :is-active="slotProps.isActive" />
                </template>
              </AppMenuItem>
              <AppMenuItem title="Teams" link="/teams">
                <template #icon="slotProps">
                  <IconsTeamsIcon :is-active="slotProps.isActive" />
                </template>
              </AppMenuItem>
              <AppMenuItem title="Users" link="/users">
                <template #icon="slotProps">
                  <IconsUsersIcon :is-active="slotProps.isActive" />
                </template>
              </AppMenuItem>
              <AppMenuItem title="Settings" link="/settings">
                <template #icon="slotProps">
                  <IconsSettingsIcon :is-active="slotProps.isActive" />
                </template>
              </AppMenuItem>
            </div>

        </div>
    </div>

    <transition name="fade" class="lg:hidden">
      <!-- Dimmer -->
      <div
        v-if="dimmer && isOpen"
        @click="sideBarStore.toggle()"
        class="flex-1 bg-primary bg-opacity-50 absolute lg:hidden  active:outline-none z- w-screen h-screen"
      />
    </transition>
  </div>
</template>

<style>
html {
  background: #efefef;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
