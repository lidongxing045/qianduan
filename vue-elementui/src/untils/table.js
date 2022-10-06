//h获取表格数据
export function getData(root,url,params){
    root.service.get(url,{params:params||{}}).then(res=>{
        if(res.data.status ===200){
            root.tableData = res.data.data;
            root.total = res.data.total; 
        }
    }).catch(error=>{
        throw error;
    })
}
import qs from 'qs'
 export function changeInfo(root,method,url,form,callback){
    let data = qs.stringify(form);
    root.service[method](url,data).then(res=>{
        if(res.data.status===200){
            callback(root,url)
            root.$refs['form'].resetFields();
            root.$message({message:res.data.message,type:"success"});
            
        }
    }).catch(error=>{
        throw error
    })
 }

 //删除

export function delData(root,url,id,callFun){
    root.$alert('你确定要删除吗？','提示',{
        confirmButtonText:'确定',
        callback:()=>{
            root.service.delete(url+'/'+id).then(res=>{
                if(res.data.status ===200){
                    callFun(root,url)
                    root.$message({message:res.data.message,type:"success"})
                }
            }).catch(error=>{
                throw error
            })

        }
    })

}
//获取作业列表表格方法数据封装
export function getTableData(root,url,params,arr){
    root.service.get(url,{params:params||{}}).then(res=>{
        if(res.data.status ===200){
            root.tableData = res.data.data;
            root.total = res.data.total; 
            root.tableData.map(item=>{
                arr.map(aitem=>{
                    item[aitem] ? item[aitem + '_text'] = '是' : item[aitem + '_text'] = '否' 
                })
            })
            root.loading=false;
        }
    }).catch(error=>{
        throw error;
    })
}