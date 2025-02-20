import { createRouter, createWebHistory } from 'vue-router'

// Import tất cả các trang (views)
import Analyze from '../views/Analyze.vue'
import Input from '../views/Input.vue'
import Login from '../views/Login.vue'
import MainPage from '../views/MainPage.vue'
import Setting from '../views/Setting.vue'

// Định nghĩa các routes
const routes = [
  { path: '/analyze', component: Analyze },
  { path: '/input', component: Input },
  { path: '/login', component: Login },
  { path: '/mainpage', component: MainPage },
  { path: '/setting', component: Setting },
  { path: '/', redirect: '/login' } // Mặc định chuyển hướng về trang Login
]

// Tạo router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
