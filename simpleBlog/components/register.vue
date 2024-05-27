<template>
  <div v-if="props.shoow">
    <div class="box">
      <div
        ref="modalRef"
        class="container flex justify-center items-center bg-white h-[900px]"
      >
        <div class="w-96">
          <div class="flex justify-center">
            <h1 class="font-medium text-[45px]">ثبت نام کنید</h1>
          </div>
          <div class="space-y-4">
            <div class="space-y-1">
              <label class="text-lg" for="fname"> نام</label>

              <div
                class="flex h-14 w-full justify-center items-center shadow-md rounded-2xl p-2 border-2"
              >
                <input
                  v-model="fname"
                  required
                  id="fname"
                  class="h-full text-sm w-full outline-none mx-2"
                  type="text"
                  placeholder="نام خود را وارد کنید "
                />
              </div>
            </div>
            <div class="space-y-1">
              <label class="text-lg" for="lname"> نام خانوادگی</label>
              <div
                class="flex h-14 w-full justify-center items-center shadow-md rounded-2xl p-2 border-2"
              >
                <input
                  v-model="lname"
                  required
                  id="lname"
                  class="h-full text-sm w-full outline-none mx-2"
                  type="text"
                  placeholder="نام خانوادگی  خود را وارد کنید "
                />
              </div>
            </div>
            <div class="space-y-1">
              <label class="text-lg" for="phone"> شماره همراه</label>

              <div
                class="flex h-14 w-full justify-center items-center shadow-md rounded-2xl p-2 border-2"
              >
                <input
                  v-model="phone"
                  required
                  id="phone"
                  class="h-full text-sm w-full outline-none mx-2"
                  type="text"
                  placeholder="شماره هماره خود را وارد کنید "
                />
              </div>
            </div>
            <div class="space-y-1">
              <label class="text-lg" for="email"> ایمیل</label>

              <div
                class="flex h-14 w-full justify-center items-center shadow-md rounded-2xl p-2 border-2"
              >
                <input
                  v-model="email"
                  required
                  id="email"
                  class="h-full text-sm w-full outline-none mx-2"
                  type="email"
                  placeholder="ایمیل خود را وارد کنید "
                />
              </div>
            </div>
            <div class="space-y-1">
              <label class="text-lg" for="password"> رمز عبور</label>

              <div
                class="flex h-14 w-full justify-center items-center shadow-md rounded-2xl p-2 border-2"
              >
                <input
                  v-model="password"
                  required
                  id="password"
                  class="h-full text-sm w-full outline-none mx-2"
                  type="password"
                  placeholder="رمز عبور خود را وارد کنید "
                />
              </div>
            </div>
            <div class="space-y-1">
              <label class="text-lg" for="passwordConfirm">
                تکرار رمز عبور</label
              >

              <div
                class="flex h-14 w-full justify-center items-center shadow-md rounded-2xl p-2 border-2"
              >
                <input
                  v-model="password_confirmation"
                  required
                  id="passwordConfirm"
                  class="h-full text-sm w-full outline-none mx-2"
                  type="password"
                  placeholder="تکرار رمز عبور خود را وارد کنید "
                />
              </div>
            </div>
          </div>
          <div class="w-full h-full mt-7">
            <button
              @click="
                User.register(
                  fname,
                  lname,
                  phone,
                  email,
                  password,
                  password_confirmation
                )
              "
              type="submit"
              class="btn3 h- w-full"
            >
              ثبت نام
            </button>
          </div>
          <div class="flex gap-2 mt-4 text-xl">
            <span>حساب دارید ؟</span>
            <button @click="emit('dob')" class="hover:text-[#204293]">
              وارد شوید
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const User = useUsers();
const props = defineProps({
  shoow: {
    type: Boolean,
    default: false,
  },
});
// "toggleed"
const emit = defineEmits(["toggeld", "dob"]);
const modalRef = ref();
const handleKeyDown = (event) => {
  if (event.key === "Escape" && props.shoow) {
    emit("toggeld");
  }
};
onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
});
</script>

<style scoped>
.popup {
  text-align: center;
}
</style>
