<template>
  <v-footer
    color="primary"
    absolute
    id="main-footer"
  >
    <VContainer>
      <VCol align-self="center">
        <VRow justify="start" class="px-4">
          <NuxtLink class="pe-5" to="/about/imprint">Imprint</NuxtLink>
          <NuxtLink to="/about/data-protection">Data Protection</NuxtLink>
          <VSpacer />
          <NuxtLink to="/api"> API</NuxtLink>
          <NuxtLink target="_blank" to="https://github.com/TUM-Dev/basama">Source Code</NuxtLink>
        </VRow>
      </VCol>
    </VContainer>
  </v-footer>
</template>

<style lang="scss" scoped>
#main-footer {
  flex: 0 1 auto;
}

a {
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>