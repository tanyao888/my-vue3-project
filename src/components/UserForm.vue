<template>
  <el-form :model="formModel">
    <el-form-item label="姓名">
      <el-input v-model="formModel.name"></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, toRaw } from 'vue'
import { ElForm, ElInput, ElFormItem } from 'element-plus'

const formModel = reactive({
  name: ''
})

defineExpose({
  formModel: toRaw(formModel)
})
</script>