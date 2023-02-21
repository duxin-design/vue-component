<!--
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-21 14:59:42
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-21 15:20:04
 * @FilePath: \vue-admin\src\layout\components\sidebar\leftCollapse.vue
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
-->
<script setup lang="ts">
import { ref, computed } from "vue";
import MenuFold from "@iconify-icons/ri/menu-fold-fill";

const props = withDefaults(defineProps(), { isActive: false })
const visible = ref(false);
const iconClass = computed(() => {
    return [
        "ml-4",
        "mb-1",
        "w-[16px]",
        "h-[16px]",
        "inline-block",
        "align-middle",
        "text-primary",
        "cursor-pointer",
        "duration-[100ms]",
        "hover:text-primary",
        "dark:hover:!text-white"
    ];
});

const emit = defineEmits<{
    (e: "toggleClick"): void;
}>();
const toggleClick = () => {
    emit("toggleClick");
};
</script>
<template>
    <div class="container">
        <!-- <el-tooltip class="box-item" effect="dark" content="Top Left prompts info" placement="top-start">
            <el-button>top-start</el-button>
        </el-tooltip> -->
        <!-- <el-tooltip placement="right" :visible="visible" :content="props.isActive ? '点击折叠' : '点击展开'">
                <el-tooltip class="box-item" effect="dark" content="Top Left prompts info" placement="top-start">
                    <el-button>top-start</el-button>
                </el-tooltip>
                <div>图标</div>
            </el-tooltip> -->
    </div>
</template>
<style lang="scss" scoped>
.container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    box-shadow: 0 0 6px -2px var(--el-color-primary);
}
</style>
