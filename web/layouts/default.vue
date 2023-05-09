<template>
  <VApp>
    <header>
      <VToolbar
        color="primary"
      >

        <template v-slot:prepend>
          <Logo style="filter: grayscale(1) invert(2)" />
        </template>

        <VSpacer />

        <ProfileCard />
      </VToolbar>
    </header>
    <VMain>
      <slot />
    </VMain>
    <Footer />
  </VApp>
</template>
<script setup lang="ts">
</script>