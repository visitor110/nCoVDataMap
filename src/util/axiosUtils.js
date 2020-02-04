import axios from 'axios'

export const postRequestLogin = (url, params) => {
  return axios({
    method: 'post',
    url: url,
    data: params,
    // transformRequest: [function (datas) {
    //   //Do whatever you want to transform the data
    //   // let ret = ''
    //   // for (let data in datas) {
    //   //   ret += encodeURIComponent(data) + '=' + encodeURIComponent(datas[data]) + '&'
    //   // }
    //   // return ret;
    //
    //   return JSON.stringify(datas)
    // }],
    headers: {
      //跨域
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Content-Type': 'application/json',
      //  "Access-Control-Allow-Origin": "*",
      'Accept': 'application/json'
    }
  });
};
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: url,
    data: params,
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    transformRequest: [function (params) {
      //Do whatever you want to transform the data
      let ret = ''
      for (let data in params) {
        ret += encodeURIComponent(data) + '=' + encodeURIComponent(params[data]) + '&'
      }
      return ret;

    }],
    headers: {
      //跨域
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  });
};
export const getRequest = (url, params) => {
  return axios({
    method: 'get',
    url: url,
    params: {
      params
    },
    headers: {
      //跨域
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  });
};
