import http from '@http/http'
// 审批第一页面获取信息的方法
export const approvalTable = (userId) => {
  return http.GET('/api/registration/getWaitingToBeApproval', {
    userId: userId
  })
}
// 获取当前的用户信息
export const getuserid = () => http.GET('/api/user/me')
// 同意审批
export const agreeApprovalTable = (userId) => {
  return http.GET('/api/registration/getAlreadyAgree', {
    userId: userId
  })
}
// 不同意审批
export const disagreeApprovalTable = (userId) => {
  return http.GET('/api/registration/getAlreadyDisagree', {
    userId: userId
  })
}
// 待审批查询
export const selectWaitingByName = (userId, name) => {
  return http.GET('/api/registration/getWaitingUnclearFindByName', {
    userId: userId,
    name: name
  })
}

// 同意报名查询
export const selectAgreeByName = (userId, name) => {
  return http.GET('/api/registration/getAgreeUnclearFindByName', {
    userId: userId,
    name: name
  })
}

// 不同意报名查询
export const selectDisagreeByName = (userId, name) => {
  return http.GET('/api/registration/getDisagreeUnclearFindByName', {
    userId: userId,
    name: name
  })
}
