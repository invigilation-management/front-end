<template>
    <div>
        <span class="title">通知确认单</span>
        <hr>
        <div class="main_body">
            <div class="selectbody">
                <el-select v-model="value" placeholder="全部批次">
                    <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value" placeholder="全部中学">
                    <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value" placeholder="全部学院">
                    <el-option
                        v-for="item in options3"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <div class="demo-input-suffix">
                    <el-input
                        placeholder="请选择日期"
                        suffix-icon="el-icon-date"
                        v-model="input1">
                    </el-input>
                    <el-input
                        placeholder="请输入内容"
                        prefix-icon="el-icon-search"
                        v-model="input2">
                    </el-input>
                    <el-button type="primary">搜索</el-button>
                    <el-button type="info">重置</el-button>
                    <el-button type="primary">导出数据<i class="el-icon-upload el-icon--right"></i></el-button>
                </div>
            </div>
            <div class="tablebody">
                <el-table
                    :data="teams"
                    border
                    style="width: 100%"
                    row-key="teamName"
                    @row-click="handleRowClick">
                    <el-table-column
                        fixed
                        prop="index"
                        label="序号"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="teamName"
                        label="队伍名称"
                        width="150">
                        <template v-slot="scope">
                            <el-button type="text" @click="handleRowClick(scope.row)">{{
                                    scope.row.teamName
                                }}
                            </el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="schname"
                        label="中学姓名"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="captainname"
                        label="队长姓名"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="round"
                        label="母校行批次"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="college"
                        label="学院"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="num"
                        label="人数"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="tel"
                        label="联系方式"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        fixed="date"
                        label="创建时间"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                        <template v-slot="scope">
                            <el-button type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- 展开的嵌套表格 -->
                <el-table
                    v-if="expandedTeam"
                    :data="expandedTeam.members"
                    border
                    style="width: 100%; margin-top: 20px;">
                    <el-table-column
                        prop="memberName"
                        label="队员姓名"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="memberId"
                        label="队员学号"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="department"
                        label="学院"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="contact"
                        label="联系方式"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="joinTime"
                        label="加入时间"
                        width="200">
                    </el-table-column>
                </el-table>
            </div>
            <div class="block">
                <el-pagination
                    small
                    layout="prev, pager, next"
                    :total="50">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ExamNotification',
  data () {
    return {
      welcome: '欢迎第三用户！',
      input1: '',
      input2: '',
      options1: [{
        value: '选项1',
        label: '第一批次'
      }, {
        value: '选项2',
        label: '第二批次'
      }, {
        value: '选项3',
        label: '第三批次'
      }, {
        value: '选项4',
        label: '第四批次'
      }, {
        value: '选项5',
        label: '第五批次'
      }],
      value: '',
      options2: [{
        value: '选项1',
        label: '第一中学'
      }, {
        value: '选项2',
        label: '第二中学'
      }, {
        value: '选项3',
        label: '第三中学'
      }, {
        value: '选项4',
        label: '第四中学'
      }, {
        value: '选项5',
        label: '第五中学'
      }],
      options3: [{
        value: '选项1',
        label: '数学学院'
      }, {
        value: '选项2',
        label: '语文学院'
      }, {
        value: '选项3',
        label: '英语学院'
      }, {
        value: '选项4',
        label: '物理学院'
      }, {
        value: '选项5',
        label: '化学学院'
      }],
      teams: [{
        index: 1,
        teamName: '武汉一中队',
        schname: '武汉第一中学',
        captainname: '李晓晨',
        round: '母校活动秋季批次',
        college: '艺术学院',
        num: 2,
        tel: '18759601242',
        date: '2016-05-02',
        members: [
          {
            memberName: '王家睿',
            memberId: '209098804',
            department: '艺术学院',
            contact: '16789000998',
            joinTime: '2023-09-10 10:12:43'
          },
          {
            memberName: '王家睿',
            memberId: '209098804',
            department: '艺术学院',
            contact: '16789000998',
            joinTime: '2023-09-10 10:12:43'
          }
        ]
      }, {
        index: 2,
        teamName: '武汉一中队',
        schname: '武汉第一中学',
        captainname: '李晓晨',
        round: '母校活动秋季批次',
        college: '艺术学院',
        num: 2,
        tel: '18759601242',
        date: '2016-05-02',
        members: [
          {
            memberName: '李四',
            memberId: '209098805',
            department: '科学学院',
            contact: '16789000999',
            joinTime: '2023-09-12 10:12:43'
          },
          {
            memberName: '王五',
            memberId: '209098806',
            department: '科学学院',
            contact: '16789000997',
            joinTime: '2023-09-12 10:12:43'
          }
        ]
      }, {
        index: 3,
        teamName: '武汉一中队',
        schname: '武汉第一中学',
        captainname: '李晓晨',
        round: '母校活动秋季批次',
        college: '艺术学院',
        num: 2,
        tel: '18759601242',
        date: '2016-05-02'
      }, {
        index: 4,
        teamName: '武汉一中队',
        schname: '武汉第一中学',
        captainname: '李晓晨',
        round: '母校活动秋季批次',
        college: '艺术学院',
        num: 2,
        tel: '18759601242',
        date: '2016-05-02'
      }, {
        index: 5,
        teamName: '武汉一中队',
        schname: '武汉第一中学',
        captainname: '李晓晨',
        round: '母校活动秋季批次',
        college: '艺术学院',
        num: 2,
        tel: '18759601242',
        date: '2016-05-02'
      }, {
        index: 1,
        teamName: '武汉一中队',
        schname: '武汉第一中学',
        captainname: '李晓晨',
        round: '母校活动秋季批次',
        college: '艺术学院',
        num: 2,
        tel: '18759601242',
        date: '2016-05-02'
      }, {
        index: 6,
        teamName: '武汉一中队',
        schname: '武汉第一中学',
        captainname: '李晓晨',
        round: '母校活动秋季批次',
        college: '艺术学院',
        num: 2,
        tel: '18759601242',
        date: '2016-05-02'
      }, {
        index: 7,
        teamName: '武汉一中队',
        schname: '武汉第一中学',
        captainname: '李晓晨',
        round: '母校活动秋季批次',
        college: '艺术学院',
        num: 2,
        tel: '18759601242',
        date: '2016-05-02'
      }, {
        index: 8,
        teamName: '武汉一中队',
        schname: '武汉第一中学',
        captainname: '李晓晨',
        round: '母校活动秋季批次',
        college: '艺术学院',
        num: 2,
        tel: '18759601242',
        date: '2016-05-02'
      }, {
        index: 9,
        teamName: '武汉一中队',
        schname: '武汉第一中学',
        captainname: '李晓晨',
        round: '母校活动秋季批次',
        college: '艺术学院',
        num: 2,
        tel: '18759601242',
        date: '2016-05-02'
      }, {
        index: 10,
        teamName: '武汉一中队',
        schname: '武汉第一中学',
        captainname: '李晓晨',
        round: '母校活动秋季批次',
        college: '艺术学院',
        num: 2,
        tel: '18759601242',
        date: '2016-05-02'
      }, {
        index: 11,
        teamName: '武汉一中队',
        schname: '武汉第一中学',
        captainname: '李晓晨',
        round: '母校活动秋季批次',
        college: '艺术学院',
        num: 2,
        tel: '18759601242',
        date: '2016-05-02'
      }
      ],
      expandedTeam: null // 存储当前展开的队伍信息

    }
  },
  methods: {
    handleRowClick (row) {
      console.info('111')
      if (this.expandedTeam === row) {
        this.expandedTeam = null // 如果点击的是当前展开的队伍，关闭展开
      } else {
        this.expandedTeam = row // 否则展开点击的队伍
      }
    }
  }
}
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}

.selectbody {
    padding: 1rem;
    width: 95%;
    background-color: white;
}

.tablebody {
    padding: 1rem;
    margin-top: 1rem;
    width: 95%;
    background-color: white;
}

.block {
    padding: 1rem;
    width: 95%;
    background-color: white;
}

.main_body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.title {
    width: 140px;
    height: 28px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    font-size: 20px;
    color: #000000e6;
    line-height: 28px;
}

.demo-input-suffix {
    display: flex;
}

/* 自定义样式 */
.nested-table {
    margin-left: 20px;
}

.expanded-row + .nested-table {
    display: block;
}
</style>
