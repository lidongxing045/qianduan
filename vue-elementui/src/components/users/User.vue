<template>
    <div>
        <el-tree :data="menus" 
        show-checkbox node-key="id" 
        :default-expanded-keys="[2, 3]" 
        :default-checked-keys="[5]"
        :props="defaultProps"
        ref="tree">
        </el-tree>
        <el-button @click="getCheckNodes">获取权限</el-button>

    </div>
</template>
<script>
    export default{
        data(){
            return{
                menus:[],
                defaultProps:{
                    label:'name',
                    children:'children'
                },

            }
        },
        created(){
            this.menus = [...this.$router.options.routes];
            //console.log(this.$router.options.routes)
        },
        methods:{
            getCheckNodes(){
                console.log(this.$refs.tree.getCheckedNodes());
            }
        }
    }
</script>