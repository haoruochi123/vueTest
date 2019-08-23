import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import ScGrassrootsIndex from './components/ScGrassrootsIndex'
import ComplainIndex from './components/complain/ComplainIndex'
import WorkHelpIndex from './components/workHelp/WorkHelpIndex'
import Gonsi from "./components/business/Gongsi"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ScGrassrootsIndex',
      component: ScGrassrootsIndex
    },
    {
      path: '/ComplainIndex',
      name: 'ComplainIndex',
      component: ComplainIndex,
      children: [{
        path: 'Gongsi',
        name:'c-Gongsi',
        components: {c:Gonsi}
      }]
    }
    ,
    {
      path: '/WorkHelpIndex',
      name: 'WorkHelpIndex',
      component: WorkHelpIndex,
      children: [{
        path: 'Gongsi',
        name:'w-Gongsi',
        components: {w:Gonsi}
      }]
    }
    
  ]
})
