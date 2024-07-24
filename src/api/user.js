import http from '@http/http'
// 假设你使用的是 Axios
// import axios from 'axios'
export const _getUserInfo = (errMsg) => http.GET('/api/auth/userInfo', {}, errMsg)

// 登录
export const getLogin = (params) => http.GET('/api/user/login', params)

// 登出
export const userLogout = () => http.GET('/api/user/logout')

// 审批第一页面获取信息的方法
export const approvalTable = (userId, pageSize, pageNo) => {
  return http.GET('/api/registration/getWaitingToBeApprovalALL', {
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 获取当前的用户信息
export const getuserid = () => http.GET('/api/user/me')

// 同意审批
export const agreeApprovalTable = (userId, pageSize, pageNo) => {
  return http.GET('/api/registration/getAlreadyAgreeALL', {
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 不同意审批
export const disagreeApprovalTable = (userId, pageSize, pageNo) => {
  return http.GET('/api/registration/getAlreadyDisagreeALL', {
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}

// 监考管理页面的表格获取方法
export const examManageTable = (userId, pageSize, pageNo) => {
  return http.GET('/api/batch/getManagementPageALL', {
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 监考安排表和监考费用明细的表格打印方法（数据信息一模一样）
export const examPlan = (userId, pageSize, pageNo) => {
  return http.GET('/api/batch/getAppointAndFeesPageALL', {
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 部门与角色管理的表格打印方法
export const collegeRoleTable = (userId, pageSize, pageNo) => {
  return http.GET('/api/college/getRoleAndCollegeALL', {
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 监考通知确认单的表格打印方法
export const noticeConfirmTable = (userId, pageSize, pageNo) => {
  return http.GET('/api/batch/getConfirmPageALL', {
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 点击监考名称（是一个按钮或者链接），转到新的页面
export const todetails = (batchName) => {
  return http.GET('/api/batch/getBatchDetailsPageALL', {
    batchName: batchName
  })
}

// 监考安排表/费用明细公用页面的快速查询功能接口
export const manageFeesSelect = (batchName, pageSize, pageNo) => {
  return http.GET('/api/batch/getConfirmPageUnClearALL', {
    batchName: batchName,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 审批页面的”姓名“快速查询功能接口
export const approvalNameSelect = (trueFacultyName, userId, pageSize, pageNo) => {
  return http.GET('/api/registration/getWaitingUnclearALLByString', {
    trueFacultyName: trueFacultyName,
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 监考管理页面的快速查询功能接口
export const examManageSelect = (batchName, pageSize, pageNo) => {
  return http.GET('/api/batch/getManagementPageUnclearFindALL', {
    batchName: batchName,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 监考通知确认单页面的快速查询功能接口
export const noticeConfirmSelect = (batchName, pageSize, pageNo) => {
  return http.GET('/api/batch/getConfirmPageUnClearALL', {
    batchName: batchName,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
//  部门与角色管理页面的快速查询功能接口
export const collegeRoleSelect = (collegeName, pageSize, pageNo) => {
  return http.GET('/api/college/getRoleAndCollegeALLUnclearFind', {
    collegeName: collegeName,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 已同意查询
export const agreeSelect = (trueFacultyName, userId, pageSize, pageNo) => {
  return http.GET('/api/registration/getAgreeUnclearALLByString', {
    trueFacultyName: trueFacultyName,
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 不同意查询
export const disagreeSelect = (trueFacultyName, userId, pageSize, pageNo) => {
  return http.GET('/api/registration/getDisagreeUnclearALLByString', {
    trueFacultyName: trueFacultyName,
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
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
// 监考费用——查看明细的数据打印接口
export const toDetailFees = (batchName, pageSize, pageNo) => {
  return http.GET('/api/registration/feesVice', {
    batchName: batchName,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 查看部门成员
export const toDetailRoles = (collegeId, pageSize, pageNo) => {
  return http.GET('/api/faculty/seeAllRoleOfTheCollege', {
    collegeId: collegeId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 监考管理——查看名单子页面的数据打印接口
export const toDetailManage = (batchName, pageSize, pageNo) => {
  return http.GET('/api/registration/ManageVice', {
    batchName: batchName,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 监考安排表——查看子页面的数据打印接口
export const toDetailPlan = (batchName, pageSize, pageNo) => {
  return http.GET('/api/registration/planVice', {
    batchName: batchName,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 监考通知确认名单——查看名单子页面的数据打印接口
export const toDetailConfirm = (batchName, pageSize, pageNo) => {
  return http.GET('/api/registration/infoConfirmVice', {
    batchName: batchName,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
