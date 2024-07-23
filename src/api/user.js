import http from '@http/http'
// 假设你使用的是 Axios
// import axios from 'axios'
export const _getUserInfo = (errMsg) => http.GET('/api/auth/userInfo', {}, errMsg)

// 登录
export const getLogin = (params) => http.GET('/api/user/login', params)

// 登出
export const userLogout = () => http.GET('/api/user/logout')

// 审批第一页面获取信息的方法
export const approvalTable = (userId) => {
  return http.GET('/api/registration/getWaitingToBeApprovalALL', {
    userId: userId
  })
}
// 获取当前的用户信息
export const getuserid = () => http.GET('/api/user/me')

// 同意审批
export const agreeApprovalTable = (userId) => {
  return http.GET('/api/registration/getAlreadyAgreeALL', {
    userId: userId
  })
}
// 不同意审批
export const disagreeApprovalTable = (userId) => {
  return http.GET('/api/registration/getAlreadyDisagreeALL', {
    userId: userId
  })
}

// 监考管理页面的表格获取方法
export const examManageTable = (userId) => {
  return http.GET('/api/batch/getManagementPageALL', {
    userId: userId
  })
}
// 监考安排表和监考费用明细的表格打印方法（数据信息一模一样）
export const examPlan = (userId) => {
  return http.GET('/api/batch/getAppointAndFeesPageALL', {
    userId: userId
  })
}
// 部门与角色管理的表格打印方法
export const collegeRoleTable = (userId) => {
  return http.GET('/api/college/getRoleAndCollegeALL', {
    userId: userId
  })
}
// 监考通知确认单的表格打印方法
export const noticeConfirmTable = (userId) => {
  return http.GET('/api/batch/getConfirmPageALL', {
    userId: userId
  })
}
// 点击监考名称（是一个按钮或者链接），转到新的页面
export const todetails = (batchName) => {
  return http.GET('/api/batch/getBatchDetailsPageALL', {
    batchName: batchName
  })
}

// 监考安排表/费用明细公用页面的快速查询功能接口
export const manageFeesSelect = (batchName) => {
  return http.GET('/api/batch/getConfirmPageUnClearALL', {
    batchName: batchName
  })
}
// 审批页面的”姓名“快速查询功能接口
export const approvalNameSelect = (trueFacultyName, userId) => {
  return http.GET('/api/registration/getWaitingUnclearALLByString', {
    trueFacultyName: trueFacultyName,
    userId: userId
  })
}
// 监考管理页面的快速查询功能接口
export const examManageSelect = (batchName) => {
  return http.GET('/api/batch/getManagementPageUnclearFindALL', {
    batchName: batchName
  })
}
// 监考通知确认单页面的快速查询功能接口
export const noticeConfirmSelect = (batchName) => {
  return http.GET('/api/batch/getConfirmPageUnClearALL', {
    batchName: batchName
  })
}
//  部门与角色管理页面的快速查询功能接口
export const collegeRoleSelect = (collegeName) => {
  return http.GET('/api/college/getRoleAndCollegeALLUnclearFind', {
    collegeName: collegeName
  })
}
// 已同意查询
export const agreeSelect = (trueFacultyName, userId) => {
  return http.GET('/api/registration/getAgreeUnclearALLByString', {
    trueFacultyName: trueFacultyName,
    userId: userId
  })
}
// 不同意查询
export const disagreeSelect = (trueFacultyName, userId) => {
  return http.GET('/api/registration/getDisagreeUnclearALLByString', {
    trueFacultyName: trueFacultyName,
    userId: userId
  })
}
// 部门与角色管理添加部门
export const addCollege = (collegeName, type) => {
  return http.GET('/api/college/addCollege', {
    collegeName: collegeName,
    type: type
  })
}
// 监考管理页面的创建批次接口
export const addBatch = (obj) => {
  return http.POST('/api/batch/addBatch', obj)
}
// 部门的对话框中的子查询接口
export const findBeforePost = (trueFacultyName) => {
  return http.GET('/api/faculty/findBeforePost', {
    trueFacultyName: trueFacultyName
  })
}
// 部门与角色管理添加成员
export const addfaculty = (obj) => {
  return http.POST('/api/faculty/updateFaculty', obj)
}
// 同意审批后的接口
export const agree = (userId, trueFacultyId, batchName, targetCampus) => {
  return http.GET('/api/registration/afterApproval', {
    userId: userId,
    trueFacultyId: trueFacultyId,
    batchName: batchName,
    targetCampus: targetCampus
  })
}
// 不同意审批后的接口
export const disagree = (userId, trueFacultyId, batchName) => {
  return http.GET('/api/registration/afterDisapproval', {
    userId: userId,
    trueFacultyId: trueFacultyId,
    batchName: batchName
  })
}
