<template>
  <div class="container">
    <el-button @click="openHandler">打开弹窗插件</el-button>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, getCurrentInstance } from 'vue'

const { proxy }: { proxy: any } = getCurrentInstance()

const openHandler = () => {
  proxy.$showDialog({
    component: defineAsyncComponent(() => import('@/components/UserForm.vue')),
    title: '添加用户',
    width: '600px',
    onSubmit({ formModel }, close) {
      console.log("🚀 ~ onSubmit ~ formModel:", formModel)
      close()
    },
    onCancel() {

    }
  })
}

</script>
<style lang="less" scoped></style>