import axios from "axios";
import { getToken } from "./untils/setToken";
import { Message } from "element-ui";
const service = axios.create({
    baseURL:'/api',
    timeout:4000
})



//请求拦截器
service.interceptors.request.use((config)=>{
    //请求之前做的事，获取并设置token.
    config.headers['token'] = getToken['token']
    return config;
},(error)=>{
    return Promise.reject(error)
});
//响应拦截器
service.interceptors.response.use((response)=>{
    //对响应做的操作
    let{status,message} = response.data;
    if(status!=200){
        Message({message:message || "error", type:'warning'})
    }
    return response;
},(error)=>{
    return Promise.reject(error)
});

export default service;