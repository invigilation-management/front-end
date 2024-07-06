<template>
    <div>
        <h1>
            <i class="el-icon"></i>|
            <div class="title_2">报名记录
            </div>
        </h1>
        <el-card class="card">
            <el-row gutter="20">
                <el-col span="12"><el-button class="line1-1" type="primary"></el-button></el-col>
                <!--                <el-col span="1" offset="0"><el-button class="line1-2" type="primary" plain>创建批次</el-button></el-col>-->
                <!--                <el-col span="8" offset="0"><el-button class="line1-2" type="primary" plain>数据导出</el-button></el-col>-->
                <el-col span="2" offset="6" ><el-input class="line1-3" v-model="input" placeholder="请输入监考名称关键词查询"></el-input></el-col>
                <el-col span="1" offset="1"><el-button class="line1-4" type="primary">查询</el-button></el-col>
                <el-col span="1" offset="" ><el-button class="line1-2" type="primary" plain>重置</el-button></el-col>
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
                        width="155">
                    <template slot-scope="scope">
                        0{{scope.$index+1}}
                    </template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="报名批次"
                        width="360">
                </el-table-column>
                <el-table-column
                        prop="startTime"
                        label="报名开始时间"
                        width="315">
                </el-table-column>
                <el-table-column
                        prop="endTime"
                        label="报名结束时间"
                        width="315">
                </el-table-column>
                <el-table-column
                        prop="createTime"
                        label="是否确认"
                        width="315">
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="225">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">查看名单</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'ExamFees',
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
      ]
    }
  },
  methods: {
    handleSelectionChange (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
.title_1 {
    color: #00000066;
    font-size: 20px;
    font-family: PingFangSC;
    font-weight: 500;
    line-height: 28px;
    text-align: left;
}
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
.line1-1{
    width: 104px;
    height: 36px;
    background: #166AFF;
    border-radius: 3px;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
    visibility: hidden;
}
.line1-4{
    width: 74px;
    height: 36px;
    background: #166AFF;
    border-radius: 3px;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
}
.line1-2, .line1-5 {
    border: 1px solid #166AFF;
    border-radius: 3px;
    font-weight: 400;
    font-size: 14px;
    color: #166AFF;
    text-align: center;
    background-color: #FFFFFF;
}
.line1-3 {
    width: 220px;
    height: 36px;
    background: #ffffffe6;
    border: 1px solid #DCDCDC;
    border-radius: 3px;
}
.card {
    margin-left: 20px;
    margin-right: 20px;
}
.el-col{
    margin-right: 10px;
}
.el-col{
    scroll-margin-left: 35px;
}
.el-row {
    margin-bottom: 20px;
}
.el-row:last-child {
    margin-bottom: 0;
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
