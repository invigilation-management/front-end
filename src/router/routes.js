const loginPage = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../pages/login/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "Register" */ '../pages/login/Register')
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: () =>
      import(/* webpackChunkName: "ForgotPassword" */ '../pages/login/ForgotPassword')
  }
]

const screenPage = [
  {
    path: '/screen',
    name: 'screen',
    component: () =>
      import(/* webpackChunkName: "Screen" */ '../pages/Screen/Screen')
  }
]

const mainPage = [
  {
    path: '/',
    redirect: '/screen'
  },
  {
    path: '/main',
    name: 'main',
    component: () =>
      import(/* webpackChunkName: "Main" */ '../pages/main/Main'),
    children: [
      {
        path: 'first',
        name: 'first',
        component: () =>
            import(
              /* webpackChunkName: "Second" */ '../pages/main/routes/Approval/First'
            )
      },
      {
        path: 'second',
        name: 'second',
        component: () =>
            import(
              /* webpackChunkName: "First" */ '../pages/main/routes/third/Second.vue'
            )
      },
      {
        path: 'third/third',
        name: 'third',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/List/Second.vue'
          )
      },
      {
        path: 'users/userlist',
        name: 'userlist',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/users/UserList.vue'
          )
      }
    ]
  }
]

const errorPage = [
  {
    path: '/notFound',
    name: 'notFound',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '../pages/error/NotFound')
  },
  {
    path: '/forbidden',
    name: 'forbidden',
    component: () =>
      import(/* webpackChunkName: "Forbidden" */ '../pages/error/Forbidden')
  },
  {
    path: '/badGateway',
    name: 'badGateway',
    component: () =>
      import(/* webpackChunkName: "BadGateway" */ '../pages/error/BadGateway')
  },
  {
    path: '*',
    redirect: '/notFound'
  }
]
export default [...loginPage, ...mainPage, ...errorPage, ...screenPage]
