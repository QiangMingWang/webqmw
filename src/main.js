/*
 * @Founder: Mr.Qiang
 * @Date: 2022-07-31 11:28:58
 * @LastEditTime: 2022-07-31 14:49:20
 * @Description: No description yet
 */
import { createApp } from 'vue'
import App from './App.vue'
import '../public/reset.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入路由
import router from './router'

// 批量注册全局组件
import install from './components'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(install)

app.mount('#app')
