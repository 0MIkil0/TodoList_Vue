import { createRouter, createWebHashHistory } from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const routes = [

  {
    path: '/Calc', 
    name: 'Calc' ,
    component: () => import(/* webpackChunkName: "about" */ '../components/LessonTwo')
  },
  {
    path: '/List', 
    name: 'List' ,
    component: () => import(/* webpackChunkName: "about" */ '../components/TodoList.vue')
  },
  {
    path: '/Animals', 
    name: 'Animals' ,
    component: () => import(/* webpackChunkName: "about" */ '../components/AnimalsList.vue')
  },
  {
    path: '/Name', 
    name: 'Name' ,
    component: () => import(/* webpackChunkName: "about" */ '../components/YourName.vue')
  },
  {
    path: '/Dom', 
    name: 'Dom' ,
    component: () => import(/* webpackChunkName: "about" */ '../components/VirtualDom.vue')
  },
  {
    path: '/Animation', 
    name: 'Animation' ,
    component: () => import(/* webpackChunkName: "about" */ '../components/AnimAtion.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
