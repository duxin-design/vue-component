<script setup lang="ts">
import back from "@/assets/back.svg"
</script>

<template>
    <div class="w-full h-full text-center">
        <h1>业务内容模块</h1>
        <p>使用场景：需要嵌套其他平台的某一个页面，不用显示菜单导航</p>
        <div class="back" title="返回上一页" @click="$router.go(-1)">
            <div class="w-[80px] h-[80px]"><img :src="back" alt=""></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.back {
    width: 200px;
    height: 200px;
    cursor: pointer;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(138, 150, 154, 0.2);

    &:hover {
        background: rgba(138, 150, 160, 0.2);
        transition: background 0.8s;
    }
}
</style>