<!--
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 17:00:06
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-21 16:31:01
 * @FilePath: \vue-admin\src\layout\index.vue
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
-->
<script setup lang="ts">
import "animate.css";
import { useRoute, useRouter } from "vue-router";
import adAside from "./components/sidebar/adAside.vue";
import leftCollapse from "./components/sidebar/leftCollapse.vue";
import logo from "./components/sidebar/logo.vue";
import { ref } from "vue";
const adRouter = useRouter();
const adRoute = useRoute();
// 菜单路由，一般是从后端获取的
const mainRouterList = [{
    title: '欢迎',
    name: "Welcome",
    path: "/home"
}, {
    title: "关于",
    name: "about",
    path: "/about"
}, {
    title: "功能",
    name: "WaterMark",
    children: [
        {
            title: "水印",
            name: "WaterMark",
            path: "/able/watermark"
        },
        {
            title: "打印",
            name: "print",
            path: "/able/print"
        }
    ]
}]
const defaultActive = ref("");
defaultActive.value = adRoute.path;
console.log("==路由",adRoute.path)
</script>
<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px" class="aside-wrap">
                <el-scrollbar>
                    <logo />
                    <el-menu router unique-opened mode="vertical" class="outer-most select-none"
                        :default-active="defaultActive">
                        <adAside :mainRouterList="mainRouterList" />
                    </el-menu>
                </el-scrollbar>
                <!-- <leftCollapse /> -->
            </el-aside>
            <el-container>
                <!-- <el-header class="header-wrap">
                                        header
                                    </el-header> -->
                <el-main class="main-wrap">
                    <router-view />
                </el-main>
                <!-- <el-footer class="ad-footer">
                                        footer
                                    </el-footer> -->
            </el-container>
        </el-container>
    </div>
</template>

<style lang="scss" scoped>
.aside-wrap {
    background-color: rgb(136, 136, 136);
    height: 100vh;
}

.header-wrap {
    height: 60px;
    border: 1px solid red;
}

.main-wrap {
    height: 100%;
}

.ad-footer {
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>