const loginPage = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../pages/login/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "Register" */ '../pages/login/Register.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: () =>
      import(/* webpackChunkName: "ForgotPassword" */ '../pages/login/ForgotPassword.vue')
  }
]

const screenPage = [
  {
    path: '/screen',
    name: 'screen',
    component: () =>
      import(/* webpackChunkName: "Screen" */ '../pages/Screen/Screen.vue')
  }
]

const admissionsHeadPage = [
  {
    path: '/admissions',
    redirect: '/admissions/batch-details'
  },
  {
    path: '/admissions/batch-details',
    name: 'batchDetails',
    component: () =>
      import(/* webpackChunkName: "BatchDetails" */ '../pages/admissions/BatchDetails.vue')
  },
  {
    path: '/admissions/exam-approval/agree/details',
    name: 'agreeDetails',
    component: () =>
      import(/* webpackChunkName: "AgreeDetails" */ '../pages/admissions/AgreeDetails.vue')
  },
  {
    path: '/admissions/exam-approval/disagree/details',
    name: 'disagreeDetails',
    component: () =>
      import(/* webpackChunkName: "DisagreeDetails" */ '../pages/admissions/DisagreeDetails.vue')
  },
  {
    path: '/admissions/exam-management/view-list',
    name: 'viewList',
    component: () =>
      import(/* webpackChunkName: "ViewList" */ '../pages/admissions/ViewList.vue')
  },
  {
    path: '/admissions/exam-schedule/details',
    name: 'examScheduleDetails',
    component: () =>
      import(/* webpackChunkName: "ExamScheduleDetails" */ '../pages/admissions/ExamScheduleDetails.vue')
  },
  {
    path: '/admissions/exam-notification',
    name: 'examNotification',
    component: () =>
      import(/* webpackChunkName: "ExamNotification" */ '../pages/admissions/ExamNotification.vue')
  },
  {
    path: '/admissions/exam-fees',
    name: 'examFees',
    component: () =>
      import(/* webpackChunkName: "ExamFees" */ '../pages/admissions/ExamFees.vue')
  },
  {
    path: '/admissions/role-management',
    name: 'roleManagement',
    component: () =>
      import(/* webpackChunkName: "RoleManagement" */ '../pages/admissions/RoleManagement.vue')
  }
]

const officeDirectorPage = [
  {
    path: '/office',
    redirect: '/office/exam-approval'
  },
  {
    path: '/office/exam-approval/batch-details',
    name: 'batchDetails',
    component: () =>
      import(/* webpackChunkName: "BatchDetails" */ '../pages/office/BatchDetails.vue')
  },
  {
    path: '/office/exam-approval/fill-info',
    name: 'fillInfo',
    component: () =>
      import(/* webpackChunkName: "FillInfo" */ '../pages/office/FillInfo.vue'),
    children: [
      {
        path: 'waiting-result',
        name: 'waitingResult',
        component: () =>
          import(/* webpackChunkName: "WaitingResult" */ '../pages/office/WaitingResult.vue')
      },
      {
        path: 'failure',
        name: 'failure',
        component: () =>
          import(/* webpackChunkName: "Failure" */ '../pages/office/Failure.vue')
      },
      {
        path: 'success',
        name: 'success',
        component: () =>
          import(/* webpackChunkName: "Success" */ '../pages/office/Success.vue')
      }
    ]
  },
  {
    path: '/office/exam-approval/agree/details',
    name: 'agreeDetails',
    component: () =>
      import(/* webpackChunkName: "AgreeDetails" */ '../pages/office/AgreeDetails.vue')
  },
  {
    path: '/office/exam-approval/disagree/details',
    name: 'disagreeDetails',
    component: () =>
      import(/* webpackChunkName: "DisagreeDetails" */ '../pages/office/DisagreeDetails.vue')
  },
  {
    path: '/office/exam-list/details',
    name: 'examListDetails',
    component: () =>
      import(/* webpackChunkName: "ExamListDetails" */ '../pages/office/ExamListDetails.vue')
  }
]

const teacherPage = [
  {
    path: '/teacher',
    redirect: '/teacher/exam-signup-passed'
  },
  {
    path: '/teacher/exam-signup-passed',
    name: 'examSignupPassed',
    component: () =>
      import(/* webpackChunkName: "ExamSignupPassed" */ '../pages/teacher/ExamSignupPassed.vue')
  },
  {
    path: '/teacher/exam-signup/batch-details',
    name: 'batchDetails',
    component: () =>
      import(/* webpackChunkName: "BatchDetails" */ '../pages/teacher/BatchDetails.vue')
  },
  {
    path: '/teacher/exam-signup/fill-form',
    name: 'fillForm',
    component: () =>
      import(/* webpackChunkName: "FillForm" */ '../pages/teacher/FillForm.vue'),
    children: [
      {
        path: 'waiting-result',
        name: 'waitingResult',
        component: () =>
          import(/* webpackChunkName: "WaitingResult" */ '../pages/teacher/WaitingResult.vue')
      },
      {
        path: 'failure',
        name: 'failure',
        component: () =>
          import(/* webpackChunkName: "Failure" */ '../pages/teacher/Failure.vue')
      },
      {
        path: 'success',
        name: 'success',
        component: () =>
          import(/* webpackChunkName: "Success" */ '../pages/teacher/Success.vue')
      }
    ]
  },
  {
    path: '/teacher/exam-record/view-confirm',
    name: 'viewConfirm',
    component: () =>
      import(/* webpackChunkName: "ViewConfirm" */ '../pages/teacher/ViewConfirm.vue')
  }
]

const errorPage = [
  {
    path: '/notFound',
    name: 'notFound',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '../pages/error/NotFound.vue')
  },
  {
    path: '/forbidden',
    name: 'forbidden',
    component: () =>
      import(/* webpackChunkName: "Forbidden" */ '../pages/error/Forbidden.vue')
  },
  {
    path: '/badGateway',
    name: 'badGateway',
    component: () =>
      import(/* webpackChunkName: "BadGateway" */ '../pages/error/BadGateway.vue')
  },
  {
    path: '*',
    redirect: '/notFound'
  }
]

const defaultPage = [
  {
    path: '/',
    redirect: '/login'
  }
]

export default [
  ...defaultPage,
  ...loginPage,
  ...admissionsHeadPage,
  ...officeDirectorPage,
  ...teacherPage,
  ...errorPage,
  ...screenPage
]
