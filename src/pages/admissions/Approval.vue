<template>
    <div>
        <span class="title">报名审批</span>
        <div class="card">
            <el-card>
                <el-row :gutter="10">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="待我审批" name="Batch">
                            <el-row :gutter="10">
                                <el-col :span="14">
                                    <el-button type="inform" icon="el-icon-upload" @click="exportData1()">数据导出</el-button>
                                        <el-dialog title="导出数据" :visible.sync="dialogTableVisible">
                                            <el-table :data="selectedIds">
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
                                                        <span class="normal">{{ scope.row.trueFacultyName }}</span>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                    prop="name"
                                                    label="工号">
                                                    <template slot-scope="scope">
                                                        <span class="normal">{{ scope.row.trueFacultyId }}</span>
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
                                                        <span class="normal">{{ scope.row.targetCampus }}</span>
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
                                                            @click="showApprovalDialog(scope.$index)">审批</el-button>
                                                    </template>
                                                </el-table-column>
                                            </el-table>
                                        </el-dialog>
                                </el-col>
                                <el-col :span="6">
                                    <el-input v-model="input1" placeholder="请输入报名人姓名/工号查询"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <div class="buttonright">
                                        <el-button type="primary" icon="el-icon-search" @click="selectOne">查询</el-button>
                                        <el-button type="inform" icon="el-icon-refresh-left" @click="resetOne">重置</el-button>
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
                                        <span class="normal">{{ scope.row.trueFacultyName }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="工号">
                                    <template slot-scope="scope">
                                        <span class="normal">{{ scope.row.trueFacultyId }}</span>
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
                                        <span class="normal">{{ scope.row.targetCampus }}</span>
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
                                            @click="showApprovalDialog(scope.$index)">审批</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                                background
                                @size-change="handleSizeChange1"
                                @current-change="handleCurrentChange1"
                                :current-page="pagenum1"
                                :page-sizes="[5, 10, 20, 50]"
                                :page-size='pagesize1'
                                layout="total, sizes, prev, pager, next, jumper"
                                :total='total1'>
                            </el-pagination>
                        </el-tab-pane>
                        <el-tab-pane label="同意报名" name="Agree">
                            <el-row :gutter="10">
                                <el-col :span="14">
                                    <el-button type="inform" icon="el-icon-upload" @click="exportData2">数据导出</el-button>
                                    <el-dialog title="导出数据" :visible.sync="dialogTableVisible1">
                                        <el-table :data="selectedIds">
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
                                                    <span class="normal">{{scope.row.trueFacultyName}}</span>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="num"
                                                label="工号">
                                                <template slot-scope="scope">
                                                    <span class="normal">{{scope.row.trueFacultyId}}</span>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="batch"
                                                label="监考名称" width="180">
                                                <template v-slot="scope">
                                                    <el-button type="text" @click="handleEdit(scope.row)">{{
                                                            scope.row.batch ? scope.row.batch.batchName : ''
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
                                                        type="text">审批详情</el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </el-dialog>
                                </el-col>
                                <el-col :span="6">
                                    <el-input v-model="input2" placeholder="请输入报名人姓名/工号查询"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <div class="buttonright">
                                        <el-button type="primary" icon="el-icon-search" @click="selectTwo">查询</el-button>
                                        <el-button type="inform" icon="el-icon-refresh-left" @click="resetTwo">重置</el-button>
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
                                        <span class="normal">{{scope.row.trueFacultyName}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="num"
                                    label="工号">
                                    <template slot-scope="scope">
                                        <span class="normal">{{scope.row.trueFacultyId}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="batch"
                                    label="监考名称" width="180">
                                    <template v-slot="scope">
                                        <el-button type="text" @click="handleEdit(scope.row)">{{
                                                scope.row.batch ? scope.row.batch.batchName : ''
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
                                            @click="handleDisagreed(scope.row)">审批详情</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                                background
                                @size-change="handleSizeChange2"
                                @current-change="handleCurrentChange2"
                                :current-page="pagenum2"
                                :page-sizes="[5, 10, 20, 50]"
                                :page-size='pagesize2'
                                layout="total, sizes, prev, pager, next, jumper"
                                :total='total2'>
                            </el-pagination>
                        </el-tab-pane>
                        <el-tab-pane label="不同意报名" name="Disagree">
                            <el-row :gutter="10">
                                <el-col :span="14">
                                    <el-button type="inform" icon="el-icon-upload" @click="exportData3">数据导出</el-button>
                                    <el-dialog title="导出数据" :visible.sync="dialogTableVisible2">
                                        <el-table :data="selectedIds">
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
                                                    <span class="normal">{{scope.row.trueFacultyName}}</span>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="num"
                                                label="工号">
                                                <template slot-scope="scope">
                                                    <span class="normal">{{scope.row.trueFacultyId}}</span>
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
                                                        type="text">审批详情</el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </el-dialog>
                                </el-col>
                                <el-col :span="6">
                                    <el-input v-model="input3" placeholder="请输入报名人姓名/工号查询"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <div class="buttonright">
                                        <el-button  type="primary" icon="el-icon-search" @click="selectThree">查询</el-button>
                                        <el-button  type="inform" icon="el-icon-refresh-left" @click="resetThree">重置</el-button>
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
                                        <span class="normal">{{scope.row.trueFacultyName}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="num"
                                    label="工号">
                                    <template slot-scope="scope">
                                        <span class="normal">{{scope.row.trueFacultyId}}</span>
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
                                            @click="handleAgreed(scope.row)">审批详情</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                                background
                                @size-change="handleSizeChange3"
                                @current-change="handleCurrentChange3"
                                :current-page="pagenum3"
                                :page-sizes="[5, 10, 20, 50]"
                                :page-size='pagesize3'
                                layout="total, sizes, prev, pager, next, jumper"
                                :total='total3'>
                            </el-pagination>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
            </el-card>
        </div>
        <el-dialog :visible.sync="isApprovalDialogVisible" title="审批" width="600px" center style="font-weight: bolder">
            <el-form :model="approvalForm">
                <el-table :data="[approvalForm]" stripe style="width: 100%; margin-bottom: 20px;">
                    <el-table-column prop="num" label="工号" width="180">
                        <template v-slot="scope">
                            <span style="font-size: 16px; padding: 10px;">{{ approvalForm.trueFacultyId}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="180">
                        <template v-slot="scope">
                            <span style="font-size: 16px; padding: 10px;">{{ approvalForm.trueFacultyName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column width="180" label="操作">
                        <template> <el-button type="text" style="font-size: 18px">移除</el-button></template>
                    </el-table-column>
                </el-table>
                <hr />
                <el-form-item label="审批" style="text-align: center;">
                    <el-radio-group v-model="approvalForm.approval">
                        <el-radio label="同意" style="font-size: 16px;">同意</el-radio>
                        <el-radio label="不同意" style="font-size: 16px;">不同意</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item v-if="approvalForm.approval === '不同意'" style="text-align: center;">
                    <el-input
                        v-model="approvalForm.reason"
                        placeholder="请输入不同意理由"
                        type="textarea"
                        style="background-color: #f0f0f0; width: 100%;"></el-input>
                </el-form-item>
                <span style="color: red; display: block; text-align: center; font-size: 16px;">请确认，一经提交无法更改</span>
                <hr />
                <el-form-item style="text-align: center;">
                    <el-button type="primary" @click='submitApproval' style="font-size: 16px;">提交</el-button>
                    <el-button @click='innerReset' style="font-size: 16px;">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import {
  approvalTable,
  getuserid,
  agreeApprovalTable,
  disagreeApprovalTable,
  approvalNameSelect,
  agreeSelect,
  disagreeSelect,
  agree,
  disagree
} from '../../api/user'
import * as XLSX from 'xlsx'
export default {
  name: 'Approval',
  data: function () {
    return {
      pagenum1: 1,
      pagesize1: 10,
      total1: 0,
      pagenum2: 1,
      pagesize2: 10,
      total2: 0,
      pagenum3: 1,
      pagesize3: 10,
      total3: 0,
      // ------------------------------------------------------------
      value: '',
      input1: '',
      input2: '',
      input3: '',
      thisuserid: '',
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
      isApprovalDialogVisible: false,
      invite_way: 'self',
      input_exam_num: '',
      disagree_reason: '',
      agreeordis: 'agree',
      approvalForm: {}
    }
  },
  methods: {
    exportData1 () {
      // const data = this.selectedIds.map(index => this.tableData[index])
      const data = this.selectedIds
      const worksheet = XLSX.utils.json_to_sheet(data)
      const workbook = XLSX.utils.book_new()
      this.dialogTableVisible = true
      XLSX.utils.book_append_sheet(workbook, worksheet, '待我审批数据')
      XLSX.writeFile(workbook, '待我审批数据.xlsx')
    },
    exportData2 () {
      // const data = this.selectedIds.map(index => this.tableData[index])
      const data = this.selectedIds
      const worksheet = XLSX.utils.json_to_sheet(data)
      const workbook = XLSX.utils.book_new()
      this.dialogTableVisible1 = true
      XLSX.utils.book_append_sheet(workbook, worksheet, '已同意审批数据')
      XLSX.writeFile(workbook, '已同意审批数据.xlsx')
    },
    exportData3 () {
      // const data = this.selectedIds.map(index => this.tableData[index])
      const data = this.selectedIds
      const worksheet = XLSX.utils.json_to_sheet(data)
      const workbook = XLSX.utils.book_new()
      this.dialogTableVisible2 = true
      XLSX.utils.book_append_sheet(workbook, worksheet, '不同意审批数据')
      XLSX.writeFile(workbook, '不同意审批数据.xlsx')
    },
    handleSelectionChange (val) {
      // this.selectedIds = val.map(item => this.tableData.indexOf(item))
      this.selectedIds = val
    },
    handleSizeChange1 (value) {
      this.pagesize1 = value
      this.selectOne()
    },
    handleCurrentChange1 (value) {
      this.pagenum1 = value
      this.selectOne()
    },
    handleSizeChange2 (value) {
      this.pagesize2 = value
      this.selectTwo()
    },
    handleCurrentChange2 (value) {
      this.pagenum2 = value
      this.selectTwo()
    },
    handleSizeChange3 (value) {
      this.pagesize3 = value
      this.selectThree()
    },
    handleCurrentChange3 (value) {
      this.pagenum3 = value
      this.selectThree()
    },
    innerReset () {
      // 表示子页面的清空方法
      this.isApprovalDialogVisible = false
    },

    resetOne () {
      // 表示当前页面的的重置方法
      this.getApprovalTabel()
      this.input1 = null
    },
    // 表示当前页面的的模糊查询方法
    selectOne () {
      if (this.input1 != null) {
        getuserid().then(response => {
          this.thisuserid = response.data.userId
          approvalNameSelect(this.input1, this.thisuserid, this.pagesize1, this.pagenum1).then(response => {
            console.log(response)
            this.approval_infos = response.data.records
            this.total1 = response.data.total
          })
        })
      }
    },
    resetTwo () {
      this.getAgreeApprovalTabel()
      this.input2 = null
    },
    // 表示当前页面的的模糊查询方法
    selectTwo () {
      if (this.input2 != null) {
        getuserid().then(response => {
          this.agreeApproval_infos = []
          this.thisuserid = response.data.userId
          agreeSelect(this.input2, this.thisuserid, this.pagesize2, this.pagenum2).then(response => {
            console.log(this.agreeApproval_infos)
            this.agreeApproval_infos = response.data.records
            console.log(response.data.records)
            console.log(this.agreeApproval_infos)
            this.total2 = response.data.total
          })
        })
      }
    },
    resetThree () {
      this.getDisagreeApprovalTabel()
      this.input3 = null
    },
    // 表示当前页面的的模糊查询方法
    selectThree () {
      if (this.input3 != null) {
        getuserid().then(response => {
          this.thisuserid = response.data.userId
          disagreeSelect(this.input3, this.thisuserid, this.pagesize3, this.pagenum3).then(response => {
            this.disagreeApproval_infos = response.data.records
            this.total3 = response.data.total
          })
        })
      }
    },
    getApprovalTabel () {
      getuserid().then(response => {
        const userId = response.data.userId
        approvalTable(userId, this.pagesize1, this.pagenum1).then(response => {
          this.approval_infos = response.data.records
          this.total1 = response.data.total
        }).catch(error => {
          console.error('Error fetching approval table:', error)
        })
      }).catch(error => {
        console.error('Error fetching userId:', error)
      })
    },
    getAgreeApprovalTabel () {
      getuserid().then(response => {
        const userId = response.data.userId
        agreeApprovalTable(userId, this.pagesize2, this.pagenum2).then(response => {
          this.agreeApproval_infos = response.data.records
          this.total2 = response.data.total
        }).catch(error => {
          console.error('Error fetching approval table:', error)
        })
      }).catch(error => {
        console.error('Error fetching userId:', error)
      })
    },
    getDisagreeApprovalTabel () {
      getuserid().then(response => {
        const userId = response.data.userId
        disagreeApprovalTable(userId, this.pagesize3, this.pagenum3).then(response => {
          this.disagreeApproval_infos = response.data.records
          this.total3 = response.data.total
        }).catch(error => {
          console.error('Error fetching approval table:', error)
        })
      }).catch(error => {
        console.error('Error fetching userId:', error)
      })
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleEdit (row) {
      this.$router.push({
        name: 'batchDetails',
        query: {name: row.name},
        params: {batchname: row.batch ? row.batch.batchName : ''}
      })
    },
    handleSubmit (row) {
      this.$router.push({
        name: 'ApprovalDetail',
        params: {batchName: row.batch.batchName, trueFacultyId: row.trueFacultyId}
      })
    },
    handlePreview (row) {
      this.$router.push({
        name: 'ApprovalDetail',
        params: {batchName: row.batch.batchName, trueFacultyId: row.trueFacultyId}
      })
    },
    handleAgreed (row) {
      this.$router.push({
        name: 'AgreeDetail',
        params: {batchName: row.batch.batchName, trueFacultyId: row.trueFacultyId}
      })
    },
    handleDisagreed (row) {
      this.$router.push({
        name: 'DisagreeDetail',
        params: {batchName: row.batch.batchName, trueFacultyId: row.trueFacultyId}
      })
    },
    showApprovalDialog (index) {
      this.approvalForm = this.approval_infos[index]
      this.isApprovalDialogVisible = true
    },
    submitApproval () {
      // 同意审批逻辑
      this.isApprovalDialogVisible = false
      if (this.approvalForm.approval === '同意') {
        // 同意这个审批的逻辑：
        getuserid().then(response => {
          const userId = response.data.userId
          agree(userId, this.approvalForm.trueFacultyId, this.approvalForm.batch.batchName, this.approvalForm.targetCampus).then(res => {
            if (res.data === true) {
              this.$message({
                message: '通过成功',
                type: 'success'
              })
            } else if (res.data === false) {
              this.$message({
                message: '通过失败，请稍后重试',
                type: 'warning'
              })
            }
          }).catch(error => {
            console.error('Error fetching approval table:', error)
            // Handle errors as needed
          })
        }).catch(error => {
          console.error('Error fetching userId:', error)
          // Handle errors from getuserid() if necessary
        })
      } else {
        // 这里是拒绝审批的方法
        getuserid().then(response => {
          const userId = response.data.userId
          disagree(userId, this.approvalForm.trueFacultyId, this.approvalForm.batch.batchName).then(res => {
            if (res.data === true) {
              this.$message({
                message: '拒绝成功',
                type: 'success'
              })
            } else if (res.data === false) {
              this.$message({
                message: '拒绝失败，请稍后重试',
                type: 'warning'
              })
            }
          }).catch(error => {
            console.error('Error fetching approval table:', error)
          })
        }).catch(error => {
          console.error('Error fetching userId:', error)
        })
      }
    },
    handleAction () {
      this.isApprovalDialogVisible = true
      console.info('this.isApprovalDialogVisible')
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
