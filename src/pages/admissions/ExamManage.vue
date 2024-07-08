<template>
    <div>
        <h1>
            <i class="el-icon-back"></i>|
            <div class="title_2"> 监考管理</div>
        </h1>
        <el-card class="card">
            <el-row gutter="20">
                <el-col span="1"><el-button class="line1-1" type="primary">快速找人</el-button></el-col>
                <el-col span="1" offset="0">
                    <el-button type="primary" plain class="line1-2" @click="dialogFormVisible = true">创建批次</el-button>
                    <!--                    以下是对话弹窗部分-->
                    <!--                    以下是对话弹窗部分-->
                    <!--                    以下是对话弹窗部分-->
                    <!--                    以下是对话弹窗部分-->
                    <el-dialog title="创建监考报名批次" :visible.sync="dialogFormVisible">
                        <el-form :model="form">
                            <el-form-item label="批次名称" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" placeholder="请输入批次名称"></el-input>
                            </el-form-item>
                            <el-form-item label="关联年份" :label-width="formLabelWidth">
                                <el-select v-model="form.region" placeholder="请选择关联年份" >
                                    <el-option label="2023" value="2023"></el-option>
                                    <el-option label="2024" value="2024"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="批次开始时间" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" placeholder="请输入批次开始时间"></el-input>
                            </el-form-item>
                            <el-form-item label="批次结束时间" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" placeholder="请输入批次结束时间"></el-input>
                            </el-form-item>
                            <el-form-item label="监考说明" :label-width="formLabelWidth" :label-height="bigformLabelHeight">
                                <el-input v-model="form.name"  type="textarea" autocomplete="off" placeholder="请输入监考说明..." style="height: 158px;height: auto" rows="10" >
                                </el-input>
                            </el-form-item>
                            <el-form-item label="上传附件" :label-width="formLabelWidth" :label-height="bigformLabelHeight">
                                <el-button type="primary" icon="el-icon-upload2">上传文件</el-button>
                            </el-form-item>
                            <div class="form_text">限制上传文件10个以下，单个大小不超过100M</div>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="dialogFormVisible = false" style="background-color: #166AFF"> 提 交 </el-button>
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                        </div>
                    </el-dialog>
                    <!--                    以上是对话弹窗部分-->
                    <!--                    以上是对话弹窗部分-->
                    <!--                    以上是对话弹窗部分-->
                    <!--                    以上是对话弹窗部分-->
                </el-col>
                <el-col span="8" offset="0"><el-button class="line1-2" type="primary" plain>数据导出</el-button></el-col>
                <el-col span="2" offset="6" ><el-input class="line1-3" v-model="input" placeholder="请输入监考名称关键词查询"></el-input></el-col>
                <el-col span="1" offset="1"><el-button class="line1-4" type="primary">查询</el-button></el-col>
                <el-col span="1" offset="" ><el-button class="line1-2" type="primary" plain>重置</el-button></el-col>
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
                    label="报名开始时间"
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
                        <el-button type="text" size="small">查看名单</el-button>
                        <el-button type="text" size="small">更多</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
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
        }
        // Add more data objects as required
      ],
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      bigformLabelHeight: '158px'
    }
  },
  methods: {
    handleSelectionChange (val) {
      console.log(val)
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
.title_1 {
    color: #00000066;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    text-align: left;
}
.title_2 {
    color: #000000e6;
    font-size: 20px;
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
.line1-1{
    width: 104px;
    height: 36px;
    background: #166AFF;
    border-radius: 3px;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
}
.line1-4{
    width: 74px;
    height: 36px;
    background: #166AFF;
    border-radius: 3px;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
}
.line1-2, .line1-5 {
    border: 1px solid #166AFF;
    border-radius: 3px;
    font-weight: 400;
    font-size: 14px;
    color: #166AFF;
    text-align: center;
    background-color: #FFFFFF;
}
.line1-3 {
    width: 250px;
    height: 36px;
    background: #ffffffe6;
    border: 1px solid #DCDCDC;
    border-radius: 3px;
}
.card {
    margin-left: 20px;
    margin-right: 20px;
}
.el-col{
    margin-right: 35px;
}
.el-col{
    scroll-margin-left: 35px;
}
.el-row {
    margin-bottom: 20px;
}
.el-row:last-child {
    margin-bottom: 0;
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
/* 增加外边距给标签 */
.form_text{
    font-weight: 400;
    font-size: 12px;
    color: #00000066;
    line-height: 20px;
    margin-left: 130px;
    margin-top: 30px;
}
.dialog-footer{
    text-align: center;
}
/* 添加你的样式 */
</style>
