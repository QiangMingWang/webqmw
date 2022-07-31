/*
 * @Founder: Mr.Qiang
 * @Date: 2022-07-31 11:28:58
 * @LastEditTime: 2022-07-31 11:32:36
 * @Description: No description yet
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../public/reset.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入路由

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
