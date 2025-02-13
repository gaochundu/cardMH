/*
 * @Author: GISER_GUI
 * @Date: 2022-05-12 17:45:45
 * @LastEditors: GISER_GUI
 * @LastEditTime: 2025-02-13 17:15:50
 * @Description: 登录相关接口
 * @FilePath: \vue-project\src\api\login\loginApi.ts
 */

import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

const apiHttp = 'https://api.guimap.com'
// 登录
const login: string = apiHttp + '/gisv/login'
// 用户注册
const reguser: string = apiHttp + '/gisv/reguser'
// 用户修改
const changeUserInfo: string = apiHttp + '/gisv/changeUserInfo'

// 登录
function loginHttp(params: AxiosRequestConfig): Promise<AxiosResponse> {
  return axios.post(login, params)
}
// 用户注册
function reguserHttp() {
  return axios.post(reguser)
}

// 用户修改
function changeUserInfoHttp() {
  return axios.post(changeUserInfo)
}

export default {
  loginHttp,
  reguserHttp,
  changeUserInfoHttp,
}
