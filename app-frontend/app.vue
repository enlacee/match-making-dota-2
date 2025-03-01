<template>
  <div :class="{'dark': isDark}">
    <div class="pepe min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Theme Toggle Button -->
        <div class="absolute top-4 right-4">
          <button 
            @click="toggleTheme" 
            class="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 dark:border dark:border-red-500 transition-colors">
            <span v-if="isDark" class="text-yellow-500">🌞</span>
            <span v-else class="text-gray-700">🌙</span>
          </button>
        </div>
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
<script setup>
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// Initialize theme from localStorage
onMounted(() => {
  const theme = localStorage.getItem('theme')
  isDark.value = theme === 'dark'
})
</script>

<!-- 
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
 -->
