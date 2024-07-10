<template>
    <div>
        <span class="title">监考名单</span>
        <div class="card">
            <el-card>
                <el-row :gutter="10">
                            <el-row :gutter="10">
                                <el-col :span="17">
                                    <el-button size="small" type="primary" icon="el-icon-search">快速找人</el-button>
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
                                                    label="监考名称">
                                                    <template v-slot="scope">
                                                        <el-button
                                                            size="mini"
                                                            type="text"
                                                            @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    prop="name"
                                                    label="监考人数">
                                                </el-table-column>
                                                <el-table-column
                                                    prop="address"
                                                    label="报名开始时间" width="180">
                                                    <template slot-scope="scope">
                                                        <el-button
                                                            size="mini"
                                                            type="text"
                                                            @click="handleEdit(scope.$index, scope.row)">2023年A楼2023监考报名</el-button>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    prop="address"
                                                    label="报名结束时间">
                                                </el-table-column>
                                                <el-table-column
                                                    prop="address"
                                                    label="创建时间">
                                                </el-table-column>
                                                <el-table-column
                                                    prop="address"
                                                    label="批次状态">
                                                </el-table-column>
                                                <el-table-column
                                                    prop="address"
                                                    label="操作" width="180">
                                                    <template slot-scope="scope">
                                                        <el-button
                                                            size="mini"
                                                            type="text"
                                                            @click="handleEdit(scope.$index, scope.row)">查看</el-button>
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
                                        <el-button size="small" type="primary" @click="handleSearch">查询</el-button>
                                        <el-button size="small" @click="handleReset">重置</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-table
                                :data="filteredData"
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
                                            @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="监考人数">
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="报名开始时间" width="180">
                                    <template slot-scope="scope">
                                        <el-button
                                            size="mini"
                                            type="text"
                                            @click="handleEdit(scope.$index, scope.row)">2023年A楼2023监考报名</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="报名结束时间">
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="创建时间">
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="批次状态">
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="操作" width="180">
                                    <template slot-scope="scope">
                                        <el-button
                                            size="mini"
                                            type="text"
                                            @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                                background
                                layout="total, prev, pager, next"
                                :total="1000">
                            </el-pagination>
                </el-row>
            </el-card>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ExamList',
  data () {
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
      activeName: 'Batch',
      searchQuery: '',
      filteredData: []
    }
  },
  methods: {
    fetchItems () {
      this.items = this.$data.tableData
      this.filteredData = this.items
    },
    handleSearch () {
      console.log(this.searchQuery)
      console.log(this.items)
      if (this.searchQuery.trim()) {
        this.filteredData = this.items.filter(item =>
          item.name.includes(this.searchQuery)
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
    handleEdit (row) {
      this.$router.push({
        name: 'DetailList',
        query: {name: row.name}
      })
    }
  },
  mounted () {
    this.fetchItems()
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
