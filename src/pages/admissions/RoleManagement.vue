<template>
    <div>
        <h1>
            <i class="el-icon-back"></i>|
            <span class="title_2"> 部门与角色管理</span>
        </h1>
        <div class="card">
            <el-card>
                <el-row :gutter="10">
                    <el-col :span="6">
                        <el-input v-model="input" placeholder="请输入部门名称关键词查询"></el-input>
                    </el-col>
                    <el-col :span="4">
                        <el-button type="primary" class="blue" @click="select">查询</el-button>
                        <el-button type="primary" plain class="white" @click="reset">重置</el-button>
                    </el-col>
                    <el-col :span="12" :offset="2">
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
                        <el-button type="primary" class="blue" @click="dialogVisibleSelect = true">添加成员</el-button>
                        <!--                    以下是对话弹窗部分-->
                        <!--                    以下是对话弹窗部分-->
                        <!--                    以下是对话弹窗部分-->
                        <!--                    以下是对话弹窗部分-->
                        <el-dialog title="添加成员" :visible.sync="dialogVisibleSelect">
                            <hr class="card-divider">
                            <el-radio v-model="selectedContent" label="alone">单一添加</el-radio>
                            <el-radio v-model="selectedContent" label="alot">批量导入</el-radio>
<!--                            以下是添加一个成员时的对话框-->
                            <div v-if="selectedContent === 'alone'">
                                <el-input autocomplete="off"  style="width: 500px" class="input1" placeholder="请输入姓名/工号模糊查询" ></el-input>
                                <el-button type="primary" style="margin-left: 30px;width: 145px" @click="innerSelect">查询</el-button>
                                <div class="grey">
                                    <br>&nbsp; 姓名: {{this.selectName}}<br>
                                    <br>&nbsp; 工号:{{this.selectId}}<br>
                                    <br>&nbsp; 所在单位: {{this.selectCollege}}<br><br>
                                </div>
                                <br><br>所在部门：<br>
                                <br><el-input v-model="input_department" placeholder="请选择所在部门"></el-input>
                                <br><br>
                                <div style="display: flex; flex-direction: column; align-items: center;">
                                    <el-button type="primary" @click="dialogVisibleSelect = false" style="background-color:#166AFF;width: 200px">提交</el-button>
                                </div>
                            </div>
<!--                            以下是操作一堆成导入教职工名单：员时的对话框-->
                            <div v-else-if="selectedContent === 'alot'">
                                <div style="margin-top: 20px">
                                    导入教职工名单：&nbsp;&nbsp;&nbsp;<el-link type="primary">下载导入模板</el-link>
                                    <br><br>*能通过统一身份认证进入学校系统都可以导入
                                </div>
                                <el-button type="primary" style="background-color:#166AFF;margin-top: 20px">上传名单</el-button>
                                <div style="display: flex; flex-direction: column; align-items: center;">
                                    <el-button type="primary" style="background-color:#166AFF;margin-top: 80px;width: 200px">提交</el-button>
                                </div>
                            </div>
                        </el-dialog>
                        <!--                    以上是对话弹窗部分-->
                        <!--                    以上是对话弹窗部分-->
                        <!--                    以上是对话弹窗部分-->
                        <!--                    以上是对话弹窗部分-->
                        <el-button type="primary" class="blue" @click="dialogVisible_Add_Department= true">添加部门</el-button>
                        <!--                    以下是对话弹窗部分-->
                        <!--                    以下是对话弹窗部分-->
                        <el-dialog title="添加部门" :visible.sync="dialogVisible_Add_Department">
                            <hr class="card-divider">
                            <br>
                            部门名称：<el-input class="input2" v-model="input_department_name" placeholder="请输入部门名称"></el-input>
                            <br><br>
                            部门类型：<el-input class="input2" v-model="input_department_type" placeholder="请选择部门类型"></el-input>
                            <br><br><br>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <el-button type="primary" style="width: 200px;background-color:#166AFF" @click="collegeSubmit">提交</el-button>
                            </div>
                        </el-dialog>
                        <!--                    以上是对话弹窗部分-->
                        <!--                    以上是对话弹窗部分-->
                        <el-button  type="primary" class="blue" @click="dialogTableVisible = true">数据导出</el-button>
                        <el-dialog title="导出数据" :visible.sync="dialogTableVisible">
                            <el-table :data="selectedIds.map(index => tableData[index])">
                                <el-table-column
                                    type="selection"
                                    width="55">
                                </el-table-column>
                                <el-table-column
                                    label="序号"
                                    width="60">
                                    <template slot-scope="scope">
                                        0{{scope.$index+1}}
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="部门名称"
                                    prop="name"
                                    width="400">
                                    <template slot-scope="scope">
                                        <el-button type="text">{{scope.row.name}}</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="code"
                                    label="部门代码"
                                    width="140">
                                </el-table-column>
                                <el-table-column
                                    prop="type"
                                    label="部门类型"
                                    width="140">
                                </el-table-column>
                                <el-table-column
                                    prop="num"
                                    label="成员人数"
                                    width="140">
                                </el-table-column>
                                <el-table-column
                                    prop="date"
                                    label="添加时间"
                                    width="140">
                                </el-table-column>
                                <el-table-column
                                    label="操作">
                                    <template slot-scope="scope">
                                        <el-button @click="handleMembers(scope.row)" type="text" size="small">查看成员</el-button>
                                        <el-button type="text" size="small">更多</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-dialog>
                    </el-col>
                </el-row>
                <el-table
                    :data="tableData"
                    :header-row-style="{ backgroundColor: '#F3F3F3' }"
                    style="width: 100%"
                    class="blue-header">
                    <el-table-column
                        type="selection"
                        width="55">
                    </el-table-column>
                    <el-table-column
                        label="序号"
                        width="60">
                        <template slot-scope="scope">
                            0{{scope.$index+1}}
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="部门名称"
                        prop="name"
                        width="400">
                        <template slot-scope="scope">
                            <el-button type="text">{{scope.row.collegeName}}</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="code"
                        label="部门代码"
                        width="140">
                        <template slot-scope="scope">
                            <span class="teamName">{{scope.row.collegeId}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        label="部门类型"
                        width="140">
                        <template slot-scope="scope">
                            <span class="teamName">{{scope.row.type}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="num"
                        label="成员人数"
                        width="140">
                        <template slot-scope="scope">
                            <span class="teamName">{{scope.row.numPeople}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="添加时间"
                        width="140">
                        <template slot-scope="scope">
                            <span class="teamName">{{scope.row.createTime}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="操作">
                        <template slot-scope="scope">
                            <el-button @click="handleMembers(scope.row)" type="text" size="small">查看成员</el-button>
                            <el-button type="text" size="small">更多</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </div>
        <!-- 添加你的部门与角色管理内容 -->
    </div>
</template>

<script>
import {getuserid, collegeRoleTable, collegeRoleSelect, addCollege} from '../../api/user'
export default {
  name: 'RoleManagement',
  methods: {
    collegeSubmit () {
      // 子对话里添加部门
      this.dialogVisible_Add_Department = false
      if (this.input_department_name != null && this.input_department_type != null) {
        addCollege(this.input_department_name, this.input_department_type).then(res => {
          if (res.data === true) {
            this.$message({
              message: '添加成功',
              type: 'success'
            })
          } else if (res.data === false) {
            this.$message({
              message: '添加失败，请稍后重试',
              type: 'warning'
            })
          }
        })
      }
    },
    innerSelect () {
      // 里面的子对话查询
    },
    select () {
      if (this.input != null) {
        collegeRoleSelect(this.input).then(response => {
          this.tableData = response.data.records
        })
      }
    },
    reset () {
      this.getCollegeRoleTable()
      this.input = null
    },
    getCollegeRoleTable () {
      getuserid().then(response => {
        const userId = response.data.userId
        console.log('userId:', userId)
        // Call approvalTable with the retrieved userId
        collegeRoleTable(userId).then(response => {
          this.tableData = response.data.records
        }).catch(error => {
          console.error('Error fetching approval table:', error)
          // Handle errors as needed
        })
      }).catch(error => {
        console.error('Error fetching userId:', error)
        // Handle errors from getuserid() if necessary
      })
    },
    handleMembers (row) {
      this.$router.push({
        name: 'waiting',
        query: {name: row.name}
      })
    },
    handleSelectionChange (val) {
      this.selectedIds = val.map(item => this.tableData.indexOf(item))
    }
  },
  created () {
    this.getCollegeRoleTable()
  },
  data () {
    return {
      input: '',
      dialogTableVisible: false,
      selectedIds: [],
      tableData: [],
      dialogVisibleSelect: false,
      dialogVisibleFind: false,
      selectedContent: 'alone',
      input_department: '',
      input_department_name: '',
      input_department_type: '',
      dialogVisible_Add_Department: false,
      selectName: '',
      selectId: '',
      selectCollege: ''
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
.input2{
    margin-top: 20px;
}
.input1{
    margin-top: 20px;
}
.grey{
    background-color: #F3F3F3;
    margin-top: 20px;
    color: black;
}
/deep/.el-col-3
{
    width: 7%;
    padding-left: 5px;
}
/*/deep/ el-table__header{*/
/*    background-color: #007bff; !* 蓝色背景 *!*/
/*}*/
/* 添加你的样式 */
/deep/ .el-table th.el-table__cell{
    background-color: #F3F3F3;
    font-weight: 400;
    font-size: 14px;
    color: #00000099;
    text-align: left;
    line-height: 22px;
}
.blue-header{
    margin-top: 20px;
}
/deep/ .el-table .cell{
    text-align: center;
}
.card{
    margin-left: 20px;
    margin-right: 20px;
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
/deep/ .el-table thead{
    color: #00000099;
}
</style>
