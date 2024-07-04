export default {
  whiteList: ['/', 'notFound', 'login', 'forbidden', 'badGateway', 'screen', 'admissions', 'teacher', 'office'],
  permissionMap: {
    1: { // officeDirector
      main1: ['*'],
      main2: ['*']
      //   [
      //   '/office/exam-approval',
      //   '/office/exam-approval/batch-details',
      //   '/office/exam-approval/fill-info',
      //   '/office/exam-approval/fill-info/waiting-result',
      //   '/office/exam-approval/fill-info/failure',
      //   '/office/exam-approval/fill-info/success',
      //   '/office/exam-approval/agree',
      //   '/office/exam-approval/agree/details',
      //   '/office/exam-approval/disagree',
      //   '/office/exam-approval/disagree/details',
      //   '/office/exam-list',
      //   '/office/exam-list/details'
      // ]
    },
    2: { // admissionsHead
      main2: ['*']
      //   [
      //   '/admissions/batch-details',
      //   '/admissions/exam-approval',
      //   '/admissions/exam-approval/agree',
      //   '/admissions/exam-approval/agree/details',
      //   '/admissions/exam-approval/disagree',
      //   '/admissions/exam-approval/disagree/details',
      //   '/admissions/exam-management',
      //   '/admissions/exam-management/view-list',
      //   '/admissions/exam-schedule',
      //   '/admissions/exam-schedule/details',
      //   '/admissions/exam-notification',
      //   '/admissions/exam-fees',
      //   '/admissions/role-management'
      // ]
    },
    3: { // teacher
      main3: ['*']
      //   [
      //   '/teacher/exam-signup-passed',
      //   '/teacher/exam-signup',
      //   '/teacher/exam-signup/batch-details',
      //   '/teacher/exam-signup/fill-form',
      //   '/teacher/exam-signup/fill-form/waiting-result',
      //   '/teacher/exam-signup/fill-form/failure',
      //   '/teacher/exam-signup/fill-form/success',
      //   '/teacher/exam-record',
      //   '/teacher/exam-record/view-confirm'
      // ]
    },
    4: { // admin
      main: ['*']
    }
  }

}
