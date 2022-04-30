<template><router-view></router-view>123123</template>
<script lang="ts">
import { ref, provide } from 'vue'
import { router } from './router'
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width >= 500 ? true : false)
    provide('asideVisible', asideVisible)
  },
}
</script>
