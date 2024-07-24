<template>
<div>
    <el-row :gutter="10">
        <el-col :span="12">
            <el-button size="small" type="primary" icon="el-icon-s-custom">邀约</el-button>
            <el-button size="small" type="inform">数据导出</el-button>
        </el-col>
        <el-col :span="4">
            <el-select size="small" v-model="value" placeholder="请选择监考批次">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-col>
        <el-col :span="5">
            <el-input size="small" v-model="input" placeholder="请输入报名人姓名/工号查询"></el-input>
        </el-col>
        <el-col :span="3">
            <div class="buttonright">
                <el-button size="small" type="primary">查询</el-button>
                <el-button size="small" type="inform">重置</el-button>
            </div>
        </el-col>
    </el-row>
    <el-table
        :data="agreeData"
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
            label="报名人">
        prop="name"
        <template slot-scope="scope">
            <span class="teamName">{{scope.row.date}}</span>
        </template>
    </el-table-column>
    <el-table-column
            prop="num"
            label="工号">
    </el-table-column>
    <el-table-column
            prop="batch"
            label="监考名称" width="180">
        <template v-slot="scope">
            <el-button type="text" size="small" @click="handleEdit(scope.row)">{{
                scope.row.name
                }}
            </el-button>
        </template>
    </el-table-column>
    <el-table-column
            label="材料" width="180">
        <template v-slot="scope">
            <el-button
                    size="mini"
                    type="text"
                    @click="handleSubmit(scope.row)">预览</el-button>
        </template>
    </el-table-column>
    <el-table-column
            label="操作" width="180">
        <template v-slot="scope">
            <el-button
                    size="mini"
                    type="text"
                    @click="handleAction(scope.$index, scope.row)">审批</el-button>
        </template>
    </el-table-column>
</el-table></div>
<!--  我觉得这个页面就是在Approval（报名审批）里面，没用，可以删了-->
</template>

<script>
export default {
  name: 'Waiting',
  methods: {
    handleEdit () {
      this.$router.push({
        name: 'batchDetails'
        // query: {name: row.name}
      })
    }
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
.buttonright{
    float: right;
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
