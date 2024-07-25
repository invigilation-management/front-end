<template>
    <div>
        <h1>
            <i class="el-icon-back"></i>|
            <span class="title_1">监考安排表/</span>
            <span class="title_2">监考详细名单</span>
        </h1>
        <el-card class="card">
            <el-row :gutter="10">
                <el-col :span="6"><el-input v-model="input" placeholder="请输入监考名称关键词查询"></el-input></el-col>
                <el-col :span="4">
                    <el-button class="blue" type="primary">查询</el-button>
                    <el-button type="primary" plain class="white">重置</el-button>
                </el-col>
                <el-col :span="14">
                <el-button style="float: right" type="primary" plain class="white" @click="exportData">数据导出</el-button>
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
                            prop="name"
                            label="姓名"
                            width="129">
                            <template slot-scope="scope">
                                <span class="teamName">{{scope.row.trueFacultyName}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="status"
                            label="性别"
                            width="90"
                            show-overflow-tooltip>
                            <template slot-scope="scope">
                                <span class="teamName">{{scope.row.gender}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="num"
                            label="工号"
                            width="150">
                            <template slot-scope="scope">
                                <span class="teamName">{{scope.row.trueFacultyId}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="partment"
                            label="所在单位"
                            width="177">
                            <template slot-scope="scope">
                                <span class="teamName">{{scope.row.college}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="tele"
                            label="移动电话"
                            width="150">
                            <template slot-scope="scope">
                                <span class="teamName">{{scope.row.tele}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="confirmOrNot"
                            label="是否确认"
                            width="150">
                            <template slot-scope="scope">
                                <span class="teamName">{{scope.row.confirmOrNot}}</span>
                            </template>
                        </el-table-column>
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
                        prop="name"
                        label="姓名"
                        width="129">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.trueFacultyName}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="性别"
                        width="90"
                        show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.gender}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="num"
                        label="工号"
                        width="150">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.trueFacultyId}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="partment"
                        label="所在单位"
                        width="177">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.college}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="tele"
                        label="移动电话"
                        width="150">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.tele}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="confirmOrNot"
                        label="是否确认"
                        width="150">
                    <template slot-scope="scope">
                        <span class="teamName">{{scope.row.confirmOrNot}}</span>
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
        <!--        <router-link to="details">details</router-link>-->
        <!--        <router-view></router-view>-->
        <!--        &lt;!&ndash; 添加你的查看名单内容 &ndash;&gt;-->
        <!--        上面是加的页面内跳转的内容，我在写vue组件是注释掉，后续调试时可以直接回复，目测没有冲突————侯世岭-->
    </div>
</template>

<script>
import {toDetailConfirm} from '../../api/user'
import * as XLSX from 'xlsx'

export default {
  name: 'NotationVice',
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
    exportData () {
      // const data = this.selectedIds.map(index => this.tableData[index])
      const data = this.selectedIds
      const worksheet = XLSX.utils.json_to_sheet(data)
      const workbook = XLSX.utils.book_new()
      this.dialogTableVisible = true
      XLSX.utils.book_append_sheet(workbook, worksheet, '监考详细名单')
      XLSX.writeFile(workbook, '监考详细名单.xlsx')
    },
    handleSizeChange (value) {
      this.pagesize = value
      this.show()
    },
    handleCurrentChange (value) {
      this.pagenum = value
      this.show()
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
      toDetailConfirm(this.batchname1, this.pagesize, this.pagenum).then(response => {
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
