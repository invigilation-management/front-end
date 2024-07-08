<template>
    <div>
        <h1>
            <i class="el-icon-back"></i>|
            <span class="title_1">监考安排表/</span>
            <span class="title_2">监考详细名单</span>
        </h1>
        <el-card class="card">
            <el-row :gutter="10">
                <el-col :span="6">
                    <el-button class="blue" type="primary">导入监考信息</el-button>
                    <el-button type="primary" plain class="white" @click="dialogTableVisible = true">数据导出</el-button>

                    <el-dialog title="导出数据" :visible.sync="dialogTableVisible">
                        <el-table :data="selectedIds.map(index => tableData[index])"><el-table-column
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
                            </el-table-column>
                            <el-table-column
                                prop="status"
                                label="性别"
                                width="90"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                prop="num"
                                label="工号"
                                width="150">
                            </el-table-column>
                            <el-table-column
                                prop="partment"
                                label="所在单位"
                                width="177">
                            </el-table-column>
                            <el-table-column
                                prop="Id"
                                label="身份证号"
                                width="217">
                            </el-table-column>
                            <el-table-column
                                prop="tele"
                                label="移动电话"
                                width="150">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="监考职责"
                                width="105">
                            </el-table-column>
                            <el-table-column
                                prop="count"
                                label="监考场次"
                                width="108">
                            </el-table-column>
                            <el-table-column
                                prop="room"
                                label="考场名称"
                                width="148">
                            </el-table-column>
                            <el-table-column
                                prop="time"
                                label="监考时间"
                                width="310">
                            </el-table-column>
                        </el-table>
                    </el-dialog>
                </el-col>
                <el-col :span="6" :offset="8"><el-input v-model="input" placeholder="请输入监考名称关键词查询"></el-input></el-col>
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
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="性别"
                    width="90"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="num"
                    label="工号"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="partment"
                    label="所在单位"
                    width="177">
                </el-table-column>
                <el-table-column
                    prop="Id"
                    label="身份证号"
                    width="217">
                </el-table-column>
                <el-table-column
                    prop="tele"
                    label="移动电话"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="监考职责"
                    width="105">
                </el-table-column>
                <el-table-column
                    prop="count"
                    label="监考场次"
                    width="108">
                </el-table-column>
                <el-table-column
                    prop="room"
                    label="考场名称"
                    width="148">
                </el-table-column>
                <el-table-column
                    prop="time"
                    label="监考时间"
                    width="310">
                </el-table-column>
            </el-table>
            <el-pagination
                small
                layout="prev, pager, next"
                :total="50">
            </el-pagination>
        </el-card>
<!--        <router-link to="details">details</router-link>-->
<!--        <router-view></router-view>-->
<!--        &lt;!&ndash; 添加你的查看名单内容 &ndash;&gt;-->
<!--        上面是加的页面内跳转的内容，我在写vue组件是注释掉，后续调试时可以直接回复，目测没有冲突————侯世岭-->
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
      tableData: [ {
        name: '张三',
        status: '男',
        num: '1001',
        partment: '计算机学院',
        Id: '350524000000000001',
        tele: '17894562351',
        time: '2023-09-12 10:30:00',
        count: '2',
        room: '软件北小楼204'
      }, {
        name: '张三',
        status: '男',
        num: '1001',
        partment: '计算机学院',
        Id: '350524000000000001',
        tele: '17894562351',
        time: '2023-09-12 10:30:00',
        count: '2',
        room: '软件北小楼204'
      }, {
        name: '张三',
        status: '男',
        num: '1001',
        partment: '计算机学院',
        Id: '350524000000000001',
        tele: '17894562351',
        time: '2023-09-12 10:30:00',
        count: '2',
        room: '软件北小楼204'
      }, {
        name: '张三',
        status: '男',
        num: '1001',
        partment: '计算机学院',
        Id: '350524000000000001',
        tele: '17894562351',
        time: '2023-09-12 10:30:00',
        count: '2',
        room: '软件北小楼204'
      }]
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
    }
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
