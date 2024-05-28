<template>
    <div>
        <div class="relative">
            <input type="button" @click="openDropdown" v-model="selectedTect"
                class="input-field text-left bg-gray-50 border border-gray-300 text-sm sm:text-base rounded-full focus:border-sky-700 focus:border-sky-700 block w-full p-2"
                :class="text ? 'text-gray-900' : 'text-gray-400'" />

            <Icon  class="absolute top-0 end-0 h-full p-2.5 text-gray-400" icon="solar:alt-arrow-down-bold" width="48" height="48" />

        </div>
        <div v-show="isOpen"
            class="absolute  mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 h-[150px] overflow-auto">
            <div v-for="item in props.items" :key="item" @click="selectItem(item)" type="button"
                class="p-2 w-full hover:bg-gray-100 text-left">{{ item }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps(['open', 'items', 'placeHolder'])


const isOpen = ref(false);

const text = ref('')

const selectedTect = computed(() => {
    return text.value ? text.value : props.placeHolder
})

function openDropdown() {
    isOpen.value = !isOpen.value;

}

function selectItem(item) {
    text.value = item
    isOpen.value = false;
  
}
</script>

<style scoped>
.input-field {
    padding-left: 20px !important;
}
</style>