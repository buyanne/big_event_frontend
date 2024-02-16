<script setup>
import {User, Lock} from '@element-plus/icons-vue'
import {ref} from 'vue'

const isRegister = ref(false)
</script>

<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <el-form ref="form" size="large" autocomplete="off" v-if="isRegister">
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>

      </el-form>
    </el-col>
  </el-row>
</template>