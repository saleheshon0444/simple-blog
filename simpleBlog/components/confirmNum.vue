<template>
  <div v-if="props.verify" class="box">
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
            <label class="text-lg" for="code">
              کد ارسال شده را وارد کنید
            </label>

            <div
              class="flex h-14 w-full justify-center items-center shadow-md rounded-2xl p-2 border-2"
            >
              <input
                v-model="code"
                id="code"
                class="h-full text-sm w-full outline-none mx-2"
                type="tel"
                maxlength="5"
              />
            </div>
          </div>
          <div class="w-full h-full mt-7">
            <button @click="Users.confirmPhone(code)" class="btn3 h- w-full">
              ورود
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const Users = useUsers();

const props = defineProps({
  verify: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["goNumber"]);
const modalRef = ref();
const handleKeyDown = (event) => {
  if (event.key === "Escape" && props.verify) {
    emit("goNumber");
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
