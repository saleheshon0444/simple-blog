<template>
  <div v-if="props.show" :dir="props.side == 'left' ? 'ltr' : 'rtl'">
    <div class="background">
      <div ref="modalRef" v-if="props.side === 'left'" class="left gap-4">
        <div
          class="border-b-2 pb-2"
          v-for="item in props.content"
          :key="item.path"
        >
          <a class="text-2xl text-white" href="#">{{ item.title }}</a>
        </div>
      </div>
      <div ref="modalRef" v-if="props.side === 'right'" class="right gap-4">
        <div
          class="border-b-2 pb-2"
          v-for="item in props.content"
          :key="item.path"
        >
          <a class="text-2xl text-white" href="#">{{ item.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  side: {
    type: String,
  },
  content: {
    type: Array,
  },
  show: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["sidetoggled"]);
const modalRef = ref();

useClickOutside(
  modalRef,
  () => {
    emit("sidetoggled");
  },
  "click"
);
</script>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.left {
  overflow: hidden;
  display: flex;
  width: 300px;
  min-height: 100vh;
  padding: 1rem;
  flex-direction: column;
  background-color: #204293;
  width: 300px;
  transition: 0.3s ease;
}
.right {
  overflow: hidden;
  display: flex;
  width: 300px;
  min-height: 100vh;
  padding: 1rem;
  flex-direction: column;
  background-color: #204293;
  transition: 0.3s ease;
}
</style>
