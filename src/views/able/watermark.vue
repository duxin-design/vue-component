<!--
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-21 16:07:06
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-21 16:52:29
 * @FilePath: \vue-admin\src\views\able\watermark.vue
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
-->
<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount,onBeforeMount } from "vue";
import { useWatermark } from "@pureadmin/utils";

const local = ref();
const preventLocal = ref();
const color = ref("#409EFF");
const value = ref("vue-pure-admin");
const { setWatermark, clear } = useWatermark();
const { setWatermark: setLocalWatermark, clear: clearLocal } =
    useWatermark(local);
const { setWatermark: setPreventLocalWatermark } = useWatermark(preventLocal);

onMounted(() => {
    nextTick(() => {
        setPreventLocalWatermark("无法删除的水印", {
            forever: true,
            width: 187,
            height: 80
        });
    });
});

onBeforeUnmount(() => {
    // 在离开该页面时清除整页水印
    // clear();
});
onBeforeMount(()=>{
    setWatermark("9878", { fillStyle: "rgba(32,231,152,.4)" })
})
</script>
<template>
    <el-card shadow="never">
        <template #header>
            <div class="card-header">
                <span class="font-medium">
                    页面水印功能（将平台主题改为亮白色观察水印效果更明显哦）
                </span>
            </div>
        </template>
        <span> 请输入要创建水印的值：</span>
        <el-input class="mb-4 mr-4" style="width: 200px" v-model="value" clearable />
        <span>请选择要创建水印的颜色：</span>
        <el-color-picker v-model="color" show-alpha />
        <br />
        <el-button @click="setWatermark(value, { fillStyle: color })">
            创建整页水印
        </el-button>
        <el-button @click="
            setWatermark(value, {
                gradient: [
                    { value: 0, color: 'magenta' },
                    { value: 0.5, color: 'blue' },
                    { value: 1.0, color: 'red' }
                ]
            })
        ">
            创建整页渐变水印
        </el-button>
        <el-button @click="
            setWatermark(value, {
                rotate: 0,
                gradient: [
                    { value: 0, color: 'magenta' },
                    { value: 0.5, color: 'blue' },
                    { value: 1.0, color: 'red' }
                ]
            })
        ">
            创建整页渐变且水平90度的水印
        </el-button>
        <el-button @click="
            setWatermark(value, {
                gradient: [
                    { value: 0, color: 'magenta' },
                    { value: 0.5, color: 'blue' },
                    { value: 1.0, color: 'red' }
                ],
                shadowConfig: [20]
            })
        ">
            创建整页渐变且有阴影的水印
        </el-button>
        <el-button @click="
            setWatermark(value, {
                globalAlpha: 0.15, // 值越低越透明
                gradient: [
                    { value: 0, color: 'magenta' },
                    { value: 0.5, color: 'blue' },
                    { value: 1.0, color: 'red' }
                ]
            })
        ">
            创建整页高透明渐变水印
        </el-button>
        <el-button @click="clear">清除整页水印</el-button>
    </el-card>
</template>
  