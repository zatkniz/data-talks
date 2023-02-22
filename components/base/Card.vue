<template>
  <div class="bg-white px-4 py-6 sm:px-6 shadow-xl rounded-lg w-full">
    <div class="flex space-x-3">
      <div class="min-w-0 flex-1">
        <h3 class="font-bold leading-6 text-black">
          <!-- render header only if the slot is defined else show the title prop-->
          <slot v-if="$slots.title" name="title"></slot>
          <span v-else>{{ title }}</span>
        </h3>
      </div>
      <div
        v-if="$slots['header-actions']"
        class="flex flex-shrink-0 self-center"
      >
        <slot name="header-actions" />
      </div>
    </div>
    <div class="py-12">
      <slot />
    </div>
    <!-- render footer only if the slot is defined so it wont reserve the space -->
    <div v-if="$slots.footer" class="flex justify-end">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>

<style>
[aria-expanded="true"] {
  @apply bg-gray-light;
}
</style>
