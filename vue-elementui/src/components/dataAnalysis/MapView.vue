<template>
    <div class="map-view">
       <div id="main"></div>
    </div>
</template>
<script>
    import geoJson from '../common/chinamap.json'
    export default{
        data(){
            return{}
        },
        mounted(){
            let myChart = this.$echarts.init(document.getElementById('main'));
            this.$echarts.registerMap('china',geoJson);//需要geo组件或map图表类型
            //console.log(geoJson);
            let option={
                backgroundColor:'rgb(121,145,209)',
                geo:{
                map:'china',
                aspectScale:0.75, //长宽比
                zoom:1.1,
                itemStyle:{
                    normal:{
                        areaColor:{
                            type:'radial',
                            x:0.5,
                            y:0.8,
                            r:0.8,
                            colorStops:[
                                {
                                    offset:0,
                                    color:'#09132c'
                                },
                                {
                                    offset:1,
                                    color:'#274d68'
                                }
                            ],
                            globalCoord:true
                        },
                        shadowColor:'rgb(58,115,192)',
                        shadowOffsetX:10,
                        shadowOffsetY:10,
                    }
                },
                regions:[{
                    name:'南海诸岛',
                    itemStyle:{
                        normal:{
                            shadowOffsetX:0,
                        shadowOffsetY:0,
                        }
                    }
                }],
            },
            series:[{
                //地图参数
                type:'map',
                label:{
                    normal:{
                        show:true,
                        textStyle:{
                            color:'#1de9b6'
                        }   
                    },
                    emphasis:{
                        textStyle:{
                            color:'rgb(146,229,206)'
                        } 
                    }

                },
                zoom:1.1,
                map:'china',
                itemStyle:{
                    backgroundColor:'rgb(147,235,248)',
                    borderWidth:1,
                    normal:{
                        areaColor:{
                            type:'radial',
                            x:0.5,
                            y:0.8,
                            r:0.8,
                            colorStops:[
                                {
                                    offset:0,
                                    color:'rgb(31,54,150)'
                                },
                                {
                                    offset:1,
                                    color:'rgb(89,128,142)'
                                }
                            ],
                            globalCoord:true
                        }
                    },
                    emphasis:{
                        areaColor:'rgb(46,229,206)'
                    }
                },
            }]
            };
            myChart.setOption(option)
        }
    }
</script>
<style lang="scss">
    .map-view{
        width:100%;
        #main{
            width: 100%;
        height:600px;
        }
    }
</style>


