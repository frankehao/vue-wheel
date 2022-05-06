<template>
  <button class="gulu-button" :class="{ [`theme-${theme}`]: theme }">
    按钮
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: 'button',
    },
  },
}
</script>
<style scoped></style>
