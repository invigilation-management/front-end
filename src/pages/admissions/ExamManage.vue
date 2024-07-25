<template>
    <div>
        <h1>
            <i class="el-icon-back"></i>|
            <span class="title_2">监考管理</span>
        </h1>
        <el-card class="card">
            <el-row :gutter="10">
                <el-col :span="9">
                    <el-button type="primary" class="blue" icon="el-icon-search" @click="dialogVisibleFind= true">快速找人</el-button>
                    <!--                    以下是对话弹窗部分-->
                    <!--                    以下是对话弹窗部分-->
                    <el-dialog title="快速找人" :visible.sync="dialogVisibleFind">
                        <hr class="card-divider">
                        <el-input placeholder="请输入姓名/工号关键词查询"></el-input>
                        <div class="grey">
                            <br>&nbsp; 姓名: <br><br>&nbsp; 工号: <br><br>&nbsp; 所在部门: <br><br>&nbsp; 担任角色:<br> <br>
                        </div>
                    </el-dialog>
                    <!--                    以上是对话弹窗部分-->
                    <!--                    以上是对话弹窗部分-->
                    <el-button type="primary" plain class="white" icon="el-icon-plus" @click="dialogFormVisible = true">创建批次</el-button>
                    <!--                    以下是对话弹窗部分-->
                    <!--                    以下是对话弹窗部分-->
                    <!--                    以下是对话弹窗部分-->
                    <!--                    以下是对话弹窗部分-->
                    <el-dialog title="创建监考报名批次" :visible.sync="dialogFormVisible">
                        <el-form :model="form">
                            <el-form-item label="批次名称" :label-width="formLabelWidth">
                                <el-input v-model="form.batchName" autocomplete="off" placeholder="请输入批次名称"></el-input>
                            </el-form-item>
                            <el-form-item label="批次开始时间" :label-width="formLabelWidth">
                                <el-input v-model="form.batchStartTime" autocomplete="off" placeholder="请输入批次开始时间"></el-input>
                            </el-form-item>
                            <el-form-item label="批次结束时间" :label-width="formLabelWidth">
                                <el-input v-model="form.batchEndTime" autocomplete="off" placeholder="请输入批次结束时间"></el-input>
                            </el-form-item>
                            <el-form-item label="报名开始时间" :label-width="formLabelWidth">
                                <el-input v-model="form.regStartTime" autocomplete="off" placeholder="请输入报名开始时间"></el-input>
                            </el-form-item>
                            <el-form-item label="报名结束时间" :label-width="formLabelWidth">
                                <el-input v-model="form.regEndTime" autocomplete="off" placeholder="请输入报名结束时间"></el-input>
                            </el-form-item>
                            <el-form-item label="监考说明" :label-width="formLabelWidth">
                                <el-input v-model="form.batchInfo"  type="textarea" autocomplete="off" placeholder="请输入监考说明" style="height: auto">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="持续时间" :label-width="formLabelWidth">
                                <el-input v-model="form.batchDuration" autocomplete="off" placeholder="请输入持续时间"></el-input>
                            </el-form-item>
                            <el-form-item label="需求人数" :label-width="formLabelWidth">
                                <el-input v-model="form.expectNum" autocomplete="off" placeholder="请输入需求人数"></el-input>
                            </el-form-item>
                            <el-form-item label="上传附件" :label-width="formLabelWidth" :label-height="bigformLabelHeight">
                                <el-button type="primary" icon="el-icon-upload2">上传文件</el-button>
                            </el-form-item>
                            <div class="form_text">限制上传文件10个以下，单个大小不超过100M</div>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary" @click='batchCreateSubmit' style="background-color: #166AFF"> 提 交 </el-button>
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                        </div>
                    </el-dialog>
                    <!--                    以上是对话弹窗部分-->
                    <!--                    以上是对话弹窗部分-->
                    <!--                    以上是对话弹窗部分-->
                    <!--                    以上是对话弹窗部分-->
                    <el-button type="primary" plain class="white" icon="el-icon-upload" @click="exportData()">数据导出</el-button>

                    <el-dialog title="导出数据" :visible.sync="dialogTableVisible">
                        <el-table :data="selectedIds">
                            <el-table-column
                                label="序号"
                                width="120">
                                <template slot-scope="scope">
                                    0{{scope.$index+1}}
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="监考名称"
                                width="300">
                                <template v-slot="scope">
                                    <el-button type="text" size="small" @click="handleEdit(scope.row)">{{
                                            scope.row.batchName
                                        }}
                                    </el-button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="status"
                                label="报名情况"
                                width="137">
                                <template slot-scope="scope">
                                    <span class="teamName">{{scope.row.alreadyPassedNum}}/{{scope.row.expectNum}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="startTime"
                                label="报名开始时间"
                                width="255">
                                <template slot-scope="scope">
                                    <span class="teamName">{{scope.row.regStartTime}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="endTime"
                                label="报名结束时间"
                                width="255">
                                <template slot-scope="scope">
                                    <span class="teamName">{{scope.row.regEndTime}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="createTime"
                                label="创建时间"
                                width="255">
                                <template slot-scope="scope">
                                    <span class="teamName">{{scope.row.batchCreatedTime}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="status"
                                label="批次状态"
                                width="155">
                                <template slot-scope="scope">
                        <span class="teamName">
                            <div style="color: black" v-if="scope.row.regStartTime>nowTime">未开始</div>
                            <div style="color: red" v-else-if="scope.row.regEndTime<nowTime">已结束</div>
                            <div style="color: green" v-else>进行中</div>
                        </span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="操作"
                                width="200">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="handleVice(scope.row)">查看名单</el-button>
                                    <el-button type="text" size="small">更多</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-dialog>
                </el-col>
                <el-col :span="6" :offset="5"><el-input v-model="input" placeholder="请输入监考名称关键词查询"></el-input></el-col>
                <el-col :span="4">
                    <el-button class="blue" type="primary" icon="el-icon-search" @click="select">查询</el-button>
                    <el-button plain class="white" type="primary" icon="el-icon-refresh-left" @click=reset>重置</el-button>
                </el-col>
            </el-row>
            <el-table
                :header-row-style="{ backgroundColor: '#F3F3F3' }"
                ref="multipleTable"
                :data="examManageInfos"
                tooltip-effect="dark"
                style="width: 100%;margin-top: 10px;margin-right:3px"
                @selection-change="handleSelectionChange">
                <el-table-column
                    type="selection"
                    width="75">
                </el-table-column>
                <el-table-column
                    label="序号"
                    width="120">
                    <template slot-scope="scope">
                        0{{scope.$index+1}}
                    </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="监考名称"
                    width="300">
                    <template v-slot="scope">
                    <el-button type="text" size="small" @click="handleEdit(scope.row)">{{
                            scope.row.batchName
                        }}
                    </el-button>
                </template>
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="报名情况"
                    width="137">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.alreadyPassedNum}}/{{scope.row.expectNum}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="startTime"
                    label="报名开始时间"
                    width="255">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.regStartTime}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="endTime"
                    label="报名结束时间"
                    width="255">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.regEndTime}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="createTime"
                    label="创建时间"
                    width="255">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.batchCreatedTime}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="批次状态"
                    width="155">
                    <template slot-scope="scope">
                        <span class="teamName">
                            <div style="color: black" v-if="scope.row.regStartTime>nowTime">未开始</div>
                            <div style="color: red" v-else-if="scope.row.regEndTime<nowTime">已结束</div>
                            <div style="color: green" v-else>进行中</div>
                        </span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="200">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="handleVice(scope.row)">查看名单</el-button>
                        <el-button type="text" size="small">更多</el-button>
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
import {examManageTable, getuserid, examManageSelect, addBatch} from '../../api/user'
import moment from 'moment'
import * as XLSX from 'xlsx'
export default {
  name: 'ViewList',
  data () {
    return {
      pagenum: 1,
      pagesize: 10,
      total: 0,
      nowTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      // 表示现在的时间
      input: '',
      selectedIds: [],
      dialogTableVisible: false,
      dialogVisibleFind: false,
      examManageInfos: [],
      dialogFormVisible: false,
      form: {
        batchName: '',
        regStartTime: '',
        regEndTime: '',
        batchInfo: '',
        batchStartTime: '',
        batchEndTime: '',
        batchDuration: '',
        expectNum: ''
      },
      formLabelWidth: '120px',
      bigformLabelHeight: '158px'
    }
  },
  methods: {
    exportData () {
      // const data = this.selectedIds.map(index => this.tableData[index])
      const data = this.selectedIds
      const worksheet = XLSX.utils.json_to_sheet(data)
      const workbook = XLSX.utils.book_new()
      this.dialogTableVisible = true
      XLSX.utils.book_append_sheet(workbook, worksheet, '监考管理')
      XLSX.writeFile(workbook, '监考管理.xlsx')
    },
    handleSelectionChange (val) {
      // this.selectedIds = val.map(item => this.tableData.indexOf(item))
      this.selectedIds = val
    },
    handleSizeChange (value) {
      this.pagesize = value
      this.select()
    },
    handleCurrentChange (value) {
      this.pagenum = value
      this.select()
    },
    batchCreateSubmit () {
      // 创建批次对话框的确认方法
      this.dialogFormVisible = false
      let isnullornot = true
      for (let key in this.form) {
        if (!this.form[key]) {
          isnullornot = false
          break // 可以提前结束循环，因为已经确定表单不合法
        }
      }
      console.log(isnullornot)
      if (isnullornot === true) {
        // 可以创建新的batch
        addBatch(this.form).then(res => {
          if (res.data === true) {
            this.$message({
              message: '创建成功',
              type: 'success'
            })
          } else if (res.data === false) {
            this.$message({
              message: '创建失败，请稍后重试',
              type: 'warning'
            })
          }
        })
      }
    },
    select () {
      if (this.input != null) {
        examManageSelect(this.input, this.pagesize, this.pagenum).then(response => {
          this.examManageInfos = response.data.records
          this.total = response.data.total
        })
      }
    },
    reset () {
      this.getExamManageTable()
      this.input = null
    },
    getExamManageTable () {
      getuserid().then(response => {
        const userId = response.data.userId
        examManageTable(userId, this.pagesize, this.pagenum).then(response => {
          this.examManageInfos = response.data.records
          this.total = response.data.total
        }).catch(error => {
          console.error('Error fetching approval table:', error)
          // Handle errors as needed
        })
      }).catch(error => {
        console.error('Error fetching userId:', error)
        // Handle errors from getuserid() if necessary
      })
    },
    handleEdit (row) {
      this.$router.push({
        name: 'batchDetails',
        query: {name: row.name},
        params: {batchname: row.batchName}
      })
    },
    handleVice (row) {
      this.$router.push({
        name: 'ManageVice123',
        params: {batchname: row.batchName}
      })
    },
    writeExamManageTable () {

    }
  },
  created () {
    this.getExamManageTable()
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
h1 {
    display: flex;          /* 启用 flexbox 布局 */
    align-items: center;    /* 垂直居中子元素 */
    flex-direction: row;    /* 子元素横向排列，默认就是 row，也可省略这一行 */
    gap: 10px;              /* 子元素之间的间隔 */
}
.card {
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
/* 增加外边距给标签 */
.form_text{
    font-weight: 400;
    font-size: 12px;
    color: #00000066;
    line-height: 20px;
    margin-left: 130px;
    margin-top: 30px;
}
.dialog-footer{
    text-align: center;
}
/* 添加你的样式 */
</style>
