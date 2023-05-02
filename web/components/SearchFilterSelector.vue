<template>
  <ClientOnly>
    <VCardText>
      <h2 class="text-h6 mb-2">{{ props.title }}</h2>
      <VChipGroup
        v-model="selected"
        @update:model-value="updateFilters"
        column
        multiple
      >
        <template
          v-for="filter in props.available"
          :key="filter.id">
          <VChip
            filter
            variant="outlined"
            :text="filter.name" />
        </template>
      </VChipGroup>
    </VCardText>
  </ClientOnly>
</template>


<script setup lang="ts">
const selected = ref(loadSelectionFromFilters());

export type Filter = {
  id: number,
  name: string,
}
export type TypedFilter = Filter & {
  type: "type" | "study_direction" | "activities"
}

const filters = useState("search_filter", () => ({
  type: [] as TypedFilter[],
  study_direction: [] as TypedFilter[],
  activities: [] as TypedFilter[]
}));

function updateFilters() {
  filters.value[props.id] = selected.value.map(id => ({ type: props.id, ...props.available[id] }));
}

function loadSelectionFromFilters() {
  const result = [] as number[];
  filters.value[props.id].forEach(f => {
    props.available.forEach((filter, i) => {
      if (f.id === filter.id)
        result.push(i);
    });
  });
  return result;
}

const props = defineProps<{
  title: string,
  id: "type" | "study_direction" | "activities",
  available: Filter[],
}>();
</script>