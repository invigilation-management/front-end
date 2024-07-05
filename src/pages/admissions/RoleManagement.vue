<template>
    <div>
        <h1 class="title">部门与角色管理</h1>
        <div class="card">
            <el-card>
                <el-row gutter="10">
                    <el-col span="6">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </el-col>
                    <el-col span="3"><el-button type="primary">查询</el-button></el-col>
                    <el-col span="3"><el-button type="primary" plain>重置</el-button></el-col>
                    <el-col :span="8" :offset="6">
                        <el-button type="primary">快速找人</el-button>
                        <el-button type="primary">添加成员</el-button>
                        <el-button type="primary">添加部门</el-button>
                        <el-button type="primary" plain>数据导出</el-button>
                    </el-col>
                </el-row>
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    border="true"
                    :header-row-style="{ backgroundColor: '#FF0000' }"
                    class="blue-header">
                    <el-table-column
                        prop="date"
                        label="序号"
                        width="60">
                    </el-table-column>
                    <el-table-column
                        label="部门名称"
                        width="400">
                        <template slot-scope="scope">
                            <el-button type="text">{{scope.row.date}}</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="部门代码"
                        width="140">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="部门类型"
                        width="140">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="成员人数"
                        width="140">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="添加时间"
                        width="140">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="操作">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看成员</el-button>
                            <el-button type="text" size="small">更多</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </div>
        <!-- 添加你的部门与角色管理内容 -->
    </div>
</template>

<script>
export default {
  name: 'RoleManagement',
  data () {
    return {
      input: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style scoped>
.title{
    width: 140px;
    height: 28px;
    font-weight: 500;
    font-size: 20px;
    color: #000000e6;
    display: block;
    padding: 10px;
}
/deep/.el-col-3
{
    width: 7%;
    padding-left: 5px;
}
/*/deep/ el-table__header{*/
/*    background-color: #007bff; !* 蓝色背景 *!*/
/*}*/
/* 添加你的样式 */
/deep/ .el-table th.el-table__cell{
    background-color: #0d94f3;
}
/deep/ .el-table thead{
    color: #FFFFFF;
}
.blue-header{
    margin-top: 20px;
}
/deep/ .el-table .cell{
    text-align: center;
}
</style>
