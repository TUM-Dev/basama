<template>
  <Logo id="logo"></Logo>
  <VApp>
    <VMain>
      <slot />
    </VMain>
    <Footer />
  </VApp>
</template>

<style lang="scss">
#logo {
  z-index: 1000 !important;
}
</style>