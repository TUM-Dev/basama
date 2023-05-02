<template>
  <VSlideGroup>
    <VSlideGroupItem
      v-for="attachment in attachments"
      :key="attachment.preview_image">
      <VContainer>
        <VCard>
          <VImg
            :src="attachment.preview_image"
            class="align-end"
            gradient="to bottom, transparent, transparent, rgba(0,0,0,0.7)"
            :height="props.height"
            cover
          >
            <VCardTitle class="text-white" v-text="attachment.name"/>
          </VImg>
        </VCard>
      </VContainer>
    </VSlideGroupItem>
  </VSlideGroup>
</template>

<script setup lang="ts">
import { Attachment } from "~/composables/attachments";

const props = defineProps<{
  attachments: Attachment[],
  height: string,
}>();
</script>
<style lang="scss">
.text-white {
  color: white;
}
</style>