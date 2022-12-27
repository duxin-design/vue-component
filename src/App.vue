<template>
  <div>姓名：{{ data }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inject: ["data"],
  created() {
    console.log(this.data)
  }
})
</script>