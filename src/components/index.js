/*
 * @Founder: Mr.Qiang
 * @Date: 2022-07-31 14:02:15
 * @LastEditTime: 2022-07-31 14:48:59
 * @Description: No description yet
 */
import { ArrowDown } from '@element-plus/icons-vue'
const importFn = require.context('./', true, /\.vue$/)

const COMPONENT_LIST = []
COMPONENT_LIST.push(ArrowDown)

export default {
  install (app) {
    // 批量注册全局组件
    importFn.keys().forEach((key) => {
      COMPONENT_LIST.push(importFn(key).default)
    })
    COMPONENT_LIST.forEach((key) => {
      // 注册组件
      app.component(key.name, key)
    })
  }
}
