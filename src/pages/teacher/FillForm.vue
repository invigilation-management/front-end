<template>
    <div>
        <h1>
            <i class="el-icon"></i>|
            <div class="title_2">监考报名
            </div>
        </h1>
        <el-card class="card">
            <el-row :gutter="10">
                <el-col :span="6" :offset="14" ><el-input v-model="searchQuery" placeholder="请输入监考名称关键词查询"></el-input></el-col>
                <el-col :span="4">
                    <el-button type="primary" class="blue" @click="handleSearch">查询</el-button>
                    <el-button type="primary" plain class="white" @click="handleReset">重置</el-button>
                </el-col>
            </el-row>
            <el-table
                :header-row-style="{ backgroundColor: '#F3F3F3' }"
                ref="multipleTable"
                :data="FillFormData"
                tooltip-effect="dark"
                style="width: 100%;margin-top: 10px;margin-right:3px"
                @selection-change="handleSelectionChange">
                <el-table-column
                    type="selection"
                    width="75">
                </el-table-column>
                <el-table-column
                    label="序号"
                    width="130">
                    <template slot-scope="scope">
                        {{scope.$index+1}}
                    </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="报名批次"
                    width="330">
                    <template v-slot="scope">
                        <el-button
                            size="mini"
                            type="text"
                            @click="handleBatchDetail(scope.row)">{{scope.row.batchName}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="startTime"
                    label="报名开始时间"
                    width="285">
                    <template slot-scope="scope">
                        <span class="normal">{{ scope.row.batchStartTime }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="endTime"
                    label="报名结束时间"
                    width="285">
                    <template slot-scope="scope">
                        <span class="normal">{{ scope.row.batchEndTime }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="createTime"
                    label="创建时间"
                    width="285">
                    <template slot-scope="scope">
                        <span class="normal">{{ scope.row.batchCreatedTime }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="批次状态"
                    width="165">
                    <template slot-scope="scope">
                        <span class="normal">{{ scope.row.alreadyPassedNum }}/{{ scope.row.expectNum }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="210">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="goToSignUp(scope.row)">监考报名</el-button>
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
        </el-card>
    </div>
</template>

<script>

import {getuserid, FillFormTable, selectFillFormTable} from '../../api/teacher'
export default {
  name: 'SignUp',
  data () {
    return {
      input: '',
      tableData: [
        {
          name: '2023年A卷2023监考报名',
          status: '2/20',
          startTime: '2023-09-12 10:30:00',
          endTime: '2023-09-12 10:30:00',
          createTime: '2023-09-12 10:30:00'
        },
        {
          name: '2023年A卷2023监考报名',
          status: '2/20',
          startTime: '2023-09-12 10:30:00',
          endTime: '2023-09-12 10:30:00',
          createTime: '2023-09-12 10:30:00'
        },
        {
          name: '2023年A卷2023监考报名',
          status: '2/20',
          startTime: '2023-09-12 10:30:00',
          endTime: '2023-09-12 10:30:00',
          createTime: '2023-09-12 10:30:00'
        },
        {
          name: '2023年A卷2023监考报名',
          status: '2/20',
          startTime: '2023-09-12 10:30:00',
          endTime: '2023-09-12 10:30:00',
          createTime: '2023-09-12 10:30:00'
        }, {
          name: '2023年A卷2023监考报名',
          status: '2/20',
          startTime: '2023-09-12 10:30:00',
          endTime: '2023-09-12 10:30:00',
          createTime: '2023-09-12 10:30:00'
        }, {
          name: '2023年A卷2023监考报名',
          status: '2/20',
          startTime: '2023-09-12 10:30:00',
          endTime: '2023-09-12 10:30:00',
          createTime: '2023-09-12 10:30:00'
        }, {
          name: '2023年A卷2023监考报名',
          status: '2/20',
          startTime: '2023-09-12 10:30:00',
          endTime: '2023-09-12 10:30:00',
          createTime: '2023-09-12 10:30:00'
        }, {
          name: '2023年A卷2023监考报名',
          status: '2/20',
          startTime: '2023-09-12 10:30:00',
          endTime: '2023-09-12 10:30:00',
          createTime: '2023-09-12 10:30:00'
        }, {
          name: '2023年A卷2023监考报名',
          status: '2/20',
          startTime: '2023-09-12 10:30:00',
          endTime: '2023-09-12 10:30:00',
          createTime: '2023-09-12 10:30:00'
        }, {
          name: '2023年A卷2023监考报名',
          status: '2/20',
          startTime: '2023-09-12 10:30:00',
          endTime: '2023-09-12 10:30:00',
          createTime: '2023-09-12 10:30:00'
        }, {
          name: '2023年A卷2023监考报名',
          status: '2/20',
          startTime: '2023-09-12 10:30:00',
          endTime: '2023-09-12 10:30:00',
          createTime: '2023-09-12 10:30:00'
        }, {
          name: '2023年A卷2023监考报名',
          status: '2/20',
          startTime: '2023-09-12 10:30:00',
          endTime: '2023-09-12 10:30:00',
          createTime: '2023-09-12 10:30:00'
        }, {
          name: '2023年A卷2023监考报名',
          status: '2/20',
          startTime: '2023-09-12 10:30:00',
          endTime: '2023-09-12 10:30:00',
          createTime: '2023-09-12 10:30:00'
        }

        // Add more data objects as required
      ],
      searchQuery: '',
      FillFormData: '',
      pageSize: 5,
      pageNo: 1,
      total: 0
    }
  },
  methods: {
    handleSelectionChange (val) {
      console.log(val)
    },
    handleEdit (row) {
      this.$router.push({
        name: 'BatchDetails',
        query: {name: row.name}
      })
    },
    goToSignUp (row) {
      this.$router.push({name: 'SignUp',
        params: {batchname: row.batchName}})
    },
    getFillFormTable () {
      getuserid().then(res => {
        const userId = res.data.userId
        console.log('userId:', userId)
        FillFormTable(userId, this.pageSize, this.pageNo).then(res => {
          this.FillFormData = res.data.records
          this.total = res.data.total
          console.info('开始')
          console.info(this.FillFormData)
          console.info('结束')
        })
      })
    },
    handleSizeChange (value) {
      this.pageSize = value
      this.getFillFormTable()
    },
    handleCurrentChange (value) {
      this.pageNo = value
      this.getFillFormTable()
    },
    handleSearch () {
      if (this.searchQuery != null) {
        selectFillFormTable(this.searchQuery, this.pageSize, this.pageNo).then(res => {
          this.FillFormData = res.data.records
        })
      }
    },
    handleReset () {
      this.searchQuery = ''
      this.getFillFormTable()
    },
    handleBatchDetail (row) {
      this.$router.push({
        name: 'BatchDetails',
        params: {batchname: row.batchName}
      })
    }
  },
  created () {
    this.getFillFormTable()
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
/deep/ .el-table__cell{
    color: #000000e6;
    text-align: left;
}
/deep/.el-table th.el-table__cell>.cell{}
/* 添加你的样式 */
</style>
