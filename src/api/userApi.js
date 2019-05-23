import http from '../utils/axios'

export const getcode = (params) => {
  return http.fetchGet('/account/info/gifCode', params)
}
// 注册 http://localhost:8082/account/info/gifCode

export const login = (params) => {
  return http.fetchPost('/login/login', params)
}
// 客户列表
export const getUserList = (params) => {
  return http.fetchPost('/carinfo/getUserList', params)
}
// 客户列表搜索
export const searchUserList = (params) => {
  return http.fetchPost('/carinfo/searchUserList', params)
}
// 客户列表详情页
export const quoteDetails = (params) => {
  return http.fetchPost('/quoteinfo/quoteDetails', params)
}
// 保存客户信息
export const saveCustomer = (params) => {
  return http.fetchPost('/customer/updateCustomer', params)
}

// 保存车辆信息
export const saveCarInfo = (params) => {
  return http.fetchPost('/carinfo/updateCarInfo', params)
}
// 保存关系人信息
export const updateInsuredInfo = (params) => {
  return http.fetchPost('/insuredinfo/updateInsuredInfo', params)
}
// 回收客户
export const recoverUser = (params) => {
  return http.fetchPost('/carinfo/recoverUser', params)
}
// 回收客户
export const getRecoverUser = (params) => {
  return http.fetchPost('/carinfo/getRecoverUser', params)
}

// 新增报价
export const checkByCarNoOrVinNo = (params) => {
  return http.fetchPost('/insuredinfo/checkByCarNoOrVinNo', params)
}
// 提交报价
export const getQuoteInfoAllParams = (params) => {
  return http.fetchPost('/quoteinfo/getQuoteInfoAllParams', params)
}
// 提交订单
export const createOrder = (params) => {
  return http.fetchPost('/quoteinfo/pay', params)
}
// 账号设置
export const queryConditions = (params) => {
  return http.fetchPost('/thirdAccount/queryConditions', params)
}
export const addOrUpdate = (params) => {
  return http.fetchPost('/thirdAccount/addOrUpdate', params)
}
