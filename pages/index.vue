<script setup lang="ts">
const showTask = ref(true);
const showAgents = ref(true);
const isMobile = computed(() => {
    return window.matchMedia("only screen and (max-width: 768px)").matches;
})


</script>
<template>
  <div class="pt-8 h-full ml-[0.5px]">
    <div class="relative">
      <div class="flex justify-between w-full absolute">
        <div class="flex">
          <transition
            enter-active-class="ease-linear duration-300 transition-all"
            enter-from-class="-bottom-40 opacity-0"
            leave-active-class="ease-linear duration-300 transition-all"
            leave-to-class="-bottom-40 opacity-0"
            leave-class="bottom-0 opacity-100"
            appear
          >
            <div class="transition-all duration-700" v-if="showTask">
              <div
                class="h-[42px] bg-primary font-semibold text-white flex items-center px-4"
              >
                Task
              </div>

              <TasksTab />
            </div>
          </transition>
          <div
            @click="showTask = !showTask"
            class="w-10 h-[42px] bg-[#200E32] flex items-center justify-center"
          >
            <IconsCaretDownSmallIcon
              class="fill-white"
              :class="showTask ? 'rotate-[90deg]' : 'rotate-[-90deg]'"
            />
          </div>
        </div>

        <div class="flex">
          <div
            @click="showAgents = !showAgents"
            class="w-10 h-[42px] bg-[#200E32] flex items-center justify-center"
          >
            <IconsCaretDownSmallIcon
              class="fill-white"
              :class="showAgents ? 'rotate-[-90deg]' : 'rotate-[90deg]'"
            />
          </div>
          <transition
            enter-active-class="ease-linear duration-300 transition-all"
            enter-from-class="-bottom-40 opacity-0"
            leave-active-class="ease-linear duration-300 transition-all"
            leave-to-class="-bottom-40 opacity-0"
            leave-class="bottom-0 opacity-100"
            appear
          >
            <div v-if="showAgents">
              <div
                class="h-[42px] bg-primary font-semibold text-white flex items-center justify-between px-4 w-full"
              >
                <span>Agents</span>

                <IconsSearchIcon class="fill-white" />
              </div>

              <AgentsTab />
            </div>
          </transition>
        </div>
      </div>

      <iframe
        class="h-[90vh]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.9813801756495!2d3.3204124760414793!3d6.6492292216873565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b914b9060eb35%3A0xa4538ac76eb3a3e1!2sDomino&#39;s%20Pizza%20Iju!5e0!3m2!1sen!2sng!4v1698133069395!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  </div>
</template>
