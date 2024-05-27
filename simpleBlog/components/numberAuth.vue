<template>
  <div v-if="props.isShow" class="box">
    <div
      ref="modalRef"
      class="container flex justify-center items-center bg-white h-[900px]"
    >
      <div class="">
        <div class="mb-16">
          <h1 class="font-medium text-[45px]">ورود به حساب کاربری</h1>
        </div>
        <div class="space-y-7">
          <div class="space-y-3">
            <label class="text-lg" for="phone">شماره همراه </label>

            <div
              class="flex h-14 w-full justify-center items-center shadow-md rounded-2xl p-2 border-2"
            >
              <input
                v-model="phone"
                id="phone"
                class="h-full text-sm w-full outline-none mx-2"
                type="tel"
              />
            </div>
          </div>
          <div class="w-full h-full mt-7">
            <button
              @click="
                emit('goVerify', phone);
                Users.loginPhone(phone);
              "
              class="btn3 w-full"
            >
              ورود
            </button>
            <div class="flex gap-2 mt-4 text-xl">
              <span>هنوز حساب ندارید؟ </span>
              <button @click="emit('mobiledob')" class="hover:text-[#204293]">
                ثبت نام کنید
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const Users = useUsers();
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["mobiledob", "goVerify"]);
const modalRef = ref();
const handleKeyDown = (event) => {
  if (event.key === "Escape" && props.isShow) {
    emit("mob");
  }
};
onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
});
</script>

<style scoped></style>
