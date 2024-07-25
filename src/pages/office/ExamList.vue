<template>
    <div>
        <span class="title">监考名单</span>
        <div class="card">
            <el-card>
                <el-row :gutter="10">
                            <el-row :gutter="10">
                                <el-col :span="17">
                                    <el-button size="small" type="primary" icon="el-icon-search">快速找人</el-button>
                                    <el-button size="small" type="inform" plain class="white" icon="el-icon-upload" @click="exportData()">数据导出</el-button>
                                    <el-dialog title="导出数据" :visible.sync="dialogTableVisible">
                                            <el-table :data="selectedIds">
                                                <el-table-column
                                                    label="序号">
                                                    <template slot-scope="scope">
                                                        {{scope.$index+1}}
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    label="监考名称">
                                                    <template v-slot="scope">
                                                        <el-button
                                                            size="mini"
                                                            type="text"
                                                            @click="handleBatchDetail(scope.row)">{{scope.row.batchName}}</el-button>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    prop="name"
                                                    label="监考人数">
                                                    <template slot-scope="scope">
                                                        <span class="normal">{{ scope.row.alreadyPassedNum }}</span>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    prop="address"
                                                    label="报名开始时间" width="180">
                                                    <template slot-scope="scope">
                                                        <span class="normal">{{ scope.row.batchStartTime }}</span>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    prop="address"
                                                    label="报名结束时间">
                                                    <template slot-scope="scope">
                                                        <span class="normal">{{ scope.row.batchEndTime }}</span>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    prop="address"
                                                    label="创建时间">
                                                    <template slot-scope="scope">
                                                        <span class="normal">{{ scope.row.batchCreatedTime }}</span>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    prop="status"
                                                    label="批次状态">
                                                    <template slot-scope="scope">
                                        <span class="teamName">
                                            <div style="color: black" v-if="scope.row.batchStartTime>nowTime">未开始</div>
                                            <div style="color: red" v-else-if="scope.row.batchEndTime<nowTime">已结束</div>
                                            <div style="color: green" v-else>进行中</div>
                                        </span>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    prop="address"
                                                    label="操作" width="180">
                                                    <template slot-scope="scope">
                                                        <el-button
                                                            size="mini"
                                                            type="text"
                                                            @click="handleEdit(scope.row)">查看</el-button>
                                                    </template>
                                                </el-table-column>
                                        </el-table>
                                    </el-dialog>
                                </el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="searchQuery" placeholder="请输入监考名称关键词查询"></el-input>
                                </el-col>
                                <el-col :span="3">
                                    <div class="buttonright">
                                        <el-button size="small" type="primary" icon="el-icon-search" @click="handleSearch">查询</el-button>
                                        <el-button size="small" icon="el-icon-refresh-left" @click="handleReset">重置</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-table
                                :data="examListData"
                                style="width: 100%"
                                @selection-change="handleSelectionChange">
                                <el-table-column
                                    type="selection"
                                    width="55">
                                </el-table-column>
                                <el-table-column
                                    label="序号">
                                    <template slot-scope="scope">
                                        {{scope.$index+1}}
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="监考名称">
                                    <template v-slot="scope">
                                        <el-button
                                            size="mini"
                                            type="text"
                                            @click="handleBatchDetail(scope.row)">{{scope.row.batchName}}</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="监考人数">
                                    <template slot-scope="scope">
                                        <span class="normal">{{ scope.row.alreadyPassedNum }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="报名开始时间" width="180">
                                    <template slot-scope="scope">
                                        <span class="normal">{{ scope.row.batchStartTime }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="报名结束时间">
                                    <template slot-scope="scope">
                                        <span class="normal">{{ scope.row.batchEndTime }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="创建时间">
                                    <template slot-scope="scope">
                                        <span class="normal">{{ scope.row.batchCreatedTime }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="status"
                                    label="批次状态">
                                    <template slot-scope="scope">
                                        <span class="teamName">
                                            <div style="color: black" v-if="scope.row.batchStartTime>nowTime">未开始</div>
                                            <div style="color: red" v-else-if="scope.row.batchEndTime<nowTime">已结束</div>
                                            <div style="color: green" v-else>进行中</div>
                                        </span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="操作" width="180">
                                    <template slot-scope="scope">
                                        <el-button
                                            size="mini"
                                            type="text"
                                            @click="handleEdit(scope.row)">查看</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                    <el-pagination
                        style="margin-top: 20px"
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageNo"
                        :page-sizes="[5, 10, 20, 40]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                    </el-pagination>
                </el-row>
            </el-card>
        </div>
    </div>
</template>

<script>

import {ExamListTable, getuserid, selectExamListByName} from '../../api/office'
import moment from 'moment'
import * as XLSX from 'xlsx'
export default {
  name: 'ExamList',
  data () {
    return {
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
      selectedIds: [],
      dialogTableVisible: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小一',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小二',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小三',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小四',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      examListData: [],
      activeName: 'Batch',
      searchQuery: '',
      filteredData: [],
      total: 0,
      pageNo: 1,
      pageSize: 5
    }
  },
  methods: { exportData () {
    // const data = this.selectedIds.map(index => this.tableData[index])
    const data = this.selectedIds
    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new()
    this.dialogTableVisible = true
    XLSX.utils.book_append_sheet(workbook, worksheet, '监考名单')
    XLSX.writeFile(workbook, '监考名单.xlsx')
  },
  handleSelectionChange (val) {
    // this.selectedIds = val.map(item => this.tableData.indexOf(item))
    this.selectedIds = val
  },
  fetchItems () {
    this.items = this.$data.tableData
    this.filteredData = this.items
  },
  handleSearch () {
    if (this.searchQuery != null) {
      selectExamListByName(this.searchQuery).then(res => {
        this.examListData = res.data.records
      })
    }
  },
  handleReset () {
    this.searchQuery = ''
    this.getExamListTable()
  },
  handleEdit (row) {
    this.$router.push({
      name: 'DetailList',
      params: {batchname: row.batchName}
    })
  },
  getExamListTable () {
    getuserid().then(res => {
      const userId = res.data.userId
      console.log('userId:', userId)
      ExamListTable(userId, this.pageSize, this.pageNo).then(res => {
        this.examListData = res.data.records
        this.total = res.data.total
        console.info('开始')
        console.info(this.examListData)
        console.info('结束')
      })
    })
  },
  handleBatchDetail (row) {
    this.$router.push({
      name: 'BatchDetail',
      params: {batchname: row.batchName}
    })
  },
  handleSizeChange (value) {
    this.pageSize = value
    this.getExamListTable()
  },
  handleCurrentChange (value) {
    this.pageNo = value
    this.getExamListTable()
  }
  },
  mounted () {
    this.fetchItems()
  },
  created () {
    this.getExamListTable()
    console.info(this.nowTime)
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
.teamName{
    color: #166AFF;
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
