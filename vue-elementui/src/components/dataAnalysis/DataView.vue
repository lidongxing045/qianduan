<template>
    <div class="data-view">
        <el-card>
            <div id="main1"></div>
        </el-card>      
        <el-card>
            <div id="main2"></div>
        </el-card>  
    </div>
</template>
<script>
    import {dataview} from '@/api/api.js'
    export default{
        data(){
            return{
                name:""
            }
        },
        created(){
            dataview().then(res=>{
                console.log(res);
                if(res.data.status ===200){  
                    let{legend,xAxis,series} = res.data.data;
                    this.darw(legend,xAxis,series);
                    
                }
            }).catch(e=>{
                throw(e) 
            })
            
        },
        mounted(){
            let myChart = this.$echarts.init(document.getElementById('main1'));
            myChart.setOption({
                title:{
                text:'大佬进阶班',
                },
                tooltip:{},
                xAxis:{
                    data:['一班','二班','三班','四班','五班','六班']
                },
                yAxis:{},
                series:[{
                    name:'人数',
                    type:'line',
                    data:[45,42,46,48,52,47],


                }],

            })
        },
        methods:{
            darw(legend,xAxis,series){
                let myCharts1 = this.$echarts.init(document.getElementById('main2'));
                window.onresize = function() {
                myCharts1.resize();}
                let option ={
                    title:{
                        text:'会话量',
                    },
                    tooltip:{
                        trigger:'axis',
                    },
                    legend:{data:legend},
                    xAxis:{
                        type:'category',
                        data:xAxis,
                    },
                    yAxis:{
                        type:"value"
                    },
                    series:series,
                }
                myCharts1.setOption(option);
            }
        }
    }
</script>
<style lang="scss">
    .data-view{
        width:100%;
        display:flex;
        justify-content: space-between;
        .el-card{
            width:50%;
            #main1,#main2{
                height: 500px;
            }
        }

    }
</style>