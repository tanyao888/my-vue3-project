import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/Layout.vue'),
      redirect: '/file-to-blob',
      children: [
        {
          path: '/file-to-blob',
          name: 'fileToBlob',
          component: () => import('@/views/FileToBlob.vue')
        },
        {
          path: '/dialog-plugin',
          name: 'dialogPlugin',
          component: () => import('@/views/DialogPlugin.vue')
        }
      ]
    }
  ]
})

export default router
