<template>
    <div
        class="lg:hidden fixed z-50 w-full h-20 max-w-lg -translate-x-1/2 bg-white rounded-full bottom-4 left-1/2 shadow-lg">
        <div class="grid h-full max-w-lg grid-cols-5 mx-auto relative">
            <button v-for="(item, index) in navItems" :key="index" type="button"
                class="inline-flex flex-col items-center justify-center text-sm relative" :class="item.style">
                <Icon :icon="item.icon" width="30" height="30" @click="clickHome(item.text)" />
                <div>
                    {{ item.text }}
                    <span class="text-xs block" v-if="item.text === 'ประวัติ'">การสะสมคะแนน</span>
                </div>
            </button>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
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

const navItems = [
    { icon: 'material-symbols:home', text: 'หน้าแรก', isClick: true, style: 'rounded-s-full text-sky-900 border-r border-gray-200 h-[80px]' },
    { icon: 'mdi:account', text: 'ประวัติ', isClick: false, style: 'rounded-s-full text-sky-900 h-[80px]' },
    { icon: 'mdi:qrcode', text: 'สแกน/รหัส', isClick: false, style: 'bg-sky-900 text-white rounded-full w-24 h-24 -translate-y-2' },
    { icon: 'mdi:loudspeaker', text: 'เชคสิทธิ์', isClick: false, style: 'text-sky-900 border-gray-200 border-r h-[80px]' },
    { icon: 'mdi:gift', text: 'ของรางวัล', isClick: false, style: 'bg-[#e2be9f] rounded-e-full text-white h-[80px]' },
];

</script>

<style scoped></style>
