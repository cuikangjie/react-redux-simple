/**
 * 接口请求
 * @type {[type]}
 */
const __DEV__ = process.env.REACT_APP_DEV_ === "true"

const defaultOption = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  credentials: 'include'
}

export default({url, method, data, options}) => {

  return fetch(url, {
    ...defaultOption,
    ...options,
    method,
    body: JSON.stringify(data || {})
  }).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json()
    } else {
      return Promise.reject({rspDesc: response.statusText, rspCode: response.status})
    }
  }).then((value) => {

    return value
  }).catch((err) => {
    __DEV__ && console.error('request error  ===>', url, err);
    return err
  })
}
