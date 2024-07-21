import http from '@http/http'
// 假设你使用的是 Axios
import axios from 'axios'
export const _getUserInfo = (errMsg) => http.GET('/api/auth/userInfo', {}, errMsg)

// 登录
export const getLogin = (params) => http.GET('/api/user/login', params)

// 登出
export const userLogout = () => http.GET('/api/user/logout')

// 审批第一页面获取信息的方法
export const approvalTable = (userId) => {
  return axios.get('/api/registration/getWaitingToBeApprovalALL', {
    params: {
      userId: userId
    }
  })
}
// 获取当前的用户信息
export const getuserid = () => http.GET('/api/user/me')

// 同意审批
export const agreeApprovalTable = (userId) => {
  return axios.get('/api/registration/getAlreadyAgreeALL', {
    params: {
      userId: userId
    }
  })
}
// 不同意审批
export const disagreeApprovalTable = (userId) => {
  return axios.get('/api/registration/getAlreadyDisagreeALL', {
    params: {
      userId: userId
    }
  })
}

// 监考管理页面的表格获取方法
export const examManageTable = (userId) => {
  return axios.get('/api/batch/getManagementPageALL', {
    params: {
      userId: userId
    }
  })
}
// 监考安排表和监考费用明细的表格打印方法（数据信息一模一样）
export const examPlan = (userId) => {
  return axios.get('/api/batch/getAppointAndFeesPageALL', {
    params: {
      userId: userId
    }
  })
}
