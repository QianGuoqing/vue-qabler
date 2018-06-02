import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import DocumentationsPage from '../pages/documentations-page/DocumentationsPage.vue'
import DocColors from '../pages/documentations-page/components/doc-colors/DocColors.vue'
import DocAlerts from '../pages/documentations-page/components/doc-alerts/DocAlerts.vue'
import DocAvatars from '../pages/documentations-page/components/doc-avatars/DocAvatars.vue'
import DocTags from '../pages/documentations-page/components/doc-tags/DocTags.vue'
import DocButtons from '../pages/documentations-page/components/doc-buttons/DocButtons.vue'
import DocCards from '../pages/documentations-page/components/doc-cards/DocCards.vue'
import DocForms from '../pages/documentations-page/components/doc-forms/DocForms.vue'
import DocCharts from '../pages/documentations-page/components/doc-charts/DocCharts.vue'

import PagesPage from '../pages/pages-page/PagesPage.vue'
import PageLogin from '../pages/pages-page/views/page-login/PageLogin.vue'
import PageRegister from '../pages/pages-page/views/page-register/PageRegister.vue'
import PageForgotPassword from '../pages/pages-page/views/page-forgot-password/PageForgotPassword.vue'
import PageError400 from '../pages/pages-page/views/page-error400/PageError400.vue'
import PageError401 from '../pages/pages-page/views/page-error401/PageError401.vue'
import PageError403 from '../pages/pages-page/views/page-error403/PageError403.vue'
import PageError404 from '../pages/pages-page/views/page-error404/PageError404.vue'
import PageError500 from '../pages/pages-page/views/page-error500/PageError500.vue'
import PageError503 from '../pages/pages-page/views/page-error503/PageError503.vue'

import InterfacePage from '../pages/interface-page/InterfacePage.vue'
import ChartsPage from '../pages/interface-page/views/charts-page/ChartsPage.vue'
import CardDesignPage from '../pages/interface-page/views/card-design-page/CardDesignPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/documentations',
      name: 'DocumentationsPage',
      component: DocumentationsPage,
      children: [
        {
          path: 'alerts',
          name: 'DocAlerts',
          component: DocAlerts
        },
        {
          path: 'colors',
          name: 'DocColors',
          component: DocColors
        },
        {
          path: 'avatars',
          name: 'DocAvatars',
          component: DocAvatars
        },
        {
          path: 'tags',
          name: 'DocTags',
          component: DocTags
        },
        {
          path: 'buttons',
          name: 'DocButtons',
          component: DocButtons
        },
        {
          path: 'cards',
          name: 'DocCards',
          component: DocCards
        },
        {
          path: 'forms',
          name: 'DocForms',
          component: DocForms
        },
        {
          path: 'charts',
          name: 'DocCharts',
          component: DocCharts
        },
        {
          path: '/',
          redirect: '/documentations/alerts'
        }
      ]
    },
    {
      path: '/pages',
      name: 'PagesPage',
      component: PagesPage,
      children: [
        {
          path: 'page-login',
          name: 'PageLogin',
          component: PageLogin
        },
        {
          path: 'page-register',
          name: 'PageRegister',
          component: PageRegister
        },
        {
          path: 'page-forgot-password',
          name: 'PageForgotPassword',
          component: PageForgotPassword
        },
        {
          path: 'page-error400',
          name: 'PageError400',
          component: PageError400
        },
        {
          path: 'page-error401',
          name: 'PageError401',
          component: PageError401
        },
        {
          path: 'page-error403',
          name: 'PageError403',
          component: PageError403
        },
        {
          path: 'page-error404',
          name: 'PageError404',
          component: PageError404
        },
        {
          path: 'page-error500',
          name: 'PageError500',
          component: PageError500
        },
        {
          path: 'page-error503',
          name: 'PageError503',
          component: PageError503
        }
      ]
    },
    {
      path: '/interface',
      name: 'Interface',
      component: InterfacePage,
      children: [
        {
          path: 'charts-page',
          name: 'ChartsPage',
          component: ChartsPage
        },
        {
          path: 'card-design',
          name: 'CardDesignPage',
          component: CardDesignPage
        }
      ]
    }
  ]
})
