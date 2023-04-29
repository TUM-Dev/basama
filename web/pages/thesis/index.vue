<template>
  <VContainer>
    <VRow>
      <VCol md="12" xl="8">
        <h2>{{ thesis.type }}</h2>
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
        <VSlideGroup>
          <VSlideGroupItem
            v-for="attachment in thesis.attachments"
            :key="attachment.preview_image">
            <VContainer fluid>
            <VCard
              class="m-1"
              width="17.5rem">
              <VImg
                :src="attachment.preview_image"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.7)"
                height="30rem"
                cover
              >
                <VCardTitle class="text-white" v-text="attachment.name"></VCardTitle>
              </VImg>
            </VCard>
              </VContainer>
          </VSlideGroupItem>
        </VSlideGroup>
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
          :prepend-avatar="thesis.organsation.profile_image"
          :title="thesis.organsation.name"
          :subtitle="thesis.organsation.parent_organsation"
          :text="thesis.organsation.slogan"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>

<style lang="scss">
.v-card-subtitle,#description {
  white-space: pre; // Needed to preserve newlines
}
</style>

<script setup lang="ts">
//const { data: thesis } = useFetch('/api/thesis')
const thesis = ref({
  type: "Masterarbeit",
  title: "Die beste Bachelorarbeit die es jemals gegeben hat",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\nQuisquam voluptatum, quibusdam, quia, quae voluptates voluptatem quod voluptatibus quos doloribus quas natus.\nQuisquam voluptatum, quibusdam, quia, quae voluptates voluptatem quod voluptatibus quos doloribus quas natus.",
  attachments: [
    {
      name: "Anhang 1",
      preview_image: "https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
    },
    {
      name: "Anhang 2",
      preview_image: "https://www.epe.ed.tum.de/fileadmin/w00bzo/hlu/pics/Startseite/TUM-Stammgelaende_21_9_1920_823_72dpi.jpg"
    },
    {
      name: "Anhang 3",
      preview_image: "https://www.epe.ed.tum.de/fileadmin/w00bzo/hlu/pics/Startseite/TUM-Stammgelaende_21_9_1920_823_72dpi.jpg"
    },
    {
      name: "Anhang 4",
      preview_image: "https://www.epe.ed.tum.de/fileadmin/w00bzo/hlu/pics/Startseite/TUM-Stammgelaende_21_9_1920_823_72dpi.jpg"
    },
  ],
  advisor: {
    name: "Prof. Dr. Max Mustermann",
    profile_image: "https://www.tum.de/fileadmin/_processed_/8/9/csm_181017_P-Wahl-Hofmann_8f467f0287.webp",
    research: "KI, Deep Learning, Machine Learning mit einem Fokus auf Computer Vision",
    email: "max.mustermann@tum.de",
    room: "Raum 123",
    phone: "0123456789"
  },
  organsation: {
    name: "Lehrstuhl für Human-Centered AI",
    parent_organsation: "School of Engineering and design",
    profile_image: "https://www.tum.de/fileadmin/_processed_/8/9/csm_181017_P-Wahl-Hofmann_8f467f0287.webp",
    slogan: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  tags: [
    {
      name: "Tag 1",
      url: "https://www.google.com"
    },
    {
      name: "Tag 2",
      url: "https://www.google.com"
    }
  ]
});
</script>