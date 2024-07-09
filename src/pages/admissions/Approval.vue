<template>
    <div>
        <span class="title">报名审批</span>
        <div class="card">
            <el-card>
                <el-row :gutter="10">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="待我审批" name="Batch">
                            <el-row :gutter="10">
                                <el-col :span="12">
                                    <el-button size="small" type="primary" icon="el-icon-s-custom">邀约</el-button>
<<<<<<< HEAD
                                    <el-button size="small" type="inform" plain class="white" @click="dialogTableVisible = true">数据导出</el-button>
=======
                                    <el-button size="small" type="inform" @click="dialogTableVisible = true">数据导出</el-button>

>>>>>>> af0c7ec70e33674f7641d11f9514cc2236235e04
                                        <el-dialog title="导出数据" :visible.sync="dialogTableVisible">
                                            <el-table :data="selectedIds.map(index => tableData[index])">
                                                <el-table-column
                                                    label="序号">
                                                    <template slot-scope="scope">
                                                        {{scope.$index+1}}
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    label="报名人">
                                                    <template slot-scope="scope">
                                                        <span class="teamName">{{scope.row.date}}</span>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    prop="name"
                                                    label="工号">
                                                </el-table-column>
                                                <el-table-column
                                                    prop="batch"
                                                    label="监考名称" width="180">
                                                    <template v-slot="scope">
                                                        <el-button type="text" size="small" @click="handleEdit(scope.row)">{{
                                                                scope.row.batch
                                                            }}
                                                        </el-button>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    prop="address"
                                                    label="意向监考校区">
                                                </el-table-column>
                                                <el-table-column
                                                    prop="address"
                                                    label="材料" width="180">
                                                    <template v-slot="scope">
                                                        <el-button
                                                            size="mini"
                                                            type="text"
                                                            @click="handlePreview(scope.row)">预览</el-button>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    prop="address"
                                                    label="操作" width="180">
                                                    <template slot-scope="scope">
                                                        <el-button
                                                            size="mini"
                                                            type="text"
                                                            @click="showApprovalDialog(scope.row)">审批</el-button>
                                                    </template>
                                                </el-table-column>
                                            </el-table>
                                        </el-dialog>
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
                                    label="报名人">
                                    <template slot-scope="scope">
                                        <span class="teamName">{{scope.row.date}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="工号">
                                </el-table-column>
                                <el-table-column
                                    prop="batch"
                                    label="监考名称" width="180">
                                    <template v-slot="scope">
                                        <el-button type="text" size="small" @click="handleEdit(scope.row)">{{
                                                scope.row.batch
                                            }}
                                        </el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="意向监考校区">
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="材料" width="180">
                                    <template v-slot="scope">
                                        <el-button
                                            size="mini"
                                            type="text"
                                            @click="handlePreview(scope.row)">预览</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="操作" width="180">
                                    <template slot-scope="scope">
                                        <el-button
                                            size="mini"
                                            type="text"
                                            @click="showApprovalDialog(scope.row)">审批</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
<!--                            <el-dialog :visible.sync="isApprovalDialogVisible" title="审批" width="600px" center style="font-weight: bolder">-->
<!--                            <el-form :model="approvalForm">-->
<!--                                <el-table :data="[approvalForm]" stripe style="width: 100%; margin-bottom: 20px;">-->
<!--                                    <el-table-column prop="num" label="工号" width="180">-->
<!--                                        <template v-slot="scope">-->
<!--                                            <span style="font-size: 16px; padding: 10px;">{{ scope.row.num }}</span>-->
<!--                                        </template>-->
<!--                                    </el-table-column>-->
<!--                                    <el-table-column prop="name" label="姓名" width="180">-->
<!--                                        <template v-slot="scope">-->
<!--                                            <span style="font-size: 16px; padding: 10px;">{{ scope.row.name }}</span>-->
<!--                                        </template>-->
<!--                                    </el-table-column>-->
<!--                                    <el-table-column width="180" label="操作">-->
<!--                                        <template> <el-button type="text" style="font-size: 18px">移除</el-button></template>-->
<!--                                    </el-table-column>-->
<!--                                </el-table>-->
<!--                                <hr />-->
<!--                                <el-form-item label="审批" style="text-align: center;">-->
<!--                                    <el-radio-group v-model="approvalForm.approval">-->
<!--                                        <el-radio label="同意" style="font-size: 16px;">同意</el-radio>-->
<!--                                        <el-radio label="不同意" style="font-size: 16px;">不同意</el-radio>-->
<!--                                    </el-radio-group>-->
<!--                                </el-form-item>-->
<!--                                <el-form-item v-if="approvalForm.approval === '不同意'" style="text-align: center;">-->
<!--                                    <el-input-->
<!--                                        v-model="approvalForm.reason"-->
<!--                                        placeholder="请输入不同意理由"-->
<!--                                        type="textarea"-->
<!--                                        style="background-color: #f0f0f0; width: 100%;"></el-input>-->
<!--                                </el-form-item>-->
<!--                                <span style="color: red; display: block; text-align: center; font-size: 16px;">请确认，一经提交无法申请</span>-->
<!--                                <hr />-->
<!--                                <el-form-item style="text-align: center;">-->
<!--                                    <el-button type="primary" @click="submitApproval" style="font-size: 16px;">提交</el-button>-->
<!--                                    <el-button @click="isApprovalDialogVisible = false" style="font-size: 16px;">取消</el-button>-->
<!--                                </el-form-item>-->
<!--                            </el-form>-->
<!--                        </el-dialog>-->
                            <el-pagination
                                background
                                layout="total, prev, pager, next"
                                :total="1000">
                            </el-pagination>
                        </el-tab-pane>
                        <el-tab-pane label="同意报名" name="Agree">
                            <el-row :gutter="10">
                                <el-col :span="12">
                                    <el-button size="small" type="primary" icon="el-icon-s-custom">邀约</el-button>
                                    <el-button size="small" type="inform" >数据导出</el-button>
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
                            </el-table>
                            <el-pagination
                                background
                                layout="total, prev, pager, next"
                                :total="1000">
                            </el-pagination>
                        </el-tab-pane>
                        <el-tab-pane label="不同意报名" name="Disagree">
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
                                :data="disagreeData"
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
                                    prop="num"
                                    label="报名人">
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
                                    label="上传材料" width="180">
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
                            </el-table>
                            <el-pagination
                                background
                                layout="total, prev, pager, next"
                                :total="1000">
                            </el-pagination>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Approval',
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
        address: '兴庆校区',
        num: '1001',
        batch: '2023年A卷2023监考报名'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '兴庆校区',
        num: '1001',
        batch: '2023年A卷2023监考报名'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '兴庆校区',
        num: '1001',
        batch: '2023年A卷2023监考报名'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '兴庆校区',
        num: '1001',
        batch: '2023年A卷2023监考报名'
      }],
      agreeData: [],
      disagreeData: [],
      activeName: 'Batch',
      selectedIds: [],
      dialogTableVisible: false
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.selectedIds = val.map(item => this.tableData.indexOf(item))
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleEdit (row) {
      this.$router.push({
        name: 'batchDetails',
        query: {name: row.name}
      })
    },
    handleSubmit (row) {
      // this.$router.push({
      //   name: 'batchDetails',
      //   query: {name: row.name}
      // })
    },
    handlePreview (row) {
      // 处理预览逻辑
    },
    showApprovalDialog (row) {
      this.approvalForm = { ...row }
      this.isApprovalDialogVisible = false
    },
    submitApproval () {
      // 提交审批逻辑
      this.isApprovalDialogVisible = false
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
