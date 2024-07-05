<template>
    <div>
        <h1>
            <i class="el-icon-back"></i>|
            <div class="title_1">监考安排表/</div>
            <div class="title_2">监考详细名单</div>
        </h1>
        <el-card class="card">
            <el-row>
                <el-col span="2"><el-button class="line1-1" type="primary">导入监考信息</el-button></el-col>
                <el-col span="2" offset="1"><el-button class="line1-2" type="primary" plain>数据导出</el-button></el-col>
                <el-col span="4" offset="10"><el-input class="line1-3" v-model="input" placeholder="请输入监考名称关键词查询"></el-input></el-col>
                <el-col span="2" offset="1"><el-button class="line1-4" type="primary">查询</el-button></el-col>
                <el-col span="2" offset="0"><el-button class="line1-5" type="primary" plain>重置</el-button></el-col>
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
                    width="119">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="性别"
                    width="80"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="工号"
                    width="140">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="所在单位"
                    width="167">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="身份证号"
                    width="207">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="移动电话"
                    width="140">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="监考职责"
                    width="95">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="监考场次"
                    width="98">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="考场名称"
                    width="128">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="监考时间"
                    width="300">
                </el-table-column>
            </el-table>
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
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
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
.line1-1,  .line1-4{
    width: 136px;
    background: #166AFF;
    border-radius: 3px;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
}
.line1-2,.line1-5{
    border: 1px solid #166AFF;
    border-radius: 3px;
    font-weight: 400;
    font-size: 14px;
    color: #166AFF;
    text-align: center;
    background-color: #FFFFFF;
}
.line1-3{
    width: 224px;
    height: 36px;
    background: #ffffffe6;
    border: 1px solid #DCDCDC;
    border-radius: 3px;
}
.line1-4{
    width: 74px;
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
