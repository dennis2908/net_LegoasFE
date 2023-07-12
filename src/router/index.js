import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')

const Charts = () => import('@/views/charts/Charts')
const CChartBarExample = () => import('@/views/charts/CChartBarExample')
const CChartDoughnutExample = () => import('@/views/charts/CChartDoughnutExample')
const CChartLineExample = () => import('@/views/charts/CChartLineExample')
const CChartPieExample = () => import('@/views/charts/CChartPieExample')
const CChartPolarAreaExample = () => import('@/views/charts/CChartPolarAreaExample')
const CChartRadarExample = () => import('@/views/charts/CChartRadarExample')

const Widgets = () => import('@/views/widgets/Widgets')


// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')
const Brands = () => import('@/views/icons/Brands')
const Flags = () => import('@/views/icons/Flags')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

//User Data
const UsersData = () => import('@/views/userdata/Users')
const Pengguna = () => import('@/views/pengguna/Pengguna')
const Kantor = () => import('@/views/kantor/Kantor')
const Layar = () => import('@/views/layar/Layar')
const Peran = () => import('@/views/peran/Peran')
const PeranLayar = () => import('@/views/peranLayar/PeranLayar')
const PenggunaAkun = () => import('@/views/users/Forms')


Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes() {

  let OpsiLayar = JSON.parse(localStorage.getItem('Layar')) ?? "";

  let akun = { path: '/akun/list', redirect: { name: 'Home' } }

  let pengguna = { path: '/pengguna/list', redirect: { name: 'Home' } }

  let kantor = { path: '/kantor/list', redirect: { name: 'Home' } }

  let layar = { path: '/layar/list', redirect: { name: 'Home' } }

  let peran = { path: '/peran/list', redirect: { name: 'Home' } }

  let peranLayar = { path: '/peranLayar/list', redirect: { name: 'Home' } }

  let penggunaAkun = { path: '/penggunaAkun/list', redirect: { name: 'Home' } }

  if (OpsiLayar !== "") {

    if (OpsiLayar.filter(e => e.namaLayar === 'Menu Akun').length > 0) {
      akun = {
        path: 'userdata',
        redirect: 'userdata',
        name: 'List Akun',
        component: {
          render(c) { return c('router-view') }
        },
        children: [
          {
            path: 'list',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                path: '',
                component: UsersData
              }
            ]
          }
        ]
      };
    }

    if (OpsiLayar.filter(e => e.namaLayar === 'Menu Pengguna').length > 0) {
      pengguna = {
        path: 'pengguna',
        redirect: 'pengguna',
        name: 'List Pengguna',
        component: {
          render(c) { return c('router-view') }
        },
        children: [
          {
            path: 'list',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                path: '',
                component: Pengguna
              }
            ]
          }
        ]
      };
    }

    if (OpsiLayar.filter(e => e.namaLayar === 'Menu Kantor').length > 0) {
      kantor = {
        path: 'kantor',
        redirect: 'kantor',
        name: 'List Kantor',
        component: {
          render(c) { return c('router-view') }
        },
        children: [
          {
            path: 'list',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                path: '',
                component: Kantor
              }
            ]
          }
        ]
      };
    }

    if (OpsiLayar.filter(e => e.namaLayar === 'Menu Layar').length > 0) {
      layar = {
        path: 'layar',
        redirect: 'layar',
        name: 'List Layar',
        component: {
          render(c) { return c('router-view') }
        },
        children: [
          {
            path: 'list',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                path: '',
                component: Layar
              }
            ]
          }
        ]
      };
    }

    if (OpsiLayar.filter(e => e.namaLayar === 'Menu Peran').length > 0) {
      peran = {
        path: 'peran',
        redirect: 'peran',
        name: 'List Peran',
        component: {
          render(c) { return c('router-view') }
        },
        children: [
          {
            path: 'list',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                path: '',
                component: Peran
              }
            ]
          }
        ]
      };
    }

    if (OpsiLayar.filter(e => e.namaLayar === 'Menu Peran Layar').length > 0) {
      peranLayar = {
        path: 'peranLayar',
        redirect: 'peranLayar',
        name: 'Peran & Layar',
        component: {
          render(c) { return c('router-view') }
        },
        children: [
          {
            path: 'list',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                path: '',
                component: PeranLayar
              }
            ]
          }
        ]
      };
    }
  };

  if (OpsiLayar.filter(e => e.namaLayar === 'Menu Pengguna Akun').length > 0) {
    penggunaAkun = {
      path: 'penggunaAkun',
      redirect: 'penggunaAkun',
      name: 'Daftar Pengguna & Akun',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: 'daftar',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              component: PenggunaAkun
            }
          ]
        }
      ]
    };
  }

  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      label: 'User Management',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: {
            label: 'Users'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Users',
              component: Users
            },
            {
              path: ':id',
              meta: {
                label: 'User Details'
              },
              name: 'User',
              component: User
            }
          ]
        },
        {
          path: 'charts',
          meta: {
            label: 'Charts'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: 'chartbar',
              name: 'Chart Bar',
              component: CChartBarExample
            },
            {
              path: 'chartdoughnut',
              name: 'Chart Doughnut',
              component: CChartDoughnutExample
            },
            {
              path: 'chartline',
              name: 'Chart Line',
              component: CChartLineExample
            }
            ,
            {
              path: 'chartpie',
              name: 'Chart Pie',
              component: CChartPieExample
            }
            ,
            {
              path: 'chartpolar',
              name: 'Chart Polar',
              component: CChartPolarAreaExample
            }
            ,
            {
              path: 'chartradar',
              name: 'Chart Radar',
              component: CChartRadarExample
            }
          ]
        },
        akun,
        pengguna,
        kantor,
        layar,
        peran,
        peranLayar,
        penggunaAkun
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
}

