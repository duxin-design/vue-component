<!--
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 16:37:27
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 16:57:18
 * @FilePath: \vue-admin\src\views\about\index.vue
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
-->
<script setup lang="ts">

</script>
<template>
<div>
    <el-card class="box-card mb-4" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">关于</span>
        </div>
      </template>
      <span style="font-size: 15px">
        Pure-Admin 是一个基于Vue3、Vite2、TypeScript、Element-Plus
        的中后台解决方案，它可以帮助您快速搭建企业级中后台，提供现成的开箱解决方案及丰富的示例。原则上不收取任何费用及版权，可以放心使用，不过如需二次开源（比如用此平台二次开发并开源）请联系作者获取许可！
      </span>
    </el-card>

    <el-card class="box-card m-4" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">项目信息</span>
        </div>
      </template>
      <!-- <PureDescriptions :columns="columns" border :column="3" align="left" /> -->
    </el-card>

    <el-card class="box-card m-4" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">生产环境依赖</span>
        </div>
      </template>
      <!-- <el-descriptions border>
        <el-descriptions-item
          :label="item.label"
          label-align="left"
          align="left"
          v-for="(item, index) in schema"
          :key="index"
        >
          <a
            :href="'https://www.npmjs.com/package/' + item.label"
            target="_blank"
          >
            <span style="color: var(--el-color-primary)">{{ item.field }}</span>
          </a>
        </el-descriptions-item>
      </el-descriptions> -->
    </el-card>

    <el-card class="box-card m-4" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">开发环境依赖</span>
        </div>
      </template>
      <!-- <el-descriptions border>
        <el-descriptions-item
          :label="item.label"
          label-align="left"
          align="left"
          v-for="(item, index) in devSchema"
          :key="index"
        >
          <a
            :href="'https://www.npmjs.com/package/' + item.label"
            target="_blank"
          >
            <span style="color: var(--el-color-primary)">{{ item.field }}</span>
          </a>
        </el-descriptions-item>
      </el-descriptions> -->
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.main-content {
  margin: 0 !important;
}
</style>