<template>
    <div class="studentlist">
        
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
            <el-form-item label="姓名">
                <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="find">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="" @click="reset">重置</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="compData" border style="width: 100%">
            <el-table-column prop="name" label="姓名" align="center"></el-table-column>
            <el-table-column prop="sex_text" label="性别" align="center"></el-table-column>
            <el-table-column prop="age" label="年龄" align="center"></el-table-column>
            <el-table-column prop="number" label="学号" align="center"></el-table-column>
            <el-table-column prop="class" label="班级" align="center"></el-table-column>
            <el-table-column prop="state_text" label="状态"></el-table-column>
            <el-table-column prop="address" label="地址" align="center"></el-table-column>
            <el-table-column prop="phone" label="电话" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button type="danger" size="mini" icon="el-icon-delete" @click="del(scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-sizes="[5, 10, 20, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
import { students, studentDel } from "@/api/api.js"
import scope from "css-tree/lib/syntax/scope";
export default {
    data() {
        return {
            tableData: [],
            currentPage: 1,
            pageSize: 5,
            total: 0,
            formInline:{
                name:"",
            }
        }
    },
    created() {
        this.getData();
    },
    computed: {
        compData() {
            return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
        }
    },
    methods: {
        find(){
            this.getData(this.formInline);
        },
        reset(){
            this.formInline={};
            this.getData(this.formInline);
        },
        getData(param) {
            students(param).then(res => {
                if (res.data.status === 200) {
                    this.total = res.data.total;
                    this.tableData = res.data.data;
                    this.tableData.forEach(item => {
                        if (item.sex == 1)
                            item.sex_text = "男";
                        else if (item.sex == 2)
                            item.sex_text = "女";
                        if (item.state == 1)
                            item.state_text = "未入学";
                        else if (item.state == 2)
                            item.state_text = "已入学";
                        else if (item.state == 3)
                            item.state_text = "休学中";
                    })
                }
            })
        },
        handleSizeChange(val) {
            this.pageSize = val;
            //this.currentPage =1;
        },
        handleCurrentChange(val) {
            this.currentPage = val;

        },
        del(row) {
            console.log(row.id + "rowid")
            studentDel(row.id).then(res => {
                if (res.data.status === 200) {
                    this.$message({ message: '删除成功', type: "success" })
                    this.getData();
                }
            })
        },
    }
}
</script>
<style lang="scss">
.studentlist {
    text-align: left;
}
</style>