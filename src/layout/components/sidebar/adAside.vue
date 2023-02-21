<!--
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-21 11:01:47
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-21 16:17:55
 * @FilePath: \vue-admin\src\layout\components\sidebar\adAside.vue
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
-->
<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const adRouter = useRouter();
const adProps = defineProps(['mainRouterList']);
const mainRouterList = adProps.mainRouterList;
const handleClickMenu = (subItem: any) => {
  adRouter.push(subItem?.index)
}
</script>
<template>

  <template v-for="item in mainRouterList" :key="item.name">
    <el-sub-menu :index="item.path" v-if="item?.children?.length > 0">
      <template #title>
        <!-- <el-icon>
          <component :is="item?.icon" />
        </el-icon> -->
        <span>{{ item?.title }}</span>
      </template>
      <adAside :mainRouterList="item?.children" />
    </el-sub-menu>

    <el-menu-item :index="item.path" v-else @click="handleClickMenu">{{ item?.title }}</el-menu-item>
  </template>
</template>
