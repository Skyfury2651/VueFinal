import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from "../views/Product";
import Sale from "../views/Sale";

Vue.use(VueRouter)

const routes = [
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/sale',
    name: 'Sale',
    component: Sale
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
