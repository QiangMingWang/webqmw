/*
 * @Founder: Mr.Qiang
 * @Date: 2022-07-31 11:28:58
 * @LastEditTime: 2022-07-31 11:57:51
 * @Description: No description yet
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const ROUTER_LIST = []

function importRouterConfig (r) {
  r.keys().forEach((key) => ROUTER_LIST.push(r(key).default))
}

importRouterConfig(require.context('./', true, /\.routes\.js/))

const routes = [...ROUTER_LIST, { path: '/', redirect: 'index' }]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
