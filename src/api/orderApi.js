import http from '../utils/axios'

// 获取订单列表
export const getOrderList = (params) => {
  return http.fetchPost('/orderinfo/getOrderList', params)
}

// 搜索订单列表
export const searchOrderList = (params) => {
  return http.fetchPost('/orderinfo/searchOrderList', params)
}
export const getOrderDetails = (params) => {
  return http.fetchPost('/orderinfo/getOrderDetail', params)
}

export const payCancel = (params) => {
  return http.fetchPost('/quoteinfo/payCancel', params)
}

