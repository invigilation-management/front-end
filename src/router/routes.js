import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const loginPage = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '../pages/login/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "Register" */ '../pages/login/Register.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: () => import(/* webpackChunkName: "ForgotPassword" */ '../pages/login/ForgotPassword.vue')
  }
]

const screenPage = [
  {
    path: '/screen',
    name: 'screen',
    component: () => import(/* webpackChunkName: "Screen" */ '../pages/screen/Screen.vue')
  }
]

const admissionsHeadPage = [
  {
    path: '/admissions',
    name: 'main2',
    component: () => import(/* webpackChunkName: "Admissions" */ '../pages/admissions/Main.vue'),
    children: [
      {
        path: '',
        redirect: 'batch-details',
        name: 'admissionsRedirect'
      },
      {
        path: 'batch-details',
        name: 'batchDetails',
        component: () => import(/* webpackChunkName: "BatchDetails" */ '../pages/admissions/BatchDetails.vue')
      },
      {
        path: 'exam-approval/agree/details',
        name: 'agreeDetails',
        component: () => import(/* webpackChunkName: "AgreeDetails" */ '../pages/admissions/AgreeDetails.vue')
      },
      {
        path: 'exam-approval/disagree/details',
        name: 'disagreeDetails',
        component: () => import(/* webpackChunkName: "DisagreeDetails" */ '../pages/admissions/DisagreeDetails.vue')
      },
      {
        path: 'exam-management/view-list',
        name: 'viewList',
        component: () => import(/* webpackChunkName: "ViewList" */ '../pages/admissions/ViewList.vue')
      },
      {
        path: 'exam-schedule/details',
        name: 'examScheduleDetails',
        component: () => import(/* webpackChunkName: "ExamScheduleDetails" */ '../pages/admissions/ExamScheduleDetails.vue')
      },
      {
        path: 'exam-notification',
        name: 'examNotification',
        component: () => import(/* webpackChunkName: "ExamNotification" */ '../pages/admissions/ExamNotification.vue')
      },
      {
        path: 'exam-fees',
        name: 'examFees',
        component: () => import(/* webpackChunkName: "ExamFees" */ '../pages/admissions/ExamFees.vue')
      },
      {
        path: 'role-management',
        name: 'roleManagement',
        component: () => import(/* webpackChunkName: "RoleManagement" */ '../pages/admissions/RoleManagement.vue')
      }
    ]
  }
]
const officeDirectorPage = [
  {
    path: '/office',
    name: 'main1',
    component: () => import(/* webpackChunkName: "Office" */ '../pages/office/Main.vue'),
    children: [
      {
        path: 'batch-details',
        name: 'batchDetailsOffice',
        component: () => import(/* webpackChunkName: "BatchDetailsOffice" */ '../pages/office/BatchDetails.vue')
      },
      {
        path: 'fill-info',
        name: 'fillInfo',
        component: () => import(/* webpackChunkName: "FillInfo" */ '../pages/office/FillInfo.vue')
      },
      {
        path: 'waiting-result',
        name: 'waitingResult',
        component: () => import(/* webpackChunkName: "WaitingResult" */ '../pages/office/WaitingResult.vue')
      },
      {
        path: 'failure',
        name: 'failure',
        component: () => import(/* webpackChunkName: "Failure" */ '../pages/office/Failure.vue')
      },
      {
        path: 'success',
        name: 'success',
        component: () => import(/* webpackChunkName: "Success" */ '../pages/office/Success.vue')
      },
      {
        path: 'agree-details',
        name: 'agreeDetailsOffice',
        component: () => import(/* webpackChunkName: "AgreeDetailsOffice" */ '../pages/office/AgreeDetails.vue')
      },
      {
        path: 'disagree-details',
        name: 'disagreeDetailsOffice',
        component: () => import(/* webpackChunkName: "DisagreeDetailsOffice" */ '../pages/office/DisagreeDetails.vue')
      },
      {
        path: 'exam-list/details',
        name: 'examListDetails',
        component: () => import(/* webpackChunkName: "ExamListDetails" */ '../pages/office/ExamListDetails.vue')
      }
    ]
  }
]

const teacherPage = [
  {
    path: '/teacher',
    name: 'main3',
    component: () => import(/* webpackChunkName: "Teacher" */ '../pages/teacher/Main.vue'),
    children: [
      {
        path: 'exam-signup-passed',
        name: 'examSignupPassed',
        component: () => import(/* webpackChunkName: "ExamSignupPassed" */ '../pages/teacher/ExamSignupPassed.vue')
      },
      {
        path: 'batch-details',
        name: 'batchDetailsTeacher',
        component: () => import(/* webpackChunkName: "BatchDetailsTeacher" */ '../pages/teacher/BatchDetails.vue')
      },
      {
        path: 'fill-form',
        name: 'fillForm',
        component: () => import(/* webpackChunkName: "FillForm" */ '../pages/teacher/FillForm.vue')
      },
      {
        path: 'waiting-result',
        name: 'waitingResultTeacher',
        component: () => import(/* webpackChunkName: "WaitingResultTeacher" */ '../pages/teacher/WaitingResult.vue')
      },
      {
        path: 'failure',
        name: 'failureTeacher',
        component: () => import(/* webpackChunkName: "FailureTeacher" */ '../pages/teacher/Failure.vue')
      },
      {
        path: 'success',
        name: 'successTeacher',
        component: () => import(/* webpackChunkName: "SuccessTeacher" */ '../pages/teacher/Success.vue')
      },
      {
        path: 'view-confirm',
        name: 'viewConfirm',
        component: () => import(/* webpackChunkName: "ViewConfirm" */ '../pages/teacher/ViewConfirm.vue')
      }
    ]
  }
]

const errorPage = [
  {
    path: '/notFound',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../pages/error/NotFound.vue')
  },
  {
    path: '/forbidden',
    name: 'forbidden',
    component: () => import(/* webpackChunkName: "Forbidden" */ '../pages/error/Forbidden.vue')
  },
  {
    path: '/badGateway',
    name: 'badGateway',
    component: () => import(/* webpackChunkName: "BadGateway" */ '../pages/error/BadGateway.vue')
  },
  {
    path: '*',
    redirect: '/notFound',
    name: 'catchAll'
  }
]

export default [...loginPage, ...admissionsHeadPage, ...teacherPage, ...errorPage, ...officeDirectorPage, ...screenPage]
