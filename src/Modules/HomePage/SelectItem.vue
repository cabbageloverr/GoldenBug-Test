<template>
    <div class="promo mt-[28px] w-100 ">
        <div class="search-con flex justify-end">
            <div class="relative w-full md:max-w-[400px] ">
                <input type="search" v-model="searchText"
                    class="shadow-md p-2.5 ps-6 w-full z-20 text-sm lg:text-base text-gray-900 bg-gray-50 rounded-full focus:outline-none focus:border-sky-700 focus:ring-sky-700"
                    placeholder="ค้นหาสินค้า..." />
                <button type="submit"
                    class="absolute shadow-md top-0 end-0 h-full p-2.5 text-sm lg:text-base text-white bg-sky-900 rounded-e-full hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <div class="w-auto" aria-hidden="true">
                        Search
                    </div>
                </button>
            </div>
        </div>

        <div class="select-item-con grid grid-cols-2  sm:grid-cols-3  gap-3 mt-[20px] ">
            <div v-for="item in searchResult" :key="item.value"
                class="shadow-lg  rounded-xl bg-gray-50 w-100 border border-gray-300">
                <div class="p-[16px]">
                    <div class="flex justify-end text-white">
                        <p class=" py-0.5 px-1 sm:py-1 sm:px-2 rounded-full text-sm "
                            :class="item.status === 'HOT' ? 'bg-red-600' : 'bg-green-600'"> {{ item.status }}
                        </p>
                    </div>
                    <div class="flex justify-center w-100">
                        <img class="lg:w-[200px] w-[100px]" :src="item.img" />
                    </div>
                </div>

                <div class="card-footer-con">
                    <div class="grid grid-cols-4 grid-rows-3 w-full">
                        <div
                            class="row-start-2 row-span-2 shadow-md col-span-3 p-2 text-xs lg:text-sm text-gray-900 border-t-gray-300 border bg-white ">
                            <p class="truncate">{{ item.name }}</p>
                        </div>
                        <div
                            class="flex  row-span-full col-span-2 text-center justify-center  items-center shadow-md text-xl lg:text-3xl text-white bg-sky-900 rounded-br-xl rounded-tl-xl">
                            <div class="text-yellow-200" aria-hidden="true">
                                {{ item.amount }} P
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>

    </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import imgPowder1 from '../../Img/powder-1.png'

const searchText = ref('')
const searchResult = ref([])

const powderItems = [{ value: 'p-1', name: 'แป้งสาลีอเนกประสงค์ ยูเอฟเอ็ม  ตราว่าว', img: imgPowder1, amount: 2, status: 'HOT' },
{ value: 'p-2', name: 'แป้งสาลียูเอฟเอ็ม สำหรับทำขนมปัง ตราหวงส์ขาว (ห่าน)', img: imgPowder1, amount: 1, status: 'New' },
{ value: 'p-3', name: 'แป้งสาลียูเอฟเอ็ม สำหรับทำขนมปัง ตราหวงส์ขาว (ห่าน)', img: imgPowder1, amount: 1, status: 'New' },
{ value: 'p-4', name: 'แป้งสาลีอเนกประสงค์ ยูเอฟเอ็ม  ตราว่าว', img: imgPowder1, amount: 2, status: 'HOT' },
{ value: 'p-5', name: 'แป้งสาลียูเอฟเอ็ม สำหรับทำขนมปัง ตราหวงส์ขาว (ห่าน)', img: imgPowder1, amount: 1, status: 'New' },
{ value: 'p-6', name: 'แป้งสาลียูเอฟเอ็ม สำหรับทำขนมปัง ตราหวงส์ขาว (ห่าน)', img: imgPowder1, amount: 1, status: 'New' },
]


function searchItem() {
    return powderItems.filter(x => x.name.includes(searchText.value))
}

watch(
    () => searchText.value,
    () => {
        searchResult.value = searchItem()
    }
)

async function loadSearch() {
    searchResult.value = searchItem()
}

loadSearch()

</script>