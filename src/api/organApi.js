import http from '../utils/axios'

// 添加账号
export const addAccount = (params) => {
  return http.fetchPost('/account/info/add', params)
}
// 账号列表
export const getUserList = (params) => {
  return http.fetchPost('/account/info/getUserList', params)
}
// 账号列表
export const update = (params) => {
  return http.fetchPost('/account/info/update', params)
}
