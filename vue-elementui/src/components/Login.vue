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
import{nameRule,passRule} from '../untils/validate.js'
import{setToken} from '../untils/setToken.js'
import{login} from '../api/api.js'
export default {

    data() {
        return {
            form: {
                username: "",
                password: "",
            },
            rules:{
                username:[{validator:nameRule,trigger:'blur'}],
                password:[{validator:passRule,trigger:'blur'}]
            }
        };
    },
    methods: {
        login(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    login(this.form).then(res=>{
                        if(res.data.status === 200){
                            setToken('username',res.data.username);
                            setToken('token',res.data.token);
                            this.$message({message:res.data.message, type:'success'});
                            this.$router.push('/home');
                        }
                        
                    })
/**
                    this.axios.post('http://',this.form).then(res=>{
                        if(res.data.status==200){
                            localStorage.setItem('username',res.data.username);
                            this.$message({message:res.data.username,type:"sucess"});
                        }
                    }).catch(err =>{
                        setToken("username",this.form.username)
                        this.$router.push('/home');
                    });
                    */
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
        background:url(../assets/e5e154c78a4f31.jpg) center no-repeat;
        .el-card{
            background: #65768757;
        }
        .box-card {
            width: 500px;
            margin: 200px auto;
            color:#fff;
            .el-form .el-form-item .el-form-item__label{
                color: #fff;
            }
            .hea-sp{
                font-size: 34px;
            }
    
            .el-button {
                width: 80%;
            }
        }
    }
    </style>