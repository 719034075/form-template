import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
    baseURL: '/api', // api的base_url
    timeout: 5000 // 请求超时时间
});

// http response 拦截器
service.interceptors.response.use(
    response => response.data,
    error => {
        console.log(`err: ${error}`); //for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error)
    });
export default service