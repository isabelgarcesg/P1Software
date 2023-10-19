//Paulina estuvo acá
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarPacientes from '../components/ListarPacientes.vue'
import ListarUnPaciente from '../components/ListarUnPaciente.vue'
import EditarPaciente from '../components/EditarPaciente.vue'
import CrearPaciente from '../components/CrearPaciente.vue'

const routes = [
{
    path: '/',
    name: 'home',
  component: HomeView
},

  {
    path: '/EditarPaciente/:id',
    name: 'EditarPaciente',
    component: EditarPaciente
  },
  {
    path: '/ListarPacientes',
    name: 'ListarPacientes',
    component: ListarPacientes
  },
  {
    path: '/CrearPaciente',
    name: 'CrearPaciente',
    component: CrearPaciente
  },
  {
    path: '/ListarUnPaciente',
    name: 'ListarUnPaciente',
    component: ListarUnPaciente
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
