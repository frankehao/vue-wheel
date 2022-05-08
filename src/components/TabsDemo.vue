<template>
  <div>Tabs示例</div>
  <h1>示例1</h1>
  <Tabs title="导航1">内容1</Tabs>
  <Tabs title="导航2">内容2</Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'

export default {
  components: {
    Tabs,
    Tab,
  },
}
</script>
<style scoped></style>
