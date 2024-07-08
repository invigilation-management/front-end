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
                            <el-button size="small" type="primary" icon="el-icon-search">快速找人</el-button>
                            <el-button size="small" type="inform">数据导出</el-button>
                        </el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="input" placeholder="请输入监考名称关键词查询"></el-input>
                        </el-col>
                        <el-col :span="3">
                            <div class="buttonright">
                                <el-button size="small" type="primary">查询</el-button>
                                <el-button size="small" type="inform">重置</el-button>
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
                                label="身份证号">
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
  name: 'DetailList',
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
      value: '',
      input: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      activeName: 'Batch'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
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
