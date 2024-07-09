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
                                    <el-button size="small" type="primary" icon="el-icon-s-custom" @click="invitation = true">邀约
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
                                    </el-button>
                                    <el-button type="primary" plain class="white" @click="dialogTableVisible = true">数据导出</el-button>
                                        <el-dialog title="导出数据" :visible.sync="dialogTableVisible">
                                            <el-table :data="tableData">
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
                                                    label="上传材料" width="180">
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
                                                        <el-button size="mini" type="text">
                                                            查看
                                                        </el-button>
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
                                    label="报名人"
                                    prop="name">
                                    <template slot-scope="scope">
                                        <span class="teamName">{{scope.row.name}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="num"
                                    label="工号">
                                </el-table-column>
                                <el-table-column
                                    prop="batch"
                                    label="监考批次" width="180">
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
                                    label="上传材料" width="180">
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
                                        <el-button size="mini" type="text" @click="showdialog(scope.$index)">
                                            审批
                                            <!--                                            以下是对话框-->
                                            <!--                                            以下是对话框-->
                                            <el-dialog style="text-align: left" title="报名审批" :visible.sync="dialog_Regist_approval">
                                                <hr class="card-divider">
                                                <div style="height: 56px;margin: 20px;background-color: #F3F3F3;display: flex;text-align: center">
                                                    <div style="width: 300px;margin-top: 20px">姓名</div>
                                                    <div style="width: 300px;margin-top: 20px">工号</div>
                                                    <div style="width: 300px;margin-top: 20px">操作</div>
                                                </div>
                                                <div style="height: 80px;margin: 20px;display: flex;text-align: center">
                                                    <div style="width: 300px;margin-top: 20px">{{dialogData.name}}</div>
                                                    <div style="width: 300px;margin-top: 20px">{{dialogData.num}}</div>
                                                    <div style="width: 300px;margin-top: 20px">
                                                        <el-button type="text" @click="dialog_Regist_approval= false">移除</el-button>
                                                    </div>
                                                </div>
                                                <hr class="card-divider">
                                                <div style="height: 70px; display: flex;">
                                                    <div style="margin: 20px">是否同意报名</div>
                                                    <el-radio v-model="agreeordis" label="agree" style="margin: 20px">同意</el-radio>
                                                    <el-radio v-model="agreeordis" label="disagree" style="margin: 20px">不同意</el-radio>
                                                </div>
<!--                                                    以下是同意时的显示-->
                                                    <div v-if="agreeordis === 'agree'" style="color: #FF2F2F;text-align: left">
                                                        <br><br><div style="margin-top: 20px;text-align: center">提交后不可撤回，请谨慎操作！</div>
                                                    </div>
<!--                                                    以下是不同意的显示-->
                                                    <div v-if="agreeordis === 'disagree'" style="display: flex">
                                                        <br><br>不同意理由：
                                                        <el-input v-model="disagree_reason" placeholder="请输入不同意理由…" :rows="5" type="textarea"></el-input>
                                                    </div>
<!--                                                    以下是公共部分-->
                                                <hr class="card-divider">
                                                <div style="text-align: center">
                                                    <el-button type="primary" @click="dialog_Regist_approval= false">提交</el-button>
                                                    <el-button type="info" @click="dialog_Regist_approval= false">取消</el-button>
                                                </div>
                                            </el-dialog>
                                            <!--                                            以上是对话框-->
                                            <!--                                            以上是对话框-->
                                        </el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
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
                                            @click="handleEdit333333333333(scope.$index, scope.row)">{{scope.row.batch }}
                                        </el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="上传材料" width="180">
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
                                    <template v-slot="scope">
                                        <el-button
                                            size="mini"
                                            type="text"
                                            @click="handl1111111111111111111(scope.$index, scope.row)">查看</el-button>
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
                                :data="disagreedata"
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
                                        <el-button type="text" size="small" @click="handleEdit(scope.row)">{{
                                                scope.row.batch
                                            }}
                                        </el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="上传材料" width="180">
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
                                    <template v-slot="scope">
                                        <el-button
                                            size="mini"
                                            type="text"
                                            @click="handle2222222222222222(scope.$index, scope.row)">查看</el-button>
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
  data () {
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
      input_exam_num: '',
      dialogTableVisible: false,
      invitation: false,
      invite_way: 'self',
      disagree_reason: '',
      agreeordis: 'agree',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '兴庆校区',
        num: '1001',
        batch: '2023年A楼2023监考报名'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '兴庆校区',
        num: '1001',
        batch: '2023年A楼2023监考报名'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '兴庆校区',
        num: '1001',
        batch: '2023年A楼2023监考报名'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '兴庆校区',
        num: '1001',
        batch: '2023年A楼2023监考报名'
      }],
      agreeData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '兴庆校区',
        num: '1001',
        batch: '2023年A楼2023监考报名'
      }],
      disagreedata: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '兴庆校区',
        num: '1001',
        batch: '2023年A楼2023监考报名'
      }],
      dialog_Regist_approval: false,
      activeName: 'Batch',
      dialogData: {}
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleEdit (row) {
      this.$router.push({
        name: 'ApprovalDetails',
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
        name: 'BatchDetails',
        query: {name: row.name}
      })
    },
    showdialog (index) {
      this.dialogData = this.tableData[index]
      this.dialog_Regist_approval = true
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
