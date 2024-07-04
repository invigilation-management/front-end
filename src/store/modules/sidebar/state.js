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
          path: '/admissions/batch-details',
          icon: 'suncaper-menu-unfold',
          title: '批次详情'
        },
        {
          path: '/admissions/exam-approval',
          icon: 'suncaper-menu-unfold',
          title: '报名审批',
          children: [
            {
              path: '/admissions/exam-approval/agree',
              icon: 'suncaper-menu-unfold',
              title: '同意报名',
              children: [
                {
                  path: '/admissions/exam-approval/agree/details',
                  icon: 'suncaper-menu-unfold',
                  title: '审批详情'
                }
              ]
            },
            {
              path: '/admissions/exam-approval/disagree',
              icon: 'suncaper-menu-unfold',
              title: '不同意报名',
              children: [
                {
                  path: '/admissions/exam-approval/disagree/details',
                  icon: 'suncaper-menu-unfold',
                  title: '审批详情'
                }
              ]
            }
          ]
        },
        {
          path: '/admissions/exam-management',
          icon: 'suncaper-menu-unfold',
          title: '监考管理',
          children: [
            {
              path: '/admissions/exam-management/view-list',
              icon: 'suncaper-menu-unfold',
              title: '查看名单'
            }
          ]
        },
        {
          path: '/admissions/exam-schedule',
          icon: 'suncaper-menu-unfold',
          title: '监考安排表',
          children: [
            {
              path: '/admissions/exam-schedule/details',
              icon: 'suncaper-menu-unfold',
              title: '监考详细名单'
            }
          ]
        },
        {
          path: '/admissions/exam-notification',
          icon: 'suncaper-menu-unfold',
          title: '监考通知确认单'
        },
        {
          path: '/admissions/exam-fees',
          icon: 'suncaper-menu-unfold',
          title: '监考费用明细'
        },
        {
          path: '/admissions/role-management',
          icon: 'suncaper-menu-unfold',
          title: '部门与角色管理'
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
