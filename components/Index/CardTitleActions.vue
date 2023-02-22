<template>
  <BaseMenu :items="items" />
</template>

<script setup lang="ts">
import { MenuItemType } from "~~/interfaces/MenuItem";

const items: MenuItemType[] = [
  {
    title: "Delete Card",
    icon: "TrashIcon",
    class: "text-red-500",
    click: () => {
      console.log("Delete Card");
    },
  },
  {
    title: "Duplicate Card",
    icon: "DocumentDuplicateIcon",
    click: () => {
      console.log("Duplicate Card");
    },
  },
];
</script>
