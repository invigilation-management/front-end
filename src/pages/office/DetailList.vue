<template>
    <div>
        <div class="rowahead">
            <i class="el-icon-back"></i>
            <div class="title">
                <div class="ahead1">
                    |  监考名单/
                </div>
                监考详细名单
            </div>
        </div>
        <div class="card">
            <el-card>
                <el-row :gutter="10">
                    <el-row :gutter="10">
                        <el-col :span="15">
                            <el-button size="small" type="inform" plain class="white" icon="el-icon-upload" @click="dialogTableVisible = true">数据导出</el-button>
                            <el-dialog title="导出数据" :visible.sync="dialogTableVisible">
                                <el-table :data="selectedIds.map(index => filteredData[index])">
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
                                        label="姓名">
                                        <template slot-scope="scope">
                                            <span class="teamName">{{scope.row.date}}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                        prop="name"
                                        label="工号">
                                    </el-table-column>
                                    <el-table-column
                                        prop="address"
                                        label="所在单位" width="180">
                                        <template slot-scope="scope">
                                            <el-button
                                                size="mini"
                                                type="text"
                                                @click="handleEdit(scope.$index, scope.row)">2023年A楼2023监考报名</el-button>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                        prop="address"
                                        label="移动电话">
                                    </el-table-column>
                                    <el-table-column
                                        prop="address"
                                        label="来源">
                                    </el-table-column>
                                    <el-table-column
                                        prop="address"
                                        label="操作" width="180">
                                        <template slot-scope="scope">
                                            <el-button
                                                size="mini"
                                                type="text"
                                                @click="handleEdit(scope.$index, scope.row)">移除监考</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </el-dialog>
                        </el-col>
                        <el-col :span="5">
                            <el-input size="small" v-model="searchQuery" placeholder="请输入姓名/工号模糊查询"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <div class="buttonright">
                                <el-button size="small" type="primary" @click="handleSearch">查询</el-button>
                                <el-button size="small" @click="handleReset">重置</el-button>
                            </div>
                        </el-col>
                    </el-row>
                    <el-table
                            :data="DetailListTable"
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
                                prop="name"
                                label="姓名">
                            <template slot-scope="scope">
                                <span class="normal">{{scope.row.trueFacultyName}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="num"
                                label="工号">
                            <template slot-scope="scope">
                                <span class="normal">{{scope.row.trueFacultyId}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="dept"
                                label="所在单位">
                            <template slot-scope="scope">
                                <span class="normal">{{scope.row.college}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="tele"
                                label="移动电话">
                            <template slot-scope="scope">
                                <span class="normal">{{scope.row.tele}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="source"
                                label="来源">
                            <template slot-scope="scope">
                                        <span class="normal">
                                            <div  v-if="scope.row.true_faculty_id==scope.row.faculty_faculty_id">自主报名</div>
                                            <div  v-else>被报名</div>
                                        </span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="operation"
                                label="操作" width="180">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="text"
                                        @click="handleEdit( scope.row)">移除监考</el-button>
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
import {getuserid, ExamListDetailsTable, selectExamListDetailsByName, submitDisagree} from '../../api/office'

export default {
  name: 'DetailList',
  props: ['batchname'],
  data: function () {
    return {
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
      batchName: '',
      value: '',
      input: '',
      tableData: [{
        name: '王小一',
        num: '1001',
        dept: '软件学院',
        id_card: '610526',
        tele: '110',
        source: '自主报名'
      }, {
        name: '王小二',
        num: '1002',
        dept: '软件学院',
        id_card: '610526',
        tele: '110',
        source: '自主报名'
      }, {
        name: '王小三',
        num: '1003',
        dept: '软件学院',
        id_card: '610526',
        tele: '110',
        source: '自主报名'
      }, {
        name: '王小四',
        num: '1004',
        dept: '软件学院',
        id_card: '610526',
        tele: '110',
        source: '自主报名'
      }],
      DetailListTable: [],
      activeName: 'Batch',
      invitation: false,
      invite_way: 'self',
      input_exam_num: '',
      selectedIds: [],
      dialogTableVisible: false,
      searchQuery: '',
      filteredData: [],
      total: 0,
      pageNo: 1,
      pageSize: 5
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    fetchItems () {
      this.items = this.$data.tableData
      this.filteredData = this.items
    },
    handleSearch () {
      if (this.searchQuery != null) {
        getuserid().then(res => {
          const userId = res.data.userId
          selectExamListDetailsByName(userId, this.$props.batchname, this.searchQuery, this.pageSize, this.pageNo).then(res => {
            this.DetailListTable = res.data.records
            this.total = res.data.total
          })
        })
      }
    },
    handleReset () {
      this.searchQuery = ''
      this.getDetailListTable()
    },
    handleSelectionChange (val) {
      this.selectedIds = val.map(item => this.filteredData.indexOf(item))
    },
    getDetailListTable () {
      console.info(this.batchname)
      getuserid().then(res => {
        const userId = res.data.userId
        console.log('userId:', userId)
        ExamListDetailsTable(userId, this.batchname, this.pageSize, this.pageNo).then(res => {
          this.DetailListTable = res.data.records
          this.total = res.data.total
          console.info('121221314134134134134')
          console.info(this.DetailListTable)
        })
      })
    },
    handleEdit (row) {
      this.$confirm('此操作将在该批次移除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        getuserid().then(res => {
          const userId = res.data.userId
          submitDisagree(userId, row.trueFacultyId, this.$props.batchname).then(res => {
            if (res.data === true) {
              this.$message({
                message: '移除成功',
                type: 'success'
              })
            } else if (res.data === false) {
              this.$message({
                message: '移除失败，请稍后重试',
                type: 'warning'
              })
            }
          })
          console.info(row)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消移除'
        })
      })
    }
  },
  mounted () {
    this.fetchItems()
  },
  created () {
    this.getDetailListTable()
    this.batchName = this.batchname
  }
}
</script>

<style scoped>
.title{
    margin-left: 10px;
    display: flex;
    align-items: center; /* 垂直居中对齐 */
    color: #000000e6;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0;
    paragraph-spacing: 0;
    text-align: left;
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
.rowahead {
    display: flex;
    align-items: center; /* 垂直居中对齐 */
    margin-top: 20px;
    margin-left: 20px;
    font-size: 25px;
    width: 257px;
    height: 64px;
}
.ahead1{
    color: #00000066;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0;
    paragraph-spacing: 0;
    text-align: left;
}
</style>
