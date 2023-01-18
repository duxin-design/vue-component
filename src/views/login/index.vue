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
import Motion from "./utils/motion"

const router = useRouter();
const loading = ref(false);
const checked = ref(false);
const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
    username: "admin",
    password: "admin123",
    verifyCode: ""
});
const loginRules = {}
const onLogin = async (formEl: FormInstance | undefined) => {
    loading.value = true;
    if (!formEl) return;

    await formEl.validate((valid, fields) => {
        console.log("登录", formEl)
        if (valid) {
            
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
});

onBeforeUnmount(() => {
    window.document.removeEventListener("keypress", onkeypress);
});
</script>
<template>
    <div class="login-box">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="loginRules">
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
                    <el-button class="w-full mt-4" size="default" type="primary" :loading="loading"
                        @click="onLogin(ruleFormRef)">
                        登录
                    </el-button>
                </el-form-item>
            </Motion>
        </el-form>
    </div>
</template>

<style scoped>

</style>