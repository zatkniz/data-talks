<template>
  <button
    class="text-white py-2 px-9 rounded-lg font-semibold"
    :class="getColor"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String as PropType<"primary" | "secondary" | "danger">,
    default: "primary",
  },
});

const getColor = computed(() => {
  switch (props.color) {
    case "primary":
      return "bg-blue";
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    default:
      return "bg-blue";
  }
});
</script>
