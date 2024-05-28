<template>
    <div class="div min-h-screen py-[20px] px-[20px] lg:p-0 mb-[24px]">
        <NavDesktop @update:home="homeUpdate"></NavDesktop>

        <h5 class="mb-2 text-2xl font-medium lg:hidden">{{ isHome ? 'Home Page' : 'สินค้า และ ดูพอยท์' }}</h5>

        <div class="body xl:px-[260px] p-4 sm:p-8 shadow-2xl lg:shadow-none mt-[20px] lg:mt-0">


            <div class="profile-container flex justify-between lg:hidden">
                <div class="flex items-start ">
                    <img src="../../Img/profile_pic.jpg" class=" sm:max-w-[80px] max-w-[60px] rounded-full" />
                    <div class="text-pf-container sm:ms-[20px] ms-[8px]  text-sm sm:text-lg text-sky-900">
                        <p class="">Natthima Noinon</p>
                        <p class="">081-2345-678</p>
                    </div>
                </div>

                <div
                    class="point-border  sm:px-6 sm:py-2 px-3 py-2 text-sm sm:text-lg  rounded-xl shadow-xl text-center">
                    <div class="text-white text-sm sm:text-lg">คะแนนสะสม</div>
                    <div class="text-amber-400 text-xl sm:text-2xl">1,000</div>
                    <div class="text-white text-sm sm:text-lg ">พอยท์</div>
                </div>

            </div>

            <div class="main-img-con flex justify-center mt-[20px] ">
                <img src="../../Img/main-img.png" class=" rounded-3xl">
            </div>

            <div v-if="isHome">
                <div
                    class="sub-menu-con grid grid-cols-3 lg:grid-cols-5 gap-2  mt-[20px] text-white text-sm lg:text-md">
                    <button v-for="item in subMenu" :key="item" type="button" @click="changePage"
                        class=" bg-neutral-400 lg:col-span-1 hover:bg-neutral-950 p-2  flex justify-center items-center rounded-lg">
                        <Icon :icon="item.icon" width="30" height="30" class="me-[12px]" />
                        {{ item.text }}
                    </button>

                    <button type="button"
                        class="gift-button lg:flex row-start-1 row-end-3 col-start-3 lg:col-start-5 grid place-items-center justify-center items-center p-2   rounded-lg h-100">
                        <Icon icon="mdi:gift" width="40" height="40" class="lg:me-[12px]" />
                        ร่วมกิจกรรม <br />(Lucky Draw)
                    </button>
                </div>


                <div class="promo mt-[28px] w-100">
                    <p class="mb-2 text-3xl font-medium text-sky-900 tracking-tight ">โปรโมชั่น</p>
                    <p class="mb-2 text-xl font-medium text-sky-900 tracking-tight ">Promotion</p>

                    <div class="sub-img grid grid-cols-2 lg:grid-cols-4 gap-4 mt-[20px] place-items-center">
                        <img src="../../Img/pro-1.png" class="w-[300px]">
                        <img src="../../Img/pro-2.png" class="w-[300px]">
                        <img src="../../Img/pro-1.png" class="w-[300px]">
                        <img src="../../Img/pro-2.png" class="w-[300px]">
                    </div>
                </div>
            </div>

            <SelectItem v-else />
        </div>

        <NavFooter @update:home="homeUpdate" />

    </div>

</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import SelectItem from './SelectItem.vue'
import NavFooter from './NavFooter.vue'
import NavDesktop from './NavDesktop.vue'


const isHome = ref(true)

function changePage() {
    isHome.value = false
}

function homeUpdate(value) {
    isHome.value = value;
}

const subMenu =
    [{ icon: 'mdi:earth', text: 'เข้าสู้เว็บไซต์', route: null },
    { icon: 'mdi:cart-arrow-down', text: 'สินค้า', route: '/select-item' },
    { icon: 'mdi:link-variant', text: 'กติกา, เงื่อนไข', route: null },
    { icon: 'mdi:loudspeaker', text: 'วิธีเล่นกิจกรรม', route: null },
    ]

</script>

<style scoped>
.point-border {
    background: rgb(23, 50, 74);
    background: linear-gradient(41deg, rgba(23, 50, 74, 1) 30%, rgba(48, 80, 100, 1) 59%, rgba(46, 79, 101, 1) 60%, rgba(118, 124, 68, 1) 98%);
}

.gift-button {
    background: rgb(138, 16, 41);
    background: linear-gradient(30deg, rgba(138, 16, 41, 1) 30%, rgba(125, 15, 15, 1) 56%);
}

.gift-button:hover {
    background: #450a0a;
}
</style>
