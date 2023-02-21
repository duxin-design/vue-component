<!--
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-21 17:02:48
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-21 17:29:22
 * @FilePath: \vue-admin\src\views\able\print.vue
 * @Description: 打印
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
-->

<script lang="ts" setup>
import { ref } from "vue";
import Print from "@/uitls/print";
interface User {
    date: string;
    name: string;
    age: number;
    address: string
}
const value = ref("1");

const options = [
    {
        value: "1",
        el: ".el-table",
        label: "Table"
    },
    {
        value: "2",
        el: ".echart",
        label: "Echart"
    },
    {
        value: "3",
        el: ".img",
        label: "Image"
    }
];
function onPrint() {
    const el = options.filter(v => v.value === value.value)[0]?.el;
    Print(el).toPrint;
}

const tableRowClassName = ({ rowIndex }: { row: User; rowIndex: number }) => {
    if (rowIndex === 1) {
        return "warning-row";
    } else if (rowIndex === 3) {
        return "success-row";
    }
    return "";
};

const tableData: User[] = [
    {
        date: "2016-05-03",
        name: "读心",
        age: 18,
        address: "中国深圳"
    },
    {
        date: "2016-05-02",
        name: "青竹心",
        age: 18,
        address: "中国成都"
    },
    {
        date: "2016-05-04",
        name: "读心悦",
        age: 18,
        address: "西藏拉萨"
    },
    {
        date: "2016-05-01",
        name: "偶有",
        age: 18,
        address: "乌鲁木齐"
    }
];
</script>
<template>
     <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="font-medium">打印功能（报表、图表、图片）</span>
        <div>
          <el-select
            v-model="value"
            class="m-2"
            placeholder="Select"
            size="small"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-button size="small" type="primary" @click="onPrint">
            打印
          </el-button>
        </div>
      </div>
    </template>
    <el-row :gutter="24">
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="24"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 200
          }
        }"
      >
        <el-table
          border
          :data="tableData"
          :row-class-name="tableRowClassName"
          class="el-table w-full mt-[10px]"
        >
          <el-table-column prop="date" label="日期" />
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="age" label="年龄" />
          <el-table-column prop="address" label="地址" />
        </el-table>
      </el-col>
      <el-col
        :xs="11"
        :sm="11"
        :md="11"
        :lg="11"
        :xl="11"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 200
          }
        }"
      >
        <p class="font-medium pt-1">Echart</p>
        稍等...
        <!-- <Line class="echart mt-[10px]" /> -->
      </el-col>
      <el-col
        :xs="11"
        :sm="11"
        :md="11"
        :lg="11"
        :xl="11"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 200
          }
        }"
      >
        <p class="font-medium pt-1">Image</p>
        <img
          src="https://avatars.githubusercontent.com/u/29058884?v=4"
          alt="avatars"
          class="img mt-[10px] w-[250px] h-[250px] m-auto"
        />
      </el-col>
    </el-row>
  </el-card>
</template>
