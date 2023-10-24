<script setup lang="ts"></script>
<template>
  <div class="pt-8 grid grid-cols-12 h-full">
    <div class="lg:col-span-3 col-span-12 h-full border-r border-r-[#ddd]">
      <div
        class="h-[42px] bg-primary font-semibold text-white flex items-center px-4"
      >
        Task
      </div>

      <TasksTab />
    </div>
    <div class="lg:col-span-6 col-span-12">
      <div class="relative">
        <div class="flex justify-between w-full absolute z-50">
          <div class="w-10 h-[42px] bg-[#200E32] flex items-center justify-center">
            <IconsCaretDownSmallIcon class="rotate-[90deg] fill-white"/>
          </div>

          <div class="w-10 h-[42px] bg-[#200E32] flex items-center justify-center">
            <IconsCaretDownSmallIcon class="rotate-[-90deg] fill-white"/>
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
    <div class="lg:col-span-3 col-span-12 border-l border-[#ddd]">
      <div
        class="h-[42px] bg-primary font-semibold text-white flex items-center justify-between px-4 w-full"
      >
        <span>Agents</span>

        <IconsSearchIcon class="fill-white" />
      </div>

      <AgentsTab />
    </div>
  </div>
</template>
