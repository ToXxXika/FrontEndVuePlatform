export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Gestion des utilisateurs',
  },
  {
    component: 'CNavItem',
    name: 'Ajouter un utilisateur',
    to: '/theme/AjouterUtilisateur',
    icon: 'cil-drop',
  },
  {
    component: 'CNavItem',
    name: 'Liste des utilisateurs',
    to: '/theme/ListUtilisateur',
    icon: 'cil-pencil',
  },
  {
    component: 'CNavTitle',
    name: 'Gestion des Services',
  },
  {
    component: 'CNavGroup',
    name: 'Produits',
    to: '/base',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: 'Liste des produits',
        to: '/base/ListerProduit',
      },
      {
        component: 'CNavItem',
        name: 'Ajouter un produit',
        to: '/base/AjouterProduit',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Commandes',
    to: '/buttons',
    icon: 'cil-cursor',
    items: [
      {
        component: 'CNavItem',
        name: 'Ajouter une commande',
        to: '/buttons/AjouterCommande',
      },
      {
        component: 'CNavItem',
        name: 'Lister commandes',
        to: '/buttons/ListerCommandes',
      },

    ],
  },
  {
    component: 'CNavGroup',
    name: 'Cours',
    to: '/icons',
    icon: 'cil-star',
    items: [
      {
        component: 'CNavItem',
        name: 'Liste des Cours',
        to: '/icons/ListerCours',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        component: 'CNavItem',
        name: 'Tableau de bord',
        to: '/icons/TableauDeBord',
      },

    ],
  },
  {
    component: 'CNavItem',
    name: 'Fournisseurs',
    to: '/pages/404',
    icon: 'cil-calculator',
    badge: {
      color: 'danger',
      text: 'EN COURS',
      shape: 'pill',
    },
  },



  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
