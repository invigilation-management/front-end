<template>
    <div>
        <h1>
            <i class="el-icon-back"></i>|
            <div class="title_2">监考通知确认单
            </div>
        </h1>
        <el-card class="card">
            <el-row :gutter="10">
                <el-col :span="9">
                    <el-button type="primary" plain class="white" icon="el-icon-upload" @click="exportData()">数据导出</el-button>
                    <el-dialog title="导出数据" :visible.sync="dialogTableVisible">
                        <el-table :data="selectedIds"><el-table-column
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
                                label="确认情况"
                                width="137">
                                <template slot-scope="scope">
                                    <span class="teamName">{{scope.row.alreadyConfirmNum}}/{{scope.row.expectNum}}</span>
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
                                    <el-button type="text" @click='handleGoToVice(scope.row)' size="small">查看名单</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-dialog>
                </el-col>
                <el-col :span="6" :offset="5" ><el-input v-model="input" placeholder="请输入监考名称关键词查询"></el-input></el-col>
                <el-col :span="4">
                    <el-button class="blue" type="primary" icon="el-icon-search" @click="select">查询</el-button>
                    <el-button type="primary" plain class="white" icon="el-icon-refresh-left" @click="reset">重置</el-button>
                </el-col>
            </el-row>
            <el-table
                :header-row-style="{ backgroundColor: '#F3F3F3' }"
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%;margin-top: 10px;margin-right:3px"
                @selection-change="handleSelectionChange">
                <el-table-column
                    type="selection"
                    width="75">
                </el-table-column>
                <el-table-column
                    label="序号"
                    width="80">
                    <template slot-scope="scope">
                        0{{scope.$index+1}}
                    </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="监考名称"
                    width="170">
                    <template v-slot="scope">
                        <el-button type="text" size="small" @click="handleEdit(scope.row)">{{
                                scope.row.batchName
                            }}
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="确认情况"
                    width="137">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.alreadyConfirmNum}}/{{scope.row.expectNum}}</span>
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
                        <el-button type="text" @click='handleGoToVice(scope.row)' size="small">查看名单</el-button>
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
import {noticeConfirmTable, getuserid, noticeConfirmSelect} from '../../api/user'
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
      input: '',
      dialogTableVisible: false,
      selectedIds: [],
      dialogVisibleFind: false,
      dialogVisible_ack: false,
      formLabelWidth: '120px',
      bigformLabelHeight: '158px',
      form: {
        name: '',
        detail: '',
        begin_time: '',
        end_time: '',
        create_time: '',
        thisstatus: ''
      },
      tableData: []
    }
  },
  methods: {
    exportData () {
      // const data = this.selectedIds.map(index => this.tableData[index])
      const data = this.selectedIds
      const worksheet = XLSX.utils.json_to_sheet(data)
      const workbook = XLSX.utils.book_new()
      this.dialogTableVisible = true
      XLSX.utils.book_append_sheet(workbook, worksheet, '通知单')
      XLSX.writeFile(workbook, '通知单.xlsx')
    },
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
        noticeConfirmSelect(this.input, this.pagesize, this.pagenum).then(response => {
          this.tableData = response.data.records
          this.total = response.data.total
        })
      }
    },
    reset () {
      this.getNoticeConfirmTable()
      this.input = null
    },
    getNoticeConfirmTable () {
      getuserid().then(response => {
        const userId = response.data.userId
        noticeConfirmTable(userId, this.pagesize, this.pagenum).then(response => {
          this.tableData = response.data.records
          this.total = response.data.total
        }).catch(error => {
          console.error('Error fetching approval table:', error)
        })
      }).catch(error => {
        console.error('Error fetching userId:', error)
      })
    },
    handleSelectionChange (val) {
      this.selectedIds = val
    },
    handleEdit (row) {
      this.$router.push({
        name: 'batchDetails',
        query: {name: row.name},
        params: {batchname: row.batchName}
      })
    },
    handleGoToVice (row) {
      this.$router.push({
        name: 'NotationVice',
        params: {batchname: row.batchName}
      })
    }
  },
  created () {
    this.getNoticeConfirmTable()
  }
}
</script>

<style scoped>
.title_2 {
    color: #000000e6;
    font-size: 20px;
    font-family: PingFangSC;
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
.card {
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
