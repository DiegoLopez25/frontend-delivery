import {createRouter, createWebHistory} from 'vue-router'
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

//StoreCategory
import StoreCategoryIndex from "../views/StoreCategory/Index.vue";
import StoreCategoryCreate from "../views/StoreCategory/Create.vue";
import StoreCategoryEdit from "../views/StoreCategory/Edit.vue";
import StoreCategoryShow from "../views/StoreCategory/Show.vue";


const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return {top: 0}
    },
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/dashboard',
            component: MainLayout,
            meta: {requiresAuth: true},
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: Dashboard,
                    meta: {
                        title: 'Dashboard',
                    }
                },

                {
                    path: '/usuarios',
                    name: 'usuarios',
                    component: UsuarioView
                },
                {
                    path: '/usuarios/nuevo-usuario',
                    name: 'nuevo-usuario',
                    component: NuevoUsuarioView
                },
                {
                    path: '/usuarios/editar-usuario',
                    name: 'editar-usuario',
                    component: EditarUsuarioView
                },

                {
                    path: '/tiendas',
                    name: 'tiendas',
                    component: TiendaView
                },

                {
                    path: '/tiendas/editar-tienda',
                    name: 'editar-tienda',
                    component: EditarTiendaView
                },

                {
                    path: '/tiendas/nueva-tienda',
                    name: 'nueva-tienda',
                    component: NuevaTiendaView
                },

                //Store categories
                {
                    path: '/categoria-tienda',
                    name: 'StoreCategoryIndex',
                    component: StoreCategoryIndex,
                    meta: {title: 'Categorias de Tiendas'}
                },
                {
                    path: '/categoria-tienda/crear',
                    name: 'StoreCategoryCreate',
                    component: StoreCategoryCreate,
                    meta: {title: 'Crear Categoría de Tienda'}
                },
                {
                    path: '/categoria-tienda/:id/editar',
                    name: 'StoreCategoryEdit',
                    component: StoreCategoryEdit,
                    meta: {title: 'Editar Categoría de Tienda'}
                },
                {
                    path: '/categoria-tienda/detalles/:id',
                    name: 'StoreCategoryShow',
                    component: StoreCategoryShow,
                    meta: {title: 'Detalles de la Categoría de Tienda'}
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
            meta: {isGuest: true, title: 'Iniciar sesión'},
        }

    ]
});


router.beforeEach((to, from, next) => {

    const loggedIn = localStorage.getItem("authToken");

    if (loggedIn && to.meta.isGuest) {
        next('/dashboard');
        return;
    }

    if (!loggedIn && to.meta.requiresAuth) {
        next('/login');
        return;
    }

    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title + ' - Delivery App';
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title + ' - Delivery App';
    }

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });

        // We use this to track which meta tags we create so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    next();

})


export default router
