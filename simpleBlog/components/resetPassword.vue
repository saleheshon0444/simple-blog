<template>
  <div v-if="props.show">
    <div class="box">
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
              <label class="text-lg" for="username">نام کاربری</label>

              <div
                class="flex h-14 w-full justify-center items-center shadow-md rounded-2xl p-2 border-2"
              >
                <img src="/user-regular.svg" class="w-4" alt="" />
                <input
                  v-model="username"
                  id="username"
                  class="h-full text-sm w-full outline-none mx-2"
                  type="text"
                  placeholder="نام کاربری خود را وارد کنید "
                />
              </div>
            </div>
            <div class="space-y-3">
              <div>
                <label class="text-lg" for="password">رمز عبور</label>
              </div>
              <div
                class="flex h-14 w-full justify-center items-center shadow-md rounded-2xl p-2 border-2"
              >
                <img src="/lock-solid.svg" class="w-4" alt="" />
                <input
                  v-model="passWord"
                  id="password"
                  class="h-full text-sm w-full outline-none mx-2"
                  type="password"
                  placeholder="رمز عبور خود را وارد کنید "
                />
              </div>
            </div>
          </div>
          <div class="w-full h-full mt-7">
            <button
              @click="User.login(username, passWord)"
              class="btn3 h- w-full"
            >
              ورود
            </button>
          </div>
          <div class="flex gap-2 mt-4 text-xl">
            <span>هنوز حساب ندارید؟ </span>
            <button @click="emit('dob')" class="hover:text-[#204293]">
              ثبت نام کنید
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js" setup>
const username = ref("");
const passWord = ref("");

const User = useUsers();
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["toggled", "dob"]);
const modalRef = ref();
const handleKeyDown = (e) => {
  if (e.key === "Escape" && props.show) {
    emit("toggled");
  }
};
onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
});
</script>
