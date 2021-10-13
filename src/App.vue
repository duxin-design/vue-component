<!--
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-10-12 00:17:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-13 23:55:13
 * @Description: 文件描述
-->
<template>
  <router-view class="routerView"> 
    <transition :name="transitionName">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const state = reactive();
  },
};
</script>

<style></style>
