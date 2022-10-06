<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="hea-sp">后台管理系统</span>
            </div>

            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="用户名" prop="username" >
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">提交</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {

    data() {
        const validateName = (rule,value,callback)=>{
            let reg = /(^[a-zA-Z0-9]{4,10}$)/;
            if(value===''){
                callback(new Error('请输入用户名'));
            }else if(!reg.test(value)){
                callback(new Error('请输入4-10位用户名'))
            }else{
                callback();
            }
        };
        const validatePass = (rule,value,callback)=>{
            let pass = /(^[a-zA-Z0-9]{6,12}$)/;
            if(value===''){
                callback(new Error('请输入密码'));
            }else if(!pass.test(value)){
                callback(new Error('请输入6-12位密码需要包含大小写字母、数字、特殊字符'))
            }else{
                callback();
            }
        };
        return {
            form: {
                username: "",
                password: "",
            },
            rules:{
                username:[{validator:validateName,trigger:'blur'}],
                password:[{validator:validatePass,trigger:'blur'}]
            }
        };
    },
    methods: {
        login(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    console.log(this.form); 
                    this.axios.post('http://',this.form).then(res=>{
                        
                        if(res.data.status==200){
                            localStorage.setItem('username',res.data.username);
                            this.$message({message:res.data.username,type:"sucess"});
                            //this.$route.push('/home');
                        }
                    }).catch(err =>{
                        
                        this.$router.push('/home');
                    });
                } else {
                    console.error("严重失败，不跳转");
                }
            }
            )
        }
    }
}
</script>
<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #409eff;

    .box-card {
        width: 500px;
        margin: 200px auto;

        .el-card__header {
            font-size: 34px;
        }

        .hea-sp {
            font-size: 34px;
        }

        .el-button {
            width: 80%;
        }
    }
}
</style>