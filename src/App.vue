<template>
  <!-- <div id="nav">
    <router-link to="/"> 首页 </router-link> |
    <router-link to="/login"> 关于 </router-link>
  </div> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus';

export default defineComponent({
  name: "app",
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  computed: {
    currentLocale() {
      return
    }
  }
})
</script>