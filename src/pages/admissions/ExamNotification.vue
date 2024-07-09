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
                    <el-button type="primary" class="blue" @click="dialogVisibleFind= true">快速找人</el-button>
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
                    <el-button type="primary" plain class="white">创建批次</el-button>
                    <el-button type="primary" plain class="white" @click="dialogTableVisible = true">数据导出</el-button>
                    <el-dialog title="导出数据" :visible.sync="dialogTableVisible">
                        <el-table :data="selectedIds.map(index => tableData[index])"><el-table-column
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
                                            scope.row.name
                                        }}
                                    </el-button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="status"
                                label="报名情况"
                                width="137">
                            </el-table-column>
                            <el-table-column
                                prop="startTime"
                                label="时间"
                                width="255">
                            </el-table-column>
                            <el-table-column
                                prop="endTime"
                                label="报名结束时间"
                                width="255">
                            </el-table-column>
                            <el-table-column
                                prop="createTime"
                                label="创建时间"
                                width="255">
                            </el-table-column>
                            <el-table-column
                                prop="status"
                                label="批次状态"
                                width="155">
                            </el-table-column>
                            <el-table-column
                                label="操作"
                                width="200">
                                <template v-slot="scope">
                                    <el-button type="text" @click="handleGoToVice" size="small">查看名单</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-dialog>
                </el-col>
                <el-col :span="6" :offset="5" ><el-input v-model="input" placeholder="请输入监考名称关键词查询"></el-input></el-col>
                <el-col :span="4">
                    <el-button class="blue" type="primary">查询</el-button>
                    <el-button type="primary" plain class="white">重置</el-button>
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
                                scope.row.name
                            }}
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="报名情况"
                    width="137">
                </el-table-column>
                <el-table-column
                    prop="startTime"
                    label="时间"
                    width="255">
                </el-table-column>
                <el-table-column
                    prop="endTime"
                    label="报名结束时间"
                    width="255">
                </el-table-column>
                <el-table-column
                    prop="createTime"
                    label="创建时间"
                    width="255">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="批次状态"
                    width="155">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="200">
                    <template slot-scope="scope">
                        <el-button type="text" @click='handleGoToVice' size="small">查看名单</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                small
                layout="prev, pager, next"
                :total="50">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'ViewList',
  data () {
    return {
      input: '',
      dialogTableVisible: false,
      selectedIds: [],
      dialogVisibleFind: false,
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
      this.selectedIds = val.map(item => this.tableData.indexOf(item))
    },
    handleEdit (row) {
      this.$router.push({
        name: 'batchDetails',
        query: {name: row.name}
      })
    },
    handleGoToVice (row) {
      this.$router.push({
        name: 'NotationVice',
        query: {name: row.name}
      })
    }
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
