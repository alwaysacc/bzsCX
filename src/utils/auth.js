import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
  // return Cookies.get(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey,token)
  //return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.clear()
  //return Cookies.remove(TokenKey)
}
