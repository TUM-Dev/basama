<template>
    <VDialog
      v-model="filter_dialog_opened"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <VChip v-bind="props">Add a Filter</VChip>
      </template>

      <VCard
        class="mx-auto"
        max-width="500"
      >
        <VToolbar
          flat
          color="primary"
          dark
        >
          <VBtn @click="filter_dialog_opened = false" icon color="black">
            <VIcon>mdi-close</VIcon>
          </VBtn>
          <VToolbarTitle>Filter thesis</VToolbarTitle>
        </VToolbar>

        <SearchFilterSelector title="Choose your thesis-type" :available="available.types" id="type" />
        <SearchFilterSelector title="Choose your study direction" :available="available.study_direction" id="study_direction" />
        <SearchFilterSelector title="Filter activities during the thesis" :available="available.activities" id="activities" />
      </VCard>
    </VDialog>
</template>


<script setup lang="ts">
import type { Filter } from "~/components/SearchFilterSelector.vue";

const filter_dialog_opened = ref(false);

const available = {
  activities: [
    { name: "Konstruktiv", id: "konstruktiv" },
    { name: "Programmieren", id: "programmieren" }
  ] as Filter[],
  study_direction: [
    { name: "Wirtschaftsinformatik", id: "winfo" },
    { name: "Games Engeneering", id: "games" }
  ] as Filter[],
  types: [
    { name: "Bachelor thesis", id: "bachelor" },
    { name: "Master thesis", id: "master" },
    { name: "Semester thesis", id: "semester" },
    { name: "Other", id: "other" }
  ] as Filter[]
};
</script>