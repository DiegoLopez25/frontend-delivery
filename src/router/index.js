import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "../layouts/MainLayout.vue"
import Dashboard from "../views/DashboardView.vue"
import CategoriaView from "../views/CategoriaViews/CategoriaView.vue"
import NuevaCategoriaView from "../views/CategoriaViews/NuevaCategoriaView.vue"
import UsuarioView from "../views/UsuarioViews/UsuarioView.vue"
import NuevoUsuarioView from "../views/UsuarioViews/NuevoUsuarioView.vue"
import EditarUsuarioView from "../views/UsuarioViews/EditarUsuarioView.vue"
import TiendaView from "../views/TiendaViews/TiendaView.vue";
import EditarTiendaView from "../views/TiendaViews/EditarTiendaView.vue";
import NuevaTiendaView from "../views/TiendaViews/NuevaTiendaView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children:[
        {
          path:'',
          name:'home',
          component: Dashboard
        },
        {
          path:'categoria-tienda',
          name:'categoria-tienda',
          component: CategoriaView 
        },
        {
          path:'categoria-tienda/nueva-categoria',
          name:'nueva-categoria',
          component: NuevaCategoriaView
        },
        {
          path:'usuarios',
          name:'usuarios',
          component: UsuarioView
        },
        {
          path:'usuarios/nuevo-usuario',
          name:'nuevo-usuario',
          component: NuevoUsuarioView
        },
        {
          path:'usuarios/editar-usuario',
          name:'editar-usuario',
          component: EditarUsuarioView
        },

        {
          path: 'tiendas',
          name: 'tiendas',
          component: TiendaView
        },

        {
          path: 'tiendas/editar-tienda',
          name: 'editar-tienda',
          component: EditarTiendaView
        },

        {
          path: 'tiendas/nueva-tienda',
          name: 'nueva-tienda',
          component: NuevaTiendaView
        },
      ]
    },
    {
      path:'/login',
      name:'login',
      component: () => import('../views/LoginView.vue')
    }

  ]
})

export default router
