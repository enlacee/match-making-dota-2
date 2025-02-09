
  <!-- <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div> -->
  <!-- <div>
   <h1>Welcome to the homepage</h1>
  </div> -->
  <!-- <template>
    <div>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
  </template> -->
<script setup>
  useHead({
    bodyAttrs: {
      class: "bg-gray-100",
    },
  });
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

