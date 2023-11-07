<template>
  <div class="home-wrap">
    <div>
      <div class="title">图片文件转base64格式</div>
      <input type="file" @change="handleUploadBase64">
      <img :src="imgBase64Url" alt="">
    </div>
    <hr>
    <div>
      <div class="title">图片文件转blobUrl格式,支持下载</div>
      <input type="file" @change="handleUploadBlob">
      <img v-if="imgInfo.fileUrl" :src="imgInfo.fileUrl" alt="">
      <el-button type="primary" @click="downLoad">下载</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { fileToBase64, fileToBlobUrl } from 'util/commonUtil';

type ImgInfo = {
  fileName?: string,
  fileSize?: number | string,
  fileType?: string,
  fileUrl?: string,
}

const imgBase64Url = ref()
const imgInfo = ref<ImgInfo>({})
const handleUploadBase64 = async (e: any) => {
  const file = e.target.files[0]
  const result = await fileToBase64(file)
  imgBase64Url.value = result as string
}


const handleUploadBlob = async (e: any) => {
  const file = e.target.files[0]
  const result = await fileToBlobUrl(file)
  imgInfo.value = result
}

const downLoad = () => {
  if (!imgInfo.value.fileUrl) return
  let a: any = document.createElement('a')
  a.href = imgInfo.value.fileUrl
  a.download = `${imgInfo.value.fileName}${imgInfo.value.fileType}`
  a.style.display = 'none'
  a.click()
  URL.revokeObjectURL(imgInfo.value.fileUrl)
  a = null

}
</script>

<style lang="less" scoped>
img {
  height: 100px;
  width: 100px;
}
</style>