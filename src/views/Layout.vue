<template>
  <div class="layout-wrap">
    <el-container>
      <el-header>
        <div class="header-wrap">
          <div class="header-left">
            <img class="logo" src="@/assets/logo.svg" alt="">
            <span class="project-name">我的VUE</span>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu active-text-color="#ffd04b" text-color="#fff" background-color="#545c64" :default-active="path"
            :router="true">
            <el-menu-item v-for="item in menuList" :key="item.path" :index="item.path">
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const { path } = useRoute()

const menuList = reactive([
  {
    path: '/file-to-blob',
    name: '文件转Blob流',
    icon: 'location'
  },
  {
    path: '/dialog-plugin',
    name: 'dialog自定义插件',
    icon: 'Menu'
  }
])

</script>

<style lang="less" scoped>
.layout-wrap {
  :deep(.el-menu) {
    width: 200px;
    border: 0;
  }

  :deep(.el-main) {
    border-top: 1px solid #ccc;
  }
}

.header-wrap {
  height: 100%;

  .header {
    &-left {
      height: 100%;
      display: flex;
      align-items: center;
      width: 200px;
      background-color: #545c64;

      .logo {
        height: 40px;
        width: 40px;
        margin-left: 10px;
        border: 1px solid #ccc;
        border-radius: 50%;
      }

      .project-name {
        font-weight: 400;
        ialogzor: #ffd04b;
        padding-left: 10px;
      }
    }
  }
}
</style>