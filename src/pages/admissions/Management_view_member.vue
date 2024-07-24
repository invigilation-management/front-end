<template>
    <div>
        <h1>
            <i class="el-icon-back"></i>
            <span class="title_2">部门与角色管理 / 成员名单</span>
        </h1>
        <el-card class="card">
            <el-row :gutter="10">
                <el-col :span="4">
                    <el-input v-model="inputRole" placeholder="请选择系统角色"></el-input>
                </el-col>
                <el-col :span="6" >
                    <el-input v-model="input" placeholder="请输入姓名/工号关键词查询"></el-input>
                </el-col>
                <el-col :span="4" >
                    <el-button type="primary">查询</el-button>
                    <el-button type="primary" plain>重置</el-button>
                </el-col>
                <el-col :span="2" :offset="6">
                    <el-button type="success" round>添加成员</el-button>
                </el-col>
            </el-row>
            <el-table
                :header-row-style="{ backgroundColor: '#F3F3F3' }"
                ref="multipleTable"
                :data="tableData"
            tooltip-effect="dark"
            style="width: 100%; margin: 10px">
                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                    label="序号"
                    width="120">
                    <template slot-scope="scope">
                        0{{scope.$index+1}}
                    </template>
                </el-table-column>
                <el-table-column
                    prop="trueFacultyName"
                    label="姓名"
                    width="120">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.facultyName}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="gender"
                    label="工号"
                    width="137">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.facultyId}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="trueFacultyId"
                    label="系统角色"
                    width="180">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.level}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="college"
                    label="角色代码"
                    width="220">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.level}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="tele"
                    label="添加时间"
                    width="155">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.createdTime}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    prop="time"
                    width="200">
                    <template slot-scope="scope">
                        <span>变更</span>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pagenum"
                :page-sizes="[5, 10, 20, 50]"
                :page-size='pagesize'
                layout="total, sizes, prev, pager, next, jumper"
                :total='total'>
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
import {toDetailRoles} from '../../api/user'

export default {
  name: 'Waiting',
  props: ['collegeid'],
  data () {
    return {
      inputRole: '',
      input: '',
      pagenum: 1,
      pagesize: 10,
      total: 0,
      tableData: [],
      batchname1: ''
    }
  },
  methods: {
    handleSizeChange (value) {
      this.pagesize = value
      this.show()
    },
    handleCurrentChange (value) {
      this.pagenum = value
      this.show()
    },
    handleEdit () {
      this.$router.push({
        name: 'batchDetails'
      })
    },
    show () {
      toDetailRoles(this.batchname1, this.pagesize, this.pagenum).then(response => {
        console.log(response)
        this.tableData = response.data.records
        this.total = response.data.total
      })
    }
  },
  created () {
    this.batchname1 = this.$route.params.collegeid
    this.show()
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
    line-height: 28px;
    padding: 20px;
    display: block;
}
.title_2{
    font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
}
.card{
    margin-left: 20px;
    margin-right: 20px;
}
/deep/.el-input--small .el-input__inner {
    font-weight: 400;
    font-size: 14px;
    color: #000000e6;
    text-align: left;
    line-height: 22px;
}
/deep/.has-gutter{
    background: #757F9A;
    font-weight: 400;
    font-size: 14px;
    color: #00000099;
    text-align: left;
    line-height: 22px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    margin-left: 5px;
}
.el-icon-arrow-down {
    font-size: 12px;
}
/deep/.el-dropdown{
    font-size: 12px;
}
.teamName{
    color: #166AFF;
}
.buttonright{
    float: right;
}
/deep/ .el-table th.el-table__cell{
    background-color: #F3F3F3;
}
.el-row{
    margin-top: 10px;
    margin-bottom: 10px;
}
/deep/.el-pagination{
    text-align: right;
}
</style>
