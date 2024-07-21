<template>
    <div>
        <span class="title">监考安排表</span>
        <div class="card">
            <el-card>
                <el-row :gutter="10">
                            <el-row :gutter="10" style="margin-bottom: 20px; margin-top: 0px">
                                <el-col :span="6">
                                    <el-input v-model="input" placeholder="请输入监考名称关键词查询"></el-input>
                                </el-col>
                                <el-col :span="4">
                                        <el-button type="primary">查询</el-button>
                                        <el-button type="inform">重置</el-button>
                                </el-col>
                                <el-col :span="14">
                                    <div class="buttonright">
                                    <el-button type="primary">快速找人</el-button>
                                    <el-button type="primary" @click="dialogVisible_manage=true">创建批次</el-button>
                                        <!--                    以下是对话弹窗部分-->
                                        <!--                    以下是对话弹窗部分-->
                                        <el-dialog title="创建监考安排批次" :visible.sync="dialogVisible_manage">
                                            <el-form :model="form">
                                                <el-form-item label="监考名称" :label-width="formLabelWidth">
                                                    <el-input v-model="form.name" autocomplete="off" placeholder="请输入监考名称"></el-input>
                                                </el-form-item>
                                                <el-form-item label="监考人数" :label-width="formLabelWidth">
                                                    <el-input v-model="form.members_num" autocomplete="off" placeholder="请输入监考人数"></el-input>
                                                </el-form-item>
                                                <el-form-item label="报名开始时间" :label-width="formLabelWidth">
                                                    <el-input v-model="form.begin_time" autocomplete="off" placeholder="请输入报名开始时间"></el-input>
                                                </el-form-item>
                                                <el-form-item label="报名结束时间" :label-width="formLabelWidth">
                                                    <el-input v-model="form.end_time" autocomplete="off" placeholder="请输入报名结束时间"></el-input>
                                                </el-form-item>
                                                <el-form-item label="创建时间" :label-width="formLabelWidth" :label-height="bigformLabelHeight">
                                                    <el-input v-model="form.create_time" autocomplete="off" placeholder="请输入创建时间" style="height: 158px;height: auto">
                                                    </el-input>
                                                </el-form-item>
                                                <el-form-item label="批次状态" :label-width="formLabelWidth">
                                                    <el-select v-model="form.this_status" placeholder="请选择批次状态" >
                                                        <el-option label="已结束" value="已结束"></el-option>
                                                        <el-option label="进行中" value="进行中"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-form>
                                            <div slot="footer" class="dialog-footer" style="text-align: center">
                                                <el-button type="primary" @click="dialogVisible_manage = false" style="background-color: #166AFF"> 提 交 </el-button>
                                                <el-button @click="dialogVisible_manage = false">取 消</el-button>
                                            </div>
                                        </el-dialog>
                                        <!--                    以上是对话弹窗部分-->
                                        <!--                    以上是对话弹窗部分-->
                                    <el-button type="inform" plain class="white" @click="dialogTableVisible = true">数据导出</el-button>
                                    <!--                    以下是对话弹窗部分-->
                                    <!--                    以下是对话弹窗部分-->
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
                                    <!--                    以上是对话弹窗部分-->
                                    <!--                    以上是对话弹窗部分-->
                                    <el-dialog title="导出数据" :visible.sync="dialogTableVisible">
                                        <el-table :data="selectedIds.map(index => tableData[index])">
                                            <el-table-column
                                                    label="序号">
                                                <template slot-scope="scope">
                                                    {{scope.$index+1}}
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                    label="报名人"
                                                    prop="name">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="num"
                                                    label="工号">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="batch"
                                                    label="监考批次" width="180">
                                                <template v-slot="scope">
                                                    <el-button
                                                            type="text"
                                                            size="small"
                                                            @click="handleEdit333333333333(scope.row)">{{scope.row.batch}}
                                                    </el-button>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                    prop="address"
                                                    label="意向监考校区">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="address"
                                                    label="" width="180">
                                                <template v-slot="scope">
                                                    <el-button
                                                            size="mini"
                                                            type="text"
                                                            @click="handleEdit(scope.row)">预览</el-button>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                    prop="address"
                                                    label="操作" width="180">
                                                <template slot-scope="scope">
                                                    <el-button
                                                            type="text"
                                                            @click="handleEdit(scope.$index, scope.row)">审批</el-button>
                                                    <el-button type="text">
                                                        查看
                                                    </el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </el-dialog>
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
                                        prop="batch"
                                        label="监考名称" width="180">
                                    <template v-slot="scope">
                                        <el-button type="text" size="small" @click="handleEdit333333333333(scope.row)">{{
                                            scope.row.batchName
                                            }}
                                        </el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        prop="num"
                                        label="监考人数">
                                    <template slot-scope="scope">
                                        <span class="teamName">{{scope.row.expectNum}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        prop="num"
                                        label="报名开始时间">
                                    <template slot-scope="scope">
                                        <span class="teamName">{{scope.row.regStartTime}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        prop="num"
                                        label="报名结束时间">
                                    <template slot-scope="scope">
                                        <span class="teamName">{{scope.row.regEndTime}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        prop="num"
                                        label="创建时间">
                                    <template slot-scope="scope">
                                        <span class="teamName">{{scope.row.batchCreatedTime}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        prop="address"
                                        label="批次状态">
                                    <template slot-scope="scope">
                        <span class="teamName">
                            <div style="color: black" v-if="scope.row.regStartTime>nowTime">未开始</div>
                            <div style="color: red" v-else-if="scope.row.regEndTime<nowTime">已结束</div>
                            <div style="color: green" v-else>进行中</div>
                        </span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        prop="address"
                                        label="操作" width="180">
                                    <template v-slot="scope">
                                        <el-button
                                                size="mini"
                                                type="text"
                                                @click="handleEdit(scope.row)">查看名单</el-button>
                                        <el-button
                                                size="mini"
                                                type="text">下载监考表</el-button>
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
import {examPlan, getuserid} from '../../api/user'
import moment from 'moment'
export default {
  name: 'ManageTotal',
  data () {
    return {
      nowTime: moment().format('YYYY-MM-DD HH:mm:ss'),
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
      form: {
        name: '',
        members_num: '',
        begin_time: '',
        end_time: '',
        create_time: '',
        this_status: ''
      },
      value: '',
      input: '',
      selectedIds: [],
      selectedIds1: [],
      selectedIds2: [],
      dialogTableVisible: false,
      dialogTableVisible1: false,
      dialogTableVisible2: false,
      dialogVisible_manage: false,
      formLabelWidth: '120px',
      bigformLabelHeight: '158px',
      input_exam_num: '',
      invitation: false,
      invite_way: 'self',
      disagree_reason: '',
      agreeordis: 'agree',
      tableData: [],
      dialog_Regist_approval: false,
      activeName: 'Batch',
      dialogData: {}
    }
  },
  methods: {
    getExamPlanTable () {
      getuserid().then(response => {
        const userId = response.data.userId
        console.log('userId:', userId)
        // Call approvalTable with the retrieved userId
        examPlan(userId).then(response => {
          this.tableData = response.data.data.records
        }).catch(error => {
          console.error('Error fetching approval table:', error)
          // Handle errors as needed
        })
      }).catch(error => {
        console.error('Error fetching userId:', error)
        // Handle errors from getuserid() if necessary
      })
    },
    handleSign () {
      this.$router.push({
        name: 'ApprovalDetails'
      })
    },
    handleSelectionChange (val) {
      this.selectedIds = val.map(item => this.tableData.indexOf(item))
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleEdit (row) {
      this.$router.push({
        name: 'ViewList',
        query: {name: row.name}
      })
    },
    handl1111111111111111111 (row) {
      this.$router.push({
        name: 'AgreeDetails',
        query: {name: row.name}
      })
    },
    handle2222222222222222 (row) {
      this.$router.push({
        name: 'DisagreeDetails',
        query: {name: row.name}
      })
    },
    handleEdit333333333333 (row) {
      this.$router.push({
        name: 'batchDetails',
        query: {name: row.name}
      })
    },
    showdialog (index) {
      this.dialogData = this.tableData[index]
      this.dialog_Regist_approval = true
    }
  },
  created () {
    this.getExamPlanTable()
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
.buttonright{
    float: right;
}
</style>
