import http from '@http/http'
// 假设你使用的是 Axios
import axios from 'axios'
export const _getUserInfo = (errMsg) => http.GET('/api/auth/userInfo', {}, errMsg)

// 登录
export const getLogin = (params) => http.GET('/api/user/login', params)

// 登出
export const userLogout = () => http.GET('/api/user/logout')

export const approvalTable = (userId) => {
  return axios.get('/api/registration/getWaitingToBeApprovalALL', {
    params: {
      userId: userId
    }
  })
}
export const getuserid = () => http.GET('/api/user/me')
