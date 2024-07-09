export default {
  sidebarMap: {
    login: {
      main: [
        {
          path: '/login',
          icon: 'login-icon',
          title: '登录页'
        }
      ]
    },
    1: {
      main: [
        {
          path: '/office/approval',
          icon: 'suncaper-menu-unfold',
          title: '报名审批'
          // children: [
          //   {
          //     path: 'agree-details',
          //     icon: 'suncaper-menu-unfold',
          //     title: '同意报名详情'
          //   },
          //   {
          //     path: 'disagree-details',
          //     icon: 'suncaper-menu-unfold',
          //     title: '不同意报名详情'
          //   },
          //   {
          //     path: 'waiting-result',
          //     icon: 'suncaper-menu-unfold',
          //     title: '等待结果'
          //   }
          //
          // ]
        },

        {
          path: '/office/examlist',
          icon: 'suncaper-menu-unfold',
          title: '监考名单'
          // children: [
          //   {
          //     path: 'details',
          //     icon: 'suncaper-menu-unfold',
          //     title: '监考名单'
          //   },
          //   {
          //     path: 'batch-details',
          //     icon: 'suncaper-menu-unfold',
          //     title: '监考详细名单'
          //   }
          // ]
        }
        // {
        //   path: '/office/failure',
        //   icon: 'suncaper-menu-unfold',
        //   title: '失败'
        // },
        // {
        //   path: '/office/fill-info',
        //   icon: 'suncaper-menu-unfold',
        //   title: '填写信息'
        // },
        // {
        //   path: '/office/success',
        //   icon: 'suncaper-menu-unfold',
        //   title: '成功'
        // },

      ]
    },
    2: {
      main: [
        {
          path: '/admissions/exam-approval',
          icon: 'suncaper-menu-unfold',
          title: '报名审批'
          // children: [
          //   {
          //     path: 'agree',
          //     icon: 'suncaper-menu-unfold',
          //     title: '同意报名'
          //     // children: [
          //     //   {
          //     //     path: '/admissions/exam-approval/agree/details',
          //     //     icon: 'suncaper-menu-unfold',
          //     //     title: '审批详情'
          //     //   }
          //     // ]
          //   },
          //   {
          //     path: 'disagree',
          //     icon: 'suncaper-menu-unfold',
          //     title: '不同意报名'
          //     // children: [
          //     //   {
          //     //     path: '/admissions/exam-approval/disagree/details',
          //     //     icon: 'suncaper-menu-unfold',
          //     //     title: '审批详情'
          //     //   }
          //     // ]
          //   }
          // ]
        },
        {
          path: '/admissions/exam-management',
          icon: 'suncaper-menu-unfold',
          title: '监考管理'
          // children: [
          //   {
          //     path: '/admissions/exam-management/view-list',
          //     icon: 'suncaper-menu-unfold',
          //     title: '查看名单'
          //   }
          // ]
        },
        {
          path: '/admissions/managetotal',
          icon: 'suncaper-menu-unfold',
          title: '监考安排表'
          // children: [
          //   {
          //     path: 'details',
          //     icon: 'suncaper-menu-unfold',
          //     title: '监考详细名单'
          //   }
          // ]
        },
        {
          path: '/admissions/exam-notification',
          icon: 'suncaper-menu-unfold',
          title: '监考通知确认单'
        },
        {
          path: '/admissions/feestotal',
          icon: 'suncaper-menu-unfold',
          title: '监考费用明细'
        },
        {
          path: '/admissions/role-management',
          icon: 'suncaper-menu-unfold',
          title: '部门与角色管理'
        }
      ]
    },
    3: {
      main: [
        {
          path: '/teacher/fill-form',
          icon: 'suncaper-menu-unfold',
          title: '监考报名'
        },
        {
          path: '/teacher/recording',
          icon: 'suncaper-menu-unfold',
          title: '监考记录'
        }
      ]
    }
  },
  sidebarTheme: {
    dark: {
      background: '#1f2c35',
      text: '#ffffff',
      activeText: '#ffffff'
    },
    light: {
      background: '#ffffff',
      text: '#000000',
      activeText: '#1890ff'
    }
  }
}
