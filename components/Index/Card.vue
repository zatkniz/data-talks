<template>
  <BaseCard class="max-w-4xl" title="This is a card’s title">
    <template #header-actions>
      <IndexCardTitleActions />
    </template>

    <div class="flex flex-col md:grid md:grid-cols-12 gap-12">
      <div class="md:col-span-5 flex md:justify-start justify-center">
        <img src="/images/brackets.svg" alt="Workflow" class="h-72 w-auto" />
      </div>
      <div class="md:col-span-7 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Metus aliquam
        eleifend mi in nulla posuere sollicitudin. Consectetur adipiscing elit
        pellentesque habitant morbi tristique. Nunc vel risus commodo viverra
        maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae
        ultricies leo. Fames ac turpis egestas sed tempus urna. Urna condimentum
        mattis pellentesque id. Tristique nulla aliquet enim tortor. Et tortor
        consequat id porta. Duis convallis convallis tellus id interdum velit
        laoreet id donec. Nulla aliquet enim tortor at auctor urna nunc. Non
        arcu risus quis varius quam quisque. Sollicitudin aliquam ultrices
        sagittis orci a. Vulputate sapien nec sagittis aliquam. Aliquam sem
        fringilla ut morbi tincidunt augue interdum velit euismod. Consectetur
        purus ut faucibus pulvinar elementum. Lorem ipsum dolor sit amet.
      </div>
    </div>

    <template #footer>
      <BaseButton color="danger" @click="dismiss"> Dismiss </BaseButton>
    </template>
  </BaseCard>
</template>

<script lang="ts" setup>
const dismiss = (): void => {
  console.log("Dismissed");
};
</script>
