<template>
  <VCol justify="center" class="fill-width">
    <VImg
      cover
      width="100%"
      min-height="30rem"
      max-height="90vh"
      src="/adventurer.png"
      class="d-flex align-center"
    >
      <VRow>
        <VCol class="ms-6 hidden-sm-and-down" md="5" lg="4" xl="3" xxl="2">
          <VCard>
            <VContainer>
              <VCol>
                <VRow align="center" justify="center">
                  <h1>Finding a thesis does not have to be an adventure</h1>
                  <NuxtLink to="/login">
                    <VBtn height="70px" width="22rem">
                      <div>
                        <b>Log in</b><br> to find your thesis
                      </div>
                    </VBtn>
                  </NuxtLink>
                </VRow>
              </VCol>
            </VContainer>
          </VCard>
        </VCol>
      </VRow>
    </VImg>
    <NuxtLink to="/login" id="login-button" class="hidden-md-and-up">
      <VBtn height="70px" width="100%" class="text-break">
        <div>
          <b>Log in</b><br> to find your thesis
        </div>
      </VBtn>
    </NuxtLink>

    <VContainer class="my-5">
      <VList lines="lines">
        <VListItem
          title="What are we?"
          subtitle="Basama is a platform for students to find a thesis.
                    We want to make it easier for students to find a thesis and for university staff to manage the thesis they offer more effectively.
                    We are created by students for students."
        ></VListItem>
        <VListItem
          title="Our Features?"
        >
          <VListItemSubtitle>
            <VRow md="2">
              <VCard
                title="For students by students"
                text="The platform and features are developed and maintained by students who actively have to use this software"
              ></VCard>
              <VCard
                title="Free & Open Source"
                text="We actively embrace the principles of open source and open colaboration. Software should not be developed in closed of silos, but with collaboration and sharing in mind."
              ></VCard>
              <VCard
                title="Secure"
                text="For chairs to be able to share (confidential) theis topics with their students and for students to share their personal attributes with the potential advisors, we have regular external audits and follow industry standards"
              ></VCard>
            </VRow>
          </VListItemSubtitle>
        </VListItem>
      </VList>
    </VContainer>

    <div class="bg-primary">
      <VContainer class="my-5">
        <h2>Projects Timeline</h2>
        <VTimeline direction="vertical">
          <VTimelineItem fill-dot dot-color="white" size="20" v-for="item in timeline">
            <template v-slot:opposite>
              <span class="pt-1 headline font-weight-bold">{{ item.time }}</span>
            </template>
            <div v-html="item.text"></div>
          </VTimelineItem>
        </VTimeline>
      </VContainer>
    </div>

    <VContainer class="my-5">
      <h2>What users think about this Tool</h2>

      <VRow>
        <VCol
          v-for="testemonial in testemonials"
          :key="testemonial.name"
          md="12" lg="6"
        >
          <VCard class="m-4"
                 :prepend-avatar="testemonial.avatar"
                 :title="testemonial.name"
                 :subtitle="testemonial.position"
                 :text="testemonial.text" />
        </VCol>
      </VRow>
    </VContainer>

    <VContainer class="mb-10">
      <NuxtLink to="/login">
        <VBtn height="70px" width="100%" class="text-break">
          <div>
            <b>Log in</b><br> to find your thesis
          </div>
        </VBtn>
      </NuxtLink>
    </VContainer>
  </VCol>


</template>

<style lang="scss" scoped>
.v-col.fill-width {
  padding: 0;
}

#login-button {
  position: relative;
  top: -35px;
}
</style>

<script setup lang="ts">
const timeline = [
  { time: "2017", text: "The project was intially develped as xxx for xxx" },
  { time: "2020", text: "After the initial development, the project was taken over by the MW student council" },
  {
    time: "begin of 2023",
    text: "The project had a rewrite to a new stack to add features like an API and better security practices. This was also the time when Open Source @ TUM joined the project"
  },
  { time: "end of 2023", text: "The project was adopted as a sandbox project by TUM IT Management" }
];
const testemonials = [
  { avatar: "/faces/1.jpeg", name: "John Doe", position: "Student", text: "Lorem ipsum dolor sit amet, consectetur" },
  { avatar: "/faces/2.jpeg", name: "Lisa Doe", position: "IT Admin", text: "Lorem ipsum dolor sit amet, consectetur" },
  {
    avatar: "/faces/3.jpeg",
    name: "Max Mustermann",
    position: "Scientific staff",
    text: "Lorem ipsum dolor sit amet, consectetur"
  },
  {
    avatar: "/faces/frank.jpeg",
    name: "Frank Elsinga",
    position: "Nonscientific staff",
    text: "Lorem ipsum dolor sit amet, consectetur"
  }
];

definePageMeta({
  layout: "home"
});
</script>