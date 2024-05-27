<template>
  <NuxtLoadingIndicator />
  <div dir="rtl" class="m-auto">
    <ConfirmNum :verify="isVerify" @goNumber="toggleVerify" />
    <Register
      :shoow="isRegisterShow"
      @toggeld="toggleRegister"
      @dob="dubleToggle"
    />
    <Login :show="toggletriger" @toggled="toggle" @dob="dubleToggle" />
    <NumberAuth
      :isShow="numShow"
      @mob="numAuth"
      @goVerify="toggleVerify"
      @mobiledob="mobileToggle"
    />
    <div v-if="!isRegisterShow && !toggletriger && !numShow && !isVerify">
      <header class="shadow-sm">
        <nav class="container flex space-x-4 items-center">
          <div class="max-w-20" data-aos="fade-left">
            <img src="/coding 1.svg" alt="code icon" />
          </div>
          <div class="flex justify-between w-full text-xl">
            <div class="flex items-center gap-x-24 pr-36">
              <a data-aos="fade-down" href="#" class="">خانه</a>
              <a data-aos="fade-down" href="#" class="">محصولات</a>
              <a data-aos="fade-down" href="#" class="">خدمات</a>
              <a data-aos="fade-down" @click="sidetoggle" href="#" class=""
                >وبلاگ</a
              >
            </div>
            <div
              data-aos="fade-right"
              @click="numAuth"
              class="btn hover:cursor-pointer hover:shadow-md"
            >
              <a href="#">ورود</a>
            </div>
          </div>
        </nav>
      </header>
      <main class="container">
        <div data-aos="fade-left" class="flex text-xl mt-5">
          <a href="#">خانه</a>
          <img src="/fe_arrow-down.svg" alt="" class="pr-1" />
          <a href="#" class="text-[#204293]">وبلاگ</a>
        </div>
        <div
          data-aos="fade-down"
          class="mt-20 flex justify-center items-center"
        >
          <p class="text-4xl font-extrabold">وبلاگ</p>
        </div>
        <div
          data-aos="fade-down"
          class="flex h-14 w-[40rem] m-auto justify-center items-center mt-16 shadow-md rounded-2xl p-2 border-2"
        >
          <img src="/Mask.svg" class="pr-2" alt="search icon" />
          <input
            class="h-full w-full outline-none mx-2"
            type="search"
            placeholder="جستجو کنید ...."
          />
        </div>
      </main>
      <div class="flex container gap-11">
        <div
          data-aos="fade-left"
          class="w-[25%] h-full space-y-5 p-5 shadow-md rounded-2xl"
        >
          <div class="">
            <p class="text-xl text-[#373737] font-bold">دسته بندی</p>
          </div>
          <ul class="space-y-4">
            <li>
              <div class="flex justify-between items-center">
                <label
                  class="text-[#7B7B7B] text-lg w-full cursor-pointer"
                  for="pc"
                  >کامپیوتر</label
                >
                <input
                  class="h-[25px] w-[30px]"
                  type="checkbox"
                  name=""
                  id="pc"
                />
              </div>
            </li>
            <li>
              <div class="flex justify-between items-center">
                <label
                  class="text-[#7B7B7B] text-lg w-full cursor-pointer"
                  for="organ-pc"
                  >سیستم های اداری</label
                >
                <input
                  class="h-[25px] w-[30px]"
                  type="checkbox"
                  name=""
                  id="organ-pc"
                />
              </div>
            </li>
            <li>
              <div class="flex justify-between items-center">
                <label
                  class="text-[#7B7B7B] text-lg w-full cursor-pointer"
                  for="com-pc"
                  >سیستم های تجاری</label
                >
                <input
                  class="h-[25px] w-[30px]"
                  type="checkbox"
                  name=""
                  id="com-pc"
                />
              </div>
            </li>

            <li>
              <div class="flex justify-between items-center">
                <label
                  class="text-[#7B7B7B] text-lg w-full cursor-pointer"
                  for="pub-pc"
                  >سیستم های عمومی</label
                >
                <input
                  class="h-[25px] w-[30px]"
                  type="checkbox"
                  name=""
                  id="pub-pc"
                />
              </div>
            </li>
            <li>
              <div class="flex justify-between items-center">
                <label
                  class="text-[#7B7B7B] text-lg w-full cursor-pointer"
                  for="learn-pc"
                  >سیستم های آموزشی</label
                >
                <input
                  class="h-[25px] w-[30px]"
                  type="checkbox"
                  name=""
                  id="learn-pc"
                />
              </div>
            </li>
            <li>
              <div class="flex justify-between items-center">
                <label
                  class="text-[#7B7B7B] text-lg w-full cursor-pointer"
                  for="favs"
                >
                  مورد علاقه ها
                </label>
                <input
                  class="h-[25px] w-[30px]"
                  type="checkbox"
                  name=""
                  id="favs"
                  @change="filtters"
                />
              </div>
            </li>
          </ul>
        </div>
        <div class="flex flex-col w-[1000px] container">
          <Blog v-if="!filters" />
          <FavBlog v-if="filters" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
let isRegisterShow = ref(false);
let toggletriger = ref(false);
let numShow = ref(false);
let isVerify = ref(false);
function toggle() {
  toggletriger.value = !toggletriger.value;
}
function toggleRegister() {
  isRegisterShow.value = !isRegisterShow.value;
}
function dubleToggle() {
  toggletriger.value = !toggletriger.value;
  isRegisterShow.value = !isRegisterShow.value;
}
function mobileToggle() {
  numShow.value = !numShow.value;
  isRegisterShow.value = !isRegisterShow.value;
}
function numAuth() {
  toggletriger.value = false;
  isRegisterShow.value = false;
  numShow.value = !numShow.value;
}
function toggleVerify(number) {
  numShow.value = !numShow.value;
  isVerify.value = !isVerify.value;
  console.log(number);
}
const filters = ref(false);
function filtters() {
  filters.value = !filters.value;
}
</script>

<style scoped></style>
