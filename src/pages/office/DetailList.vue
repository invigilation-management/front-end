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
                        <el-col :span="17">
                            <el-button size="small" type="primary" icon="el-icon-user-solid" @click="invitation= true">邀约</el-button>
                            <!-- 以下是对话弹窗部分-->
                            <!-- 以下是对话弹窗部分-->
                            <el-dialog title="邀约" :visible.sync="invitation">
                                <hr class="card-divider">
                                <div style="background-color: #E4EEFF;margin: 20px;height: 50px;text-align: center">
                                    <i class="el-icon-warning-outline"></i>
                                    通过邀约渠道，不受监考批次时间限制!
                                </div>
                                <div style="display: flex">
                                    <div style="margin-top: 15px;margin-right: 50px">监考批次</div>
                                    <el-input v-model="input_exam_num" placeholder="请选择监考批次"></el-input>
                                </div>
                                <div style="display: flex;margin-top: 20px">
                                    <div style="text-align: left;margin-right: 50px">选择方式</div>
                                    <el-radio v-model="invite_way" label="self">自走流程</el-radio>
                                    <el-radio v-model="invite_way" label="help">帮助报名</el-radio>
                                </div>
                                <div>
                                    <el-input placeholder="请输入姓名/工号模糊查询" style="margin: 10px"></el-input>
                                </div>
                                <div style="margin: 20px;background-color: #F3F3F3 ;height: 160px;text-align: left">
                                    <br><br>&nbsp;&nbsp; &nbsp;姓名：<br><br>
                                    &nbsp; &nbsp; 工号：<br><br>
                                    &nbsp; &nbsp; 学院：<br><br>
                                </div>
                                <hr class="card-divider">
                                <div style="display: flex;margin-top: 30px">
                                    <div v-if="invite_way === 'self'">
                                        <el-button type="primary" @click="invitation= false" style="width: 125px;margin-left: 230px">提交</el-button>
                                    </div>
                                    <div v-if="invite_way === 'help'">
                                        <el-button type="primary" @click="invitation= false" style="width: 125px;margin-left: 230px">前往补充信息</el-button>
                                    </div>
                                    <el-button type="info" @click="invitation= false" style="width: 125px;margin-left: 70px">取消</el-button>
                                </div>
                            </el-dialog>
                            <!-- 以上是对话弹窗部分-->
                            <!-- 以上是对话弹窗部分-->
                            <el-button size="small" type="inform" plain class="white" @click="dialogTableVisible = true">数据导出</el-button>
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
                        <el-col :span="4">
                            <el-input size="small" v-model="searchQuery" placeholder="请输入姓名/工号模糊查询"></el-input>
                        </el-col>
                        <el-col :span="3">
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
                                        @click="handleEdit(scope.$index, scope.row)">移除监考</el-button>
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
import {getuserid, ExamListDetailsTable} from '../../api/office'

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
      if (this.searchQuery.trim()) {
        this.filteredData = this.items.filter(item =>
          item.name.includes(this.searchQuery) || (item.num.includes(this.searchQuery))
        )
      } else {
        this.filteredData = this.items
      }
    },
    handleReset () {
      this.searchQuery = ''
      this.filteredData = this.items
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
