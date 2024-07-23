import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const loginPage = [
  {
    path: '/',
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
        redirect: 'exam-approval',
        name: 'admissionsRedirect'
      },

      {
        path: 'waiting',
        name: 'waiting',
        component: () => import(/* webpackChunkName: "DisagreeDetails" */ '../pages/admissions/Management_view_member.vue')
      },
      {
        path: 'batch-details',
        name: 'batchDetails',
        props: true,
        component: () => import(/* webpackChunkName: "BatchDetails" */ '../pages/admissions/BatchDetails.vue')
      },
      {
        path: 'exam-approval',
        name: 'examApproval',
        component: () => import(/* webpackChunkName: "BatchDetails" */ '../pages/admissions/Approval.vue'),
        children: [
          {
            path: 'agree',
            name: 'agreeDetails',
            component: () => import(/* webpackChunkName: "AgreeDetails" */ '../pages/admissions/AgreeDetails.vue')
          },
          {
            path: 'disagree',
            name: 'disagreeDetails',
            component: () => import(/* webpackChunkName: "DisagreeDetails" */ '../pages/admissions/DisagreeDetails.vue')
          }
        ]
      },
      {
        path: 'exam-management',
        name: 'examManagement',
        component: () => import(/* webpackChunkName: "ViewList" */ '../pages/admissions/ExamManage.vue')
      },
      {
        path: 'exam-schedule',
        name: 'examSchedule',
        component: () => import(/* webpackChunkName: "ViewList" */ '../pages/admissions/ViewList.vue'),
        children: [
          {
            path: 'details',
            name: 'examScheduleDetails',
            component: () => import(/* webpackChunkName: "ExamScheduleDetails" */ '../pages/admissions/ExamScheduleDetails.vue')
          }
        ]
      },
      {
        path: 'exam-notification',
        name: 'examNotification',
        component: () => import(/* webpackChunkName: "ExamNotification" */ '../pages/admissions/ExamNotification.vue')
      },
      {
        path: 'feestotal',
        name: 'FeesTotal',
        component: () => import(/* webpackChunkName: "ExamNotification" */ '../pages/admissions/FeesTotal.vue')
      },
      {
        path: 'managetotal',
        name: 'ManageTotal',
        component: () => import(/* webpackChunkName: "ExamNotification" */ '../pages/admissions/ManageTotal.vue')
      },
      {
        path: 'notationvice',
        name: 'NotationVice',
        component: () => import(/* webpackChunkName: "ExamNotification" */ '../pages/admissions/NotationVice.vue')
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
      },
      {
        path: 'viewList',
        name: 'ViewList',
        component: () => import(/* webpackChunkName: "RoleManagement" */ '../pages/admissions/ViewList.vue')
      },
      {
        path: 'examFees',
        name: 'ExamFees',
        component: () => import(/* webpackChunkName: "RoleManagement" */ '../pages/admissions/ExamFees.vue')
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
        path: 'approval',
        name: 'Approval',
        component: () => import(/* webpackChunkName: "BatchDetailsOffice" */ '../pages/office/Approval.vue'),
        children: [
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
            path: 'waiting-result',
            name: 'waitingResult',
            component: () => import(/* webpackChunkName: "WaitingResult" */ '../pages/office/WaitingResult.vue')
          }
        ]
      },
      {
        path: 'ApprovalDetails',
        name: 'ApprovalDetails',
        component: () => import(/* webpackChunkName: "BatchDetailsOffice" */ '../pages/office/ApprovalDetails.vue')
      },
      {
        path: 'AgreeDetails',
        name: 'AgreeDetails',
        component: () => import(/* webpackChunkName: "AgreeDetailsOffice" */ '../pages/office/AgreeDetails.vue')
      },
      {
        path: 'DisagreeDetails',
        name: 'DisagreeDetails',
        component: () => import(/* webpackChunkName: "AgreeDetailsOffice" */ '../pages/office/DisagreeDetails.vue')
      },
      {
        path: 'detailList',
        name: 'DetailList',
        props: true,
        component: () => import(/* webpackChunkName: "BatchDetailsOffice" */ '../pages/office/DetailList.vue')
      },
      {
        path: 'Batch-Details',
        name: 'BatchDetail',
        props: true,
        component: () => import(/* webpackChunkName: "BatchDetailsOffice" */ '../pages/office/BatchDetail.vue')
      },
      {
        path: 'examlist',
        name: 'Examlist',
        component: () => import(/* webpackChunkName: "BatchDetailsOffice" */ '../pages/office/ExamList.vue'),
        children: [
          {
            path: 'details',
            name: 'examListDetails',
            props: true,
            component: () => import(/* webpackChunkName: "ExamListDetails" */ '../pages/office/ExamListDetails.vue')
          }
        ]
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
        path: 'fill-form',
        name: 'fillForm',
        component: () => import(/* webpackChunkName: "FillForm" */ '../pages/teacher/FillForm.vue')
      }, {
        path: 'sign-up',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "BatchDetailsTeacher" */ '../pages/teacher/SignUp.vue')
      }, {
        path: 'batch-details',
        name: 'BatchDetails',
        component: () => import(/* webpackChunkName: "BatchDetailsTeacher" */ '../pages/teacher/BatchDetails.vue')
      }, {
        path: 'recording',
        name: 'Recording',
        component: () => import(/* webpackChunkName: "ViewConfirm" */ '../pages/teacher/Recording.vue')
      }, {
        path: 'exam-signup-passed',
        name: 'examSignupPassed',
        component: () => import(/* webpackChunkName: "ExamSignupPassed" */ '../pages/teacher/ExamSignupPassed.vue')
      }, {
        path: 'waiting-result',
        name: 'waitingResultTeacher',
        component: () => import(/* webpackChunkName: "WaitingResultTeacher" */ '../pages/teacher/WaitingResult.vue')
      }, {
        path: 'failure',
        name: 'failureTeacher',
        component: () => import(/* webpackChunkName: "FailureTeacher" */ '../pages/teacher/Failure.vue')
      }, {
        path: 'success',
        name: 'successTeacher',
        component: () => import(/* webpackChunkName: "SuccessTeacher" */ '../pages/teacher/Success.vue')
      }, {
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
