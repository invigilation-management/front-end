<template>
    <div>
        <h1>
            <i class="el-icon-back"></i>|
            <span class="title_1">监考管理/</span>
            <span class="title_2">详细名单</span>
        </h1>
        <el-card class="card">
            <el-row :gutter="10">
                <el-col :span="6"><el-input v-model="input" placeholder="请输入监考人名姓名/工号关键词查询"></el-input></el-col>
                <el-col :span="4">
                    <el-button class="blue" type="primary" @click="select">查询</el-button>
                    <el-button type="primary" plain class="white" @click=reset>重置</el-button>
                </el-col>
                <el-col :span="14">
                    <el-button style="float: right;margin-right: 50px" type="primary" plain class="white" @click="exportData">数据导出</el-button>
                    <el-dialog title="导出数据" :visible.sync="dialogTableVisible">
                        <el-table :data="selectedIds" style="width: 100%">
                            <el-table-column
                                label="序号"
                                width="110">
                                <template slot-scope="scope">
                                    0{{scope.$index+1}}
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="trueFacultyName"
                                label="姓名"
                                width="129">
                                <template slot-scope="scope">
                                    <span class="teamName">{{scope.row.trueFacultyName}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="gender"
                                label="性别"
                                width="90"
                                show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <span class="teamName">{{scope.row.gender}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="trueFacultyId"
                                label="工号"
                                width="150">
                                <template slot-scope="scope">
                                    <span class="teamName">{{scope.row.trueFacultyId}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="college"
                                label="所在单位"
                                width="177">
                                <template slot-scope="scope">
                                    <span class="teamName">{{scope.row.college}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="approvalDate"
                                label="审批结束时间"
                                width="150">
                                <template slot-scope="scope">
                                    <span class="teamName">{{scope.row.approval ?scope.row.approval.approvalDate :'' }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="passOrNot"
                                label="审批状态"
                                width="150">
                                <template slot-scope="scope">
                                    <span class="teamName">{{scope.row.passOrNot}}</span>
                                </template>
                            </el-table-column>
<!--                            <el-table-column-->
<!--                                label="操作"-->
<!--                                width="150">-->
<!--                                <template slot-scope="scope">-->
<!--                                    <el-button type="text" size="small" @click="handleVice(scope.row)">查看名单</el-button>-->
<!--                                    <el-button type="text" size="small">更多</el-button>-->
<!--                                </template>-->
<!--                            </el-table-column>-->
                        </el-table>
                    </el-dialog>
                </el-col>
            </el-row>
            <el-table
                    :header-row-style="{ backgroundColor: '#F3F3F3' }"
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%;margin-top: 10px"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="56">
                </el-table-column>
                <el-table-column
                        label="序号"
                        width="110">
                    <template slot-scope="scope">
                        0{{scope.$index+1}}
                    </template>
                </el-table-column>
                <el-table-column
                        prop="trueFacultyName"
                        label="姓名"
                        width="180">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.trueFacultyName}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="gender"
                        label="性别"
                        width="120"
                        show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span class="teamName">
                            <div  v-if="scope.row.gender===1">男</div>
                            <div  v-else>女</div>
                        </span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="trueFacultyId"
                        label="工号"
                        width="200">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.trueFacultyId}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="college"
                        label="所在单位"
                        width="240">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.college}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="approvalDate"
                        label="审批结束时间"
                        width="220">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.approval ?scope.row.approval.approvalDate :'正在审批' }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="passOrNot"
                        label="审批状态"
                        width="180">
                    <template slot-scope="scope">
                        <span class="teamName">
                            <div style="color: green" v-if="scope.row.passOrNot===1">已通过</div>
                            <div style="color: red;" v-else-if="scope.row.passOrNot===0">已拒绝</div>
                            <div style="color: black;" v-else>审批中</div>
                        </span>
                    </template>
                </el-table-column>
<!--                <el-table-column-->
<!--                        label="操作"-->
<!--                        width="150">-->
<!--                    <template slot-scope="scope">-->
<!--                        <el-button type="text" size="small" @click="handleVice(scope.row)">查看审批</el-button>-->
<!--                    </template>-->
<!--                </el-table-column>-->
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
import {toDetailManage, examManageViceSelect} from '../../api/user'
import * as XLSX from 'xlsx'

export default {
  name: 'ManageVice123',
  props: ['batchname'],
  data () {
    return {
      pagenum: 1,
      pagesize: 10,
      total: 0,
      batchname1: '',
      input: '',
      dialogTableVisible: false,
      insert_exam_info: false,
      form: {
        name: '',
        gender: '',
        num: '',
        region: '',
        idcard: '',
        phone: '',
        job: '',
        exam_num: '',
        room: '',
        time: '',
        delivery: false
      },
      formLabelWidth: '120px',
      bigformLabelHeight: '158px',
      selectedIds: [],
      tableData: []
    }
  },
  methods: {
    select () {
      if (this.input != null) {
        examManageViceSelect(this.batchname1, this.input, this.pagesize, this.pagenum).then(response => {
          this.tableData = response.data.records
          this.total = response.data.total
        })
      }
    },
    reset () {
      this.show()
      this.input = null
    },
    exportData () {
      // const data = this.selectedIds.map(index => this.tableData[index])
      const data = this.selectedIds
      const worksheet = XLSX.utils.json_to_sheet(data)
      const workbook = XLSX.utils.book_new()
      this.dialogTableVisible = true
      XLSX.utils.book_append_sheet(workbook, worksheet, '部门数据')
      XLSX.writeFile(workbook, '部门数据.xlsx')
    },
    handleSizeChange (value) {
      this.pagesize = value
      this.select()
    },
    handleCurrentChange (value) {
      this.pagenum = value
      this.select()
    },
    handleSelectionChange (val) {
      this.selectedIds = val
    },
    handleEdit (row) {
      this.$router.push({
        name: 'batchDetails',
        query: {name: row.name}
      })
    },
    show () {
      toDetailManage(this.batchname1, this.pagesize, this.pagenum).then(response => {
        this.tableData = response.data.records
        this.total = response.data.total
      })
    }
  },
  created () {
    this.batchname1 = this.$route.params.batchname
    this.show()
  }
}
</script>

<style scoped>
.title_1{
    color: #00000066;
    font-size: 20px;
    font-face: PingFangSC;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0;
    paragraph-spacing: 0;
    text-align: left;
}
.title_2{
    color: #000000e6;
    font-size: 20px;
    font-face: PingFangSC;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0;
    paragraph-spacing: 0;
    text-align: left;
}
h1 {
    display: flex;          /* 启用 flexbox 布局 */
    align-items: center;    /* 垂直居中子元素 */
    flex-direction: row;    /* 子元素横向排列，默认就是 row，也可省略这一行 */
    gap: 10px;              /* 子元素之间的间隔 */
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
.card{
    margin-left: 20px;
    margin-right: 20px;
}
/deep/ .el-table th.el-table__cell{
    background-color: #F3F3F3;
    font-weight: 400;
    font-size: 14px;
    color: #00000099;
    text-align: left;
    line-height: 22px;
}
/deep/ .el-table__cell{
    color: #000000e6;
    text-align: left;
}
/deep/.el-table th.el-table__cell>.cell{}
/* 添加你的样式 */

</style>
