import Vue from 'vue'
import VueRouter from 'vue-router'
import values from 'lodash/values'

Vue.use(VueRouter)
/**
 * 自动引入当前文件夹下所有module
 * require.context(directory, useSubdirectories = false, regExp = /^.//);
 * @param {String} directory 读取文件的路径
 * @param {Boolean} directory 是否访问路径下更深层文件
 * @param {regExp} regExp 匹配文件的正则表达式
 */

// 自动读取modules下的路由文件
// 打包的时候如果只想局部打包，Define_FileName来自DefinePlugin注入的自定义变量,可以绕过context的静态检测,实现动态正则
// 根据modules的文件名, 如A则匹配 /A\.js$/ 对开发环境和生产环境都生效
const modulesFiles = require.context('./modules', true, Define_FileName)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^.\/(.*)\.js/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

let aysncRouter = values(modules).reduce((prev, next) => {
  return prev.concat(next);
})

const routes = [
  {
    path: '/',
    redirect: '/A/schoolCockpit',
    component: () => import('@/layouts/default.vue'),
    children: aysncRouter
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
