export default {
  sidebarMap: {
    1: {
      main: [
        {
          path: '/main/first',
          icon: 'suncaper-menu-unfold',
          title: '一级菜单1'
        },
        {
          path: '/main/second',
          icon: 'suncaper-menu-unfold',
          title: '一级菜单2',
          group: 'second',
          children: [
            {
              path: '/main/second/second',
              icon: 'suncaper-menu-unfold',
              title: '二级菜单'
            }
          ]
        }
      ]
    },
    2: {
      main: [
        {
          path: '/main/first',
          icon: 'suncaper-menu-unfold',
          title: '一些学院'
        },
        {
          path: '/main/users/userlist',
          icon: 'suncaper-menu-unfold',
          title: '用户列表'
        },
        {
          path: '/main/third/third',
          icon: 'suncaper-menu-unfold',
          title: '监考管理'
        }
      ]
    },
    3: {
      main: [
        {
          path: '/main/first',
          icon: 'suncaper-menu-unfold',
          title: '一些学院'
        },
        {
          path: '/main/users/userlist',
          icon: 'suncaper-menu-unfold',
          title: '用户列表'
        },
        {
          path: '/main/third/third',
          icon: 'suncaper-menu-unfold',
          title: '监考管理'
        }
      ]
    },
    4: {
      main: [
        {
          path: '/main/first',
          icon: 'suncaper-menu-unfold',
          title: '一些学院'
        },
        {
          path: '/main/users/userlist',
          icon: 'suncaper-menu-unfold',
          title: '用户列表'
        },
        {
          path: '/main/third/third',
          icon: 'suncaper-menu-unfold',
          title: '监考管理'
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
