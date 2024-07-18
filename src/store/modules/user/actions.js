import { _getUserInfo } from '@api/user'
import types from './types'
export default {
  async fetchUserInfo ({ commit }) {
    // 从后端获取当前用户  但是现在没有后端  自己写死一个用户
    let res = await _getUserInfo()
    // let res = {
    //   code: 0,
    //   status: true,
    //   data: {
    //     id: 1,
    //     name: 'LBH',
    //     userType: 1
    //   }
    // }
    // 临时使用
    console.log(res)
    if (res.status) {
      commit(types.SET_USER_ID, res.data.userId)
      commit(types.SET_USER_NAME, res.data.userName)
      commit(types.SET_USER_TYPE, res.data.faculty.level)
    }
    return res
  }
}
