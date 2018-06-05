import Vue from 'vue'
import Router from 'vue-router'
//首页
import home from 'components/home/home'
import onlineTest from 'components/onlineTest/onlineTest'
import skillsCompetition from 'components/skillsCompetition/skillsCompetition'
import login from 'components/login/login'

//密码学组件
import cryptology from 'components/cryptology/cryptology'
import classical from 'components/cryptology/classical'
import data from 'components/cryptology/data'
import extendVirginia from 'components/cryptology/extendVirginia'
import extendDES from 'components/cryptology/extendDES'
import aceEditor from 'components/cryptology/aceEditor'


Vue.use(Router);

export default new Router({
  routes: [{
      path:'*',
      redirect:'/home'
    },{
      path:'/home',      //首页
      component:home
    },{
    path:'/cryptology_data/extend_DES',
    component:extendDES
  },{
      path:'/online_test',        //古典密码学
      component:cryptology,
      children:[
        {
          path:'/',
          redirect:'/cryptology_classical'
        },
        {
          path:'/cryptology_classical',
          component:classical,
        },
        {
          path:'/cryptology_classical/extend_VirginiaKey',
          component:extendVirginia,
        },
        {
          path:'/cryptology_data',
          component:data
        },{
          path:'/cryptology_data/ace-editor',
          component:aceEditor
        },

      ]
    },{
      path:'/skills_competition',     //技能竞赛
      component:skillsCompetition
    },{
      path:'/login',     //登录
      component:login
    },]
})

