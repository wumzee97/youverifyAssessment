<script setup lang="ts">
const activeTab = ref('unassigned')
</script>
<template>
  
        <div class="bg-white border-r">
            <div class="w-full">
                <!-- Tab Header -->
                <div class="flex  justify-between items-center border-b border-[#f1f1f1] h-[56px] w-full">
                    <span @click="activeTab = 'unassigned'" class="h-full px-3 text-sm font-medium cursor-pointer flex items-center justify-center " :class="activeTab == 'unassigned' ? 'border-b border-[#023A59]' : 'text-gray'">24 Unassigned</span>
                    <span @click="activeTab = 'assigned'" class="h-full px-3 text-sm font-normal cursor-pointer  flex items-center justify-center " :class="activeTab == 'assigned' ? 'border-b border-[#023A59]' : 'text-gray'">12 Assigned</span>
                    <span @click="activeTab = 'completed'" class="h-full px-3 text-sm font-normal cursor-pointer flex items-center justify-center " :class="activeTab == 'completed' ? 'border-b border-[#023A59]' : 'text-gray'">30 Completed</span>
                </div>
                <!-- Tab Header Ends here -->
                <div class=" overflow-y-scroll h-[80vh] pb-20">
                    
                    <div class="w-full">
                        <div class="p-4 flex justify-between items-center border-b border-[#f1f1f1] hover:bg-[#f1f1f1]"  v-for="i in 20">
                            <div class="h-full flex flex-col justify-start items-start">
                                <div class="w-[30px] h-[30px] rounded-full bg-primary flex items-center justify-center">
                                    <IconsPlusIcon />
                                </div>
                                <p class="mt-1 text-[#828282] font-medium text-[10px]">Assign<br/>Agent</p>
            
                            </div>
                            <div class="lg:w-[70%]">
                                <p class="text-xs font-medium">Abiodun Olawale Solomon</p>
                                <p class="text-xs mt-2 text-[#ACB6BE]">12b  Emmanuel Hign street, Sur...</p>
                                <p class="text-xs mt-2 text-[#ACB6BE] flex"> <IconsBankIcon class="mr-2" /> Sterling Bank PLC</p>
                                <p class="text-[#3056D3] text-xs font-medium capitalize mt-3">a day ago</p>
                            </div>
            
                            <IconsCaretDownSmallIcon class="rotate-[-90deg] fill-[#023A59]"/>
                        </div>

                    </div>
                </div>

            </div>

        </div>
  
</template>