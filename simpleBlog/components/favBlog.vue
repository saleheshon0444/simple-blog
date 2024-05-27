<template>
  <div
    data-aos="fade-up"
    v-for="item in blogStore.favs"
    :key="item.id"
    class="flex mt-16 w-full justify-between shadow-md rounded-2xl"
  >
    <img class="w-66 rounded-r-2xl" src="/work_tech6 1.jpg" alt="" />
    <div class="max-w-[400px] p-5 flex flex-col justify-between">
      <h3 class="font-medium">{{ item.title }}</h3>
      <p class="font-light">{{ item.content }}</p>
      <div class="flex justify-between">
        <div class="text-sm font-light ss02">{{ item.create_date }}</div>
        <div class="text-sm font-light ss02">{{ item.comments }} نظر</div>
        <div class="text-sm font-light">{{ item.creator }}</div>
        <img
          class="hover:cursor-pointer"
          @click="blogStore.toggleFav(item.id)"
          src="../assets/css/Favo.svg"
          alt=""
        />
      </div>
    </div>
    <div class="flex items-end p-4">
      <button class="btn2">بیشتر</button>
    </div>
  </div>
</template>

<script setup>
const blogStore = useBlogStore();
</script>

<style scoped></style>
