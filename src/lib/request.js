import Axios, {
  AxiosRequestConfig
} from 'axios'

const baseURL = "http://192.168.1.233:8082/v1"

export const request = Axios.create({
  baseURL
})

// const refetchTokenURL = `${baseURL}/${V1}/user/refresh-token`

// function authRequestInterceptor(config) {
//   const _token = localStorage.getItem('user-token')

//   // Fix stupid axios typescript
//   if (_token && _token !== 'undefined' && config.headers) {
//     const token = JSON.parse(_token)
//     config.headers.authorization = `Bearer ${token.access_token}`
//   }

//   return config
// }

// export const request = Axios.create({
//   baseURL
// })

// request.interceptors.request.use(authRequestInterceptor)
// request.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     // const message = error.response?.data?.message || error.message
//     // Handle toast message
//     // Handle refresh token
//     if (error.response && error.response.status === 401) {
//       const _token = localStorage.getItem('user-token')
//       if (_token) {
//         const token = JSON.parse(_token)
//         return refreshToken(token)
//           .then((res) => {
//             error.config.headers.authorization = `Bearer ${res?.access_token}`
//             localStorage.setItem('user-token', JSON.stringify(res))
//             return request.request(error.config)
//           })
//           .catch((reason) => {
//             localStorage.removeItem('user-token')
//             window.location.replace('/login')
//           })
//       }
//     }

//     return Promise.reject(error.response.data)
//   }
// )