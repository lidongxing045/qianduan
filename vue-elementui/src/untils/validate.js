//校验

export function nameRule(rule,value,callback){
   
        let reg = /(^[a-zA-Z0-9]{4,10}$)/;
        if(value===''){
            callback(new Error('请输入用户名'));
        }else if(!reg.test(value)){
            callback(new Error('请输入4-10位用户名'))
        }else{
            callback();
        }    

}

export function passRule(rule,value,callback){
   
    let reg = /(^[a-zA-Z0-9]{6,12}$)/;
            if(value===''){
                callback(new Error('请输入密码'));
            }else if(!reg.test(value)){
                callback(new Error('请输入6-12位密码需要包含大小写字母、数字、特殊字符'))
            }else{
                callback();
            }

}