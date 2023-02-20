<!--
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 17:00:06
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 17:26:06
 * @FilePath: \vue-admin\src\layout\index.vue
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
-->
<script setup lang="ts">
import "animate.css";
// import { setType } from "./types";
import { deviceDetection, useDark, useGlobal } from "@pureadmin/utils";
import { h, reactive, computed, onMounted, defineComponent } from "vue";
</script>
<template>
    <div v-resize :class="['app-wrapper']">
        <div class="app-mask" />
    </div>
    <div :class="['main-container']">
        <div>
            <app-main></app-main>
        </div>
    </div>
</template>