<!--
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-21 14:46:01
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-21 14:53:21
 * @FilePath: \vue-admin\src\layout\components\sidebar\logo.vue
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
-->
<script setup lang="ts">
const props = defineProps({
    collapse: Boolean
});
const title = "vue-admin"
</script>
<template>
    <div class="sidebar-logo-container" :class="{
        collapses: props.collapse
    }">
    <transition name="sidebarLogoFade">
        <router-link
        v-if="props.collapse"
        key="props.collapse"
        :title="title"
        class="sidebar-logo-link"
        to="/"
      >
        <span class="sidebar-title">{{ title }}</span>
      </router-link>
      <router-link
        v-else
        key="expand"
        :title="title"
        class="sidebar-logo-link"
        to="/"
      >
        <span class="sidebar-title">{{ title }}</span>
      </router-link>
    </transition>
    </div>
</template>
<style lang="scss" scoped>
.sidebar-logo-container {
  width: 100%;
  height: 48px;
  overflow: hidden;
  position: relative;

  .sidebar-logo-link {
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    img {
      height: 32px;
      display: inline-block;
    }

    .sidebar-title {
      height: 32px;
      line-height: 32px;
      margin: 2px 0 0 12px;
    //   color: $subMenuActiveText;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
