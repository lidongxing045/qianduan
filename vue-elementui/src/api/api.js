import service from "../service";
import qs from 'qs'
export function login(data){
    return service({
        method:'post',
        url:'/api2/login',
        data:data
    })
}

//学生查询
export function students(params){
    return service({
        method:'get',
        url:'/api2/students',
        params
    })
}
//学生删除
export function studentDel(id){
    return service({
        method:'delete',
        url:`/api2/students/${id}`
        
    })
}

//信息新增
export function info(data){
    data = qs.stringify(data);
    return service({
        method:'post',
        url:'/api2/info',
        data
    })
}
//信息更新
export function updateInfo(data){
    data = qs.stringify(data);
    return service({
        method:'put',
        url:'/api2/info',
        data
    })
}
//信息查询
export function getInfo(){
    return service({
        method:'get',
        url:'/api2/info',
    })
}
//信息删除
export function delInfo(id){
    return service({
        method:'delete',
        url:'/api2/info/'+ id,
        //url:`/api2/info/${id}`
    })
}


