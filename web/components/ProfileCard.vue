<template>
  <VMenu
    v-model="menu"
    :close-on-content-click="false"
    open-on-hover
    location="bottom"
  >

    <template v-slot:activator="{ props }">
      <VBtn
        variant="flat"
        v-bind="props"
        id="profile"
      >
        <VAvatar size="60" :image="user.avatar" />
      </VBtn>
    </template>

    <VCard min-width="300">
      <VList>
        <VListItem
          :prepend-avatar="user.avatar"
          :title="user.firstName + ' ' + user.lastName"
          :subtitle="user.email"
        >
          <template v-slot:append>
            <VBtn icon="mdi-logout" />
          </template>
        </VListItem>
        <VDivider />
        <VListItem>
          Theme:
          <VBtn
            @click="toggleTheme"
            :icon="theme.current.value.dark ? 'mdi-brightness-3' : 'mdi-brightness-7'" />
        </VListItem>
      </VList>
    </VCard>
  </VMenu>
</template>

<script setup lang="ts">
import { faker } from "@faker-js/faker";
import { useTheme } from "vuetify";
import { themeCookie } from "~/composables/theme";

const sex = faker.name.sexType();
const firstName = faker.name.firstName(sex);
const lastName = faker.name.lastName(sex);
const user = reactive({
  firstName,
  lastName,
  email: faker.internet.email(firstName, lastName, "tum.de"),
  avatar: faker.image.avatar()
});

const theme = useTheme();
const toggleTheme = () => {
  const newTheme = theme.global.current.value.dark ? "light_theme" : "dark_theme";
  theme.global.name.value = newTheme;
  themeCookie().value = newTheme;
};
const menu = ref(false);
</script>

<style lang="scss" scoped>
#profile {
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
  border-radius: 10rem !important;
  height: 4.5rem;
  width: 4.5rem;
  padding: 2px;
}
</style>