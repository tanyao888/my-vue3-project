<template>
  <el-dialog :title=title v-model="visible">
    <div class="dialog-content">
      <component :is="component" ref="customComponentRef"></component>
    </div>
    <template #footer>
      <span>
        <el-button @click="cancelHandler">取消</el-button>
        <el-button type="primary" @click="submitHandler">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDialog, ElButton } from 'element-plus'

const props = defineProps({
  component: {
    type: Object,
    default: () => { }
  },
  title: {
    type: String,
    default: ''
  },
  onSubmit: {
    type: Function
  },
  onCancel: {
    type: Function
  }
})

const visible = ref(true)
const customComponentRef = ref(null)
const cancelHandler = () => {
  props.onCancel()
  closeDialog()
}
const submitHandler = () => {
  props.onSubmit(customComponentRef.value, closeDialog)
}

const closeDialog = () => {
  visible.value = false
}
</script>

<style lang="less" scoped></style>