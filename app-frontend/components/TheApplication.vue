<script>
  import Step1 from '@/components/Step1.vue'
  import Step2 from '@/components/Step2.vue'
  import Step3 from '@/components/Step3.vue'

  export default {
    components: {
      Step1,
      Step2,
      Step3
    },
    data() {
      return {
        currentTab: 'Step1',
        tabs: ['Step1','Step2', 'Step3']
      }
    },
    computed: {},
    methods: {
      setComponentName(nameComponent){
        // Change the current tab selected
        this.currentTab = nameComponent
      }
    }
  }
</script>

<template>
  <!-- <button
      v-for="tab in tabs"
      :key="tab"
      :class="['bg-blue-500  px-4 m-1 border-black border-2', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
    {{ tab }}
  </button> -->

  <component :is="currentTab" @changeCurrentComponent="setComponentName"></component>
</template>