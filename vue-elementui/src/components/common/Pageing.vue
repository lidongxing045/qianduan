<template>
    <div>

        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page"
            :page-sizes="[5, 10, 20, 50]" :page-size="size" layout="total, sizes, prev, pager, next, jumper"
            :total="total" :url="url">
        </el-pagination>
    </div>
</template>
<script>
import { getTableData } from '../../untils/table';
export default {
    props:{
        "total":Number,
        "url":String
    },
    data() {
        return {
            Page: 1,//当前页数
            size: 10//每页显示条数
        }
    },
    created() {
        getTableData(this.$parent, '/api2/works', { page: this.page, size: this.size }, ['completed']);
    },
    methods: {
        handleSizeChange(val) {
            this.size = val;
            this.page = 1;
            getTableData(this.$parent, '/api2/works', { page: this.page, size: val }, ['completed']);
        },
        handleCurrentChange(val) {
            this.page = val;
            getTableData(this.$parent, '/api2/works', { page: val, size: this.size }, ['completed']);
        }

    }
}
</script>