<template>
  <div class="div flex justify-center min-h-screen items-center p-[36px]">


    <div class=" p-8 bg-gray-100 shadow-2xl overflow-auto max-h-screen">
      <a>
        <h5 class="mb-2 text-2xl font-medium text-sky-900 tracking-tight  ">สมัครสมาชิก</h5>
      </a>
      <form>
        <div class="form-container grid gap-5 mb-6 grid-cols-2 mt-6 ">
          <div>
            <input
              class="input-field bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-base sm:text-base rounded-full focus:outline-none focus:border-sky-700 focus:ring-sky-700 block w-full p-2"
              placeholder="ชื่อ" />
          </div>

          <div>
            <input
              class="input-field bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-base rounded-full focus:outline-none focus:border-sky-700 focus:ring-sky-700 block w-full p-2"
              placeholder="นามสกุล" />
          </div>

          <div class="col-span-2">
            <input
              class="input-field bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-base rounded-full focus:outline-none focus:border-sky-700 focus:ring-sky-700 block w-full p-2"
              placeholder="Email" />
          </div>

          <div class="col-span-2">
            <input
              class="input-field bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-base rounded-full focus:outline-none focus:border-sky-700 focus:ring-sky-700 block w-full p-2"
              placeholder="เบอร์โทรศัพท์ (สำหรับยืนยัน OTP)" />
          </div>

          <div class="col-span-2 relative">
            <InputDropdown :items="gender"  placeHolder="เพศ"/>

          </div>

          <div class="col-span-2 relative">
            <InputDropdown :items="province"  placeHolder="จังหวัด"/>

          </div>

          <div class="col-span-2">
            <textarea rows="4"
              class="input-field block p-2.5 w-full text-sm sm:text-base resize-none text-gray-900 bg-gray-50 rounded-[16px] border border-gray-300 focus:outline-none focus:border-sky-700 focus:ring-sky-700"
              placeholder="ที่อยู่"></textarea>
          </div>
        </div>


        <div class="flex items-center justify-center ">
          <input type="checkbox" class="border-gray-300 accent-sky-800" />
          <label for="link-checkbox" class="ms-2 text-sm sm:text-base sm:text-base  text-sky-900 font-medium">I accept
            <a href="#" class="text-amber-500 hover:underline">Terms of Use</a></label>
        </div>

        <div class="flex justify-center mt-4">
          <button type="button" @click="submit"
            class="text-white bg-sky-900 hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm sm:text-base w-[178px] px-5 py-2.5 text-center">หน้าถัดไป</button>

        </div>

      </form>

    </div>

  </div>

</template>
<script setup>
import InputDropdown from './InputDropdown.vue'
import { useRouter } from 'vue-router'

const router = useRouter();

function submit() {
  router.push('/Home')
}


const gender = ['ผู้หญิง', 'ผู้ชาย', 'ไม่ระบุ']

const province = ['กรุงเทพฯ',
  'กระบี่',
  'กาญจนบุรี',
  'กาฬสินธุ์',
  'กำแพงเพชร',
  'ขอนแก่น',
  'จันทบุรี',
  'ฉะเชิงเทรา',
  'ชลบุรี',
  'ชัยนาท',
  'ชัยภูมิ',
  'ชุมพร',
  'เชียงใหม่',
  'เชียงราย',
  'ตรัง',
  'ตราด',
  'ตาก',
  'นครนายก',
  'นครปฐม',
  'นครพนม',
  'นครราชสีมา',
  'นครศรีธรรมราช',
  'นครสวรรค์',
  'นนทบุรี',
  'นราธิวาส',
  'น่าน',
  'บึงกาฬ',
  'บุรีรัมย์',
  'ปทุมธานี',
  'ประจวบคีรีขันธ์',
  'ปราจีนบุรี',
  'ปัตตานี',
  'พระนครศรีอยุธยา',
  'พะเยา',
  'พังงา',
  'พัทลุง',
  'พิจิตร',
  'พิษณุโลก',
  'เพชรบุรี',
  'เพชรบูรณ์',
  'แพร่',
  'ภูเก็ต',
  'มหาสารคาม',
  'มุกดาหาร',
  'แม่ฮ่องสอน',
  'ยโสธร',
  'ยะลา',
  'ร้อยเอ็ด',
  'ระนอง',
  'ระยอง',
  'ราชบุรี',
  'ลพบุรี',
  'ลำปาง',
  'ลำพูน',
  'เลย',
  'ศรีสะเกษ',
  'สกลนคร',
  'สงขลา',
  'สตูล',
  'สมุทรปราการ',
  'สมุทรสงคราม',
  'สมุทรสาคร',
  'สระแก้ว',
  'สระบุรี',
  'สิงห์บุรี',
  'สุโขทัย',
  'สุพรรณบุรี',
  'สุราษฎร์ธานี',
  'สุรินทร์',
  'หนองคาย',
  'หนองบัวลำภู',
  'อ่างทอง',
  'อำนาจเจริญ',
  'อุดรธานี',
  'อุตรดิตถ์',
  'อุทัยธานี',
  'อุบลราชธานี',]





</script>


<style scoped>
.input-field {
  padding-left: 20px !important;
}
</style>