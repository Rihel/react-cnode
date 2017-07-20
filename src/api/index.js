import axios from 'axios';
import qs from 'qs';

//这里修改api接口根路径
axios.defaults.baseURL = 'https://cnodejs.org/api/v1';

export const getData = (url, data) => {
    return axios.get(url, {
        params: data
    })
};

export const postData = (url, data) => {
    return axios.post(url, qs.stringify(data));
};