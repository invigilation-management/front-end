<template>
    <div>
        <span class="title">报名审批</span>
        <div class="card">
            <el-card>
                <el-row :gutter="10">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="待我审批" name="Batch">
                            <el-row :gutter="10">
                                <el-col :span="10">
                                    <el-button type="primary" icon="el-icon-s-custom" @click="invitation = true">邀约</el-button>
                                    <el-dialog title="邀约" :visible.sync="invitation">
                                        <hr class="card-divider">
                                        <div style="background-color: #E4EEFF;margin: 20px;height: 50px;text-align: center">
                                            <i class="el-icon-warning-outline"></i>
                                            通过邀约渠道，不受监考批次时间限制!
                                        </div>
                                        <div style="display: flex">
                                            <div style="margin-top: 15px;margin-right: 50px">监考批次</div>
                                            <el-input v-model="input_exam_num" placeholder="请选择监考批次"></el-input>
                                        </div>
                                        <div style="display: flex;margin-top: 20px">
                                            <div style="text-align: left;margin-right: 50px">选择方式</div>
                                            <el-radio v-model="invite_way" label="self">自走流程</el-radio>
                                            <el-radio v-model="invite_way" label="help">帮助报名</el-radio>
                                        </div>
                                        <div>
                                            <el-input placeholder="请输入姓名/工号/学号模糊查询" style="margin: 10px"></el-input>
                                        </div>
                                        <div style="margin: 20px;background-color: #F3F3F3 ;height: 160px;text-align: left">
                                            <br><br>&nbsp;&nbsp; &nbsp;姓名：<br><br>
                                            &nbsp; &nbsp; 工号：<br><br>
                                            &nbsp; &nbsp; 学院：<br><br>
                                        </div>
                                        <hr class="card-divider">
                                        <div style="display: flex;margin-top: 30px">
                                            <div v-if="invite_way === 'self'">
                                                <el-button type="primary" @click="invitation= false" style="width: 125px;margin-left: 230px">提交</el-button>
                                            </div>
                                            <div v-if="invite_way === 'help'">
                                                <el-button type="primary" @click="invitation= false" style="width: 125px;margin-left: 230px">前往补充信息</el-button>
                                            </div>
                                            <el-button type="info" @click="invitation= false" style="width: 125px;margin-left: 70px">取消</el-button>
                                        </div>
                                    </el-dialog>
<!--                                    <el-button size="small" type="inform" plain class="white" @click="dialogTableVisible = true">数据导出</el-button>-->
                                    <el-button type="inform" @click="dialogTableVisible = true">数据导出</el-button>
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
                                                        <el-button type="text" @click="handleEdit(scope.row)">{{
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
                                                            type="text"
                                                            @click="handlePreview(scope.row)">预览</el-button>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    prop="address"
                                                    label="操作" width="180">
                                                    <template slot-scope="scope">
                                                        <el-button
                                                            type="text"
                                                            @click="showApprovalDialog(scope.row)">审批</el-button>
                                                    </template>
                                                </el-table-column>
                                            </el-table>
                                        </el-dialog>
                                </el-col>
                                <el-col :span="6">
                                    <el-input v-model="input" placeholder="请输入报名人姓名/工号查询"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <div class="buttonright">
                                        <el-button type="primary">查询</el-button>
                                        <el-button type="inform">重置</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-table
                                :data=approval_infos
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
                                    prop=""
                                    label="报名人">
                                    <template slot-scope="scope">
                                        <span class="teamName">{{ scope.row.trueFacultyName }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="工号">
                                    <template slot-scope="scope">
                                        <span class="teamName">{{ scope.row.trueFacultyId }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="batchName"
                                    label="监考名称" width="180">
                                    <template v-slot="scope">
                                        <el-button type="text" @click="handleEdit(scope.row)">{{
                                                scope.row.batch.batchName
                                            }}
                                        </el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="意向监考校区">
                                    <template slot-scope="scope">
                                        <span class="teamName">{{ scope.row.targetCampus }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="材料" width="180">
                                    <template v-slot="scope">
                                        <el-button
                                            type="text"
                                            @click="handlePreview(scope.row)">预览</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="操作" width="180">
                                    <template slot-scope="scope">
                                        <el-button
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
                                <el-col :span="10">
                                    <el-button type="primary" icon="el-icon-s-custom">邀约</el-button>
                                    <el-button type="inform" @click="dialogTableVisible1 = true">数据导出</el-button>
                                    <el-dialog title="导出数据" :visible.sync="dialogTableVisible1">
                                        <el-table :data="selectedIds1.map(index => tableData[index])">
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
                                                label="监考名称"
                                                width="180">
                                                <template v-slot="scope">
                                                    <el-button type="text" @click="handleEdit(scope.row)">{{
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
                                                        type="text"
                                                        @click="handlePreview(scope.row)">预览</el-button>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="address"
                                                label="操作" width="180">
                                                <template slot-scope="scope">
                                                    <el-button
                                                        type="text"
                                                        @click="showApprovalDialog(scope.row)">审批</el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </el-dialog>
                                </el-col>
                                <el-col :span="6">
                                    <el-input v-model="input" placeholder="请输入报名人姓名/工号查询"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <div class="buttonright">
                                        <el-button type="primary">查询</el-button>
                                        <el-button type="inform">重置</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-table
                                :data="agreeApproval_infos"
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
                                        <span class="teamName">{{scope.row.trueFacultyName}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="num"
                                    label="工号">
                                    <template slot-scope="scope">
                                        <span class="teamName">{{scope.row.trueFacultyId}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="batch"
                                    label="监考名称" width="180">
                                    <template v-slot="scope">
                                        <el-button type="text" @click="handleEdit(scope.row)">{{
                                                scope.row.batch.batchName
                                            }}
                                        </el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="材料" width="180">
                                    <template v-slot="scope">
                                        <el-button
                                            type="text"
                                            @click="handleSubmit(scope.row)">预览</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="操作" width="180">
                                    <template v-slot="scope">
                                        <el-button
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
                                <el-col :span="10">
                                    <el-button type="primary" icon="el-icon-s-custom">邀约</el-button>
                                    <el-button type="inform" @click="dialogTableVisible2 = true">数据导出</el-button>
                                    <el-dialog title="导出数据" :visible.sync="dialogTableVisible2">
                                        <el-table :data="selectedIds2.map(index => tableData[index])">
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
                                                    <el-button type="text" @click="handleEdit(scope.row)">{{
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
                                                        type="text"
                                                        @click="handlePreview(scope.row)">预览</el-button>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="address"
                                                label="操作" width="180">
                                                <template slot-scope="scope">
                                                    <el-button
                                                        type="text"
                                                        @click="showApprovalDialog(scope.row)">审批</el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </el-dialog>
                                </el-col>
                                <el-col :span="6">
                                    <el-input v-model="input" placeholder="请输入报名人姓名/工号查询"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <div class="buttonright">
                                        <el-button  type="primary">查询</el-button>
                                        <el-button  type="inform">重置</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-table
                                :data="disagreeApproval_infos"
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
                                    prop="name"
                                    label="报名人">
                                    <template slot-scope="scope">
                                        <span class="teamName">{{scope.row.trueFacultyName}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="num"
                                    label="工号">
                                    <template slot-scope="scope">
                                        <span class="teamName">{{scope.row.trueFacultyId}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="batch"
                                    label="监考批次" width="180">
                                    <template v-slot="scope">
                                        <el-button type="text" @click="handleEdit(scope.row)">{{
                                                scope.row.batch.batchName
                                            }}
                                        </el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="上传材料" width="180">
                                    <template v-slot="scope">
                                        <el-button
                                            type="text"
                                            @click="handleSubmit(scope.row)">预览</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="操作" width="180">
                                    <template v-slot="scope">
                                        <el-button
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
import {approvalTable, getuserid, agreeApprovalTable, disagreeApprovalTable} from '../../api/user'
export default {
  name: 'Approval',
  data: function () {
    return {
      value: '',
      input: '',
      approval_infos: [],
      agreeApproval_infos: [],
      disagreeApproval_infos: [],
      activeName: 'Batch',
      selectedIds: [],
      selectedIds1: [],
      selectedIds2: [],
      dialogTableVisible: false,
      dialogTableVisible1: false,
      dialogTableVisible2: false,
      invitation: false,
      invite_way: 'self',
      input_exam_num: '',
      disagree_reason: '',
      agreeordis: 'agree'
    }
  },
  methods: {
    getApprovalTabel () {
      getuserid().then(response => {
        const userId = response.data.userId

        console.log('userId:', userId)

        // Call approvalTable with the retrieved userId
        approvalTable(userId).then(response => {
          this.approval_infos = response.data.data.records
          console.info('开始')
          console.info(this.approval_infos)
          console.info('结束')
        }).catch(error => {
          console.error('Error fetching approval table:', error)
          // Handle errors as needed
        })
      }).catch(error => {
        console.error('Error fetching userId:', error)
        // Handle errors from getuserid() if necessary
      })
    },
    getAgreeApprovalTabel () {
      getuserid().then(response => {
        const userId = response.data.userId
        console.log('userId:', userId)
        // Call approvalTable with the retrieved userId
        agreeApprovalTable(userId).then(response => {
          this.agreeApproval_infos = response.data.data.records
          console.info('开始')
          console.info(this.agreeApproval_infos)
          console.info('结束')
        }).catch(error => {
          console.error('Error fetching approval table:', error)
          // Handle errors as needed
        })
      }).catch(error => {
        console.error('Error fetching userId:', error)
        // Handle errors from getuserid() if necessary
      })
    },
    getDisagreeApprovalTabel () {
      getuserid().then(response => {
        const userId = response.data.userId
        console.log('userId:', userId)
        // Call approvalTable with the retrieved userId
        disagreeApprovalTable(userId).then(response => {
          this.disagreeApproval_infos = response.data.data.records
          console.info('开始')
          console.info(this.disagreeApproval_infos)
          console.info('结束')
        }).catch(error => {
          console.error('Error fetching approval table:', error)
          // Handle errors as needed
        })
      }).catch(error => {
        console.error('Error fetching userId:', error)
        // Handle errors from getuserid() if necessary
      })
    },
    handleSelectionChange (val) {
      this.selectedIds = val.map(item => this.approval_infos.indexOf(item))
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
  },
  created () {
    this.getApprovalTabel()
    this.getAgreeApprovalTabel()
    this.getDisagreeApprovalTabel()
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
