<script setup lang="ts">
const activeTab = ref('unassigned')

const agents = ref([
    {
        name: 'Abiodun Olawale Solomon',
        phone: '08131502944',
        city: 'Akure',
        photo: ('/images/avatar.png')
    },
    {
        name: 'Adewumi Damilola Alabi',
        phone: '08131502944',
        city: 'Lagos',
        photo: ('/images/avatar2.png')
    },
    {
        name: 'Funsho-Adu Omolara',
        phone: '08131502944',
        city: 'Ibadan',
        photo: ('/images/avatar3.png')
    },
    {
        name: 'Janet Emmanuel Alabi',
        phone: '08131502944',
        city: 'Lagos',
        photo: ('/images/avatar4.png')
    },
    {
        name: 'Janet Emmanuel Alabi',
        phone: '08131502944',
        city: 'Lagos',
        photo: ('/images/avatar5.png')
    },
    {
        name: 'Janet Emmanuel Alabi',
        phone: '08131502944',
        city: 'Lagos',
        photo: ('/images/avatar6.png')
    },
    {
        name: 'Abiodun Olawale Solomon',
        phone: '08131502944',
        city: 'Akure',
        photo: ('/images/avatar.png')
    },
    {
        name: 'Adewumi Damilola Alabi',
        phone: '08131502944',
        city: 'Lagos',
        photo: ('/images/avatar2.png')
    },
    {
        name: 'Funsho-Adu Omolara',
        phone: '08131502944',
        city: 'Ibadan',
        photo: ('/images/avatar3.png')
    },
    {
        name: 'Janet Emmanuel Alabi',
        phone: '08131502944',
        city: 'Lagos',
        photo: ('/images/avatar4.png')
    },
    {
        name: 'Janet Emmanuel Alabi',
        phone: '08131502944',
        city: 'Lagos',
        photo: ('/images/avatar5.png')
    },
    {
        name: 'Janet Emmanuel Alabi',
        phone: '08131502944',
        city: 'Lagos',
        photo: ('/images/avatar6.png')
    },
    {
        name: 'Abiodun Olawale Solomon',
        phone: '08131502944',
        city: 'Akure',
        photo: ('/images/avatar.png')
    },
    {
        name: 'Adewumi Damilola Alabi',
        phone: '08131502944',
        city: 'Lagos',
        photo: ('/images/avatar2.png')
    },
    {
        name: 'Funsho-Adu Omolara',
        phone: '08131502944',
        city: 'Ibadan',
        photo: ('/images/avatar3.png')
    },
    {
        name: 'Janet Emmanuel Alabi',
        phone: '08131502944',
        city: 'Lagos',
        photo: ('/images/avatar4.png')
    },
    {
        name: 'Janet Emmanuel Alabi',
        phone: '08131502944',
        city: 'Lagos',
        photo: ('/images/avatar5.png')
    },
    {
        name: 'Janet Emmanuel Alabi',
        phone: '08131502944',
        city: 'Lagos',
        photo: ('/images/avatar6.png')
    },
])
</script>
<template>
  
        <div class="bg-white border-l ">
            <div class="w-full">
                <!-- Tab Header -->
                <div class="flex  justify-between items-center border-b border-[#f1f1f1] h-[56px] w-full">
                    <span @click="activeTab = 'unassigned'" class="h-full xl:min-w-[120px] px-3 text-sm font-medium cursor-pointer flex items-center justify-center " :class="activeTab == 'unassigned' ? 'border-b border-[#023A59]' : 'text-gray'">All</span>
                    <span @click="activeTab = 'assigned'" class="h-full xl:min-w-[120px]  px-3 text-sm font-normal cursor-pointer  flex items-center justify-center " :class="activeTab == 'assigned' ? 'border-b border-[#023A59]' : 'text-gray'"> <span class="h-[10px] w-[10px] rounded-full bg-[#2EB255] mr-3"></span> Online</span>
                    <span @click="activeTab = 'completed'" class="h-full xl:min-w-[120px]  px-3 text-sm font-normal cursor-pointer flex items-center justify-center " :class="activeTab == 'completed' ? 'border-b border-[#023A59]' : 'text-gray'"><span class="h-[10px] w-[10px] rounded-full bg-[#D14349] mr-3"></span>Offline</span>
                </div>
                <!-- Tab Header Ends here -->
                <div class=" overflow-y-scroll h-[80vh] pb-20">
                    
                    <div class="w-full">
                        <div class="p-4 flex justify-between items-center border-b border-[#f1f1f1] hover:bg-[#f1f1f1]"  v-for="(agent, index) in agents" :key="index">
                            <div class="h-full flex flex-col justify-start items-start">
                               <img :src="agent.photo" class="h-[50px] w-[50px] rounded-full" alt="image">
            
                            </div>
                            <div class="lg:w-[70%] mx-6 lg:mx-0">
                                <p class="text-xs font-medium">{{agent.name}}</p>
                                <p class="text-xs mt-2 text-[#ACB6BE]">{{agent.phone}}</p>
                                <p class="text-xs mt-2 text-[#ACB6BE]"> {{agent.city}}</p>
                            </div>
            
                            <IconsCaretDownSmallIcon class="rotate-[-90deg] fill-[#023A59]"/>
                        </div>

                    </div>
                </div>

            </div>

        </div>
  
</template>