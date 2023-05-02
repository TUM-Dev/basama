<template>
  <ClientOnly>
    <VContainer>
      <VCol>
        <VChipGroup>
          <VChip
            v-for="filter in computed_chips"
            :key="filter.id"
            @click:close="filters[filter.type].splice(filters[filter.type].indexOf(filter)-1, 1)"
            closable
          >
            {{ filter.name }}
          </VChip>
          <SearchFilterDialogue></SearchFilterDialogue>
        </VChipGroup>
        <VForm>
          <VTextField
            v-model="input"
            label="Search"
            hint="Specific topic, professor, ..."
            append-inner-icon="mdi-magnify"
          />
        </VForm>
      </VCol>
    </VContainer>

    <VContainer>
      <VRow>
        <VCol md="12" lg="6" xxl="4"
              v-for="result in shown_results"
              :key="result.id">
          <NuxtLink :to="`/thesis/${result.id}`" class="no-link-decoration">
            <VCard
              :title="result.title"
              :subtitle="result.organisation.name + ' | ' + result.advisor"
              :append-avatar="result.organisation.avatar"
              :text="result.attachments && result.description.length > 200 ? result.description.substring(0, 200) + '...' : result.description"
            >
              <ThesisAttachments v-if="result.attachments" :attachments="result.attachments" height="10rem" />
            </VCard>
          </NuxtLink>
        </VCol>
      </VRow>
    </VContainer>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { TypedFilter } from "~/components/SearchFilterSelector.vue";
import { faker } from "@faker-js/faker";
import { createRandomAttachments } from "~/composables/attachments";


const input = ref("");
const computed_chips = computed(() => {
  const result = filters.value.type;
  result.push(...filters.value.study_direction);
  result.push(...filters.value.activities);
  return result;
});
const filters = useState("search_filter", () => ({
  type: [] as TypedFilter[],
  study_direction: [] as TypedFilter[],
  activities: [] as TypedFilter[]
}));

const createRandomResult = () => ({
  title: "Best Bachelor thesis in Mechanical Engeneering",
  id: faker.datatype.uuid(),
  organisation: {
    name: `${faker.helpers.arrayElement(["Forschungsgruppe", "Max Plank Institut", "Lehrstuhl"])} für ${faker.helpers.arrayElement(["Maschinenelemente", "Flugzeugbau", "Fahrzeugtechnik", "Fertigungstechnik", "IT Sicherheit"])}`,
    avatar: faker.image.placeholder.randomUrl()
  },
  advisor: `${faker.helpers.arrayElement(["Prof. Dr.", "Dr.", "M.Sc.", ""])} ${faker.name.fullName()}`,
  description: faker.helpers.arrayElement([
    faker.hacker.phrase(),
    faker.lorem.paragraph(faker.datatype.number({ min: 1, max: 10 }))
  ]),
  filters: [
    { name: "Games Engeneering", id: "games", type: "study_direction" },
    { name: "Programmieren", id: "programmieren" },
    { name: "Bachelor thesis", id: "bachelor" }
  ] as TypedFilter[],
  attachments: createRandomAttachments(0, 5)
});
const shown_results = ref(faker.helpers.uniqueArray(createRandomResult, faker.datatype.number({
  min: 0,
  max: 30,
  precision: 3
})));

</script>
<style lang="scss" scoped>
.no-link-decoration {
  text-decoration: none;
}
</style>