<template>
  <header>
    <Logo style="filter: grayscale(1) invert(2)"/>
  </header>

  <VApp>
    <VMain>
      <slot />
    </VMain>
  </VApp>
</template>

<style lang="scss">
@import "../assets/variables.scss";
  header {
    position: relative;
    width: 100%;
    height: 6rem;
    background-color: $primary-color;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
</style>