import http from '@http/http'
// 获取当前的用户信息
export const getuserid = () => http.GET('/api/user/me')
// 监考名单表
export const FillFormTable = (userId, pageSize, pageNo) => {
  return http.GET('/api/batch/getManagementPageALL', {
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// 监考名单表模糊查询
export const selectFillFormTable = (batchName, pageSize, pageNo) => {
  return http.GET('/api/batch/getManagementPageUnclearFindALL', {
    batchName: batchName,
    pageSize: pageSize,
    pageNo: pageNo
  })
}

// 监考记录表
export const RecordingTable = (userId, pageSize, pageNo) => {
  return http.GET('/api/registration/teachersSeeTheirRegistrations', {
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}

// 监考记录表模糊查询
export const selectRecordingTable = (userId, batchName, pageSize, pageNo) => {
  return http.GET('/api/registration/teachersSeeTheirRegistrationsFind', {
    userId: userId,
    batchName: batchName,
    pageSize: pageSize,
    pageNo: pageNo
  })
}

// 老师填写个人信息报名
export const addSignUp = (obj) => {
  return http.POST('/api/registration/newRegister', obj)
}
// teacher页面对话框中打印表格的方法
export const dialogTable = (userId, pageSize, pageNo) => {
  return http.GET('/api/registration/nothing', {
    userId: userId,
    pageSize: pageSize,
    pageNo: pageNo
  })
}
// teacher的确认消息的接口
export const confirm = (userId, batchName) => {
  return http.GET('/api/registration/print', {
    userId: userId,
    batchName: batchName
  })
}
