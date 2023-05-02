<template>
  <ClientOnly>
    <VContainer>
      <VRow>
        <VCol md="12" xl="8">
          <h2>{{ thesis.type.name }}</h2>
          <h1>{{ thesis.title }}</h1>
          <p id="description">
            {{ thesis.description }}
          </p>
          <VChipGroup>
            <VChip
              v-for="tag in thesis.tags"
              :key="tag.url"
              :href="tag.url"
              color=""
              label
            >
              {{ tag.name }}
            </VChip>
          </VChipGroup>

          <h3 v-if="thesis.attachments" class="mt-4">Attachments</h3>
          <ThesisAttachments v-if="thesis.attachments" :attachments="thesis.attachments" height="30rem" />
        </VCol>

        <VCol md="12" xl="4">
          <h3>Advisor</h3>
          <VCard
            :title="thesis.advisor.name"
            :prepend-avatar="thesis.advisor.profile_image"
            :subtitle="'Room: '+ thesis.advisor.room +'\nPhone: '+ thesis.advisor.phone+'\nEmail: '+ thesis.advisor.email "
            :text="'Research: '+thesis.advisor.research"
          />

          <h4 class="mt-4">Organisation</h4>
          <VCard
            :prepend-avatar="thesis.organisation.profile_image"
            :title="thesis.organisation.name"
            :subtitle="thesis.organisation.parent_organisation"
            :text="thesis.organisation.slogan"
          />
        </VCol>
      </VRow>
    </VContainer>
  </ClientOnly>
</template>

<style lang="scss">
.v-card-subtitle, #description {
  white-space: pre; // Needed to preserve newlines
}
</style>

<script setup lang="ts">
//const { data: thesis } = useFetch('/api/thesis')
import { faker } from "@faker-js/faker";
import { createRandomAttachments } from "~/composables/attachments";
import type { TypedFilter } from "~/components/SearchFilterSelector.vue";

const advisor_sex = faker.name.sexType();
const advisor = {
  first_name: faker.name.firstName(advisor_sex),
  last_name: faker.name.firstName(advisor_sex)
};
const thesis = ref({
  type: { name: "Bachelor thesis", id: "bachelor" },
  title: "Die beste Bachelorarbeit die es jemals gegeben hat",
  description: faker.lorem.paragraphs(5),
  attachments: createRandomAttachments(0, 5),
  advisor: {
    name: `${faker.helpers.arrayElement(["Prof. Dr.", "Dr.", "M.Sc.", ""])} ${advisor.first_name} ${advisor.last_name}`,
    profile_image: faker.image.avatar(),
    research: `${faker.company.bsNoun()}, ${faker.company.bsNoun()} and ${faker.company.bsNoun()}. Personal Fokus: ${faker.company.bsNoun()}`,
    email: faker.internet.email(advisor.first_name, advisor.last_name, "tum.de"),
    room: "Raum 123",
    phone: faker.phone.number()
  },
  organisation: {
    name: `${faker.helpers.arrayElement(["Forschungsgruppe", "Max Plank Institut", "Lehrstuhl"])} für ${faker.helpers.arrayElement(["Maschinenelemente", "Flugzeugbau", "Fahrzeugtechnik", "Fertigungstechnik", "IT Sicherheit"])}`,
    parent_organisation: `School of ${faker.helpers.arrayElement(["Computation Information and Technology", "Engineering and Design", "Life Sciences", "Medicine", "Natural Sciences", "Management"])}`,
    profile_image: faker.image.business(100, 100),
    slogan: faker.company.bs() + " via " + faker.company.catchPhrase()
  },
  tags: [
    { name: "Bachlor thesis", id: "bachlor", type: "type" },
    { name: "Konstruktiv", id: "konstruktiv", type: "activities" },
    { name: "Wirtschaftsinformatik", id: "winfo", type: "study_direction" },
    { name: "Games Engeneering", id: "games", type: "study_direction" }
  ] as TypedFilter[]
});
</script>