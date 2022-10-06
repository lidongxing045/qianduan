<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="hea-sp">后台管理系统</span>
            </div>

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名" prop="username" :rules="[
                    {required:true,message:'请输入用户名',trigger:'blur'},
                    {min:4,max:10,message:'长度在4-10之间',trigger:'blur'}
                ]">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" :rules="[
                    {required:true,message:'请输入密码',trigger:'blur'},
                    {min:6,max:12,message:'长度在4-10之间',trigger:'blur'}
                ]">
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
        return {
            form: {
                username: "",
                password: ''
            }
        };
    },
    methods: {
        login(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    console.log(this.form); 
                    this.axios.post('http://',this.form).then(res=>{
                        console.log(res);
                        if(res.data.status==200){
                            localStorage.setItem('username',res.data.username);
                            this.$message({message:res.data.username,type:"sucess"});
                            this.$router.push('/home');
                        }
                    }).catch(err =>{
                        console.log(err);
                    });
                } else {
                    console.error(this,form);
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