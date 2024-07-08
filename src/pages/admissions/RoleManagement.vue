<template>
    <div>
        <h1>
            <i class="el-icon-back"></i>|
            <span class="title_2">部门与角色管理</span>
        </h1>
        <el-card class="card">
            <el-row :gutter="10">
                <el-col :span="6">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" class="blue">查询</el-button>
                    <el-button type="primary" plain class="white">重置</el-button>
                </el-col>
                <el-col :span="12" :offset="2">
                    <el-button type="primary" class="blue">快速找人</el-button>
                    <el-button type="primary" class="blue">添加成员</el-button>
                    <el-button type="primary" class="blue">添加部门</el-button>
                    <el-button type="primary" plain class="white">数据导出</el-button>
                </el-col>
            </el-row>
            <el-table
                :data="tableData"
                :header-row-style="{ backgroundColor: '#F3F3F3' }"
                style="width: 100%"
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
.title_2 {
    color: #000000e6;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    text-align: left;
}
/deep/.el-col-3
{
    width: 7%;
    padding-left: 5px;
}
h1 {
    display: flex;          /* 启用 flexbox 布局 */
    align-items: center;    /* 垂直居中子元素 */
    flex-direction: row;    /* 子元素横向排列，默认就是 row，也可省略这一行 */
    gap: 10px;              /* 子元素之间的间隔 */
}
/*/deep/ el-table__header{*/
/*    background-color: #007bff; !* 蓝色背景 *!*/
/*}*/
/* 添加你的样式 */
/deep/ .el-table th.el-table__cell{
    background-color: #F3F3F3;
    font-weight: 400;
    font-size: 14px;
    color: #00000099;
    text-align: left;
    line-height: 22px;
}
.blue-header{
    margin-top: 20px;
}
/deep/ .el-table .cell{
    text-align: center;
}
.card{
    margin-left: 20px;
    margin-right: 20px;
}
.blue{
    background: #166AFF;
    border-radius: 3px;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
}
.white{
    border: 1px solid #166AFF;
    border-radius: 3px;
    font-weight: 400;
    font-size: 14px;
    color: #166AFF;
    text-align: center;
    background-color: #FFFFFF;
}
/deep/ .el-table thead{
    color: #00000099;
}
</style>
