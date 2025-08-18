import { createRouter, createWebHistory } from 'vue-router'
// import { useHead } from '@unhead/vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/home/Home.vue'),
    meta: {

title: '广东省考技巧网官网,广东公务员考试,行测真题,申论真题,广东省考,行测技巧,申论考试',

description: '广东省考技巧网是专注于广东公务员考试的备考平台，提供行测与申论系统的答题策略及真题解析。针对行测，强调模块化训练，重点突破言语理解、判断推理等高频高分模块，并分享时间分配技巧;申论部分结合时政热点，提供写作模板与模拟题库，提升材料分析与对策撰写能力。助力考生高效掌握省考核心要点，科学规划复习路径，提升上岸成功率。' ,

keywords: '公务员考试,广东省考,广东公务员考试,广东省考真题,行测真题,申论真题' ,

}

    },

    {
      path: '/administration',
      name: 'administration',

      component: () => import('../views/administration/Administration.vue'),
      meta: { title: '行测技巧-广东省考技巧网' },
    },
    {
      path: '/explain',
      name: 'ExplainList',

      component: () => import('../views/explain/explainlist/ExplainList.vue'),
      meta: { title: '申论技巧-广东省考技巧网' },
    },
    {
      path: '/explaindetail/:iid',
      name: 'ExplainDetail',

      component: () => import('../views/explain/explaindetail/ExplainDetail.vue'),
      meta: { title: '申论技巧详情页-广东省考技巧网' },
    },
    {
      path: '/testbank',
      name: 'testbank',

      component: () => import('../views/testbank/TestBank.vue'),
      meta: { title: '题库-广东省考技巧网' },
    },
    {
      path: '/testbankdetail/:iid',
      name: 'testbankdetail',

      component: () => import('../views/testbank/adminbank/adminbankdetail/AdminBankDetail.vue'),
      meta: { title: '题库详情页-广东省考技巧网' },
    },
    {
      path: '/testanswer/:id',
      name: 'testanswer',

      component: () => import('../views/testbank/adminbank/testanswer/TestAnswer.vue'),
      meta: { title: '答案-广东省考技巧网' },
    },

    {
      path: '/testexplaindetail/:nid',
      name: 'testexplaindetail',

      component: () => import('../views/testbank/explianbank/explainbankdetail/ExplainDetail.vue'),
      meta: { title: '申论详情页-广东省考技巧网' },
    },

    {
      path: '/about',
      name: 'about',

      component: () => import('../views/about/About.vue'),
      meta: { title: '关于省考技巧网-广东省考技巧网' },
    },
    {
      path: '/admindetail/:iid',
      name: 'AdminDetail',

      component: () => import('../views/administration/admindetail/AdminDetail.vue'),
      meta: { title: '行测技巧详情页-广东省考技巧网' },
    },
    {
      path: '/searchadmin',
      name: 'searchadmin',

      component: () => import('../views/search/SearchAdmin.vue'),
      meta: { title: '搜索页面-广东省考技巧网' },
    },
    {
      path: '/job',
      name: 'job',

      component: () => import('../views/job/JobInformation.vue'),
      meta: {  
         title: '事业编岗位,行政编岗位,国企岗位,事业编招聘,国企招聘', // 设置页面标题
  
  description: '探索事业编岗位、行政编岗位与国企岗位招聘，获取最新事业编招聘和国企招聘信息，掌握应聘技巧，助你成功迈向理想职位。' , 
  keywords: '事业编岗位,行政编岗位,国企岗位,事业编招聘,国企招聘' ,
      },
    },

    {
      path: '/jobdetail',
      name: 'jobdetail',

      component: () => import('../views/job/jobdetail/JobDetail.vue'),
      meta: { title: '岗位详情页-广东省考技巧网' },
      children: [
        {
          path: '/jobdetail/xingzheng/:xiid',
          name: 'xingzheng',
          component: () => import('../views/job/jobdetail/jobdetailsub/JobDetailXingzheng.vue'),
        },
        {
          path: '/jobdetail/shiye/:siid',
          name: 'shiye',
          component: () => import('../views/job/jobdetail/jobdetailsub/JobDetailShiye.vue'),
        },
        {
          path: '/jobdetail/guoqi/:giid',
          name: 'guoqi',
          component: () => import('../views/job/jobdetail/jobdetailsub/JobDetailGuoqi.vue'),
        },
      ],
    },

    {
      path: '/404',
      name: 'notfound',

      component: () => import('../views/notfound/NotFound.vue'),

      meta: { title: '404错误-广东省考技巧网' },
    },
    // 通配符路由（捕获所有未匹配路径）
    {
      path: '/:pathMatch(.*)*', // 使用动态段匹配任意路径
      redirect: '/404', // 重定向到404页面
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || '广东省考技巧网'
  next()
})

// 全局路由守卫
// router.afterEach((to) => {
//   if (to.meta.title) useHead({ title: to.meta.title })
//   if (to.meta.description || to.meta.keywords) {
//     useHead({
//       meta: [
//         { name: 'description', content: to.meta.description },
//         { name: 'keywords', content: to.meta.keywords }
//       ]
//     })
//   }
// })

export default router
