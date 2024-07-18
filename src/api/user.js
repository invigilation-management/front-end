import http from '@http/http'
export const _getUserInfo = (errMsg) => http.GET('/api/auth/userInfo', {}, errMsg)

// 登录
export const getLogin = (params) => http.GET('/api/user/login', params)
