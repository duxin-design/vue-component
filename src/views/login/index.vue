<script setup lang="ts">
import type { FormInstance } from "element-plus";
import {
    ref,
    toRaw,
    reactive,
    watch,
    computed,
    onMounted,
    onBeforeUnmount
} from "vue";
import { useRouter } from "vue-router";
import Motion from "./utils/motion";
import avatar from "@/assets/avatar.svg";
import { useStore } from "vuex";

const router = useRouter();
const loading = ref(false);
const ruleFormRef = ref<FormInstance>();
const store = useStore();

const ruleForm = reactive({
    username: "admin",
    password: "admin123",
});
const loginRules = {}
const onLogin = async (formEl: FormInstance | undefined) => {
    loading.value = true;
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log("登录", ruleForm,store)
            router.push("/")
            loading.value = false;
        } else {
            loading.value = false;
            return fields;
        }
    });
}
function onkeypress({ code }: KeyboardEvent) {
    if (code === "Enter") {
        onLogin(ruleFormRef.value);
    }
}

onMounted(() => {
    window.document.addEventListener("keypress", onkeypress);
    console.log("onMounted")
});

onBeforeUnmount(() => {
    console.log("onBeforeUnmount")
    window.document.removeEventListener("keypress", onkeypress);
});
</script>
<template>
    <div class="login-box">
        <div class="login-form">
            <img :src="avatar" alt="" class="logo">
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="loginRules" size="large">
                <Motion>
                    <el-form-item :rules="[{
                        required: true,
                        message: '请输入用户名'
                    }]" prop="username">
                        <el-input clearable v-model="ruleForm.username" :placeholder="'用户名'" />
                    </el-form-item>
                </Motion>
                <Motion :delay="200">
                    <el-form-item :rules="[{
                        required: true,
                        message: '请输入密码'
                    }]" prop="password">
                        <el-input clearable show-password v-model="ruleForm.password" :placeholder="'密码'" />
                    </el-form-item>
                </Motion>
                <Motion :delay="200">
                    <el-form-item>
                        <el-button class="w-full" size="default" type="primary" :loading="loading"
                            @click="onLogin(ruleFormRef)">
                            登录
                        </el-button>
                    </el-form-item>
                </Motion>
            </el-form>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.login-box {
    width: 100vw;
    height: 100vh;
    display: flex;
    place-content: center;
    place-items: center;

    .login-form {
        width: 360px;

        .logo {
            display: inherit;
            margin: 20px auto;
        }

        .w-full {
            width: 100%;
        }
    }
}
</style>
