import http from '@http/http'
// 审批第一页面获取信息的方法
export const approvalTable = (userId, pageSize, pageNo) => {
  return http.GET('/api/registration/getWaitingToBeApproval', {
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 获取当前的用户信息
export const getuserid = () => http.GET('/api/user/me')
// 同意审批
export const agreeApprovalTable = (userId, pageSize, pageNo) => {
  return http.GET('/api/registration/getAlreadyAgree', {
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 不同意审批
export const disagreeApprovalTable = (userId, pageSize, pageNo) => {
  return http.GET('/api/registration/getAlreadyDisagree', {
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 待审批查询
export const selectWaitingByName = (userId, name, pageSize, pageNo) => {
  return http.GET('/api/registration/getWaitingUnclearFindByName', {
    userId: userId,
    name: name,
    pageSize: pageSize,
    pageNo: pageNo
  })
}

// 同意报名查询
export const selectAgreeByName = (userId, name, pageSize, pageNo) => {
  return http.GET('/api/registration/getAgreeUnclearFindByName', {
    userId: userId,
    name: name,
    pageSize: pageSize,
    pageNo: pageNo
  })
}

// 不同意报名查询
export const selectDisagreeByName = (userId, name, pageSize, pageNo) => {
  return http.GET('/api/registration/getDisagreeUnclearFindByName', {
    userId: userId,
    name: name,
    pageSize: pageSize,
    pageNo: pageNo
  })
}

// 监考名单主页面表格
export const ExamListTable = (userId, pageSize, pageNo) => {
  return http.GET('/api/batch/getManagementPageALL', {
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}

// 监考名单关键词查询
export const selectExamListByName = (batchName) => {
  return http.GET('/api/batch/getManagementPageUnclearFindALL', {
    batchName: batchName
  })
}

// 监考详细名单表格
export const ExamListDetailsTable = (userId, batchName, pageSize, pageNo) => {
  return http.GET('/api/registration/JianKaoXiangXiMingDan', {
    userId: userId,
    batchName: batchName,
    pageSize: pageSize,
    pageNo: pageNo
  })
}

// 查看同意信息
export const Agreeinfo = (userId, trueFacultyId, batchName) => {
  return http.GET('/api/faculty/seeDetailsOfOffice', {
    userId: userId,
    trueFacultyId: trueFacultyId,
    batchName: batchName
  })
}

// 审批同意
export const submitAgree = (userId, trueFacultyId, batchName, targetCampus) => {
  return http.GET('/api/registration/afterApprovalOffice', {
    userId: userId,
    trueFacultyId: trueFacultyId,
    batchName: batchName,
    targetCampus: targetCampus
  })
}

// 审批不同意
export const submitDisagree = (userId, trueFacultyId, batchName) => {
  return http.GET('/api/registration/afterDisapprovalOffice', {
    userId: userId,
    trueFacultyId: trueFacultyId,
    batchName: batchName
  })
}
