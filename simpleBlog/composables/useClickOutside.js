import { onBeforeUnmount, onMounted } from "vue";
let isShow = false;

export default function useDetectOutsideClick(component, callback, type) {
  if (type === "click") {
    if (!component) return;
    const listener = (event) => {
      if (
        event.target !== component.value &&
        !component.value.contains(event.target)
      ) {
        if (typeof callback === "function") {
          if (isShow) {
            callback();
            isShow = !isShow;
          } else {
            isShow = !isShow;
          }
        }
      }
    };

    onMounted(() => {
      window.addEventListener("click", listener);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("click", listener);
    });
  } else if (type === "esc") {
  }
}
