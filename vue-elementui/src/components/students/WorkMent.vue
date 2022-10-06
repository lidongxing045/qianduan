<template>
    <div class="workMent">
        <h3>作业管理</h3>
        <el-table :data="tableData" border style="width: 100%" v-loading="loading">
            <el-table-column prop="id" label="用户ID" align="center"></el-table-column>
            <el-table-column prop="userId" label="所属班级" align="center"></el-table-column>
            <el-table-column prop="title" label="作业名称" align="center"></el-table-column>
            <el-table-column prop="completed_text" label="完成情况" align="center"></el-table-column>
        </el-table>

        <Page :total="total" :url="url"/>
    </div>
</template>

<script>
import Page from '../common/Pageing.vue'
export default {
    components:{Page},
    data() {
        return {
            tableData: [],
            total: 0,
            url:"/api2/works",
            loading: true,

        }
    },

}
</script>
<style lang="scss">
.workMent {
    .el-pagination {
        text-align: left;
        margin-top: 20px;
    }
}
</style>