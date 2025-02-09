<!-- components/BaseButton.vue -->
<template>
    <button
      :class="buttonClasses"
      :disabled="disabled"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      variant: {
        type: String,
        default: 'primary' // Variantes: 'primary', 'secondary'
      },
    },
    computed: {
      buttonClasses() {
        return [
          'px-6 py-3 rounded-md shadow-sm transition-all focus:outline-none focus:ring-2',
          this.disabled
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
            : this.variant === 'primary'
            ? 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:scale-95 focus:ring-gray-400'
            : 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95 focus:ring-blue-400'
        ];
      }
    },
    methods: {
      handleClick() {
        if (!this.disabled) {
          this.$emit('click');
        }
      }
    }
  }
  </script>
  