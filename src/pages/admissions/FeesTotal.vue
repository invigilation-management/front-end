<template>
    <div>
        <span class="title">监考费用明细</span>
        <div class="card">
            <el-card>
                <el-row :gutter="10">
                    <el-row :gutter="10" style="margin-bottom: 20px; margin-top: 0px">
                        <el-col :span="6">
                            <el-input v-model="input" placeholder="请输入监考名称关键词查询"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="primary" icon="el-icon-search" @click="select">查询</el-button>
                            <el-button type="inform" icon="el-icon-refresh-left" @click="reset">重置</el-button>
                        </el-col>
                        <el-col :span="14">
                            <div class="buttonright">
                                <el-button type="inform" plain class="white" icon="el-icon-upload" @click="exportData()">数据导出</el-button>
                                <el-dialog title="导出数据" :visible.sync="dialogTableVisible">
                                    <el-table :data="selectedIds">
                                        <el-table-column
                                            label="序号">
                                            <template slot-scope="scope">
                                                {{scope.$index+1}}
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="name"
                                            label="监考名称" width="180">
                                            <template v-slot="scope">
                                                <el-button type="text" size="small" @click="handleEdit333333333333(scope.row)">{{
                                                        scope.row.batchName
                                                    }}
                                                </el-button>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="num"
                                            label="监考人数">
                                            <template slot-scope="scope">
                                                <span class="teamName">{{scope.row.expectNum}}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="num"
                                            label="报名开始时间">
                                            <template slot-scope="scope">
                                                <span class="teamName">{{scope.row.regStartTime}}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="num"
                                            label="报名结束时间">
                                            <template slot-scope="scope">
                                                <span class="teamName">{{scope.row.regEndTime}}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="num"
                                            label="创建时间">
                                            <template slot-scope="scope">
                                                <span class="teamName">{{scope.row.batchCreatedTime}}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="address"
                                            label="批次状态">
                                            <template slot-scope="scope">
                        <span class="teamName">
                            <div style="color: black" v-if="scope.row.regStartTime>nowTime">未开始</div>
                            <div style="color: red" v-else-if="scope.row.regEndTime<nowTime">已结束</div>
                            <div style="color: green" v-else>进行中</div>
                        </span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="address"
                                            label="操作" width="180">
                                            <template v-slot="scope">
                                                <el-button
                                                    size="mini"
                                                    type="text"
                                                    @click="handleEdit(scope.row)">查看名单</el-button>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </el-dialog>
                            </div>
                        </el-col>
                    </el-row>
                    <el-table
                            :data="tableData"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                        <el-table-column
                                type="selection"
                                width="55">
                        </el-table-column>
                        <el-table-column
                                label="序号"
                                width="85">
                            <template slot-scope="scope">
                                {{scope.$index+1}}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="监考名称" width="170">
                            <template v-slot="scope">
                                <el-button type="text" size="small" @click="handleEdit333333333333(scope.row)">{{
                                        scope.row.batchName
                                    }}
                                </el-button>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="num"
                            label="监考人数"
                            width="100">
                            <template slot-scope="scope">
                                <span class="teamName">{{scope.row.expectNum}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="num"
                            label="报名开始时间">
                            <template slot-scope="scope">
                                <span class="teamName">{{scope.row.regStartTime}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="num"
                            label="报名结束时间">
                            <template slot-scope="scope">
                                <span class="teamName">{{scope.row.regEndTime}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="num"
                            label="创建时间">
                            <template slot-scope="scope">
                                <span class="teamName">{{scope.row.batchCreatedTime}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="批次状态">
                            <template slot-scope="scope">
                        <span class="teamName">
                            <div style="color: black" v-if="scope.row.regStartTime>nowTime">未开始</div>
                            <div style="color: red" v-else-if="scope.row.regEndTime<nowTime">已结束</div>
                            <div style="color: green" v-else>进行中</div>
                        </span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="操作" width="180">
                            <template v-slot="scope">
                                <el-button
                                        size="mini"
                                        type="text"
                                        @click="handleEdit(scope.row)">查看名单</el-button>
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
                </el-row>
            </el-card>
        </div>
    </div>
</template>

<script>
import {examPlan, getuserid, manageFeesSelect} from '../../api/user'
import moment from 'moment'
import * as XLSX from 'xlsx'
export default {
  name: 'FeesTotal',
  data () {
    return {
      pagenum: 1,
      pagesize: 10,
      total: 0,
      nowTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      input: '',
      form: {
        name: '',
        peoples_num: '',
        begin_time: '',
        end_time: '',
        create_time: '',
        this_status: ''
      },
      selectedIds: [],
      selectedIds1: [],
      selectedIds2: [],
      dialogTableVisible: false,
      dialogTableVisible1: false,
      dialogTableVisible2: false,
      dialogVisible_fee: false,
      formLabelWidth: '120px',
      bigformLabelHeight: '158px',
      input_exam_num: '',
      invitation: false,
      invite_way: 'self',
      disagree_reason: '',
      agreeordis: 'agree',
      tableData: [],
      dialog_Regist_approval: false,
      activeName: 'Batch',
      dialogData: {}
    }
  },
  methods: {
    handleSizeChange (value) {
      this.pagesize = value
      this.select()
    },
    handleCurrentChange (value) {
      this.pagenum = value
      this.select()
    },
    select () {
      if (this.input != null) {
        manageFeesSelect(this.input, this.pagesize, this.pagenum).then(response => {
          this.tableData = response.data.records
          this.total = response.data.total
        })
      }
    },
    reset () {
      this.getExamPlanTable()
      this.input = null
    },
    getExamPlanTable () {
      getuserid().then(response => {
        const userId = response.data.userId
        examPlan(userId, this.pagesize, this.pagenum).then(response => {
          this.tableData = response.data.records
          this.total = response.data.total
        }).catch(error => {
          console.error('Error fetching approval table:', error)
        })
      }).catch(error => {
        console.error('Error fetching userId:', error)
      })
    },
    handleSign () {
      this.$router.push({
        name: 'ApprovalDetails'
      })
    },
    handleSelectionChange (val) {
      this.selectedIds = val
    },
    exportData () {
      // const data = this.selectedIds.map(index => this.tableData[index])
      const data = this.selectedIds
      const worksheet = XLSX.utils.json_to_sheet(data)
      const workbook = XLSX.utils.book_new()
      this.dialogTableVisible = true
      XLSX.utils.book_append_sheet(workbook, worksheet, '费用明细')
      XLSX.writeFile(workbook, '费用明细.xlsx')
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleEdit (row) {
      this.$router.push({
        name: 'ExamFees',
        params: {batchname: row.batchName}
      })
    },
    handl1111111111111111111 (row) {
      this.$router.push({
        name: 'AgreeDetails',
        query: {name: row.name}
      })
    },
    handle2222222222222222 (row) {
      this.$router.push({
        name: 'DisagreeDetails',
        query: {name: row.name}
      })
    },
    handleEdit333333333333 (row) {
      this.$router.push({
        name: 'batchDetails',
        query: {name: row.name},
        params: {batchname: row.batchName}
      })
    },
    showdialog (index) {
      this.dialogData = this.tableData[index]
      this.dialog_Regist_approval = true
    }
  },
  created () {
    this.getExamPlanTable()
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
/deep/.el-button--primary,.el-tag{
    background: #166AFF;
    border-radius: 3px;
}
/deep/ .el-button--inform {
    border: 1px solid #166AFF;
    border-radius: 3px;
    background: #FFFFFF;
    color: #166AFF;
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
.buttonright{
    float: right;
}
</style>
