<template>
 <div class="nav hidden justify-between items-center sm:p-4 shadow-lg lg:flex">
            <div class="flex items-start ">
                <img src="../../Img/profile_pic.jpg" class=" sm:max-w-[80px] max-w-[60px] rounded-full" />
                <div class="text-pf-container sm:ms-[20px] ms-[8px]  text-sm sm:text-lg text-sky-900">
                    <p class="">Natthima Noinon</p>
                    <p class="">081-2345-678</p>
                </div>
            </div>

            <div v-for="item in navItems" :key="item" class="grid place-items-center hover:text-amber-900 cursor-pointer" @click="clickHome(item.text)"
                :class="isHome && item.text === 'หน้าแรก' ? 'text-amber-900' : 'text-sky-900'">
                <Icon :icon="item.icon" width="48" height="48" />
                <div>{{ item.text }} </div> <span class="text-xs block" v-if="item.text === 'ประวัติ'">การสะสมคะแนน</span>
            </div>

            <div class="point-border  sm:px-6 sm:py-2 px-3 py-2 text-sm sm:text-lg  rounded-xl shadow-xl text-center">
                <div class="text-white text-sm sm:text-lg">คะแนนสะสม</div>
                <div class="text-amber-400 text-xl sm:text-2xl">1,000</div>
                <div class="text-white text-sm sm:text-lg ">พอยท์</div>
            </div>

        </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['update:home'])
const isHome = ref(false)

function clickHome(text) {
    if (text === 'หน้าแรก' && !isHome.value) {
        isHome.value = !isHome.value
        emit('update:home', isHome.value)
        isHome.value = !isHome.value
    }
}


const navItems =
    [{ icon: 'material-symbols:home', text: 'หน้าแรก', isClick: true },
    { icon: 'mdi:account', text: 'ประวัติ', isClick: false },
    { icon: 'mdi:qrcode', text: 'รหัส', isClick: false },
    { icon: 'mdi:loudspeaker', text: 'เชคสิทธิ์', isClick: false },
    { icon: 'mdi:gift', text: 'ของรางวัล', isClick: false },
    ]

</script>
