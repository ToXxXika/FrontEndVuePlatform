import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/theme',
        name: 'Theme',
        redirect: '/theme/typography',
      },
      {
        path: '/theme/AjouterUtilisateur',
        name: 'Ajouter un utilisateur',
        component: () => import('@/views/theme/AjouterUtilisateur.vue'),
      },
      {
        path: '/theme/ListUtilisateur',
        name: 'Lister les utilisateurs',
        component: () => import('@/views/theme/ListerUtilisateur.vue'),
      },
      {
        path: '/base',
        name: 'Base',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/base/breadcrumbs',
        children: [
          {
            path: '/base/ListerProduit',
            name: 'Lister les Produits',
            component: () => import('@/views/base/ListerProduits.vue'),
          },
          {
            path: '/base/AjouterProduit',
            name: 'Ajouter un Produit',
            component: () => import('@/views/base/AjouterProduit.vue'),
          },
        ],
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/buttons/standard-buttons',
        children: [
          {
            path: '/buttons/AjouterCommande',
            name: 'Ajouter une commande',
            component: () => import('@/views/buttons/AjouterCommande.vue'),
          },
          {
            path: '/buttons/ListerCommandes',
            name: 'Lister les Commandes',
            component: () => import('@/views/buttons/ListerCommandes.vue'),
          },
        ],
      },


      {
        path: '/icons',
        name: 'Icons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/icons/coreui-icons',
        children: [
          {
            path: '/icons/ListerCours',
            name: 'Lister les cours',
            component: () => import('@/views/icons/ListeCours.vue'),
          },
          {
            path: '/icons/TableauDeBord',
            name: 'Tableau de bord',
            component: () => import('@/views/icons/TableauDeBord.vue'),
          },
        ],
      },
      {
        path: '/pages/404',
        name: 'Fournisseurs',
        component: () => import('@/views/pages/Page404.vue'),
      },
    ],
  },
  {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
